/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ServiceProvider, User } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ServiceProviderUpdateFormInputValues = {
    user?: User;
    companyName?: string;
    address?: string;
    phone?: string;
    skills?: string[];
};
export declare type ServiceProviderUpdateFormValidationValues = {
    user?: ValidationFunction<User>;
    companyName?: ValidationFunction<string>;
    address?: ValidationFunction<string>;
    phone?: ValidationFunction<string>;
    skills?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ServiceProviderUpdateFormOverridesProps = {
    ServiceProviderUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<AutocompleteProps>;
    companyName?: PrimitiveOverrideProps<TextFieldProps>;
    address?: PrimitiveOverrideProps<TextFieldProps>;
    phone?: PrimitiveOverrideProps<TextFieldProps>;
    skills?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ServiceProviderUpdateFormProps = React.PropsWithChildren<{
    overrides?: ServiceProviderUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    serviceProvider?: ServiceProvider;
    onSubmit?: (fields: ServiceProviderUpdateFormInputValues) => ServiceProviderUpdateFormInputValues;
    onSuccess?: (fields: ServiceProviderUpdateFormInputValues) => void;
    onError?: (fields: ServiceProviderUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ServiceProviderUpdateFormInputValues) => ServiceProviderUpdateFormInputValues;
    onValidate?: ServiceProviderUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ServiceProviderUpdateForm(props: ServiceProviderUpdateFormProps): React.ReactElement;
