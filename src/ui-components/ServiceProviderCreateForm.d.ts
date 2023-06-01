/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { User } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServiceProviderCreateFormInputValues = {
    user?: User;
    companyName?: string;
    address?: string;
    phone?: string;
    skills?: string[];
};
export declare type ServiceProviderCreateFormValidationValues = {
    user?: ValidationFunction<User>;
    companyName?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    skills?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceProviderCreateFormOverridesProps = {
    ServiceProviderCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<AutocompleteProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    skills?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceProviderCreateFormProps = React.PropsWithChildren<{
    overrides?: ServiceProviderCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ServiceProviderCreateFormInputValues) => ServiceProviderCreateFormInputValues;
    onSuccess?: (fields: ServiceProviderCreateFormInputValues) => void;
    onError?: (fields: ServiceProviderCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceProviderCreateFormInputValues) => ServiceProviderCreateFormInputValues;
    onValidate?: ServiceProviderCreateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceProviderCreateForm(props: ServiceProviderCreateFormProps): React.ReactElement;
