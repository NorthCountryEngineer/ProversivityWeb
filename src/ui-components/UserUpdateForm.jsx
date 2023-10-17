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
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import {
  getUser,
  listOrganizations,
  listRelationships,
  listUserOrganizations,
  userOrganizationsByUserId,
} from "../graphql/queries";
import { API } from "aws-amplify";
import {
  createUserOrganizations,
  deleteUserOrganizations,
  updateRelationship,
  updateUser,
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
export default function UserUpdateForm(props) {
  const {
    id: idProp,
    user: userModelProp,
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
    relationships: [],
    organizations: [],
  };
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
    const cleanValues = userRecord
      ? {
          ...initialValues,
          ...userRecord,
          relationships: linkedRelationships,
          organizations: linkedOrganizations,
        }
      : initialValues;
    setFirstName(cleanValues.firstName);
    setEmail(cleanValues.email);
    setRelationships(cleanValues.relationships ?? []);
    setCurrentRelationshipsValue(undefined);
    setCurrentRelationshipsDisplayValue("");
    setOrganizations(cleanValues.organizations ?? []);
    setCurrentOrganizationsValue(undefined);
    setCurrentOrganizationsDisplayValue("");
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  const [linkedRelationships, setLinkedRelationships] = React.useState([]);
  const canUnlinkRelationships = true;
  const [linkedOrganizations, setLinkedOrganizations] = React.useState([]);
  const canUnlinkOrganizations = false;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await API.graphql({
              query: getUser.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getUser
        : userModelProp;
      const linkedRelationships = record?.relationships?.items ?? [];
      setLinkedRelationships(linkedRelationships);
      const linkedOrganizations = record
        ? (
            await API.graphql({
              query: userOrganizationsByUserId.replaceAll("__typename", ""),
              variables: {
                userId: record.id,
              },
            })
          ).data.userOrganizationsByUserId.items.map((t) => t.organization)
        : [];
      setLinkedOrganizations(linkedOrganizations);
      setUserRecord(record);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [
    userRecord,
    linkedRelationships,
    linkedOrganizations,
  ]);
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
          firstName: firstName ?? null,
          email,
          relationships: relationships ?? null,
          organizations: organizations ?? null,
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
          const relationshipsToLink = [];
          const relationshipsToUnLink = [];
          const relationshipsSet = new Set();
          const linkedRelationshipsSet = new Set();
          relationships.forEach((r) =>
            relationshipsSet.add(getIDValue.relationships?.(r))
          );
          linkedRelationships.forEach((r) =>
            linkedRelationshipsSet.add(getIDValue.relationships?.(r))
          );
          linkedRelationships.forEach((r) => {
            if (!relationshipsSet.has(getIDValue.relationships?.(r))) {
              relationshipsToUnLink.push(r);
            }
          });
          relationships.forEach((r) => {
            if (!linkedRelationshipsSet.has(getIDValue.relationships?.(r))) {
              relationshipsToLink.push(r);
            }
          });
          relationshipsToUnLink.forEach((original) => {
            if (!canUnlinkRelationships) {
              throw Error(
                `Relationship ${original.id} cannot be unlinked from User because userRelationshipsId is a required field.`
              );
            }
            promises.push(
              API.graphql({
                query: updateRelationship.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    userRelationshipsId: null,
                  },
                },
              })
            );
          });
          relationshipsToLink.forEach((original) => {
            promises.push(
              API.graphql({
                query: updateRelationship.replaceAll("__typename", ""),
                variables: {
                  input: {
                    id: original.id,
                    userRelationshipsId: userRecord.id,
                  },
                },
              })
            );
          });
          const organizationsToLinkMap = new Map();
          const organizationsToUnLinkMap = new Map();
          const organizationsMap = new Map();
          const linkedOrganizationsMap = new Map();
          organizations.forEach((r) => {
            const count = organizationsMap.get(getIDValue.organizations?.(r));
            const newCount = count ? count + 1 : 1;
            organizationsMap.set(getIDValue.organizations?.(r), newCount);
          });
          linkedOrganizations.forEach((r) => {
            const count = linkedOrganizationsMap.get(
              getIDValue.organizations?.(r)
            );
            const newCount = count ? count + 1 : 1;
            linkedOrganizationsMap.set(getIDValue.organizations?.(r), newCount);
          });
          linkedOrganizationsMap.forEach((count, id) => {
            const newCount = organizationsMap.get(id);
            if (newCount) {
              const diffCount = count - newCount;
              if (diffCount > 0) {
                organizationsToUnLinkMap.set(id, diffCount);
              }
            } else {
              organizationsToUnLinkMap.set(id, count);
            }
          });
          organizationsMap.forEach((count, id) => {
            const originalCount = linkedOrganizationsMap.get(id);
            if (originalCount) {
              const diffCount = count - originalCount;
              if (diffCount > 0) {
                organizationsToLinkMap.set(id, diffCount);
              }
            } else {
              organizationsToLinkMap.set(id, count);
            }
          });
          organizationsToUnLinkMap.forEach(async (count, id) => {
            const recordKeys = JSON.parse(id);
            const userOrganizationsRecords = (
              await API.graphql({
                query: listUserOrganizations.replaceAll("__typename", ""),
                variables: {
                  filter: {
                    and: [
                      { organizationId: { eq: recordKeys.id } },
                      { userId: { eq: userRecord.id } },
                    ],
                  },
                },
              })
            )?.data?.listUserOrganizations?.items;
            for (let i = 0; i < count; i++) {
              promises.push(
                API.graphql({
                  query: deleteUserOrganizations.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      id: userOrganizationsRecords[i].id,
                    },
                  },
                })
              );
            }
          });
          organizationsToLinkMap.forEach((count, id) => {
            const organizationToLink = organizationRecords.find((r) =>
              Object.entries(JSON.parse(id)).every(
                ([key, value]) => r[key] === value
              )
            );
            for (let i = count; i > 0; i--) {
              promises.push(
                API.graphql({
                  query: createUserOrganizations.replaceAll("__typename", ""),
                  variables: {
                    input: {
                      userId: userRecord.id,
                      organizationId: organizationToLink.id,
                    },
                  },
                })
              );
            }
          });
          const modelFieldsToSave = {
            firstName: modelFields.firstName ?? null,
            email: modelFields.email,
          };
          promises.push(
            API.graphql({
              query: updateUser.replaceAll("__typename", ""),
              variables: {
                input: {
                  id: userRecord.id,
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
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
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || userModelProp)}
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
              !(idProp || userModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
