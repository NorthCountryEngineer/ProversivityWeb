/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Autocomplete,
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { Note, Meeting, User } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button
            size="small"
            variation="link"
            isDisabled={hasError}
            onClick={addItem}
          >
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function NoteUpdateForm(props) {
  const {
    id: idProp,
    note: noteModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    meetingID: "",
    meeting: undefined,
    userID: "",
    user: undefined,
    content: "",
    timestamp: "",
    meetingNotesId: undefined,
  };
  const [meetingID, setMeetingID] = React.useState(initialValues.meetingID);
  const [meeting, setMeeting] = React.useState(initialValues.meeting);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [user, setUser] = React.useState(initialValues.user);
  const [content, setContent] = React.useState(initialValues.content);
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [meetingNotesId, setMeetingNotesId] = React.useState(
    initialValues.meetingNotesId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = noteRecord
      ? { ...initialValues, ...noteRecord, meeting, user, meetingNotesId }
      : initialValues;
    setMeetingID(cleanValues.meetingID);
    setMeeting(cleanValues.meeting);
    setCurrentMeetingValue(undefined);
    setCurrentMeetingDisplayValue("");
    setUserID(cleanValues.userID);
    setUser(cleanValues.user);
    setCurrentUserValue(undefined);
    setCurrentUserDisplayValue("");
    setContent(cleanValues.content);
    setTimestamp(cleanValues.timestamp);
    setMeetingNotesId(cleanValues.meetingNotesId);
    setCurrentMeetingNotesIdValue(undefined);
    setCurrentMeetingNotesIdDisplayValue("");
    setErrors({});
  };
  const [noteRecord, setNoteRecord] = React.useState(noteModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Note, idProp)
        : noteModelProp;
      setNoteRecord(record);
      const meetingRecord = record ? await record.meeting : undefined;
      setMeeting(meetingRecord);
      const userRecord = record ? await record.user : undefined;
      setUser(userRecord);
      const meetingNotesIdRecord = record
        ? await record.meetingNotesId
        : undefined;
      setMeetingNotesId(meetingNotesIdRecord);
    };
    queryData();
  }, [idProp, noteModelProp]);
  React.useEffect(resetStateValues, [
    noteRecord,
    meeting,
    user,
    meetingNotesId,
  ]);
  const [currentMeetingDisplayValue, setCurrentMeetingDisplayValue] =
    React.useState("");
  const [currentMeetingValue, setCurrentMeetingValue] =
    React.useState(undefined);
  const meetingRef = React.createRef();
  const [currentUserDisplayValue, setCurrentUserDisplayValue] =
    React.useState("");
  const [currentUserValue, setCurrentUserValue] = React.useState(undefined);
  const userRef = React.createRef();
  const [
    currentMeetingNotesIdDisplayValue,
    setCurrentMeetingNotesIdDisplayValue,
  ] = React.useState("");
  const [currentMeetingNotesIdValue, setCurrentMeetingNotesIdValue] =
    React.useState(undefined);
  const meetingNotesIdRef = React.createRef();
  const getIDValue = {
    meeting: (r) => JSON.stringify({ id: r?.id }),
    user: (r) => JSON.stringify({ id: r?.id }),
  };
  const meetingIdSet = new Set(
    Array.isArray(meeting)
      ? meeting.map((r) => getIDValue.meeting?.(r))
      : getIDValue.meeting?.(meeting)
  );
  const userIdSet = new Set(
    Array.isArray(user)
      ? user.map((r) => getIDValue.user?.(r))
      : getIDValue.user?.(user)
  );
  const meetingRecords = useDataStoreBinding({
    type: "collection",
    model: Meeting,
  }).items;
  const userRecords = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const getDisplayValue = {
    meeting: (r) =>
      `${r?.scheduledTime ? r?.scheduledTime + " - " : ""}${r?.id}`,
    user: (r) => `${r?.firstName ? r?.firstName + " - " : ""}${r?.id}`,
    meetingNotesId: (r) =>
      `${r?.scheduledTime ? r?.scheduledTime + " - " : ""}${r?.id}`,
  };
  const validations = {
    meetingID: [{ type: "Required" }],
    meeting: [],
    userID: [{ type: "Required" }],
    user: [],
    content: [{ type: "Required" }],
    timestamp: [{ type: "Required" }],
    meetingNotesId: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          meetingID,
          meeting,
          userID,
          user,
          content,
          timestamp,
          meetingNotesId,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(
                    fieldName,
                    item,
                    getDisplayValue[fieldName]
                  )
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(
                fieldName,
                modelFields[fieldName],
                getDisplayValue[fieldName]
              )
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            Note.copyOf(noteRecord, (updated) => {
              Object.assign(updated, modelFields);
              if (!modelFields.user) {
                updated.noteUserId = undefined;
              }
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NoteUpdateForm")}
      {...rest}
    >
      <TextField
        label="Meeting id"
        isRequired={true}
        isReadOnly={false}
        value={meetingID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingID: value,
              meeting,
              userID,
              user,
              content,
              timestamp,
              meetingNotesId,
            };
            const result = onChange(modelFields);
            value = result?.meetingID ?? value;
          }
          if (errors.meetingID?.hasError) {
            runValidationTasks("meetingID", value);
          }
          setMeetingID(value);
        }}
        onBlur={() => runValidationTasks("meetingID", meetingID)}
        errorMessage={errors.meetingID?.errorMessage}
        hasError={errors.meetingID?.hasError}
        {...getOverrideProps(overrides, "meetingID")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting: value,
              userID,
              user,
              content,
              timestamp,
              meetingNotesId,
            };
            const result = onChange(modelFields);
            value = result?.meeting ?? value;
          }
          setMeeting(value);
          setCurrentMeetingValue(undefined);
          setCurrentMeetingDisplayValue("");
        }}
        currentFieldValue={currentMeetingValue}
        label={"Meeting"}
        items={meeting ? [meeting] : []}
        hasError={errors?.meeting?.hasError}
        errorMessage={errors?.meeting?.errorMessage}
        getBadgeText={getDisplayValue.meeting}
        setFieldValue={(model) => {
          setCurrentMeetingDisplayValue(getDisplayValue.meeting(model));
          setCurrentMeetingValue(model);
        }}
        inputFieldRef={meetingRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Meeting"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Meeting"
          value={currentMeetingDisplayValue}
          options={meetingRecords
            .filter((r) => !meetingIdSet.has(getIDValue.meeting?.(r)))
            .map((r) => ({
              id: getIDValue.meeting?.(r),
              label: getDisplayValue.meeting?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentMeetingValue(
              meetingRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMeetingDisplayValue(label);
            runValidationTasks("meeting", label);
          }}
          onClear={() => {
            setCurrentMeetingDisplayValue("");
          }}
          defaultValue={meeting}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.meeting?.hasError) {
              runValidationTasks("meeting", value);
            }
            setCurrentMeetingDisplayValue(value);
            setCurrentMeetingValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("meeting", currentMeetingDisplayValue)
          }
          errorMessage={errors.meeting?.errorMessage}
          hasError={errors.meeting?.hasError}
          ref={meetingRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "meeting")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              userID: value,
              user,
              content,
              timestamp,
              meetingNotesId,
            };
            const result = onChange(modelFields);
            value = result?.userID ?? value;
          }
          if (errors.userID?.hasError) {
            runValidationTasks("userID", value);
          }
          setUserID(value);
        }}
        onBlur={() => runValidationTasks("userID", userID)}
        errorMessage={errors.userID?.errorMessage}
        hasError={errors.userID?.hasError}
        {...getOverrideProps(overrides, "userID")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              userID,
              user: value,
              content,
              timestamp,
              meetingNotesId,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          setUser(value);
          setCurrentUserValue(undefined);
          setCurrentUserDisplayValue("");
        }}
        currentFieldValue={currentUserValue}
        label={"User"}
        items={user ? [user] : []}
        hasError={errors?.user?.hasError}
        errorMessage={errors?.user?.errorMessage}
        getBadgeText={getDisplayValue.user}
        setFieldValue={(model) => {
          setCurrentUserDisplayValue(getDisplayValue.user(model));
          setCurrentUserValue(model);
        }}
        inputFieldRef={userRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUserDisplayValue}
          options={userRecords
            .filter((r) => !userIdSet.has(getIDValue.user?.(r)))
            .map((r) => ({
              id: getIDValue.user?.(r),
              label: getDisplayValue.user?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUserValue(
              userRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentUserDisplayValue(label);
            runValidationTasks("user", label);
          }}
          onClear={() => {
            setCurrentUserDisplayValue("");
          }}
          defaultValue={user}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.user?.hasError) {
              runValidationTasks("user", value);
            }
            setCurrentUserDisplayValue(value);
            setCurrentUserValue(undefined);
          }}
          onBlur={() => runValidationTasks("user", currentUserDisplayValue)}
          errorMessage={errors.user?.errorMessage}
          hasError={errors.user?.hasError}
          ref={userRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "user")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Content"
        isRequired={true}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              userID,
              user,
              content: value,
              timestamp,
              meetingNotesId,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <TextField
        label="Timestamp"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={timestamp}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              userID,
              user,
              content,
              timestamp: value,
              meetingNotesId,
            };
            const result = onChange(modelFields);
            value = result?.timestamp ?? value;
          }
          if (errors.timestamp?.hasError) {
            runValidationTasks("timestamp", value);
          }
          setTimestamp(value);
        }}
        onBlur={() => runValidationTasks("timestamp", timestamp)}
        errorMessage={errors.timestamp?.errorMessage}
        hasError={errors.timestamp?.hasError}
        {...getOverrideProps(overrides, "timestamp")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              userID,
              user,
              content,
              timestamp,
              meetingNotesId: value,
            };
            const result = onChange(modelFields);
            value = result?.meetingNotesId ?? value;
          }
          setMeetingNotesId(value);
          setCurrentMeetingNotesIdValue(undefined);
        }}
        currentFieldValue={currentMeetingNotesIdValue}
        label={"Meeting notes id"}
        items={meetingNotesId ? [meetingNotesId] : []}
        hasError={errors?.meetingNotesId?.hasError}
        errorMessage={errors?.meetingNotesId?.errorMessage}
        getBadgeText={(value) =>
          getDisplayValue.meetingNotesId(
            meetingRecords.find((r) => r.id === value)
          )
        }
        setFieldValue={(value) => {
          setCurrentMeetingNotesIdDisplayValue(
            getDisplayValue.meetingNotesId(
              meetingRecords.find((r) => r.id === value)
            )
          );
          setCurrentMeetingNotesIdValue(value);
        }}
        inputFieldRef={meetingNotesIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Meeting notes id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Meeting"
          value={currentMeetingNotesIdDisplayValue}
          options={meetingRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.meetingNotesId?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentMeetingNotesIdValue(id);
            setCurrentMeetingNotesIdDisplayValue(label);
            runValidationTasks("meetingNotesId", label);
          }}
          onClear={() => {
            setCurrentMeetingNotesIdDisplayValue("");
          }}
          defaultValue={meetingNotesId}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.meetingNotesId?.hasError) {
              runValidationTasks("meetingNotesId", value);
            }
            setCurrentMeetingNotesIdDisplayValue(value);
            setCurrentMeetingNotesIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("meetingNotesId", currentMeetingNotesIdValue)
          }
          errorMessage={errors.meetingNotesId?.errorMessage}
          hasError={errors.meetingNotesId?.hasError}
          ref={meetingNotesIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "meetingNotesId")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || noteModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || noteModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
