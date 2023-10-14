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
import { UserOrganization, User, Organization } from "../models";
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
export default function UserOrganizationUpdateForm(props) {
  const {
    id: idProp,
    userOrganization: userOrganizationModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    userId: "",
    user: undefined,
    organizationId: "",
    organization: undefined,
    role: "",
    userOrganizationsId: undefined,
    organizationUsersId: undefined,
  };
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [user, setUser] = React.useState(initialValues.user);
  const [organizationId, setOrganizationId] = React.useState(
    initialValues.organizationId
  );
  const [organization, setOrganization] = React.useState(
    initialValues.organization
  );
  const [role, setRole] = React.useState(initialValues.role);
  const [userOrganizationsId, setUserOrganizationsId] = React.useState(
    initialValues.userOrganizationsId
  );
  const [organizationUsersId, setOrganizationUsersId] = React.useState(
    initialValues.organizationUsersId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userOrganizationRecord
      ? {
          ...initialValues,
          ...userOrganizationRecord,
          user,
          organization,
          userOrganizationsId,
          organizationUsersId,
        }
      : initialValues;
    setUserId(cleanValues.userId);
    setUser(cleanValues.user);
    setCurrentUserValue(undefined);
    setCurrentUserDisplayValue("");
    setOrganizationId(cleanValues.organizationId);
    setOrganization(cleanValues.organization);
    setCurrentOrganizationValue(undefined);
    setCurrentOrganizationDisplayValue("");
    setRole(cleanValues.role);
    setUserOrganizationsId(cleanValues.userOrganizationsId);
    setCurrentUserOrganizationsIdValue(undefined);
    setCurrentUserOrganizationsIdDisplayValue("");
    setOrganizationUsersId(cleanValues.organizationUsersId);
    setCurrentOrganizationUsersIdValue(undefined);
    setCurrentOrganizationUsersIdDisplayValue("");
    setErrors({});
  };
  const [userOrganizationRecord, setUserOrganizationRecord] = React.useState(
    userOrganizationModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UserOrganization, idProp)
        : userOrganizationModelProp;
      setUserOrganizationRecord(record);
      const userRecord = record ? await record.user : undefined;
      setUser(userRecord);
      const organizationRecord = record ? await record.organization : undefined;
      setOrganization(organizationRecord);
      const userOrganizationsIdRecord = record
        ? await record.userOrganizationsId
        : undefined;
      setUserOrganizationsId(userOrganizationsIdRecord);
      const organizationUsersIdRecord = record
        ? await record.organizationUsersId
        : undefined;
      setOrganizationUsersId(organizationUsersIdRecord);
    };
    queryData();
  }, [idProp, userOrganizationModelProp]);
  React.useEffect(resetStateValues, [
    userOrganizationRecord,
    user,
    organization,
    userOrganizationsId,
    organizationUsersId,
  ]);
  const [currentUserDisplayValue, setCurrentUserDisplayValue] =
    React.useState("");
  const [currentUserValue, setCurrentUserValue] = React.useState(undefined);
  const userRef = React.createRef();
  const [currentOrganizationDisplayValue, setCurrentOrganizationDisplayValue] =
    React.useState("");
  const [currentOrganizationValue, setCurrentOrganizationValue] =
    React.useState(undefined);
  const organizationRef = React.createRef();
  const [
    currentUserOrganizationsIdDisplayValue,
    setCurrentUserOrganizationsIdDisplayValue,
  ] = React.useState("");
  const [currentUserOrganizationsIdValue, setCurrentUserOrganizationsIdValue] =
    React.useState(undefined);
  const userOrganizationsIdRef = React.createRef();
  const [
    currentOrganizationUsersIdDisplayValue,
    setCurrentOrganizationUsersIdDisplayValue,
  ] = React.useState("");
  const [currentOrganizationUsersIdValue, setCurrentOrganizationUsersIdValue] =
    React.useState(undefined);
  const organizationUsersIdRef = React.createRef();
  const getIDValue = {
    user: (r) => JSON.stringify({ id: r?.id }),
    organization: (r) => JSON.stringify({ id: r?.id }),
  };
  const userIdSet = new Set(
    Array.isArray(user)
      ? user.map((r) => getIDValue.user?.(r))
      : getIDValue.user?.(user)
  );
  const organizationIdSet = new Set(
    Array.isArray(organization)
      ? organization.map((r) => getIDValue.organization?.(r))
      : getIDValue.organization?.(organization)
  );
  const userRecords = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const organizationRecords = useDataStoreBinding({
    type: "collection",
    model: Organization,
  }).items;
  const getDisplayValue = {
    user: (r) => `${r?.firstName ? r?.firstName + " - " : ""}${r?.id}`,
    organization: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    userOrganizationsId: (r) =>
      `${r?.firstName ? r?.firstName + " - " : ""}${r?.id}`,
    organizationUsersId: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    userId: [{ type: "Required" }],
    user: [],
    organizationId: [{ type: "Required" }],
    organization: [],
    role: [],
    userOrganizationsId: [],
    organizationUsersId: [],
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
          userId,
          user,
          organizationId,
          organization,
          role,
          userOrganizationsId,
          organizationUsersId,
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
            UserOrganization.copyOf(userOrganizationRecord, (updated) => {
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
      {...getOverrideProps(overrides, "UserOrganizationUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId: value,
              user,
              organizationId,
              organization,
              role,
              userOrganizationsId,
              organizationUsersId,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              userId,
              user: value,
              organizationId,
              organization,
              role,
              userOrganizationsId,
              organizationUsersId,
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
        label="Organization id"
        isRequired={true}
        isReadOnly={false}
        value={organizationId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              user,
              organizationId: value,
              organization,
              role,
              userOrganizationsId,
              organizationUsersId,
            };
            const result = onChange(modelFields);
            value = result?.organizationId ?? value;
          }
          if (errors.organizationId?.hasError) {
            runValidationTasks("organizationId", value);
          }
          setOrganizationId(value);
        }}
        onBlur={() => runValidationTasks("organizationId", organizationId)}
        errorMessage={errors.organizationId?.errorMessage}
        hasError={errors.organizationId?.hasError}
        {...getOverrideProps(overrides, "organizationId")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              userId,
              user,
              organizationId,
              organization: value,
              role,
              userOrganizationsId,
              organizationUsersId,
            };
            const result = onChange(modelFields);
            value = result?.organization ?? value;
          }
          setOrganization(value);
          setCurrentOrganizationValue(undefined);
          setCurrentOrganizationDisplayValue("");
        }}
        currentFieldValue={currentOrganizationValue}
        label={"Organization"}
        items={organization ? [organization] : []}
        hasError={errors?.organization?.hasError}
        errorMessage={errors?.organization?.errorMessage}
        getBadgeText={getDisplayValue.organization}
        setFieldValue={(model) => {
          setCurrentOrganizationDisplayValue(
            getDisplayValue.organization(model)
          );
          setCurrentOrganizationValue(model);
        }}
        inputFieldRef={organizationRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Organization"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Organization"
          value={currentOrganizationDisplayValue}
          options={organizationRecords
            .filter((r) => !organizationIdSet.has(getIDValue.organization?.(r)))
            .map((r) => ({
              id: getIDValue.organization?.(r),
              label: getDisplayValue.organization?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentOrganizationValue(
              organizationRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentOrganizationDisplayValue(label);
            runValidationTasks("organization", label);
          }}
          onClear={() => {
            setCurrentOrganizationDisplayValue("");
          }}
          defaultValue={organization}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.organization?.hasError) {
              runValidationTasks("organization", value);
            }
            setCurrentOrganizationDisplayValue(value);
            setCurrentOrganizationValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("organization", currentOrganizationDisplayValue)
          }
          errorMessage={errors.organization?.errorMessage}
          hasError={errors.organization?.hasError}
          ref={organizationRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "organization")}
        ></Autocomplete>
      </ArrayField>
      <SelectField
        label="Role"
        placeholder="Please select an option"
        isDisabled={false}
        value={role}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              userId,
              user,
              organizationId,
              organization,
              role: value,
              userOrganizationsId,
              organizationUsersId,
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
          children="Admin"
          value="ADMIN"
          {...getOverrideProps(overrides, "roleoption0")}
        ></option>
        <option
          children="Member"
          value="MEMBER"
          {...getOverrideProps(overrides, "roleoption1")}
        ></option>
      </SelectField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              userId,
              user,
              organizationId,
              organization,
              role,
              userOrganizationsId: value,
              organizationUsersId,
            };
            const result = onChange(modelFields);
            value = result?.userOrganizationsId ?? value;
          }
          setUserOrganizationsId(value);
          setCurrentUserOrganizationsIdValue(undefined);
        }}
        currentFieldValue={currentUserOrganizationsIdValue}
        label={"User organizations id"}
        items={userOrganizationsId ? [userOrganizationsId] : []}
        hasError={errors?.userOrganizationsId?.hasError}
        errorMessage={errors?.userOrganizationsId?.errorMessage}
        getBadgeText={(value) =>
          getDisplayValue.userOrganizationsId(
            userRecords.find((r) => r.id === value)
          )
        }
        setFieldValue={(value) => {
          setCurrentUserOrganizationsIdDisplayValue(
            getDisplayValue.userOrganizationsId(
              userRecords.find((r) => r.id === value)
            )
          );
          setCurrentUserOrganizationsIdValue(value);
        }}
        inputFieldRef={userOrganizationsIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="User organizations id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentUserOrganizationsIdDisplayValue}
          options={userRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.userOrganizationsId?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentUserOrganizationsIdValue(id);
            setCurrentUserOrganizationsIdDisplayValue(label);
            runValidationTasks("userOrganizationsId", label);
          }}
          onClear={() => {
            setCurrentUserOrganizationsIdDisplayValue("");
          }}
          defaultValue={userOrganizationsId}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.userOrganizationsId?.hasError) {
              runValidationTasks("userOrganizationsId", value);
            }
            setCurrentUserOrganizationsIdDisplayValue(value);
            setCurrentUserOrganizationsIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "userOrganizationsId",
              currentUserOrganizationsIdValue
            )
          }
          errorMessage={errors.userOrganizationsId?.errorMessage}
          hasError={errors.userOrganizationsId?.hasError}
          ref={userOrganizationsIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "userOrganizationsId")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              userId,
              user,
              organizationId,
              organization,
              role,
              userOrganizationsId,
              organizationUsersId: value,
            };
            const result = onChange(modelFields);
            value = result?.organizationUsersId ?? value;
          }
          setOrganizationUsersId(value);
          setCurrentOrganizationUsersIdValue(undefined);
        }}
        currentFieldValue={currentOrganizationUsersIdValue}
        label={"Organization users id"}
        items={organizationUsersId ? [organizationUsersId] : []}
        hasError={errors?.organizationUsersId?.hasError}
        errorMessage={errors?.organizationUsersId?.errorMessage}
        getBadgeText={(value) =>
          getDisplayValue.organizationUsersId(
            organizationRecords.find((r) => r.id === value)
          )
        }
        setFieldValue={(value) => {
          setCurrentOrganizationUsersIdDisplayValue(
            getDisplayValue.organizationUsersId(
              organizationRecords.find((r) => r.id === value)
            )
          );
          setCurrentOrganizationUsersIdValue(value);
        }}
        inputFieldRef={organizationUsersIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Organization users id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Organization"
          value={currentOrganizationUsersIdDisplayValue}
          options={organizationRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.organizationUsersId?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentOrganizationUsersIdValue(id);
            setCurrentOrganizationUsersIdDisplayValue(label);
            runValidationTasks("organizationUsersId", label);
          }}
          onClear={() => {
            setCurrentOrganizationUsersIdDisplayValue("");
          }}
          defaultValue={organizationUsersId}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.organizationUsersId?.hasError) {
              runValidationTasks("organizationUsersId", value);
            }
            setCurrentOrganizationUsersIdDisplayValue(value);
            setCurrentOrganizationUsersIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "organizationUsersId",
              currentOrganizationUsersIdValue
            )
          }
          errorMessage={errors.organizationUsersId?.errorMessage}
          hasError={errors.organizationUsersId?.hasError}
          ref={organizationUsersIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "organizationUsersId")}
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
          isDisabled={!(idProp || userOrganizationModelProp)}
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
              !(idProp || userOrganizationModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
