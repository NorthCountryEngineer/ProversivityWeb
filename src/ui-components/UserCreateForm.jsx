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
import { User, Meeting, UserOrganization } from "../models";
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
export default function UserCreateForm(props) {
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
    firstName: "",
    email: "",
    role: "",
    meetingsAsRequestor: [],
    meetingsAsEmployee: [],
    organizations: [],
  };
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [role, setRole] = React.useState(initialValues.role);
  const [meetingsAsRequestor, setMeetingsAsRequestor] = React.useState(
    initialValues.meetingsAsRequestor
  );
  const [meetingsAsEmployee, setMeetingsAsEmployee] = React.useState(
    initialValues.meetingsAsEmployee
  );
  const [organizations, setOrganizations] = React.useState(
    initialValues.organizations
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setFirstName(initialValues.firstName);
    setEmail(initialValues.email);
    setRole(initialValues.role);
    setMeetingsAsRequestor(initialValues.meetingsAsRequestor);
    setCurrentMeetingsAsRequestorValue(undefined);
    setCurrentMeetingsAsRequestorDisplayValue("");
    setMeetingsAsEmployee(initialValues.meetingsAsEmployee);
    setCurrentMeetingsAsEmployeeValue(undefined);
    setCurrentMeetingsAsEmployeeDisplayValue("");
    setOrganizations(initialValues.organizations);
    setCurrentOrganizationsValue(undefined);
    setCurrentOrganizationsDisplayValue("");
    setErrors({});
  };
  const [
    currentMeetingsAsRequestorDisplayValue,
    setCurrentMeetingsAsRequestorDisplayValue,
  ] = React.useState("");
  const [currentMeetingsAsRequestorValue, setCurrentMeetingsAsRequestorValue] =
    React.useState(undefined);
  const meetingsAsRequestorRef = React.createRef();
  const [
    currentMeetingsAsEmployeeDisplayValue,
    setCurrentMeetingsAsEmployeeDisplayValue,
  ] = React.useState("");
  const [currentMeetingsAsEmployeeValue, setCurrentMeetingsAsEmployeeValue] =
    React.useState(undefined);
  const meetingsAsEmployeeRef = React.createRef();
  const [
    currentOrganizationsDisplayValue,
    setCurrentOrganizationsDisplayValue,
  ] = React.useState("");
  const [currentOrganizationsValue, setCurrentOrganizationsValue] =
    React.useState(undefined);
  const organizationsRef = React.createRef();
  const getIDValue = {
    meetingsAsRequestor: (r) => JSON.stringify({ id: r?.id }),
    meetingsAsEmployee: (r) => JSON.stringify({ id: r?.id }),
    organizations: (r) => JSON.stringify({ id: r?.id }),
  };
  const meetingsAsRequestorIdSet = new Set(
    Array.isArray(meetingsAsRequestor)
      ? meetingsAsRequestor.map((r) => getIDValue.meetingsAsRequestor?.(r))
      : getIDValue.meetingsAsRequestor?.(meetingsAsRequestor)
  );
  const meetingsAsEmployeeIdSet = new Set(
    Array.isArray(meetingsAsEmployee)
      ? meetingsAsEmployee.map((r) => getIDValue.meetingsAsEmployee?.(r))
      : getIDValue.meetingsAsEmployee?.(meetingsAsEmployee)
  );
  const organizationsIdSet = new Set(
    Array.isArray(organizations)
      ? organizations.map((r) => getIDValue.organizations?.(r))
      : getIDValue.organizations?.(organizations)
  );
  const meetingRecords = useDataStoreBinding({
    type: "collection",
    model: Meeting,
  }).items;
  const userOrganizationRecords = useDataStoreBinding({
    type: "collection",
    model: UserOrganization,
  }).items;
  const getDisplayValue = {
    meetingsAsRequestor: (r) =>
      `${r?.scheduledTime ? r?.scheduledTime + " - " : ""}${r?.id}`,
    meetingsAsEmployee: (r) =>
      `${r?.scheduledTime ? r?.scheduledTime + " - " : ""}${r?.id}`,
    organizations: (r) => `${r?.role ? r?.role + " - " : ""}${r?.id}`,
  };
  const validations = {
    firstName: [],
    email: [{ type: "Required" }],
    role: [],
    meetingsAsRequestor: [],
    meetingsAsEmployee: [],
    organizations: [],
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
          firstName,
          email,
          role,
          meetingsAsRequestor,
          meetingsAsEmployee,
          organizations,
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
          const modelFieldsToSave = {
            firstName: modelFields.firstName,
            email: modelFields.email,
            role: modelFields.role,
          };
          const user = await DataStore.save(new User(modelFieldsToSave));
          const promises = [];
          promises.push(
            ...meetingsAsRequestor.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Meeting.copyOf(original, (updated) => {
                    updated.userMeetingsAsRequestorId = user.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...meetingsAsEmployee.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  Meeting.copyOf(original, (updated) => {
                    updated.userMeetingsAsEmployeeId = user.id;
                  })
                )
              );
              return promises;
            }, [])
          );
          promises.push(
            ...organizations.reduce((promises, original) => {
              promises.push(
                DataStore.save(
                  UserOrganization.copyOf(original, (updated) => {
                    updated.userOrganizationsId = user.id;
                  })
                )
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
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName: value,
              email,
              role,
              meetingsAsRequestor,
              meetingsAsEmployee,
              organizations,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              email: value,
              role,
              meetingsAsRequestor,
              meetingsAsEmployee,
              organizations,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <SelectField
        label="Role"
        placeholder="Please select an option"
        isDisabled={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              firstName,
              email,
              role: value,
              meetingsAsRequestor,
              meetingsAsEmployee,
              organizations,
            };
            const result = onChange(modelFields);
            value = result?.role ?? value;
          }
          if (errors.role?.hasError) {
            runValidationTasks("role", value);
          }
          setRole(value);
        }}
        onBlur={() => runValidationTasks("role", role)}
        errorMessage={errors.role?.errorMessage}
        hasError={errors.role?.hasError}
        {...getOverrideProps(overrides, "role")}
      >
        <option
          children="Requestor"
          value="requestor"
          {...getOverrideProps(overrides, "roleoption0")}
        ></option>
        <option
          children="Employee"
          value="EMPLOYEE"
          {...getOverrideProps(overrides, "roleoption1")}
        ></option>
      </SelectField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstName,
              email,
              role,
              meetingsAsRequestor: values,
              meetingsAsEmployee,
              organizations,
            };
            const result = onChange(modelFields);
            values = result?.meetingsAsRequestor ?? values;
          }
          setMeetingsAsRequestor(values);
          setCurrentMeetingsAsRequestorValue(undefined);
          setCurrentMeetingsAsRequestorDisplayValue("");
        }}
        currentFieldValue={currentMeetingsAsRequestorValue}
        label={"Meetings as requestor"}
        items={meetingsAsRequestor}
        hasError={errors?.meetingsAsRequestor?.hasError}
        errorMessage={errors?.meetingsAsRequestor?.errorMessage}
        getBadgeText={getDisplayValue.meetingsAsRequestor}
        setFieldValue={(model) => {
          setCurrentMeetingsAsRequestorDisplayValue(
            getDisplayValue.meetingsAsRequestor(model)
          );
          setCurrentMeetingsAsRequestorValue(model);
        }}
        inputFieldRef={meetingsAsRequestorRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Meetings as requestor"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Meeting"
          value={currentMeetingsAsRequestorDisplayValue}
          options={meetingRecords
            .filter(
              (r) =>
                !meetingsAsRequestorIdSet.has(
                  getIDValue.meetingsAsRequestor?.(r)
                )
            )
            .map((r) => ({
              id: getIDValue.meetingsAsRequestor?.(r),
              label: getDisplayValue.meetingsAsRequestor?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentMeetingsAsRequestorValue(
              meetingRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMeetingsAsRequestorDisplayValue(label);
            runValidationTasks("meetingsAsRequestor", label);
          }}
          onClear={() => {
            setCurrentMeetingsAsRequestorDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.meetingsAsRequestor?.hasError) {
              runValidationTasks("meetingsAsRequestor", value);
            }
            setCurrentMeetingsAsRequestorDisplayValue(value);
            setCurrentMeetingsAsRequestorValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "meetingsAsRequestor",
              currentMeetingsAsRequestorDisplayValue
            )
          }
          errorMessage={errors.meetingsAsRequestor?.errorMessage}
          hasError={errors.meetingsAsRequestor?.hasError}
          ref={meetingsAsRequestorRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "meetingsAsRequestor")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstName,
              email,
              role,
              meetingsAsRequestor,
              meetingsAsEmployee: values,
              organizations,
            };
            const result = onChange(modelFields);
            values = result?.meetingsAsEmployee ?? values;
          }
          setMeetingsAsEmployee(values);
          setCurrentMeetingsAsEmployeeValue(undefined);
          setCurrentMeetingsAsEmployeeDisplayValue("");
        }}
        currentFieldValue={currentMeetingsAsEmployeeValue}
        label={"Meetings as employee"}
        items={meetingsAsEmployee}
        hasError={errors?.meetingsAsEmployee?.hasError}
        errorMessage={errors?.meetingsAsEmployee?.errorMessage}
        getBadgeText={getDisplayValue.meetingsAsEmployee}
        setFieldValue={(model) => {
          setCurrentMeetingsAsEmployeeDisplayValue(
            getDisplayValue.meetingsAsEmployee(model)
          );
          setCurrentMeetingsAsEmployeeValue(model);
        }}
        inputFieldRef={meetingsAsEmployeeRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Meetings as employee"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Meeting"
          value={currentMeetingsAsEmployeeDisplayValue}
          options={meetingRecords
            .filter(
              (r) =>
                !meetingsAsEmployeeIdSet.has(getIDValue.meetingsAsEmployee?.(r))
            )
            .map((r) => ({
              id: getIDValue.meetingsAsEmployee?.(r),
              label: getDisplayValue.meetingsAsEmployee?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentMeetingsAsEmployeeValue(
              meetingRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentMeetingsAsEmployeeDisplayValue(label);
            runValidationTasks("meetingsAsEmployee", label);
          }}
          onClear={() => {
            setCurrentMeetingsAsEmployeeDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.meetingsAsEmployee?.hasError) {
              runValidationTasks("meetingsAsEmployee", value);
            }
            setCurrentMeetingsAsEmployeeDisplayValue(value);
            setCurrentMeetingsAsEmployeeValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "meetingsAsEmployee",
              currentMeetingsAsEmployeeDisplayValue
            )
          }
          errorMessage={errors.meetingsAsEmployee?.errorMessage}
          hasError={errors.meetingsAsEmployee?.hasError}
          ref={meetingsAsEmployeeRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "meetingsAsEmployee")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              firstName,
              email,
              role,
              meetingsAsRequestor,
              meetingsAsEmployee,
              organizations: values,
            };
            const result = onChange(modelFields);
            values = result?.organizations ?? values;
          }
          setOrganizations(values);
          setCurrentOrganizationsValue(undefined);
          setCurrentOrganizationsDisplayValue("");
        }}
        currentFieldValue={currentOrganizationsValue}
        label={"Organizations"}
        items={organizations}
        hasError={errors?.organizations?.hasError}
        errorMessage={errors?.organizations?.errorMessage}
        getBadgeText={getDisplayValue.organizations}
        setFieldValue={(model) => {
          setCurrentOrganizationsDisplayValue(
            getDisplayValue.organizations(model)
          );
          setCurrentOrganizationsValue(model);
        }}
        inputFieldRef={organizationsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Organizations"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search UserOrganization"
          value={currentOrganizationsDisplayValue}
          options={userOrganizationRecords
            .filter(
              (r) => !organizationsIdSet.has(getIDValue.organizations?.(r))
            )
            .map((r) => ({
              id: getIDValue.organizations?.(r),
              label: getDisplayValue.organizations?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentOrganizationsValue(
              userOrganizationRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentOrganizationsDisplayValue(label);
            runValidationTasks("organizations", label);
          }}
          onClear={() => {
            setCurrentOrganizationsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.organizations?.hasError) {
              runValidationTasks("organizations", value);
            }
            setCurrentOrganizationsDisplayValue(value);
            setCurrentOrganizationsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "organizations",
              currentOrganizationsDisplayValue
            )
          }
          errorMessage={errors.organizations?.errorMessage}
          hasError={errors.organizations?.hasError}
          ref={organizationsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "organizations")}
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
