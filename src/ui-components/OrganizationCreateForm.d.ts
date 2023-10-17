/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type OrganizationCreateFormInputValues = {
    name?: string;
    description?: string;
    users?: any[];
};
export declare type OrganizationCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    users?: ValidationFunction<any>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganizationCreateFormOverridesProps = {
    OrganizationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    users?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type OrganizationCreateFormProps = React.PropsWithChildren<{
    overrides?: OrganizationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrganizationCreateFormInputValues) => OrganizationCreateFormInputValues;
    onSuccess?: (fields: OrganizationCreateFormInputValues) => void;
    onError?: (fields: OrganizationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrganizationCreateFormInputValues) => OrganizationCreateFormInputValues;
    onValidate?: OrganizationCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrganizationCreateForm(props: OrganizationCreateFormProps): React.ReactElement;
