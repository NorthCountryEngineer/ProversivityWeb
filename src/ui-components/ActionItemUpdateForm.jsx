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
  SelectField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import { ActionItem, Meeting, User } from "../models";
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
export default function ActionItemUpdateForm(props) {
  const {
    id: idProp,
    actionItem: actionItemModelProp,
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
    assignedToUserID: "",
    assignedToUser: undefined,
    description: "",
    dueDate: "",
    status: "",
    meetingActionItemsId: undefined,
  };
  const [meetingID, setMeetingID] = React.useState(initialValues.meetingID);
  const [meeting, setMeeting] = React.useState(initialValues.meeting);
  const [assignedToUserID, setAssignedToUserID] = React.useState(
    initialValues.assignedToUserID
  );
  const [assignedToUser, setAssignedToUser] = React.useState(
    initialValues.assignedToUser
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [dueDate, setDueDate] = React.useState(initialValues.dueDate);
  const [status, setStatus] = React.useState(initialValues.status);
  const [meetingActionItemsId, setMeetingActionItemsId] = React.useState(
    initialValues.meetingActionItemsId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = actionItemRecord
      ? {
          ...initialValues,
          ...actionItemRecord,
          meeting,
          assignedToUser,
          meetingActionItemsId,
        }
      : initialValues;
    setMeetingID(cleanValues.meetingID);
    setMeeting(cleanValues.meeting);
    setCurrentMeetingValue(undefined);
    setCurrentMeetingDisplayValue("");
    setAssignedToUserID(cleanValues.assignedToUserID);
    setAssignedToUser(cleanValues.assignedToUser);
    setCurrentAssignedToUserValue(undefined);
    setCurrentAssignedToUserDisplayValue("");
    setDescription(cleanValues.description);
    setDueDate(cleanValues.dueDate);
    setStatus(cleanValues.status);
    setMeetingActionItemsId(cleanValues.meetingActionItemsId);
    setCurrentMeetingActionItemsIdValue(undefined);
    setCurrentMeetingActionItemsIdDisplayValue("");
    setErrors({});
  };
  const [actionItemRecord, setActionItemRecord] =
    React.useState(actionItemModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ActionItem, idProp)
        : actionItemModelProp;
      setActionItemRecord(record);
      const meetingRecord = record ? await record.meeting : undefined;
      setMeeting(meetingRecord);
      const assignedToUserRecord = record
        ? await record.assignedToUser
        : undefined;
      setAssignedToUser(assignedToUserRecord);
      const meetingActionItemsIdRecord = record
        ? await record.meetingActionItemsId
        : undefined;
      setMeetingActionItemsId(meetingActionItemsIdRecord);
    };
    queryData();
  }, [idProp, actionItemModelProp]);
  React.useEffect(resetStateValues, [
    actionItemRecord,
    meeting,
    assignedToUser,
    meetingActionItemsId,
  ]);
  const [currentMeetingDisplayValue, setCurrentMeetingDisplayValue] =
    React.useState("");
  const [currentMeetingValue, setCurrentMeetingValue] =
    React.useState(undefined);
  const meetingRef = React.createRef();
  const [
    currentAssignedToUserDisplayValue,
    setCurrentAssignedToUserDisplayValue,
  ] = React.useState("");
  const [currentAssignedToUserValue, setCurrentAssignedToUserValue] =
    React.useState(undefined);
  const assignedToUserRef = React.createRef();
  const [
    currentMeetingActionItemsIdDisplayValue,
    setCurrentMeetingActionItemsIdDisplayValue,
  ] = React.useState("");
  const [
    currentMeetingActionItemsIdValue,
    setCurrentMeetingActionItemsIdValue,
  ] = React.useState(undefined);
  const meetingActionItemsIdRef = React.createRef();
  const getIDValue = {
    meeting: (r) => JSON.stringify({ id: r?.id }),
    assignedToUser: (r) => JSON.stringify({ id: r?.id }),
  };
  const meetingIdSet = new Set(
    Array.isArray(meeting)
      ? meeting.map((r) => getIDValue.meeting?.(r))
      : getIDValue.meeting?.(meeting)
  );
  const assignedToUserIdSet = new Set(
    Array.isArray(assignedToUser)
      ? assignedToUser.map((r) => getIDValue.assignedToUser?.(r))
      : getIDValue.assignedToUser?.(assignedToUser)
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
    assignedToUser: (r) =>
      `${r?.firstName ? r?.firstName + " - " : ""}${r?.id}`,
    meetingActionItemsId: (r) =>
      `${r?.scheduledTime ? r?.scheduledTime + " - " : ""}${r?.id}`,
  };
  const validations = {
    meetingID: [{ type: "Required" }],
    meeting: [],
    assignedToUserID: [{ type: "Required" }],
    assignedToUser: [],
    description: [{ type: "Required" }],
    dueDate: [],
    status: [{ type: "Required" }],
    meetingActionItemsId: [],
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
          assignedToUserID,
          assignedToUser,
          description,
          dueDate,
          status,
          meetingActionItemsId,
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
            ActionItem.copyOf(actionItemRecord, (updated) => {
              Object.assign(updated, modelFields);
              if (!modelFields.assignedToUser) {
                updated.actionItemAssignedToUserId = undefined;
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
      {...getOverrideProps(overrides, "ActionItemUpdateForm")}
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
              assignedToUserID,
              assignedToUser,
              description,
              dueDate,
              status,
              meetingActionItemsId,
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
              assignedToUserID,
              assignedToUser,
              description,
              dueDate,
              status,
              meetingActionItemsId,
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
        label="Assigned to user id"
        isRequired={true}
        isReadOnly={false}
        value={assignedToUserID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              assignedToUserID: value,
              assignedToUser,
              description,
              dueDate,
              status,
              meetingActionItemsId,
            };
            const result = onChange(modelFields);
            value = result?.assignedToUserID ?? value;
          }
          if (errors.assignedToUserID?.hasError) {
            runValidationTasks("assignedToUserID", value);
          }
          setAssignedToUserID(value);
        }}
        onBlur={() => runValidationTasks("assignedToUserID", assignedToUserID)}
        errorMessage={errors.assignedToUserID?.errorMessage}
        hasError={errors.assignedToUserID?.hasError}
        {...getOverrideProps(overrides, "assignedToUserID")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              assignedToUserID,
              assignedToUser: value,
              description,
              dueDate,
              status,
              meetingActionItemsId,
            };
            const result = onChange(modelFields);
            value = result?.assignedToUser ?? value;
          }
          setAssignedToUser(value);
          setCurrentAssignedToUserValue(undefined);
          setCurrentAssignedToUserDisplayValue("");
        }}
        currentFieldValue={currentAssignedToUserValue}
        label={"Assigned to user"}
        items={assignedToUser ? [assignedToUser] : []}
        hasError={errors?.assignedToUser?.hasError}
        errorMessage={errors?.assignedToUser?.errorMessage}
        getBadgeText={getDisplayValue.assignedToUser}
        setFieldValue={(model) => {
          setCurrentAssignedToUserDisplayValue(
            getDisplayValue.assignedToUser(model)
          );
          setCurrentAssignedToUserValue(model);
        }}
        inputFieldRef={assignedToUserRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Assigned to user"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentAssignedToUserDisplayValue}
          options={userRecords
            .filter(
              (r) => !assignedToUserIdSet.has(getIDValue.assignedToUser?.(r))
            )
            .map((r) => ({
              id: getIDValue.assignedToUser?.(r),
              label: getDisplayValue.assignedToUser?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAssignedToUserValue(
              userRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAssignedToUserDisplayValue(label);
            runValidationTasks("assignedToUser", label);
          }}
          onClear={() => {
            setCurrentAssignedToUserDisplayValue("");
          }}
          defaultValue={assignedToUser}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.assignedToUser?.hasError) {
              runValidationTasks("assignedToUser", value);
            }
            setCurrentAssignedToUserDisplayValue(value);
            setCurrentAssignedToUserValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "assignedToUser",
              currentAssignedToUserDisplayValue
            )
          }
          errorMessage={errors.assignedToUser?.errorMessage}
          hasError={errors.assignedToUser?.hasError}
          ref={assignedToUserRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "assignedToUser")}
        ></Autocomplete>
      </ArrayField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              assignedToUserID,
              assignedToUser,
              description: value,
              dueDate,
              status,
              meetingActionItemsId,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Due date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dueDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              assignedToUserID,
              assignedToUser,
              description,
              dueDate: value,
              status,
              meetingActionItemsId,
            };
            const result = onChange(modelFields);
            value = result?.dueDate ?? value;
          }
          if (errors.dueDate?.hasError) {
            runValidationTasks("dueDate", value);
          }
          setDueDate(value);
        }}
        onBlur={() => runValidationTasks("dueDate", dueDate)}
        errorMessage={errors.dueDate?.errorMessage}
        hasError={errors.dueDate?.hasError}
        {...getOverrideProps(overrides, "dueDate")}
      ></TextField>
      <SelectField
        label="Status"
        placeholder="Please select an option"
        isDisabled={false}
        value={status}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              assignedToUserID,
              assignedToUser,
              description,
              dueDate,
              status: value,
              meetingActionItemsId,
            };
            const result = onChange(modelFields);
            value = result?.status ?? value;
          }
          if (errors.status?.hasError) {
            runValidationTasks("status", value);
          }
          setStatus(value);
        }}
        onBlur={() => runValidationTasks("status", status)}
        errorMessage={errors.status?.errorMessage}
        hasError={errors.status?.hasError}
        {...getOverrideProps(overrides, "status")}
      >
        <option
          children="Assigned"
          value="ASSIGNED"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="In progress"
          value="IN_PROGRESS"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Completed"
          value="COMPLETED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              assignedToUserID,
              assignedToUser,
              description,
              dueDate,
              status,
              meetingActionItemsId: value,
            };
            const result = onChange(modelFields);
            value = result?.meetingActionItemsId ?? value;
          }
          setMeetingActionItemsId(value);
          setCurrentMeetingActionItemsIdValue(undefined);
        }}
        currentFieldValue={currentMeetingActionItemsIdValue}
        label={"Meeting action items id"}
        items={meetingActionItemsId ? [meetingActionItemsId] : []}
        hasError={errors?.meetingActionItemsId?.hasError}
        errorMessage={errors?.meetingActionItemsId?.errorMessage}
        getBadgeText={(value) =>
          getDisplayValue.meetingActionItemsId(
            meetingRecords.find((r) => r.id === value)
          )
        }
        setFieldValue={(value) => {
          setCurrentMeetingActionItemsIdDisplayValue(
            getDisplayValue.meetingActionItemsId(
              meetingRecords.find((r) => r.id === value)
            )
          );
          setCurrentMeetingActionItemsIdValue(value);
        }}
        inputFieldRef={meetingActionItemsIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Meeting action items id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Meeting"
          value={currentMeetingActionItemsIdDisplayValue}
          options={meetingRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.meetingActionItemsId?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentMeetingActionItemsIdValue(id);
            setCurrentMeetingActionItemsIdDisplayValue(label);
            runValidationTasks("meetingActionItemsId", label);
          }}
          onClear={() => {
            setCurrentMeetingActionItemsIdDisplayValue("");
          }}
          defaultValue={meetingActionItemsId}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.meetingActionItemsId?.hasError) {
              runValidationTasks("meetingActionItemsId", value);
            }
            setCurrentMeetingActionItemsIdDisplayValue(value);
            setCurrentMeetingActionItemsIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "meetingActionItemsId",
              currentMeetingActionItemsIdValue
            )
          }
          errorMessage={errors.meetingActionItemsId?.errorMessage}
          hasError={errors.meetingActionItemsId?.hasError}
          ref={meetingActionItemsIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "meetingActionItemsId")}
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
          isDisabled={!(idProp || actionItemModelProp)}
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
              !(idProp || actionItemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
