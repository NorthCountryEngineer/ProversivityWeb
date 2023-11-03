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
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import {
  getMeeting,
  getNote,
  listMeetings,
  listUsers,
} from "../graphql/queries";
import { updateNote } from "../graphql/mutations";
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
  runValidationTasks,
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
    const { hasError } = runValidationTasks();
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
          <Button size="small" variation="link" onClick={addItem}>
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
    test: "",
    timestamp: "",
    meetingNotesId: undefined,
  };
  const [meetingID, setMeetingID] = React.useState(initialValues.meetingID);
  const [meeting, setMeeting] = React.useState(initialValues.meeting);
  const [meetingLoading, setMeetingLoading] = React.useState(false);
  const [meetingRecords, setMeetingRecords] = React.useState([]);
  const [userID, setUserID] = React.useState(initialValues.userID);
  const [user, setUser] = React.useState(initialValues.user);
  const [userLoading, setUserLoading] = React.useState(false);
  const [userRecords, setUserRecords] = React.useState([]);
  const [content, setContent] = React.useState(initialValues.content);
  const [test, setTest] = React.useState(initialValues.test);
  const [timestamp, setTimestamp] = React.useState(initialValues.timestamp);
  const [meetingNotesId, setMeetingNotesId] = React.useState(
    initialValues.meetingNotesId
  );
  const [meetingNotesIdLoading, setMeetingNotesIdLoading] =
    React.useState(false);
  const [meetingNotesIdRecords, setMeetingNotesIdRecords] = React.useState([]);
  const [selectedMeetingNotesIdRecords, setSelectedMeetingNotesIdRecords] =
    React.useState([]);
  const autocompleteLength = 10;
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
    setTest(cleanValues.test);
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
        ? (
            await API.graphql({
              query: getNote.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getNote
        : noteModelProp;
      const meetingRecord = record ? await record.meeting : undefined;
      setMeeting(meetingRecord);
      const userRecord = record ? await record.user : undefined;
      setUser(userRecord);
      const meetingNotesIdRecord = record ? record.meetingNotesId : undefined;
      const meetingRecord = meetingNotesIdRecord
        ? (
            await API.graphql({
              query: getMeeting.replaceAll("__typename", ""),
              variables: { id: meetingNotesIdRecord },
            })
          )?.data?.getMeeting
        : undefined;
      setMeetingNotesId(meetingNotesIdRecord);
      setSelectedMeetingNotesIdRecords([meetingRecord]);
      setNoteRecord(record);
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
    test: [],
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
  const fetchMeetingRecords = async (value) => {
    setMeetingLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { scheduledTime: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listMeetings.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listMeetings?.items;
      var loaded = result.filter(
        (item) => !meetingIdSet.has(getIDValue.meeting?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setMeetingRecords(newOptions.slice(0, autocompleteLength));
    setMeetingLoading(false);
  };
  const fetchUserRecords = async (value) => {
    setUserLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ firstName: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listUsers.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listUsers?.items;
      var loaded = result.filter(
        (item) => !userIdSet.has(getIDValue.user?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUserRecords(newOptions.slice(0, autocompleteLength));
    setUserLoading(false);
  };
  const fetchMeetingNotesIdRecords = async (value) => {
    setMeetingNotesIdLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { scheduledTime: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listMeetings.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listMeetings?.items;
      var loaded = result.filter((item) => meetingNotesId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setMeetingNotesIdRecords(newOptions.slice(0, autocompleteLength));
    setMeetingNotesIdLoading(false);
  };
  React.useEffect(() => {
    fetchMeetingRecords("");
    fetchUserRecords("");
    fetchMeetingNotesIdRecords("");
  }, []);
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
          meeting: meeting ?? null,
          userID,
          user: user ?? null,
          content,
          test: test ?? null,
          timestamp,
          meetingNotesId: meetingNotesId ?? null,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            meetingID: modelFields.meetingID,
            noteMeetingId: modelFields?.meeting?.id ?? null,
            userID: modelFields.userID,
            noteUserId: modelFields?.user?.id ?? null,
            content: modelFields.content,
            test: modelFields.test ?? null,
            timestamp: modelFields.timestamp,
            meetingNotesId: modelFields.meetingNotesId ?? null,
          };
          await API.graphql({
            query: updateNote.replaceAll("__typename", ""),
            variables: {
              input: {
                id: noteRecord.id,
                ...modelFieldsToSave,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
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
              test,
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
              test,
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
        runValidationTasks={async () =>
          await runValidationTasks("meeting", currentMeetingValue)
        }
        errorMessage={errors?.meeting?.errorMessage}
        getBadgeText={getDisplayValue.meeting}
        setFieldValue={(model) => {
          setCurrentMeetingDisplayValue(
            model ? getDisplayValue.meeting(model) : ""
          );
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
          isLoading={meetingLoading}
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
            fetchMeetingRecords(value);
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
              test,
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
              test,
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
        runValidationTasks={async () =>
          await runValidationTasks("user", currentUserValue)
        }
        errorMessage={errors?.user?.errorMessage}
        getBadgeText={getDisplayValue.user}
        setFieldValue={(model) => {
          setCurrentUserDisplayValue(model ? getDisplayValue.user(model) : "");
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
          isLoading={userLoading}
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
            fetchUserRecords(value);
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
              test,
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
        label="Test"
        isRequired={false}
        isReadOnly={false}
        value={test}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              userID,
              user,
              content,
              test: value,
              timestamp,
              meetingNotesId,
            };
            const result = onChange(modelFields);
            value = result?.test ?? value;
          }
          if (errors.test?.hasError) {
            runValidationTasks("test", value);
          }
          setTest(value);
        }}
        onBlur={() => runValidationTasks("test", test)}
        errorMessage={errors.test?.errorMessage}
        hasError={errors.test?.hasError}
        {...getOverrideProps(overrides, "test")}
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
              test,
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
              test,
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
        runValidationTasks={async () =>
          await runValidationTasks("meetingNotesId", currentMeetingNotesIdValue)
        }
        errorMessage={errors?.meetingNotesId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.meetingNotesId(
                meetingNotesIdRecords.find((r) => r.id === value) ??
                  selectedMeetingNotesIdRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentMeetingNotesIdDisplayValue(
            value
              ? getDisplayValue.meetingNotesId(
                  meetingNotesIdRecords.find((r) => r.id === value) ??
                    selectedMeetingNotesIdRecords.find((r) => r.id === value)
                )
              : ""
          );
          setCurrentMeetingNotesIdValue(value);
          const selectedRecord = meetingNotesIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedMeetingNotesIdRecords([selectedRecord]);
          }
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
          options={meetingNotesIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.meetingNotesId?.(r),
            }))}
          isLoading={meetingNotesIdLoading}
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
            fetchMeetingNotesIdRecords(value);
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
