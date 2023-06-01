/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type S3ObjectCreateFormInputValues = {
    bucket?: string;
    region?: string;
    key?: string;
};
export declare type S3ObjectCreateFormValidationValues = {
    bucket?: ValidationFunction<string>;
    region?: ValidationFunction<string>;
    key?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type S3ObjectCreateFormOverridesProps = {
    S3ObjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    bucket?: PrimitiveOverrideProps<TextFieldProps>;
    region?: PrimitiveOverrideProps<TextFieldProps>;
    key?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type S3ObjectCreateFormProps = React.PropsWithChildren<{
    overrides?: S3ObjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: S3ObjectCreateFormInputValues) => S3ObjectCreateFormInputValues;
    onSuccess?: (fields: S3ObjectCreateFormInputValues) => void;
    onError?: (fields: S3ObjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: S3ObjectCreateFormInputValues) => S3ObjectCreateFormInputValues;
    onValidate?: S3ObjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function S3ObjectCreateForm(props: S3ObjectCreateFormProps): React.ReactElement;
