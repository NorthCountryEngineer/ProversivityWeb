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
import { BlogPage, User, Blog } from "../models";
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
export default function BlogPageUpdateForm(props) {
  const {
    id: idProp,
    blogPage: blogPageModelProp,
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
    overview: "",
    author: undefined,
    posts: [],
  };
  const [title, setTitle] = React.useState(initialValues.title);
  const [overview, setOverview] = React.useState(initialValues.overview);
  const [author, setAuthor] = React.useState(initialValues.author);
  const [posts, setPosts] = React.useState(initialValues.posts);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = blogPageRecord
      ? { ...initialValues, ...blogPageRecord, author, posts: linkedPosts }
      : initialValues;
    setTitle(cleanValues.title);
    setOverview(cleanValues.overview);
    setAuthor(cleanValues.author);
    setCurrentAuthorValue(undefined);
    setCurrentAuthorDisplayValue("");
    setPosts(cleanValues.posts ?? []);
    setCurrentPostsValue(undefined);
    setCurrentPostsDisplayValue("");
    setErrors({});
  };
  const [blogPageRecord, setBlogPageRecord] = React.useState(blogPageModelProp);
  const [linkedPosts, setLinkedPosts] = React.useState([]);
  const canUnlinkPosts = true;
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(BlogPage, idProp)
        : blogPageModelProp;
      setBlogPageRecord(record);
      const authorRecord = record ? await record.author : undefined;
      setAuthor(authorRecord);
      const linkedPosts = record ? await record.posts.toArray() : [];
      setLinkedPosts(linkedPosts);
    };
    queryData();
  }, [idProp, blogPageModelProp]);
  React.useEffect(resetStateValues, [blogPageRecord, author, linkedPosts]);
  const [currentAuthorDisplayValue, setCurrentAuthorDisplayValue] =
    React.useState("");
  const [currentAuthorValue, setCurrentAuthorValue] = React.useState(undefined);
  const authorRef = React.createRef();
  const [currentPostsDisplayValue, setCurrentPostsDisplayValue] =
    React.useState("");
  const [currentPostsValue, setCurrentPostsValue] = React.useState(undefined);
  const postsRef = React.createRef();
  const getIDValue = {
    author: (r) => JSON.stringify({ id: r?.id }),
    posts: (r) => JSON.stringify({ id: r?.id }),
  };
  const authorIdSet = new Set(
    Array.isArray(author)
      ? author.map((r) => getIDValue.author?.(r))
      : getIDValue.author?.(author)
  );
  const postsIdSet = new Set(
    Array.isArray(posts)
      ? posts.map((r) => getIDValue.posts?.(r))
      : getIDValue.posts?.(posts)
  );
  const userRecords = useDataStoreBinding({
    type: "collection",
    model: User,
  }).items;
  const blogRecords = useDataStoreBinding({
    type: "collection",
    model: Blog,
  }).items;
  const getDisplayValue = {
    author: (r) => `${r?.email ? r?.email + " - " : ""}${r?.id}`,
    posts: (r) => `${r?.title ? r?.title + " - " : ""}${r?.id}`,
  };
  const validations = {
    title: [{ type: "Required" }],
    overview: [],
    author: [],
    posts: [],
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
          overview,
          author,
          posts,
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
          const userToUnlink = await blogPageRecord.author;
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
          const userToLink = modelFields.author;
          if (userToLink) {
            promises.push(
              DataStore.save(
                User.copyOf(userToLink, (updated) => {
                  updated.blogPage = blogPageRecord;
                })
              )
            );
            const blogPageToUnlink = await userToLink.blogPage;
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
          }
          const postsToLink = [];
          const postsToUnLink = [];
          const postsSet = new Set();
          const linkedPostsSet = new Set();
          posts.forEach((r) => postsSet.add(getIDValue.posts?.(r)));
          linkedPosts.forEach((r) => linkedPostsSet.add(getIDValue.posts?.(r)));
          linkedPosts.forEach((r) => {
            if (!postsSet.has(getIDValue.posts?.(r))) {
              postsToUnLink.push(r);
            }
          });
          posts.forEach((r) => {
            if (!linkedPostsSet.has(getIDValue.posts?.(r))) {
              postsToLink.push(r);
            }
          });
          postsToUnLink.forEach((original) => {
            if (!canUnlinkPosts) {
              throw Error(
                `Blog ${original.id} cannot be unlinked from BlogPage because blogPagePostsId is a required field.`
              );
            }
            promises.push(
              DataStore.save(
                Blog.copyOf(original, (updated) => {
                  updated.blogPagePostsId = null;
                  updated.blogPage = null;
                })
              )
            );
          });
          postsToLink.forEach((original) => {
            promises.push(
              DataStore.save(
                Blog.copyOf(original, (updated) => {
                  updated.blogPagePostsId = blogPageRecord.id;
                  updated.blogPage = blogPageRecord;
                })
              )
            );
          });
          const modelFieldsToSave = {
            title: modelFields.title,
            overview: modelFields.overview,
            author: modelFields.author,
          };
          promises.push(
            DataStore.save(
              BlogPage.copyOf(blogPageRecord, (updated) => {
                Object.assign(updated, modelFieldsToSave);
                if (!modelFieldsToSave.author) {
                  updated.authorId = undefined;
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
      {...getOverrideProps(overrides, "BlogPageUpdateForm")}
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
              overview,
              author,
              posts,
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
        label="Overview"
        isRequired={false}
        isReadOnly={false}
        value={overview}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              title,
              overview: value,
              author,
              posts,
            };
            const result = onChange(modelFields);
            value = result?.overview ?? value;
          }
          if (errors.overview?.hasError) {
            runValidationTasks("overview", value);
          }
          setOverview(value);
        }}
        onBlur={() => runValidationTasks("overview", overview)}
        errorMessage={errors.overview?.errorMessage}
        hasError={errors.overview?.hasError}
        {...getOverrideProps(overrides, "overview")}
      ></TextField>
      <ArrayField
        lengthLimit={1}
        onChange={async (items) => {
          let value = items[0];
          if (onChange) {
            const modelFields = {
              title,
              overview,
              author: value,
              posts,
            };
            const result = onChange(modelFields);
            value = result?.author ?? value;
          }
          setAuthor(value);
          setCurrentAuthorValue(undefined);
          setCurrentAuthorDisplayValue("");
        }}
        currentFieldValue={currentAuthorValue}
        label={"Author"}
        items={author ? [author] : []}
        hasError={errors?.author?.hasError}
        errorMessage={errors?.author?.errorMessage}
        getBadgeText={getDisplayValue.author}
        setFieldValue={(model) => {
          setCurrentAuthorDisplayValue(getDisplayValue.author(model));
          setCurrentAuthorValue(model);
        }}
        inputFieldRef={authorRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Author"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search User"
          value={currentAuthorDisplayValue}
          options={userRecords
            .filter((r) => !authorIdSet.has(getIDValue.author?.(r)))
            .map((r) => ({
              id: getIDValue.author?.(r),
              label: getDisplayValue.author?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentAuthorValue(
              userRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentAuthorDisplayValue(label);
            runValidationTasks("author", label);
          }}
          onClear={() => {
            setCurrentAuthorDisplayValue("");
          }}
          defaultValue={author}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.author?.hasError) {
              runValidationTasks("author", value);
            }
            setCurrentAuthorDisplayValue(value);
            setCurrentAuthorValue(undefined);
          }}
          onBlur={() => runValidationTasks("author", currentAuthorDisplayValue)}
          errorMessage={errors.author?.errorMessage}
          hasError={errors.author?.hasError}
          ref={authorRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "author")}
        ></Autocomplete>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              title,
              overview,
              author,
              posts: values,
            };
            const result = onChange(modelFields);
            values = result?.posts ?? values;
          }
          setPosts(values);
          setCurrentPostsValue(undefined);
          setCurrentPostsDisplayValue("");
        }}
        currentFieldValue={currentPostsValue}
        label={"Posts"}
        items={posts}
        hasError={errors?.posts?.hasError}
        errorMessage={errors?.posts?.errorMessage}
        getBadgeText={getDisplayValue.posts}
        setFieldValue={(model) => {
          setCurrentPostsDisplayValue(getDisplayValue.posts(model));
          setCurrentPostsValue(model);
        }}
        inputFieldRef={postsRef}
        defaultFieldValue={""}
      >
        <Autocomplete
          label="Posts"
          isRequired={false}
          isReadOnly={false}
          placeholder="Search Blog"
          value={currentPostsDisplayValue}
          options={blogRecords
            .filter((r) => !postsIdSet.has(getIDValue.posts?.(r)))
            .map((r) => ({
              id: getIDValue.posts?.(r),
              label: getDisplayValue.posts?.(r),
            }))}
          onSelect={({ id, label }) => {
            setCurrentPostsValue(
              blogRecords.find((r) =>
                Object.entries(JSON.parse(id)).every(
                  ([key, value]) => r[key] === value
                )
              )
            );
            setCurrentPostsDisplayValue(label);
            runValidationTasks("posts", label);
          }}
          onClear={() => {
            setCurrentPostsDisplayValue("");
          }}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.posts?.hasError) {
              runValidationTasks("posts", value);
            }
            setCurrentPostsDisplayValue(value);
            setCurrentPostsValue(undefined);
          }}
          onBlur={() => runValidationTasks("posts", currentPostsDisplayValue)}
          errorMessage={errors.posts?.errorMessage}
          hasError={errors.posts?.hasError}
          ref={postsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "posts")}
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
          isDisabled={!(idProp || blogPageModelProp)}
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
              !(idProp || blogPageModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
