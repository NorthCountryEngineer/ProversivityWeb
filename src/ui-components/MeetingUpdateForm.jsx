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
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import {
  getMeeting,
  getRelationship,
  listActionItems,
  listAgendaItems,
  listNotes,
  listRelationships,
} from "../graphql/queries";
import {
  updateActionItem,
  updateAgendaItem,
  updateMeeting,
  updateNote,
} from "../graphql/mutations";
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
export default function MeetingUpdateForm(props) {
  const {
    id: idProp,
    meeting: meetingModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    scheduledTime: "",
    duration: "",
    locationLink: "",
    status: "",
    agendaItems: [],
    actionItems: [],
    notes: [],
    relationshipMeetingsId: undefined,
  };
  const [scheduledTime, setScheduledTime] = React.useState(
    initialValues.scheduledTime
  );
  const [duration, setDuration] = React.useState(initialValues.duration);
  const [locationLink, setLocationLink] = React.useState(
    initialValues.locationLink
  );
  const [status, setStatus] = React.useState(initialValues.status);
  const [agendaItems, setAgendaItems] = React.useState(
    initialValues.agendaItems
  );
  const [agendaItemsLoading, setAgendaItemsLoading] = React.useState(false);
  const [agendaItemsRecords, setAgendaItemsRecords] = React.useState([]);
  const [actionItems, setActionItems] = React.useState(
    initialValues.actionItems
  );
  const [actionItemsLoading, setActionItemsLoading] = React.useState(false);
  const [actionItemsRecords, setActionItemsRecords] = React.useState([]);
  const [notes, setNotes] = React.useState(initialValues.notes);
  const [notesLoading, setNotesLoading] = React.useState(false);
  const [notesRecords, setNotesRecords] = React.useState([]);
  const [relationshipMeetingsId, setRelationshipMeetingsId] = React.useState(
    initialValues.relationshipMeetingsId
  );
  const [relationshipMeetingsIdLoading, setRelationshipMeetingsIdLoading] =
    React.useState(false);
  const [relationshipMeetingsIdRecords, setRelationshipMeetingsIdRecords] =
    React.useState([]);
  const [
    selectedRelationshipMeetingsIdRecords,
    setSelectedRelationshipMeetingsIdRecords,
  ] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = meetingRecord
      ? {
          ...initialValues,
          ...meetingRecord,
          agendaItems: linkedAgendaItems,
          actionItems: linkedActionItems,
          notes: linkedNotes,
          relationshipMeetingsId,
        }
      : initialValues;
    setScheduledTime(cleanValues.scheduledTime);
    setDuration(cleanValues.duration);
    setLocationLink(cleanValues.locationLink);
    setStatus(cleanValues.status);
    setAgendaItems(cleanValues.agendaItems ?? []);
    setCurrentAgendaItemsValue(undefined);
    setCurrentAgendaItemsDisplayValue("");
    setActionItems(cleanValues.actionItems ?? []);
    setCurrentActionItemsValue(undefined);
    setCurrentActionItemsDisplayValue("");
    setNotes(cleanValues.notes ?? []);
    setCurrentNotesValue(undefined);
    setCurrentNotesDisplayValue("");
    setRelationshipMeetingsId(cleanValues.relationshipMeetingsId);
    setCurrentRelationshipMeetingsIdValue(undefined);
    setCurrentRelationshipMeetingsIdDisplayValue("");
    setErrors({});
  };
  const [meetingRecord, setMeetingRecord] = React.useState(meetingModelProp);
  const [linkedAgendaItems, setLinkedAgendaItems] = React.useState([]);
  const canUnlinkAgendaItems = true;
  const [linkedActionItems, setLinkedActionItems] = React.useState([]);
  const canUnlinkActionItems = true;
  const [linkedNotes, setLinkedNotes] = React.useState([]);
  const canUnlinkNotes = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getMeeting.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getMeeting
        : meetingModelProp;
      const linkedAgendaItems = record?.agendaItems?.items ?? [];
      setLinkedAgendaItems(linkedAgendaItems);
      const linkedActionItems = record?.actionItems?.items ?? [];
      setLinkedActionItems(linkedActionItems);
      const linkedNotes = record?.notes?.items ?? [];
      setLinkedNotes(linkedNotes);
      const relationshipMeetingsIdRecord = record
        ? record.relationshipMeetingsId
        : undefined;
      const relationshipRecord = relationshipMeetingsIdRecord
        ? (
            await API.graphql({
              query: getRelationship.replaceAll("__typename", ""),
              variables: { id: relationshipMeetingsIdRecord },
            })
          )?.data?.getRelationship
        : undefined;
      setRelationshipMeetingsId(relationshipMeetingsIdRecord);
      setSelectedRelationshipMeetingsIdRecords([relationshipRecord]);
      setMeetingRecord(record);
    };
    queryData();
  }, [idProp, meetingModelProp]);
  React.useEffect(resetStateValues, [
    meetingRecord,
    linkedAgendaItems,
    linkedActionItems,
    linkedNotes,
    relationshipMeetingsId,
  ]);
  const [currentAgendaItemsDisplayValue, setCurrentAgendaItemsDisplayValue] =
    React.useState("");
  const [currentAgendaItemsValue, setCurrentAgendaItemsValue] =
    React.useState(undefined);
  const agendaItemsRef = React.createRef();
  const [currentActionItemsDisplayValue, setCurrentActionItemsDisplayValue] =
    React.useState("");
  const [currentActionItemsValue, setCurrentActionItemsValue] =
    React.useState(undefined);
  const actionItemsRef = React.createRef();
  const [currentNotesDisplayValue, setCurrentNotesDisplayValue] =
    React.useState("");
  const [currentNotesValue, setCurrentNotesValue] = React.useState(undefined);
  const notesRef = React.createRef();
  const [
    currentRelationshipMeetingsIdDisplayValue,
    setCurrentRelationshipMeetingsIdDisplayValue,
  ] = React.useState("");
  const [
    currentRelationshipMeetingsIdValue,
    setCurrentRelationshipMeetingsIdValue,
  ] = React.useState(undefined);
  const relationshipMeetingsIdRef = React.createRef();
  const getIDValue = {
    agendaItems: (r) => JSON.stringify({ id: r?.id }),
    actionItems: (r) => JSON.stringify({ id: r?.id }),
    notes: (r) => JSON.stringify({ id: r?.id }),
  };
  const agendaItemsIdSet = new Set(
    Array.isArray(agendaItems)
      ? agendaItems.map((r) => getIDValue.agendaItems?.(r))
      : getIDValue.agendaItems?.(agendaItems)
  );
  const actionItemsIdSet = new Set(
    Array.isArray(actionItems)
      ? actionItems.map((r) => getIDValue.actionItems?.(r))
      : getIDValue.actionItems?.(actionItems)
  );
  const notesIdSet = new Set(
    Array.isArray(notes)
      ? notes.map((r) => getIDValue.notes?.(r))
      : getIDValue.notes?.(notes)
  );
  const getDisplayValue = {
    agendaItems: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
    actionItems: (r) =>
      `${r?.description ? r?.description + " - " : ""}${r?.id}`,
    notes: (r) => `${r?.content ? r?.content + " - " : ""}${r?.id}`,
    relationshipMeetingsId: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    scheduledTime: [{ type: "Required" }],
    duration: [{ type: "Required" }],
    locationLink: [],
    status: [{ type: "Required" }],
    agendaItems: [],
    actionItems: [],
    notes: [],
    relationshipMeetingsId: [],
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
  const fetchAgendaItemsRecords = async (value) => {
    setAgendaItemsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ title: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listAgendaItems.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listAgendaItems?.items;
      var loaded = result.filter(
        (item) => !agendaItemsIdSet.has(getIDValue.agendaItems?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setAgendaItemsRecords(newOptions.slice(0, autocompleteLength));
    setAgendaItemsLoading(false);
  };
  const fetchActionItemsRecords = async (value) => {
    setActionItemsLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [
            { description: { contains: value } },
            { id: { contains: value } },
          ],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listActionItems.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listActionItems?.items;
      var loaded = result.filter(
        (item) => !actionItemsIdSet.has(getIDValue.actionItems?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setActionItemsRecords(newOptions.slice(0, autocompleteLength));
    setActionItemsLoading(false);
  };
  const fetchNotesRecords = async (value) => {
    setNotesLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ content: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listNotes.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listNotes?.items;
      var loaded = result.filter(
        (item) => !notesIdSet.has(getIDValue.notes?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setNotesRecords(newOptions.slice(0, autocompleteLength));
    setNotesLoading(false);
  };
  const fetchRelationshipMeetingsIdRecords = async (value) => {
    setRelationshipMeetingsIdLoading(true);
    const newOptions = [];
    let newNext = "";
    while (newOptions.length < autocompleteLength && newNext != null) {
      const variables = {
        limit: autocompleteLength * 5,
        filter: {
          or: [{ name: { contains: value } }, { id: { contains: value } }],
        },
      };
      if (newNext) {
        variables["nextToken"] = newNext;
      }
      const result = (
        await API.graphql({
          query: listRelationships.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listRelationships?.items;
      var loaded = result.filter((item) => relationshipMeetingsId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setRelationshipMeetingsIdRecords(newOptions.slice(0, autocompleteLength));
    setRelationshipMeetingsIdLoading(false);
  };
  React.useEffect(() => {
    fetchAgendaItemsRecords("");
    fetchActionItemsRecords("");
    fetchNotesRecords("");
    fetchRelationshipMeetingsIdRecords("");
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
          scheduledTime,
          duration,
          locationLink: locationLink ?? null,
          status,
          agendaItems: agendaItems ?? null,
          actionItems: actionItems ?? null,
          notes: notes ?? null,
          relationshipMeetingsId: relationshipMeetingsId ?? null,
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
          const promises = [];
          const agendaItemsToLink = [];
          const agendaItemsToUnLink = [];
          const agendaItemsSet = new Set();
          const linkedAgendaItemsSet = new Set();
          agendaItems.forEach((r) =>
            agendaItemsSet.add(getIDValue.agendaItems?.(r))
          );
          linkedAgendaItems.forEach((r) =>
            linkedAgendaItemsSet.add(getIDValue.agendaItems?.(r))
          );
          linkedAgendaItems.forEach((r) => {
            if (!agendaItemsSet.has(getIDValue.agendaItems?.(r))) {
              agendaItemsToUnLink.push(r);
            }
          });
          agendaItems.forEach((r) => {
            if (!linkedAgendaItemsSet.has(getIDValue.agendaItems?.(r))) {
              agendaItemsToLink.push(r);
            }
          });
          agendaItemsToUnLink.forEach((original) => {
            if (!canUnlinkAgendaItems) {
              throw Error(
                `AgendaItem ${original.id} cannot be unlinked from Meeting because meetingAgendaItemsId is a required field.`
              );
            }
            promises.push(
              API.graphql({
                query: updateAgendaItem.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    meetingAgendaItemsId: null,
                  },
                },
              })
            );
          });
          agendaItemsToLink.forEach((original) => {
            promises.push(
              API.graphql({
                query: updateAgendaItem.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    meetingAgendaItemsId: meetingRecord.id,
                  },
                },
              })
            );
          });
          const actionItemsToLink = [];
          const actionItemsToUnLink = [];
          const actionItemsSet = new Set();
          const linkedActionItemsSet = new Set();
          actionItems.forEach((r) =>
            actionItemsSet.add(getIDValue.actionItems?.(r))
          );
          linkedActionItems.forEach((r) =>
            linkedActionItemsSet.add(getIDValue.actionItems?.(r))
          );
          linkedActionItems.forEach((r) => {
            if (!actionItemsSet.has(getIDValue.actionItems?.(r))) {
              actionItemsToUnLink.push(r);
            }
          });
          actionItems.forEach((r) => {
            if (!linkedActionItemsSet.has(getIDValue.actionItems?.(r))) {
              actionItemsToLink.push(r);
            }
          });
          actionItemsToUnLink.forEach((original) => {
            if (!canUnlinkActionItems) {
              throw Error(
                `ActionItem ${original.id} cannot be unlinked from Meeting because meetingActionItemsId is a required field.`
              );
            }
            promises.push(
              API.graphql({
                query: updateActionItem.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    meetingActionItemsId: null,
                  },
                },
              })
            );
          });
          actionItemsToLink.forEach((original) => {
            promises.push(
              API.graphql({
                query: updateActionItem.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    meetingActionItemsId: meetingRecord.id,
                  },
                },
              })
            );
          });
          const notesToLink = [];
          const notesToUnLink = [];
          const notesSet = new Set();
          const linkedNotesSet = new Set();
          notes.forEach((r) => notesSet.add(getIDValue.notes?.(r)));
          linkedNotes.forEach((r) => linkedNotesSet.add(getIDValue.notes?.(r)));
          linkedNotes.forEach((r) => {
            if (!notesSet.has(getIDValue.notes?.(r))) {
              notesToUnLink.push(r);
            }
          });
          notes.forEach((r) => {
            if (!linkedNotesSet.has(getIDValue.notes?.(r))) {
              notesToLink.push(r);
            }
          });
          notesToUnLink.forEach((original) => {
            if (!canUnlinkNotes) {
              throw Error(
                `Note ${original.id} cannot be unlinked from Meeting because meetingNotesId is a required field.`
              );
            }
            promises.push(
              API.graphql({
                query: updateNote.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    meetingNotesId: null,
                  },
                },
              })
            );
          });
          notesToLink.forEach((original) => {
            promises.push(
              API.graphql({
                query: updateNote.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    meetingNotesId: meetingRecord.id,
                  },
                },
              })
            );
          });
          const modelFieldsToSave = {
            scheduledTime: modelFields.scheduledTime,
            duration: modelFields.duration,
            locationLink: modelFields.locationLink ?? null,
            status: modelFields.status,
            relationshipMeetingsId: modelFields.relationshipMeetingsId ?? null,
          };
          promises.push(
            API.graphql({
              query: updateMeeting.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: meetingRecord.id,
                  ...modelFieldsToSave,
                },
              },
            })
          );
          await Promise.all(promises);
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
      {...getOverrideProps(overrides, "MeetingUpdateForm")}
      {...rest}
    >
      <TextField
        label="Scheduled time"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={scheduledTime}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              scheduledTime: value,
              duration,
              locationLink,
              status,
              agendaItems,
              actionItems,
              notes,
              relationshipMeetingsId,
            };
            const result = onChange(modelFields);
            value = result?.scheduledTime ?? value;
          }
          if (errors.scheduledTime?.hasError) {
            runValidationTasks("scheduledTime", value);
          }
          setScheduledTime(value);
        }}
        onBlur={() => runValidationTasks("scheduledTime", scheduledTime)}
        errorMessage={errors.scheduledTime?.errorMessage}
        hasError={errors.scheduledTime?.hasError}
        {...getOverrideProps(overrides, "scheduledTime")}
      ></TextField>
      <TextField
        label="Duration"
        isRequired={true}
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
              scheduledTime,
              duration: value,
              locationLink,
              status,
              agendaItems,
              actionItems,
              notes,
              relationshipMeetingsId,
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
        label="Location link"
        isRequired={false}
        isReadOnly={false}
        value={locationLink}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              scheduledTime,
              duration,
              locationLink: value,
              status,
              agendaItems,
              actionItems,
              notes,
              relationshipMeetingsId,
            };
            const result = onChange(modelFields);
            value = result?.locationLink ?? value;
          }
          if (errors.locationLink?.hasError) {
            runValidationTasks("locationLink", value);
          }
          setLocationLink(value);
        }}
        onBlur={() => runValidationTasks("locationLink", locationLink)}
        errorMessage={errors.locationLink?.errorMessage}
        hasError={errors.locationLink?.hasError}
        {...getOverrideProps(overrides, "locationLink")}
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
              scheduledTime,
              duration,
              locationLink,
              status: value,
              agendaItems,
              actionItems,
              notes,
              relationshipMeetingsId,
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
          children="Scheduled"
          value="SCHEDULED"
          {...getOverrideProps(overrides, "statusoption0")}
        ></option>
        <option
          children="Cancelled"
          value="CANCELLED"
          {...getOverrideProps(overrides, "statusoption1")}
        ></option>
        <option
          children="Completed"
          value="COMPLETED"
          {...getOverrideProps(overrides, "statusoption2")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              scheduledTime,
              duration,
              locationLink,
              status,
              agendaItems: values,
              actionItems,
              notes,
              relationshipMeetingsId,
            };
            const result = onChange(modelFields);
            values = result?.agendaItems ?? values;
          }
          setAgendaItems(values);
          setCurrentAgendaItemsValue(undefined);
          setCurrentAgendaItemsDisplayValue("");
        }}
        currentFieldValue={currentAgendaItemsValue}
        label={"Agenda items"}
        items={agendaItems}
        hasError={errors?.agendaItems?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("agendaItems", currentAgendaItemsValue)
        }
        errorMessage={errors?.agendaItems?.errorMessage}
        getBadgeText={getDisplayValue.agendaItems}
        setFieldValue={(model) => {
          setCurrentAgendaItemsDisplayValue(
            model ? getDisplayValue.agendaItems(model) : ""
          );
          setCurrentAgendaItemsValue(model);
        }}
        inputFieldRef={agendaItemsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Agenda items"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search AgendaItem"
          value={currentAgendaItemsDisplayValue}
          options={agendaItemsRecords
            .filter((r) => !agendaItemsIdSet.has(getIDValue.agendaItems?.(r)))
            .map((r) => ({
              id: getIDValue.agendaItems?.(r),
              label: getDisplayValue.agendaItems?.(r),
            }))}
          isLoading={agendaItemsLoading}
          onSelect={({ id, label }) => {
            setCurrentAgendaItemsValue(
              agendaItemsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAgendaItemsDisplayValue(label);
            runValidationTasks("agendaItems", label);
          }}
          onClear={() => {
            setCurrentAgendaItemsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchAgendaItemsRecords(value);
            if (errors.agendaItems?.hasError) {
              runValidationTasks("agendaItems", value);
            }
            setCurrentAgendaItemsDisplayValue(value);
            setCurrentAgendaItemsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("agendaItems", currentAgendaItemsDisplayValue)
          }
          errorMessage={errors.agendaItems?.errorMessage}
          hasError={errors.agendaItems?.hasError}
          ref={agendaItemsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "agendaItems")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              scheduledTime,
              duration,
              locationLink,
              status,
              agendaItems,
              actionItems: values,
              notes,
              relationshipMeetingsId,
            };
            const result = onChange(modelFields);
            values = result?.actionItems ?? values;
          }
          setActionItems(values);
          setCurrentActionItemsValue(undefined);
          setCurrentActionItemsDisplayValue("");
        }}
        currentFieldValue={currentActionItemsValue}
        label={"Action items"}
        items={actionItems}
        hasError={errors?.actionItems?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("actionItems", currentActionItemsValue)
        }
        errorMessage={errors?.actionItems?.errorMessage}
        getBadgeText={getDisplayValue.actionItems}
        setFieldValue={(model) => {
          setCurrentActionItemsDisplayValue(
            model ? getDisplayValue.actionItems(model) : ""
          );
          setCurrentActionItemsValue(model);
        }}
        inputFieldRef={actionItemsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Action items"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ActionItem"
          value={currentActionItemsDisplayValue}
          options={actionItemsRecords
            .filter((r) => !actionItemsIdSet.has(getIDValue.actionItems?.(r)))
            .map((r) => ({
              id: getIDValue.actionItems?.(r),
              label: getDisplayValue.actionItems?.(r),
            }))}
          isLoading={actionItemsLoading}
          onSelect={({ id, label }) => {
            setCurrentActionItemsValue(
              actionItemsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentActionItemsDisplayValue(label);
            runValidationTasks("actionItems", label);
          }}
          onClear={() => {
            setCurrentActionItemsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchActionItemsRecords(value);
            if (errors.actionItems?.hasError) {
              runValidationTasks("actionItems", value);
            }
            setCurrentActionItemsDisplayValue(value);
            setCurrentActionItemsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("actionItems", currentActionItemsDisplayValue)
          }
          errorMessage={errors.actionItems?.errorMessage}
          hasError={errors.actionItems?.hasError}
          ref={actionItemsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "actionItems")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              scheduledTime,
              duration,
              locationLink,
              status,
              agendaItems,
              actionItems,
              notes: values,
              relationshipMeetingsId,
            };
            const result = onChange(modelFields);
            values = result?.notes ?? values;
          }
          setNotes(values);
          setCurrentNotesValue(undefined);
          setCurrentNotesDisplayValue("");
        }}
        currentFieldValue={currentNotesValue}
        label={"Notes"}
        items={notes}
        hasError={errors?.notes?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("notes", currentNotesValue)
        }
        errorMessage={errors?.notes?.errorMessage}
        getBadgeText={getDisplayValue.notes}
        setFieldValue={(model) => {
          setCurrentNotesDisplayValue(
            model ? getDisplayValue.notes(model) : ""
          );
          setCurrentNotesValue(model);
        }}
        inputFieldRef={notesRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Notes"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Note"
          value={currentNotesDisplayValue}
          options={notesRecords
            .filter((r) => !notesIdSet.has(getIDValue.notes?.(r)))
            .map((r) => ({
              id: getIDValue.notes?.(r),
              label: getDisplayValue.notes?.(r),
            }))}
          isLoading={notesLoading}
          onSelect={({ id, label }) => {
            setCurrentNotesValue(
              notesRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentNotesDisplayValue(label);
            runValidationTasks("notes", label);
          }}
          onClear={() => {
            setCurrentNotesDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchNotesRecords(value);
            if (errors.notes?.hasError) {
              runValidationTasks("notes", value);
            }
            setCurrentNotesDisplayValue(value);
            setCurrentNotesValue(undefined);
          }}
          onBlur={() => runValidationTasks("notes", currentNotesDisplayValue)}
          errorMessage={errors.notes?.errorMessage}
          hasError={errors.notes?.hasError}
          ref={notesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "notes")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              scheduledTime,
              duration,
              locationLink,
              status,
              agendaItems,
              actionItems,
              notes,
              relationshipMeetingsId: value,
            };
            const result = onChange(modelFields);
            value = result?.relationshipMeetingsId ?? value;
          }
          setRelationshipMeetingsId(value);
          setCurrentRelationshipMeetingsIdValue(undefined);
        }}
        currentFieldValue={currentRelationshipMeetingsIdValue}
        label={"Relationship meetings id"}
        items={relationshipMeetingsId ? [relationshipMeetingsId] : []}
        hasError={errors?.relationshipMeetingsId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "relationshipMeetingsId",
            currentRelationshipMeetingsIdValue
          )
        }
        errorMessage={errors?.relationshipMeetingsId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.relationshipMeetingsId(
                relationshipMeetingsIdRecords.find((r) => r.id === value) ??
                  selectedRelationshipMeetingsIdRecords.find(
                    (r) => r.id === value
                  )
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentRelationshipMeetingsIdDisplayValue(
            value
              ? getDisplayValue.relationshipMeetingsId(
                  relationshipMeetingsIdRecords.find((r) => r.id === value) ??
                    selectedRelationshipMeetingsIdRecords.find(
                      (r) => r.id === value
                    )
                )
              : ""
          );
          setCurrentRelationshipMeetingsIdValue(value);
          const selectedRecord = relationshipMeetingsIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedRelationshipMeetingsIdRecords([selectedRecord]);
          }
        }}
        inputFieldRef={relationshipMeetingsIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Relationship meetings id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Relationship"
          value={currentRelationshipMeetingsIdDisplayValue}
          options={relationshipMeetingsIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.relationshipMeetingsId?.(r),
            }))}
          isLoading={relationshipMeetingsIdLoading}
          onSelect={({ id, label }) => {
            setCurrentRelationshipMeetingsIdValue(id);
            setCurrentRelationshipMeetingsIdDisplayValue(label);
            runValidationTasks("relationshipMeetingsId", label);
          }}
          onClear={() => {
            setCurrentRelationshipMeetingsIdDisplayValue("");
          }}
          defaultValue={relationshipMeetingsId}
          onChange={(e) => {
            let { value } = e.target;
            fetchRelationshipMeetingsIdRecords(value);
            if (errors.relationshipMeetingsId?.hasError) {
              runValidationTasks("relationshipMeetingsId", value);
            }
            setCurrentRelationshipMeetingsIdDisplayValue(value);
            setCurrentRelationshipMeetingsIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "relationshipMeetingsId",
              currentRelationshipMeetingsIdValue
            )
          }
          errorMessage={errors.relationshipMeetingsId?.errorMessage}
          hasError={errors.relationshipMeetingsId?.hasError}
          ref={relationshipMeetingsIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "relationshipMeetingsId")}
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
          isDisabled={!(idProp || meetingModelProp)}
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
              !(idProp || meetingModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
