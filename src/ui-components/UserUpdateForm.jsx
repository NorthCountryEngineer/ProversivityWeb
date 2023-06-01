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
import { User, Customer, ServiceProvider, BlogPage } from "../models";
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
    email: "",
    firstName: "",
    lastName: "",
    customerProfile: undefined,
    serviceProviderProfile: undefined,
    blogPage: undefined,
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [customerProfile, setCustomerProfile] = React.useState(
    initialValues.customerProfile
  );
  const [serviceProviderProfile, setServiceProviderProfile] = React.useState(
    initialValues.serviceProviderProfile
  );
  const [blogPage, setBlogPage] = React.useState(initialValues.blogPage);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = userRecord
      ? {
          ...initialValues,
          ...userRecord,
          customerProfile,
          serviceProviderProfile,
          blogPage,
        }
      : initialValues;
    setEmail(cleanValues.email);
    setFirstName(cleanValues.firstName);
    setLastName(cleanValues.lastName);
    setCustomerProfile(cleanValues.customerProfile);
    setCurrentCustomerProfileValue(undefined);
    setCurrentCustomerProfileDisplayValue("");
    setServiceProviderProfile(cleanValues.serviceProviderProfile);
    setCurrentServiceProviderProfileValue(undefined);
    setCurrentServiceProviderProfileDisplayValue("");
    setBlogPage(cleanValues.blogPage);
    setCurrentBlogPageValue(undefined);
    setCurrentBlogPageDisplayValue("");
    setErrors({});
  };
  const [userRecord, setUserRecord] = React.useState(userModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(User, idProp)
        : userModelProp;
      setUserRecord(record);
      const customerProfileRecord = record
        ? await record.customerProfile
        : undefined;
      setCustomerProfile(customerProfileRecord);
      const serviceProviderProfileRecord = record
        ? await record.serviceProviderProfile
        : undefined;
      setServiceProviderProfile(serviceProviderProfileRecord);
      const blogPageRecord = record ? await record.blogPage : undefined;
      setBlogPage(blogPageRecord);
    };
    queryData();
  }, [idProp, userModelProp]);
  React.useEffect(resetStateValues, [
    userRecord,
    customerProfile,
    serviceProviderProfile,
    blogPage,
  ]);
  const [
    currentCustomerProfileDisplayValue,
    setCurrentCustomerProfileDisplayValue,
  ] = React.useState("");
  const [currentCustomerProfileValue, setCurrentCustomerProfileValue] =
    React.useState(undefined);
  const customerProfileRef = React.createRef();
  const [
    currentServiceProviderProfileDisplayValue,
    setCurrentServiceProviderProfileDisplayValue,
  ] = React.useState("");
  const [
    currentServiceProviderProfileValue,
    setCurrentServiceProviderProfileValue,
  ] = React.useState(undefined);
  const serviceProviderProfileRef = React.createRef();
  const [currentBlogPageDisplayValue, setCurrentBlogPageDisplayValue] =
    React.useState("");
  const [currentBlogPageValue, setCurrentBlogPageValue] =
    React.useState(undefined);
  const blogPageRef = React.createRef();
  const getIDValue = {
    customerProfile: (r) => JSON.stringify({ id: r?.id }),
    serviceProviderProfile: (r) => JSON.stringify({ id: r?.id }),
    blogPage: (r) => JSON.stringify({ id: r?.id }),
  };
  const customerProfileIdSet = new Set(
    Array.isArray(customerProfile)
      ? customerProfile.map((r) => getIDValue.customerProfile?.(r))
      : getIDValue.customerProfile?.(customerProfile)
  );
  const serviceProviderProfileIdSet = new Set(
    Array.isArray(serviceProviderProfile)
      ? serviceProviderProfile.map((r) =>
          getIDValue.serviceProviderProfile?.(r)
        )
      : getIDValue.serviceProviderProfile?.(serviceProviderProfile)
  );
  const blogPageIdSet = new Set(
    Array.isArray(blogPage)
      ? blogPage.map((r) => getIDValue.blogPage?.(r))
      : getIDValue.blogPage?.(blogPage)
  );
  const customerRecords = useDataStoreBinding({
    type: "collection",
    model: Customer,
  }).items;
  const serviceProviderRecords = useDataStoreBinding({
    type: "collection",
    model: ServiceProvider,
  }).items;
  const blogPageRecords = useDataStoreBinding({
    type: "collection",
    model: BlogPage,
  }).items;
  const getDisplayValue = {
    customerProfile: (r) => `${r?.address ? r?.address + " - " : ""}${r?.id}`,
    serviceProviderProfile: (r) =>
      `${r?.companyName ? r?.companyName + " - " : ""}${r?.id}`,
    blogPage: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
  };
  const validations = {
    email: [{ type: "Required" }],
    firstName: [],
    lastName: [],
    customerProfile: [],
    serviceProviderProfile: [],
    blogPage: [],
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
          email,
          firstName,
          lastName,
          customerProfile,
          serviceProviderProfile,
          blogPage,
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
          const customerToUnlink = await userRecord.customerProfile;
          if (customerToUnlink) {
            if (
              JSON.stringify(customerToUnlink) !==
              JSON.stringify(modelFields.customerProfile)
            ) {
              throw Error(
                `Customer ${customerToUnlink.id} cannot be unlinked because Customer requires User.`
              );
            }
          }
          const customerToLink = modelFields.customerProfile;
          if (customerToLink) {
            promises.push(
              DataStore.save(
                Customer.copyOf(customerToLink, (updated) => {
                  updated.user = userRecord;
                })
              )
            );
            const userToUnlink = await customerToLink.user;
            if (userToUnlink) {
              promises.push(
                DataStore.save(
                  User.copyOf(userToUnlink, (updated) => {
                    updated.customerProfile = undefined;
                    updated.userCustomerProfileId = undefined;
                  })
                )
              );
            }
          }
          const serviceProviderToUnlink =
            await userRecord.serviceProviderProfile;
          if (serviceProviderToUnlink) {
            if (
              JSON.stringify(serviceProviderToUnlink) !==
              JSON.stringify(modelFields.serviceProviderProfile)
            ) {
              throw Error(
                `ServiceProvider ${serviceProviderToUnlink.id} cannot be unlinked because ServiceProvider requires User.`
              );
            }
          }
          const serviceProviderToLink = modelFields.serviceProviderProfile;
          if (serviceProviderToLink) {
            promises.push(
              DataStore.save(
                ServiceProvider.copyOf(serviceProviderToLink, (updated) => {
                  updated.user = userRecord;
                })
              )
            );
            const userToUnlink = await serviceProviderToLink.user;
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
          }
          const blogPageToUnlink = await userRecord.blogPage;
          if (blogPageToUnlink) {
            promises.push(
              DataStore.save(
                BlogPage.copyOf(blogPageToUnlink, (updated) => {
                  updated.author = undefined;
                  updated.authorId = undefined;
                })
              )
            );
          }
          const blogPageToLink = modelFields.blogPage;
          if (blogPageToLink) {
            promises.push(
              DataStore.save(
                BlogPage.copyOf(blogPageToLink, (updated) => {
                  updated.author = userRecord;
                })
              )
            );
            const userToUnlink = await blogPageToLink.author;
            if (userToUnlink) {
              promises.push(
                DataStore.save(
                  User.copyOf(userToUnlink, (updated) => {
                    updated.blogPage = undefined;
                    updated.userBlogPageId = undefined;
                  })
                )
              );
            }
          }
          promises.push(
            DataStore.save(
              User.copyOf(userRecord, (updated) => {
                Object.assign(updated, modelFields);
                if (!modelFields.customerProfile) {
                  updated.userCustomerProfileId = undefined;
                }
                if (!modelFields.serviceProviderProfile) {
                  updated.userServiceProviderProfileId = undefined;
                }
                if (!modelFields.blogPage) {
                  updated.userBlogPageId = undefined;
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
      {...getOverrideProps(overrides, "UserUpdateForm")}
      {...rest}
    >
      <TextField
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              firstName,
              lastName,
              customerProfile,
              serviceProviderProfile,
              blogPage,
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
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        value={firstName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              firstName: value,
              lastName,
              customerProfile,
              serviceProviderProfile,
              blogPage,
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
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        value={lastName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              firstName,
              lastName: value,
              customerProfile,
              serviceProviderProfile,
              blogPage,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              email,
              firstName,
              lastName,
              customerProfile: value,
              serviceProviderProfile,
              blogPage,
            };
            const result = onChange(modelFields);
            value = result?.customerProfile ?? value;
          }
          setCustomerProfile(value);
          setCurrentCustomerProfileValue(undefined);
          setCurrentCustomerProfileDisplayValue("");
        }}
        currentFieldValue={currentCustomerProfileValue}
        label={"Customer profile"}
        items={customerProfile ? [customerProfile] : []}
        hasError={errors?.customerProfile?.hasError}
        errorMessage={errors?.customerProfile?.errorMessage}
        getBadgeText={getDisplayValue.customerProfile}
        setFieldValue={(model) => {
          setCurrentCustomerProfileDisplayValue(
            getDisplayValue.customerProfile(model)
          );
          setCurrentCustomerProfileValue(model);
        }}
        inputFieldRef={customerProfileRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Customer profile"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Customer"
          value={currentCustomerProfileDisplayValue}
          options={customerRecords
            .filter(
              (r) => !customerProfileIdSet.has(getIDValue.customerProfile?.(r))
            )
            .map((r) => ({
              id: getIDValue.customerProfile?.(r),
              label: getDisplayValue.customerProfile?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentCustomerProfileValue(
              customerRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentCustomerProfileDisplayValue(label);
            runValidationTasks("customerProfile", label);
          }}
          onClear={() => {
            setCurrentCustomerProfileDisplayValue("");
          }}
          defaultValue={customerProfile}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.customerProfile?.hasError) {
              runValidationTasks("customerProfile", value);
            }
            setCurrentCustomerProfileDisplayValue(value);
            setCurrentCustomerProfileValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "customerProfile",
              currentCustomerProfileDisplayValue
            )
          }
          errorMessage={errors.customerProfile?.errorMessage}
          hasError={errors.customerProfile?.hasError}
          ref={customerProfileRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "customerProfile")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              email,
              firstName,
              lastName,
              customerProfile,
              serviceProviderProfile: value,
              blogPage,
            };
            const result = onChange(modelFields);
            value = result?.serviceProviderProfile ?? value;
          }
          setServiceProviderProfile(value);
          setCurrentServiceProviderProfileValue(undefined);
          setCurrentServiceProviderProfileDisplayValue("");
        }}
        currentFieldValue={currentServiceProviderProfileValue}
        label={"Service provider profile"}
        items={serviceProviderProfile ? [serviceProviderProfile] : []}
        hasError={errors?.serviceProviderProfile?.hasError}
        errorMessage={errors?.serviceProviderProfile?.errorMessage}
        getBadgeText={getDisplayValue.serviceProviderProfile}
        setFieldValue={(model) => {
          setCurrentServiceProviderProfileDisplayValue(
            getDisplayValue.serviceProviderProfile(model)
          );
          setCurrentServiceProviderProfileValue(model);
        }}
        inputFieldRef={serviceProviderProfileRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Service provider profile"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search ServiceProvider"
          value={currentServiceProviderProfileDisplayValue}
          options={serviceProviderRecords
            .filter(
              (r) =>
                !serviceProviderProfileIdSet.has(
                  getIDValue.serviceProviderProfile?.(r)
                )
            )
            .map((r) => ({
              id: getIDValue.serviceProviderProfile?.(r),
              label: getDisplayValue.serviceProviderProfile?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentServiceProviderProfileValue(
              serviceProviderRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentServiceProviderProfileDisplayValue(label);
            runValidationTasks("serviceProviderProfile", label);
          }}
          onClear={() => {
            setCurrentServiceProviderProfileDisplayValue("");
          }}
          defaultValue={serviceProviderProfile}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.serviceProviderProfile?.hasError) {
              runValidationTasks("serviceProviderProfile", value);
            }
            setCurrentServiceProviderProfileDisplayValue(value);
            setCurrentServiceProviderProfileValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks(
              "serviceProviderProfile",
              currentServiceProviderProfileDisplayValue
            )
          }
          errorMessage={errors.serviceProviderProfile?.errorMessage}
          hasError={errors.serviceProviderProfile?.hasError}
          ref={serviceProviderProfileRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "serviceProviderProfile")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              email,
              firstName,
              lastName,
              customerProfile,
              serviceProviderProfile,
              blogPage: value,
            };
            const result = onChange(modelFields);
            value = result?.blogPage ?? value;
          }
          setBlogPage(value);
          setCurrentBlogPageValue(undefined);
          setCurrentBlogPageDisplayValue("");
        }}
        currentFieldValue={currentBlogPageValue}
        label={"Blog page"}
        items={blogPage ? [blogPage] : []}
        hasError={errors?.blogPage?.hasError}
        errorMessage={errors?.blogPage?.errorMessage}
        getBadgeText={getDisplayValue.blogPage}
        setFieldValue={(model) => {
          setCurrentBlogPageDisplayValue(getDisplayValue.blogPage(model));
          setCurrentBlogPageValue(model);
        }}
        inputFieldRef={blogPageRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Blog page"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BlogPage"
          value={currentBlogPageDisplayValue}
          options={blogPageRecords
            .filter((r) => !blogPageIdSet.has(getIDValue.blogPage?.(r)))
            .map((r) => ({
              id: getIDValue.blogPage?.(r),
              label: getDisplayValue.blogPage?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBlogPageValue(
              blogPageRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentBlogPageDisplayValue(label);
            runValidationTasks("blogPage", label);
          }}
          onClear={() => {
            setCurrentBlogPageDisplayValue("");
          }}
          defaultValue={blogPage}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.blogPage?.hasError) {
              runValidationTasks("blogPage", value);
            }
            setCurrentBlogPageDisplayValue(value);
            setCurrentBlogPageValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("blogPage", currentBlogPageDisplayValue)
          }
          errorMessage={errors.blogPage?.errorMessage}
          hasError={errors.blogPage?.hasError}
          ref={blogPageRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "blogPage")}
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
