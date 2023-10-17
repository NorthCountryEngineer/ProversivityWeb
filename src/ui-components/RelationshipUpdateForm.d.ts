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
export declare type RelationshipUpdateFormInputValues = {
    name?: string;
    description?: string;
    requestor?: any;
    employee?: any;
    meetings?: any[];
    userRelationshipsId?: string;
};
export declare type RelationshipUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    requestor?: ValidationFunction<any>;
    employee?: ValidationFunction<any>;
    meetings?: ValidationFunction<any>;
    userRelationshipsId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type RelationshipUpdateFormOverridesProps = {
    RelationshipUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    requestor?: PrimitiveOverrideProps<AutocompleteProps>;
    employee?: PrimitiveOverrideProps<AutocompleteProps>;
    meetings?: PrimitiveOverrideProps<AutocompleteProps>;
    userRelationshipsId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type RelationshipUpdateFormProps = React.PropsWithChildren<{
    overrides?: RelationshipUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    relationship?: any;
    onSubmit?: (fields: RelationshipUpdateFormInputValues) => RelationshipUpdateFormInputValues;
    onSuccess?: (fields: RelationshipUpdateFormInputValues) => void;
    onError?: (fields: RelationshipUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: RelationshipUpdateFormInputValues) => RelationshipUpdateFormInputValues;
    onValidate?: RelationshipUpdateFormValidationValues;
} & React.CSSProperties>;
export default function RelationshipUpdateForm(props: RelationshipUpdateFormProps): React.ReactElement;
