/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { S3Object } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function S3ObjectUpdateForm(props) {
  const {
    id: idProp,
    s3Object: s3ObjectModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    bucket: "",
    region: "",
    key: "",
  };
  const [bucket, setBucket] = React.useState(initialValues.bucket);
  const [region, setRegion] = React.useState(initialValues.region);
  const [key, setKey] = React.useState(initialValues.key);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = s3ObjectRecord
      ? { ...initialValues, ...s3ObjectRecord }
      : initialValues;
    setBucket(cleanValues.bucket);
    setRegion(cleanValues.region);
    setKey(cleanValues.key);
    setErrors({});
  };
  const [s3ObjectRecord, setS3ObjectRecord] = React.useState(s3ObjectModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(S3Object, idProp)
        : s3ObjectModelProp;
      setS3ObjectRecord(record);
    };
    queryData();
  }, [idProp, s3ObjectModelProp]);
  React.useEffect(resetStateValues, [s3ObjectRecord]);
  const validations = {
    bucket: [{ type: "Required" }],
    region: [{ type: "Required" }],
    key: [{ type: "Required" }],
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
          bucket,
          region,
          key,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
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
            S3Object.copyOf(s3ObjectRecord, (updated) => {
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
      {...getOverrideProps(overrides, "S3ObjectUpdateForm")}
      {...rest}
    >
      <TextField
        label="Bucket"
        isRequired={true}
        isReadOnly={false}
        value={bucket}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bucket: value,
              region,
              key,
            };
            const result = onChange(modelFields);
            value = result?.bucket ?? value;
          }
          if (errors.bucket?.hasError) {
            runValidationTasks("bucket", value);
          }
          setBucket(value);
        }}
        onBlur={() => runValidationTasks("bucket", bucket)}
        errorMessage={errors.bucket?.errorMessage}
        hasError={errors.bucket?.hasError}
        {...getOverrideProps(overrides, "bucket")}
      ></TextField>
      <TextField
        label="Region"
        isRequired={true}
        isReadOnly={false}
        value={region}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bucket,
              region: value,
              key,
            };
            const result = onChange(modelFields);
            value = result?.region ?? value;
          }
          if (errors.region?.hasError) {
            runValidationTasks("region", value);
          }
          setRegion(value);
        }}
        onBlur={() => runValidationTasks("region", region)}
        errorMessage={errors.region?.errorMessage}
        hasError={errors.region?.hasError}
        {...getOverrideProps(overrides, "region")}
      ></TextField>
      <TextField
        label="Key"
        isRequired={true}
        isReadOnly={false}
        value={key}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              bucket,
              region,
              key: value,
            };
            const result = onChange(modelFields);
            value = result?.key ?? value;
          }
          if (errors.key?.hasError) {
            runValidationTasks("key", value);
          }
          setKey(value);
        }}
        onBlur={() => runValidationTasks("key", key)}
        errorMessage={errors.key?.errorMessage}
        hasError={errors.key?.hasError}
        {...getOverrideProps(overrides, "key")}
      ></TextField>
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
          isDisabled={!(idProp || s3ObjectModelProp)}
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
              !(idProp || s3ObjectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
