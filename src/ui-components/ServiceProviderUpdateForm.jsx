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
import { ServiceProvider, User } from "../models";
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
export default function ServiceProviderUpdateForm(props) {
  const {
    id: idProp,
    serviceProvider: serviceProviderModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    user: undefined,
    companyName: "",
    address: "",
    phone: "",
    skills: [],
  };
  const [user, setUser] = React.useState(initialValues.user);
  const [companyName, setCompanyName] = React.useState(
    initialValues.companyName
  );
  const [address, setAddress] = React.useState(initialValues.address);
  const [phone, setPhone] = React.useState(initialValues.phone);
  const [skills, setSkills] = React.useState(initialValues.skills);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = serviceProviderRecord
      ? { ...initialValues, ...serviceProviderRecord, user }
      : initialValues;
    setUser(cleanValues.user);
    setCurrentUserValue(undefined);
    setCurrentUserDisplayValue("");
    setCompanyName(cleanValues.companyName);
    setAddress(cleanValues.address);
    setPhone(cleanValues.phone);
    setSkills(cleanValues.skills ?? []);
    setCurrentSkillsValue("");
    setErrors({});
  };
  const [serviceProviderRecord, setServiceProviderRecord] = React.useState(
    serviceProviderModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(ServiceProvider, idProp)
        : serviceProviderModelProp;
      setServiceProviderRecord(record);
      const userRecord = record ? await record.user : undefined;
      setUser(userRecord);
    };
    queryData();
  }, [idProp, serviceProviderModelProp]);
  React.useEffect(resetStateValues, [serviceProviderRecord, user]);
  const [currentUserDisplayValue, setCurrentUserDisplayValue] =
    React.useState("");
  const [currentUserValue, setCurrentUserValue] = React.useState(undefined);
  const userRef = React.createRef();
  const [currentSkillsValue, setCurrentSkillsValue] = React.useState("");
  const skillsRef = React.createRef();
  const getIDValue = {
    user: (r) => JSON.stringify({ id: r?.id }),
  };
  const userIdSet = new Set(
    Array.isArray(user)
      ? user.map((r) => getIDValue.user?.(r))
      : getIDValue.user?.(user)
  );
  const userRecords = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const getDisplayValue = {
    user: (r) => `${r?.email ? r?.email + " - " : ""}${r?.id}`,
  };
  const validations = {
    user: [{ type: "Required", validationMessage: "User is required." }],
    companyName: [],
    address: [],
    phone: [],
    skills: [{ type: "Required" }],
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
          user,
          companyName,
          address,
          phone,
          skills,
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
          const promises = [];
          const userToUnlink = await serviceProviderRecord.user;
          if (userToUnlink) {
            promises.push(
              DataStore.save(
                User.copyOf(userToUnlink, (updated) => {
                  updated.serviceProviderProfile = undefined;
                  updated.userServiceProviderProfileId = undefined;
                })
              )
            );
          }
          const userToLink = modelFields.user;
          if (userToLink) {
            promises.push(
              DataStore.save(
                User.copyOf(userToLink, (updated) => {
                  updated.serviceProviderProfile = serviceProviderRecord;
                })
              )
            );
            const serviceProviderToUnlink =
              await userToLink.serviceProviderProfile;
            if (serviceProviderToUnlink) {
              if (
                JSON.stringify(serviceProviderToUnlink) !==
                JSON.stringify(serviceProviderRecord)
              ) {
                throw Error(
                  `User ${userToLink.id} cannot be linked to ServiceProvider because it is already linked to another ServiceProvider.`
                );
              }
            }
          }
          promises.push(
            DataStore.save(
              ServiceProvider.copyOf(serviceProviderRecord, (updated) => {
                Object.assign(updated, modelFields);
                if (!modelFields.user) {
                  updated.userID = undefined;
                }
              })
            )
          );
          await Promise.all(promises);
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ServiceProviderUpdateForm")}
      {...rest}
    >
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              user: value,
              companyName,
              address,
              phone,
              skills,
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
          isRequired={true}
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
        label="Company name"
        isRequired={false}
        isReadOnly={false}
        value={companyName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              companyName: value,
              address,
              phone,
              skills,
            };
            const result = onChange(modelFields);
            value = result?.companyName ?? value;
          }
          if (errors.companyName?.hasError) {
            runValidationTasks("companyName", value);
          }
          setCompanyName(value);
        }}
        onBlur={() => runValidationTasks("companyName", companyName)}
        errorMessage={errors.companyName?.errorMessage}
        hasError={errors.companyName?.hasError}
        {...getOverrideProps(overrides, "companyName")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              companyName,
              address: value,
              phone,
              skills,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        value={phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              companyName,
              address,
              phone: value,
              skills,
            };
            const result = onChange(modelFields);
            value = result?.phone ?? value;
          }
          if (errors.phone?.hasError) {
            runValidationTasks("phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("phone", phone)}
        errorMessage={errors.phone?.errorMessage}
        hasError={errors.phone?.hasError}
        {...getOverrideProps(overrides, "phone")}
      ></TextField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              user,
              companyName,
              address,
              phone,
              skills: values,
            };
            const result = onChange(modelFields);
            values = result?.skills ?? values;
          }
          setSkills(values);
          setCurrentSkillsValue("");
        }}
        currentFieldValue={currentSkillsValue}
        label={"Skills"}
        items={skills}
        hasError={errors?.skills?.hasError}
        errorMessage={errors?.skills?.errorMessage}
        setFieldValue={setCurrentSkillsValue}
        inputFieldRef={skillsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Skills"
          isRequired={true}
          isReadOnly={false}
          value={currentSkillsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.skills?.hasError) {
              runValidationTasks("skills", value);
            }
            setCurrentSkillsValue(value);
          }}
          onBlur={() => runValidationTasks("skills", currentSkillsValue)}
          errorMessage={errors.skills?.errorMessage}
          hasError={errors.skills?.hasError}
          ref={skillsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "skills")}
        ></TextField>
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
          isDisabled={!(idProp || serviceProviderModelProp)}
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
              !(idProp || serviceProviderModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
