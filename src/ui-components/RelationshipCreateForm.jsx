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
import { listMeetings, listUsers } from "../graphql/queries";
import { createRelationship, updateMeeting } from "../graphql/mutations";
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
export default function RelationshipCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    requestor: undefined,
    employee: undefined,
    meetings: [],
    userRelationshipsId: undefined,
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [requestor, setRequestor] = React.useState(initialValues.requestor);
  const [requestorLoading, setRequestorLoading] = React.useState(false);
  const [requestorRecords, setRequestorRecords] = React.useState([]);
  const [employee, setEmployee] = React.useState(initialValues.employee);
  const [employeeLoading, setEmployeeLoading] = React.useState(false);
  const [employeeRecords, setEmployeeRecords] = React.useState([]);
  const [meetings, setMeetings] = React.useState(initialValues.meetings);
  const [meetingsLoading, setMeetingsLoading] = React.useState(false);
  const [meetingsRecords, setMeetingsRecords] = React.useState([]);
  const [userRelationshipsId, setUserRelationshipsId] = React.useState(
    initialValues.userRelationshipsId
  );
  const [userRelationshipsIdLoading, setUserRelationshipsIdLoading] =
    React.useState(false);
  const [userRelationshipsIdRecords, setUserRelationshipsIdRecords] =
    React.useState([]);
  const [
    selectedUserRelationshipsIdRecords,
    setSelectedUserRelationshipsIdRecords,
  ] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setDescription(initialValues.description);
    setRequestor(initialValues.requestor);
    setCurrentRequestorValue(undefined);
    setCurrentRequestorDisplayValue("");
    setEmployee(initialValues.employee);
    setCurrentEmployeeValue(undefined);
    setCurrentEmployeeDisplayValue("");
    setMeetings(initialValues.meetings);
    setCurrentMeetingsValue(undefined);
    setCurrentMeetingsDisplayValue("");
    setUserRelationshipsId(initialValues.userRelationshipsId);
    setCurrentUserRelationshipsIdValue(undefined);
    setCurrentUserRelationshipsIdDisplayValue("");
    setErrors({});
  };
  const [currentRequestorDisplayValue, setCurrentRequestorDisplayValue] =
    React.useState("");
  const [currentRequestorValue, setCurrentRequestorValue] =
    React.useState(undefined);
  const requestorRef = React.createRef();
  const [currentEmployeeDisplayValue, setCurrentEmployeeDisplayValue] =
    React.useState("");
  const [currentEmployeeValue, setCurrentEmployeeValue] =
    React.useState(undefined);
  const employeeRef = React.createRef();
  const [currentMeetingsDisplayValue, setCurrentMeetingsDisplayValue] =
    React.useState("");
  const [currentMeetingsValue, setCurrentMeetingsValue] =
    React.useState(undefined);
  const meetingsRef = React.createRef();
  const [
    currentUserRelationshipsIdDisplayValue,
    setCurrentUserRelationshipsIdDisplayValue,
  ] = React.useState("");
  const [currentUserRelationshipsIdValue, setCurrentUserRelationshipsIdValue] =
    React.useState(undefined);
  const userRelationshipsIdRef = React.createRef();
  const getIDValue = {
    requestor: (r) => JSON.stringify({ id: r?.id }),
    employee: (r) => JSON.stringify({ id: r?.id }),
    meetings: (r) => JSON.stringify({ id: r?.id }),
  };
  const requestorIdSet = new Set(
    Array.isArray(requestor)
      ? requestor.map((r) => getIDValue.requestor?.(r))
      : getIDValue.requestor?.(requestor)
  );
  const employeeIdSet = new Set(
    Array.isArray(employee)
      ? employee.map((r) => getIDValue.employee?.(r))
      : getIDValue.employee?.(employee)
  );
  const meetingsIdSet = new Set(
    Array.isArray(meetings)
      ? meetings.map((r) => getIDValue.meetings?.(r))
      : getIDValue.meetings?.(meetings)
  );
  const getDisplayValue = {
    requestor: (r) => `${r?.firstName ? r?.firstName + " - " : ""}${r?.id}`,
    employee: (r) => `${r?.firstName ? r?.firstName + " - " : ""}${r?.id}`,
    meetings: (r) =>
      `${r?.scheduledTime ? r?.scheduledTime + " - " : ""}${r?.id}`,
    userRelationshipsId: (r) =>
      `${r?.firstName ? r?.firstName + " - " : ""}${r?.id}`,
  };
  const validations = {
    name: [],
    description: [],
    requestor: [],
    employee: [],
    meetings: [],
    userRelationshipsId: [],
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
  const fetchRequestorRecords = async (value) => {
    setRequestorLoading(true);
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
        (item) => !requestorIdSet.has(getIDValue.requestor?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setRequestorRecords(newOptions.slice(0, autocompleteLength));
    setRequestorLoading(false);
  };
  const fetchEmployeeRecords = async (value) => {
    setEmployeeLoading(true);
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
        (item) => !employeeIdSet.has(getIDValue.employee?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setEmployeeRecords(newOptions.slice(0, autocompleteLength));
    setEmployeeLoading(false);
  };
  const fetchMeetingsRecords = async (value) => {
    setMeetingsLoading(true);
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
        (item) => !meetingsIdSet.has(getIDValue.meetings?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setMeetingsRecords(newOptions.slice(0, autocompleteLength));
    setMeetingsLoading(false);
  };
  const fetchUserRelationshipsIdRecords = async (value) => {
    setUserRelationshipsIdLoading(true);
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
      var loaded = result.filter((item) => userRelationshipsId !== item.id);
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setUserRelationshipsIdRecords(newOptions.slice(0, autocompleteLength));
    setUserRelationshipsIdLoading(false);
  };
  React.useEffect(() => {
    fetchRequestorRecords("");
    fetchEmployeeRecords("");
    fetchMeetingsRecords("");
    fetchUserRelationshipsIdRecords("");
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
          name,
          description,
          requestor,
          employee,
          meetings,
          userRelationshipsId,
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
            name: modelFields.name,
            description: modelFields.description,
            relationshipRequestorId: modelFields?.requestor?.id,
            relationshipEmployeeId: modelFields?.employee?.id,
            userRelationshipsId: modelFields.userRelationshipsId,
          };
          const relationship = (
            await API.graphql({
              query: createRelationship.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createRelationship;
          const promises = [];
          promises.push(
            ...meetings.reduce((promises, original) => {
              promises.push(
                API.graphql({
                  query: updateMeeting.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      relationshipMeetingsId: relationship.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "RelationshipCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              requestor,
              employee,
              meetings,
              userRelationshipsId,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
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
              name,
              description: value,
              requestor,
              employee,
              meetings,
              userRelationshipsId,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              description,
              requestor: value,
              employee,
              meetings,
              userRelationshipsId,
            };
            const result = onChange(modelFields);
            value = result?.requestor ?? value;
          }
          setRequestor(value);
          setCurrentRequestorValue(undefined);
          setCurrentRequestorDisplayValue("");
        }}
        currentFieldValue={currentRequestorValue}
        label={"Requestor"}
        items={requestor ? [requestor] : []}
        hasError={errors?.requestor?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("requestor", currentRequestorValue)
        }
        errorMessage={errors?.requestor?.errorMessage}
        getBadgeText={getDisplayValue.requestor}
        setFieldValue={(model) => {
          setCurrentRequestorDisplayValue(
            model ? getDisplayValue.requestor(model) : ""
          );
          setCurrentRequestorValue(model);
        }}
        inputFieldRef={requestorRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Requestor"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentRequestorDisplayValue}
          options={requestorRecords
            .filter((r) => !requestorIdSet.has(getIDValue.requestor?.(r)))
            .map((r) => ({
              id: getIDValue.requestor?.(r),
              label: getDisplayValue.requestor?.(r),
            }))}
          isLoading={requestorLoading}
          onSelect={({ id, label }) => {
            setCurrentRequestorValue(
              requestorRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentRequestorDisplayValue(label);
            runValidationTasks("requestor", label);
          }}
          onClear={() => {
            setCurrentRequestorDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchRequestorRecords(value);
            if (errors.requestor?.hasError) {
              runValidationTasks("requestor", value);
            }
            setCurrentRequestorDisplayValue(value);
            setCurrentRequestorValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("requestor", currentRequestorDisplayValue)
          }
          errorMessage={errors.requestor?.errorMessage}
          hasError={errors.requestor?.hasError}
          ref={requestorRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "requestor")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              description,
              requestor,
              employee: value,
              meetings,
              userRelationshipsId,
            };
            const result = onChange(modelFields);
            value = result?.employee ?? value;
          }
          setEmployee(value);
          setCurrentEmployeeValue(undefined);
          setCurrentEmployeeDisplayValue("");
        }}
        currentFieldValue={currentEmployeeValue}
        label={"Employee"}
        items={employee ? [employee] : []}
        hasError={errors?.employee?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("employee", currentEmployeeValue)
        }
        errorMessage={errors?.employee?.errorMessage}
        getBadgeText={getDisplayValue.employee}
        setFieldValue={(model) => {
          setCurrentEmployeeDisplayValue(
            model ? getDisplayValue.employee(model) : ""
          );
          setCurrentEmployeeValue(model);
        }}
        inputFieldRef={employeeRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Employee"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentEmployeeDisplayValue}
          options={employeeRecords
            .filter((r) => !employeeIdSet.has(getIDValue.employee?.(r)))
            .map((r) => ({
              id: getIDValue.employee?.(r),
              label: getDisplayValue.employee?.(r),
            }))}
          isLoading={employeeLoading}
          onSelect={({ id, label }) => {
            setCurrentEmployeeValue(
              employeeRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentEmployeeDisplayValue(label);
            runValidationTasks("employee", label);
          }}
          onClear={() => {
            setCurrentEmployeeDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchEmployeeRecords(value);
            if (errors.employee?.hasError) {
              runValidationTasks("employee", value);
            }
            setCurrentEmployeeDisplayValue(value);
            setCurrentEmployeeValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("employee", currentEmployeeDisplayValue)
          }
          errorMessage={errors.employee?.errorMessage}
          hasError={errors.employee?.hasError}
          ref={employeeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "employee")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              name,
              description,
              requestor,
              employee,
              meetings: values,
              userRelationshipsId,
            };
            const result = onChange(modelFields);
            values = result?.meetings ?? values;
          }
          setMeetings(values);
          setCurrentMeetingsValue(undefined);
          setCurrentMeetingsDisplayValue("");
        }}
        currentFieldValue={currentMeetingsValue}
        label={"Meetings"}
        items={meetings}
        hasError={errors?.meetings?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("meetings", currentMeetingsValue)
        }
        errorMessage={errors?.meetings?.errorMessage}
        getBadgeText={getDisplayValue.meetings}
        setFieldValue={(model) => {
          setCurrentMeetingsDisplayValue(
            model ? getDisplayValue.meetings(model) : ""
          );
          setCurrentMeetingsValue(model);
        }}
        inputFieldRef={meetingsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Meetings"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Meeting"
          value={currentMeetingsDisplayValue}
          options={meetingsRecords
            .filter((r) => !meetingsIdSet.has(getIDValue.meetings?.(r)))
            .map((r) => ({
              id: getIDValue.meetings?.(r),
              label: getDisplayValue.meetings?.(r),
            }))}
          isLoading={meetingsLoading}
          onSelect={({ id, label }) => {
            setCurrentMeetingsValue(
              meetingsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMeetingsDisplayValue(label);
            runValidationTasks("meetings", label);
          }}
          onClear={() => {
            setCurrentMeetingsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchMeetingsRecords(value);
            if (errors.meetings?.hasError) {
              runValidationTasks("meetings", value);
            }
            setCurrentMeetingsDisplayValue(value);
            setCurrentMeetingsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("meetings", currentMeetingsDisplayValue)
          }
          errorMessage={errors.meetings?.errorMessage}
          hasError={errors.meetings?.hasError}
          ref={meetingsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "meetings")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              name,
              description,
              requestor,
              employee,
              meetings,
              userRelationshipsId: value,
            };
            const result = onChange(modelFields);
            value = result?.userRelationshipsId ?? value;
          }
          setUserRelationshipsId(value);
          setCurrentUserRelationshipsIdValue(undefined);
        }}
        currentFieldValue={currentUserRelationshipsIdValue}
        label={"User relationships id"}
        items={userRelationshipsId ? [userRelationshipsId] : []}
        hasError={errors?.userRelationshipsId?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "userRelationshipsId",
            currentUserRelationshipsIdValue
          )
        }
        errorMessage={errors?.userRelationshipsId?.errorMessage}
        getBadgeText={(value) =>
          value
            ? getDisplayValue.userRelationshipsId(
                userRelationshipsIdRecords.find((r) => r.id === value) ??
                  selectedUserRelationshipsIdRecords.find((r) => r.id === value)
              )
            : ""
        }
        setFieldValue={(value) => {
          setCurrentUserRelationshipsIdDisplayValue(
            value
              ? getDisplayValue.userRelationshipsId(
                  userRelationshipsIdRecords.find((r) => r.id === value) ??
                    selectedUserRelationshipsIdRecords.find(
                      (r) => r.id === value
                    )
                )
              : ""
          );
          setCurrentUserRelationshipsIdValue(value);
          const selectedRecord = userRelationshipsIdRecords.find(
            (r) => r.id === value
          );
          if (selectedRecord) {
            setSelectedUserRelationshipsIdRecords([selectedRecord]);
          }
        }}
        inputFieldRef={userRelationshipsIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User relationships id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUserRelationshipsIdDisplayValue}
          options={userRelationshipsIdRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.userRelationshipsId?.(r),
            }))}
          isLoading={userRelationshipsIdLoading}
          onSelect={({ id, label }) => {
            setCurrentUserRelationshipsIdValue(id);
            setCurrentUserRelationshipsIdDisplayValue(label);
            runValidationTasks("userRelationshipsId", label);
          }}
          onClear={() => {
            setCurrentUserRelationshipsIdDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchUserRelationshipsIdRecords(value);
            if (errors.userRelationshipsId?.hasError) {
              runValidationTasks("userRelationshipsId", value);
            }
            setCurrentUserRelationshipsIdDisplayValue(value);
            setCurrentUserRelationshipsIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "userRelationshipsId",
              currentUserRelationshipsIdValue
            )
          }
          errorMessage={errors.userRelationshipsId?.errorMessage}
          hasError={errors.userRelationshipsId?.hasError}
          ref={userRelationshipsIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "userRelationshipsId")}
        ></Autocomplete>
      </ArrayField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
