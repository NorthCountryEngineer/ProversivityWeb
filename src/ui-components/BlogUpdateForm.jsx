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
import { Blog, BlogPage } from "../models";
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
export default function BlogUpdateForm(props) {
  const {
    id: idProp,
    blog: blogModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    title: "",
    content: "",
    blogPage: undefined,
    blogPagePostsId: undefined,
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [content, setContent] = React.useState(initialValues.content);
  const [blogPage, setBlogPage] = React.useState(initialValues.blogPage);
  const [blogPagePostsId, setBlogPagePostsId] = React.useState(
    initialValues.blogPagePostsId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = blogRecord
      ? { ...initialValues, ...blogRecord, blogPage, blogPagePostsId }
      : initialValues;
    setTitle(cleanValues.title);
    setContent(cleanValues.content);
    setBlogPage(cleanValues.blogPage);
    setCurrentBlogPageValue(undefined);
    setCurrentBlogPageDisplayValue("");
    setBlogPagePostsId(cleanValues.blogPagePostsId);
    setCurrentBlogPagePostsIdValue(undefined);
    setCurrentBlogPagePostsIdDisplayValue("");
    setErrors({});
  };
  const [blogRecord, setBlogRecord] = React.useState(blogModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Blog, idProp)
        : blogModelProp;
      setBlogRecord(record);
      const blogPageRecord = record ? await record.blogPage : undefined;
      setBlogPage(blogPageRecord);
      const blogPagePostsIdRecord = record
        ? await record.blogPagePostsId
        : undefined;
      setBlogPagePostsId(blogPagePostsIdRecord);
    };
    queryData();
  }, [idProp, blogModelProp]);
  React.useEffect(resetStateValues, [blogRecord, blogPage, blogPagePostsId]);
  const [currentBlogPageDisplayValue, setCurrentBlogPageDisplayValue] =
    React.useState("");
  const [currentBlogPageValue, setCurrentBlogPageValue] =
    React.useState(undefined);
  const blogPageRef = React.createRef();
  const [
    currentBlogPagePostsIdDisplayValue,
    setCurrentBlogPagePostsIdDisplayValue,
  ] = React.useState("");
  const [currentBlogPagePostsIdValue, setCurrentBlogPagePostsIdValue] =
    React.useState(undefined);
  const blogPagePostsIdRef = React.createRef();
  const getIDValue = {
    blogPage: (r) => JSON.stringify({ id: r?.id }),
  };
  const blogPageIdSet = new Set(
    Array.isArray(blogPage)
      ? blogPage.map((r) => getIDValue.blogPage?.(r))
      : getIDValue.blogPage?.(blogPage)
  );
  const blogPageRecords = useDataStoreBinding({
    type: "collection",
    model: BlogPage,
  }).items;
  const getDisplayValue = {
    blogPage: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
    blogPagePostsId: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
  };
  const validations = {
    title: [{ type: "Required" }],
    content: [{ type: "Required" }],
    blogPage: [],
    blogPagePostsId: [],
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
          title,
          content,
          blogPage,
          blogPagePostsId,
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
            Blog.copyOf(blogRecord, (updated) => {
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
      {...getOverrideProps(overrides, "BlogUpdateForm")}
      {...rest}
    >
      <TextField
        label="Title"
        isRequired={true}
        isReadOnly={false}
        value={title}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title: value,
              content,
              blogPage,
              blogPagePostsId,
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
        label="Content"
        isRequired={true}
        isReadOnly={false}
        value={content}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              content: value,
              blogPage,
              blogPagePostsId,
            };
            const result = onChange(modelFields);
            value = result?.content ?? value;
          }
          if (errors.content?.hasError) {
            runValidationTasks("content", value);
          }
          setContent(value);
        }}
        onBlur={() => runValidationTasks("content", content)}
        errorMessage={errors.content?.errorMessage}
        hasError={errors.content?.hasError}
        {...getOverrideProps(overrides, "content")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              title,
              content,
              blogPage: value,
              blogPagePostsId,
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
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              title,
              content,
              blogPage,
              blogPagePostsId: value,
            };
            const result = onChange(modelFields);
            value = result?.blogPagePostsId ?? value;
          }
          setBlogPagePostsId(value);
          setCurrentBlogPagePostsIdValue(undefined);
        }}
        currentFieldValue={currentBlogPagePostsIdValue}
        label={"Blog page posts id"}
        items={blogPagePostsId ? [blogPagePostsId] : []}
        hasError={errors?.blogPagePostsId?.hasError}
        errorMessage={errors?.blogPagePostsId?.errorMessage}
        getBadgeText={(value) =>
          getDisplayValue.blogPagePostsId(
            blogPageRecords.find((r) => r.id === value)
          )
        }
        setFieldValue={(value) => {
          setCurrentBlogPagePostsIdDisplayValue(
            getDisplayValue.blogPagePostsId(
              blogPageRecords.find((r) => r.id === value)
            )
          );
          setCurrentBlogPagePostsIdValue(value);
        }}
        inputFieldRef={blogPagePostsIdRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Blog page posts id"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search BlogPage"
          value={currentBlogPagePostsIdDisplayValue}
          options={blogPageRecords
            .filter(
              (r, i, arr) =>
                arr.findIndex((member) => member?.id === r?.id) === i
            )
            .map((r) => ({
              id: r?.id,
              label: getDisplayValue.blogPagePostsId?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentBlogPagePostsIdValue(id);
            setCurrentBlogPagePostsIdDisplayValue(label);
            runValidationTasks("blogPagePostsId", label);
          }}
          onClear={() => {
            setCurrentBlogPagePostsIdDisplayValue("");
          }}
          defaultValue={blogPagePostsId}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.blogPagePostsId?.hasError) {
              runValidationTasks("blogPagePostsId", value);
            }
            setCurrentBlogPagePostsIdDisplayValue(value);
            setCurrentBlogPagePostsIdValue(undefined);
          }}
          onBlur={() =>
            runValidationTasks("blogPagePostsId", currentBlogPagePostsIdValue)
          }
          errorMessage={errors.blogPagePostsId?.errorMessage}
          hasError={errors.blogPagePostsId?.hasError}
          ref={blogPagePostsIdRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "blogPagePostsId")}
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
          isDisabled={!(idProp || blogModelProp)}
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
              !(idProp || blogModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
