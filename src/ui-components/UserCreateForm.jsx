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
import { listOrganizations, listRelationships } from "../graphql/queries";
import {
  createUser,
  createUserOrganizations,
  updateRelationship,
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
    cognitoID: "",
    firstName: "",
    email: "",
    relationships: [],
    organizations: [],
  };
  const [cognitoID, setCognitoID] = React.useState(initialValues.cognitoID);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [email, setEmail] = React.useState(initialValues.email);
  const [relationships, setRelationships] = React.useState(
    initialValues.relationships
  );
  const [relationshipsLoading, setRelationshipsLoading] = React.useState(false);
  const [relationshipsRecords, setRelationshipsRecords] = React.useState([]);
  const [organizations, setOrganizations] = React.useState(
    initialValues.organizations
  );
  const [organizationsLoading, setOrganizationsLoading] = React.useState(false);
  const [organizationsRecords, setOrganizationsRecords] = React.useState([]);
  const autocompleteLength = 10;
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCognitoID(initialValues.cognitoID);
    setFirstName(initialValues.firstName);
    setEmail(initialValues.email);
    setRelationships(initialValues.relationships);
    setCurrentRelationshipsValue(undefined);
    setCurrentRelationshipsDisplayValue("");
    setOrganizations(initialValues.organizations);
    setCurrentOrganizationsValue(undefined);
    setCurrentOrganizationsDisplayValue("");
    setErrors({});
  };
  const [
    currentRelationshipsDisplayValue,
    setCurrentRelationshipsDisplayValue,
  ] = React.useState("");
  const [currentRelationshipsValue, setCurrentRelationshipsValue] =
    React.useState(undefined);
  const relationshipsRef = React.createRef();
  const [
    currentOrganizationsDisplayValue,
    setCurrentOrganizationsDisplayValue,
  ] = React.useState("");
  const [currentOrganizationsValue, setCurrentOrganizationsValue] =
    React.useState(undefined);
  const organizationsRef = React.createRef();
  const getIDValue = {
    relationships: (r) => JSON.stringify({ id: r?.id }),
    organizations: (r) => JSON.stringify({ id: r?.id }),
  };
  const relationshipsIdSet = new Set(
    Array.isArray(relationships)
      ? relationships.map((r) => getIDValue.relationships?.(r))
      : getIDValue.relationships?.(relationships)
  );
  const organizationsIdSet = new Set(
    Array.isArray(organizations)
      ? organizations.map((r) => getIDValue.organizations?.(r))
      : getIDValue.organizations?.(organizations)
  );
  const getDisplayValue = {
    relationships: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
    organizations: (r) => `${r?.name ? r?.name + " - " : ""}${r?.id}`,
  };
  const validations = {
    cognitoID: [{ type: "Required" }],
    firstName: [],
    email: [{ type: "Required" }],
    relationships: [],
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
  const fetchRelationshipsRecords = async (value) => {
    setRelationshipsLoading(true);
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
      var loaded = result.filter(
        (item) => !relationshipsIdSet.has(getIDValue.relationships?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setRelationshipsRecords(newOptions.slice(0, autocompleteLength));
    setRelationshipsLoading(false);
  };
  const fetchOrganizationsRecords = async (value) => {
    setOrganizationsLoading(true);
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
          query: listOrganizations.replaceAll("__typename", ""),
          variables,
        })
      )?.data?.listOrganizations?.items;
      var loaded = result.filter(
        (item) => !organizationsIdSet.has(getIDValue.organizations?.(item))
      );
      newOptions.push(...loaded);
      newNext = result.nextToken;
    }
    setOrganizationsRecords(newOptions.slice(0, autocompleteLength));
    setOrganizationsLoading(false);
  };
  React.useEffect(() => {
    fetchRelationshipsRecords("");
    fetchOrganizationsRecords("");
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
          cognitoID,
          firstName,
          email,
          relationships,
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
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          const modelFieldsToSave = {
            cognitoID: modelFields.cognitoID,
            firstName: modelFields.firstName,
            email: modelFields.email,
          };
          const user = (
            await API.graphql({
              query: createUser.replaceAll("__typename", ""),
              variables: {
                input: {
                  ...modelFieldsToSave,
                },
              },
            })
          )?.data?.createUser;
          const promises = [];
          promises.push(
            ...relationships.reduce((promises, original) => {
              promises.push(
                API.graphql({
                  query: updateRelationship.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: original.id,
                      userRelationshipsId: user.id,
                    },
                  },
                })
              );
              return promises;
            }, [])
          );
          promises.push(
            ...organizations.reduce((promises, organization) => {
              promises.push(
                API.graphql({
                  query: createUserOrganizations.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      userId: user.id,
                      organizationId: organization.id,
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
      {...getOverrideProps(overrides, "UserCreateForm")}
      {...rest}
    >
      <TextField
        label="Cognito id"
        isRequired={true}
        isReadOnly={false}
        value={cognitoID}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID: value,
              firstName,
              email,
              relationships,
              organizations,
            };
            const result = onChange(modelFields);
            value = result?.cognitoID ?? value;
          }
          if (errors.cognitoID?.hasError) {
            runValidationTasks("cognitoID", value);
          }
          setCognitoID(value);
        }}
        onBlur={() => runValidationTasks("cognitoID", cognitoID)}
        errorMessage={errors.cognitoID?.errorMessage}
        hasError={errors.cognitoID?.hasError}
        {...getOverrideProps(overrides, "cognitoID")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoID,
              firstName: value,
              email,
              relationships,
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
              cognitoID,
              firstName,
              email: value,
              relationships,
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
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cognitoID,
              firstName,
              email,
              relationships: values,
              organizations,
            };
            const result = onChange(modelFields);
            values = result?.relationships ?? values;
          }
          setRelationships(values);
          setCurrentRelationshipsValue(undefined);
          setCurrentRelationshipsDisplayValue("");
        }}
        currentFieldValue={currentRelationshipsValue}
        label={"Relationships"}
        items={relationships}
        hasError={errors?.relationships?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks("relationships", currentRelationshipsValue)
        }
        errorMessage={errors?.relationships?.errorMessage}
        getBadgeText={getDisplayValue.relationships}
        setFieldValue={(model) => {
          setCurrentRelationshipsDisplayValue(
            model ? getDisplayValue.relationships(model) : ""
          );
          setCurrentRelationshipsValue(model);
        }}
        inputFieldRef={relationshipsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Relationships"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Relationship"
          value={currentRelationshipsDisplayValue}
          options={relationshipsRecords
            .filter(
              (r) => !relationshipsIdSet.has(getIDValue.relationships?.(r))
            )
            .map((r) => ({
              id: getIDValue.relationships?.(r),
              label: getDisplayValue.relationships?.(r),
            }))}
          isLoading={relationshipsLoading}
          onSelect={({ id, label }) => {
            setCurrentRelationshipsValue(
              relationshipsRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentRelationshipsDisplayValue(label);
            runValidationTasks("relationships", label);
          }}
          onClear={() => {
            setCurrentRelationshipsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            fetchRelationshipsRecords(value);
            if (errors.relationships?.hasError) {
              runValidationTasks("relationships", value);
            }
            setCurrentRelationshipsDisplayValue(value);
            setCurrentRelationshipsValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "relationships",
              currentRelationshipsDisplayValue
            )
          }
          errorMessage={errors.relationships?.errorMessage}
          hasError={errors.relationships?.hasError}
          ref={relationshipsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "relationships")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              cognitoID,
              firstName,
              email,
              relationships,
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
        runValidationTasks={async () =>
          await runValidationTasks("organizations", currentOrganizationsValue)
        }
        errorMessage={errors?.organizations?.errorMessage}
        getBadgeText={getDisplayValue.organizations}
        setFieldValue={(model) => {
          setCurrentOrganizationsDisplayValue(
            model ? getDisplayValue.organizations(model) : ""
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
          placeholder="Search Organization"
          value={currentOrganizationsDisplayValue}
          options={organizationsRecords.map((r) => ({
            id: getIDValue.organizations?.(r),
            label: getDisplayValue.organizations?.(r),
          }))}
          isLoading={organizationsLoading}
          onSelect={({ id, label }) => {
            setCurrentOrganizationsValue(
              organizationsRecords.find((r) =>
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
            fetchOrganizationsRecords(value);
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
