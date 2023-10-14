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
import { AgendaItem, Meeting } from "../models";
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
export default function AgendaItemUpdateForm(props) {
  const {
    id: idProp,
    agendaItem: agendaItemModelProp,
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
    title: "",
    description: "",
    duration: "",
    order: "",
    status: "",
    meetingAgendaItemsId: undefined,
  };
  const [meetingID, setMeetingID] = React.useState(initialValues.meetingID);
  const [meeting, setMeeting] = React.useState(initialValues.meeting);
  const [title, setTitle] = React.useState(initialValues.title);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [order, setOrder] = React.useState(initialValues.order);
  const [status, setStatus] = React.useState(initialValues.status);
  const [meetingAgendaItemsId, setMeetingAgendaItemsId] = React.useState(
    initialValues.meetingAgendaItemsId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = agendaItemRecord
      ? { ...initialValues, ...agendaItemRecord, meeting, meetingAgendaItemsId }
      : initialValues;
    setMeetingID(cleanValues.meetingID);
    setMeeting(cleanValues.meeting);
    setCurrentMeetingValue(undefined);
    setCurrentMeetingDisplayValue("");
    setTitle(cleanValues.title);
    setDescription(cleanValues.description);
    setDuration(cleanValues.duration);
    setOrder(cleanValues.order);
    setStatus(cleanValues.status);
    setMeetingAgendaItemsId(cleanValues.meetingAgendaItemsId);
    setCurrentMeetingAgendaItemsIdValue(undefined);
    setCurrentMeetingAgendaItemsIdDisplayValue("");
    setErrors({});
  };
  const [agendaItemRecord, setAgendaItemRecord] =
    React.useState(agendaItemModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(AgendaItem, idProp)
        : agendaItemModelProp;
      setAgendaItemRecord(record);
      const meetingRecord = record ? await record.meeting : undefined;
      setMeeting(meetingRecord);
      const meetingAgendaItemsIdRecord = record
        ? await record.meetingAgendaItemsId
        : undefined;
      setMeetingAgendaItemsId(meetingAgendaItemsIdRecord);
    };
    queryData();
  }, [idProp, agendaItemModelProp]);
  React.useEffect(resetStateValues, [
    agendaItemRecord,
    meeting,
    meetingAgendaItemsId,
  ]);
  const [currentMeetingDisplayValue, setCurrentMeetingDisplayValue] =
    React.useState("");
  const [currentMeetingValue, setCurrentMeetingValue] =
    React.useState(undefined);
  const meetingRef = React.createRef();
  const [
    currentMeetingAgendaItemsIdDisplayValue,
    setCurrentMeetingAgendaItemsIdDisplayValue,
  ] = React.useState("");
  const [
    currentMeetingAgendaItemsIdValue,
    setCurrentMeetingAgendaItemsIdValue,
  ] = React.useState(undefined);
  const meetingAgendaItemsIdRef = React.createRef();
  const getIDValue = {
    meeting: (r) => JSON.stringify({ id: r?.id }),
  };
  const meetingIdSet = new Set(
    Array.isArray(meeting)
      ? meeting.map((r) => getIDValue.meeting?.(r))
      : getIDValue.meeting?.(meeting)
  );
  const meetingRecords = useDataStoreBinding({
    type: "collection",
    model: Meeting,
  }).items;
  const getDisplayValue = {
    meeting: (r) =>
      `${r?.scheduledTime ? r?.scheduledTime + " - " : ""}${r?.id}`,
    meetingAgendaItemsId: (r) =>
      `${r?.scheduledTime ? r?.scheduledTime + " - " : ""}${r?.id}`,
  };
  const validations = {
    meetingID: [{ type: "Required" }],
    meeting: [],
    title: [{ type: "Required" }],
    description: [],
    duration: [],
    order: [],
    status: [{ type: "Required" }],
    meetingAgendaItemsId: [],
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
          title,
          description,
          duration,
          order,
          status,
          meetingAgendaItemsId,
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
            AgendaItem.copyOf(agendaItemRecord, (updated) => {
              Object.assign(updated, modelFields);
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
      {...getOverrideProps(overrides, "AgendaItemUpdateForm")}
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
              title,
              description,
              duration,
              order,
              status,
              meetingAgendaItemsId,
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
              title,
              description,
              duration,
              order,
              status,
              meetingAgendaItemsId,
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
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              title: value,
              description,
              duration,
              order,
              status,
              meetingAgendaItemsId,
            };
            const result = onChange(modelFields);
            value = result?.title ?? value;
          }
          if (errors.title?.hasError) {
            runValidationTasks("title", value);
          }
          setTitle(value);
        }}
        onBlur={() => runValidationTasks("title", title)}
        errorMessage={errors.title?.errorMessage}
        hasError={errors.title?.hasError}
        {...getOverrideProps(overrides, "title")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              title,
              description: value,
              duration,
              order,
              status,
              meetingAgendaItemsId,
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
        label="Duration"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={duration}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              title,
              description,
              duration: value,
              order,
              status,
              meetingAgendaItemsId,
            };
            const result = onChange(modelFields);
            value = result?.duration ?? value;
          }
          if (errors.duration?.hasError) {
            runValidationTasks("duration", value);
          }
          setDuration(value);
        }}
        onBlur={() => runValidationTasks("duration", duration)}
        errorMessage={errors.duration?.errorMessage}
        hasError={errors.duration?.hasError}
        {...getOverrideProps(overrides, "duration")}
      ></TextField>
      <TextField
        label="Order"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={order}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              meetingID,
              meeting,
              title,
              description,
              duration,
              order: value,
              status,
              meetingAgendaItemsId,
            };
            const result = onChange(modelFields);
            value = result?.order ?? value;
          }
          if (errors.order?.hasError) {
            runValidationTasks("order", value);
          }
          setOrder(value);
        }}
        onBlur={() => runValidationTasks("order", order)}
        errorMessage={errors.order?.errorMessage}
        hasError={errors.order?.hasError}
        {...getOverrideProps(overrides, "order")}
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
              title,
              description,
              duration,
              order,
              status: value,
              meetingAgendaItemsId,
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
          children="Open"
          value="OPEN"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Discussed"
          value="DISCUSSED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Closed"
          value="CLOSED"
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
              title,
              description,
              duration,
              order,
              status,
              meetingAgendaItemsId: value,
            };
            const result = onChange(modelFields);
            value = result?.meetingAgendaItemsId ?? value;
          }
          setMeetingAgendaItemsId(value);
          setCurrentMeetingAgendaItemsIdValue(undefined);
        }}
        currentFieldValue={currentMeetingAgendaItemsIdValue}
        label={"Meeting agenda items id"}
        items={meetingAgendaItemsId ? [meetingAgendaItemsId] : []}
        hasError={errors?.meetingAgendaItemsId?.hasError}
        errorMessage={errors?.meetingAgendaItemsId?.errorMessage}
        getBadgeText={(value) =>
          getDisplayValue.meetingAgendaItemsId(
            meetingRecords.find((r) => r.id === value)
          )
        }
        setFieldValue={(value) => {
          setCurrentMeetingAgendaItemsIdDisplayValue(
            getDisplayValue.meetingAgendaItemsId(
              meetingRecords.find((r) => r.id === value)
            )
          );
          setCurrentMeetingAgendaItemsIdValue(value);
        }}
        inputFieldRef={meetingAgendaItemsIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Meeting agenda items id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Meeting"
          value={currentMeetingAgendaItemsIdDisplayValue}
          options={meetingRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.meetingAgendaItemsId?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentMeetingAgendaItemsIdValue(id);
            setCurrentMeetingAgendaItemsIdDisplayValue(label);
            runValidationTasks("meetingAgendaItemsId", label);
          }}
          onClear={() => {
            setCurrentMeetingAgendaItemsIdDisplayValue("");
          }}
          defaultValue={meetingAgendaItemsId}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.meetingAgendaItemsId?.hasError) {
              runValidationTasks("meetingAgendaItemsId", value);
            }
            setCurrentMeetingAgendaItemsIdDisplayValue(value);
            setCurrentMeetingAgendaItemsIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "meetingAgendaItemsId",
              currentMeetingAgendaItemsIdValue
            )
          }
          errorMessage={errors.meetingAgendaItemsId?.errorMessage}
          hasError={errors.meetingAgendaItemsId?.hasError}
          ref={meetingAgendaItemsIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "meetingAgendaItemsId")}
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
          isDisabled={!(idProp || agendaItemModelProp)}
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
              !(idProp || agendaItemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
