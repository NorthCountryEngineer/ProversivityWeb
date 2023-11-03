/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Meeting, User } from "../API.ts";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type RelationshipCreateFormInputValues = {
    name?: string;
    description?: string;
    requestor?: User;
    employee?: User;
    meetings?: Meeting[];
    userRelationshipsId?: string;
};
export declare type RelationshipCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    requestor?: ValidationFunction<User>;
    employee?: ValidationFunction<User>;
    meetings?: ValidationFunction<Meeting>;
    userRelationshipsId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RelationshipCreateFormOverridesProps = {
    RelationshipCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    requestor?: PrimitiveOverrideProps<AutocompleteProps>;
    employee?: PrimitiveOverrideProps<AutocompleteProps>;
    meetings?: PrimitiveOverrideProps<AutocompleteProps>;
    userRelationshipsId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type RelationshipCreateFormProps = React.PropsWithChildren<{
    overrides?: RelationshipCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: RelationshipCreateFormInputValues) => RelationshipCreateFormInputValues;
    onSuccess?: (fields: RelationshipCreateFormInputValues) => void;
    onError?: (fields: RelationshipCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RelationshipCreateFormInputValues) => RelationshipCreateFormInputValues;
    onValidate?: RelationshipCreateFormValidationValues;
} & React.CSSProperties>;
export default function RelationshipCreateForm(props: RelationshipCreateFormProps): React.ReactElement;
