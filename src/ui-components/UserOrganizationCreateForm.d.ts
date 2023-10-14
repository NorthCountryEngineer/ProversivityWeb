/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { User, Organization } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserOrganizationCreateFormInputValues = {
    userId?: string;
    user?: User;
    organizationId?: string;
    organization?: Organization;
    role?: string;
    userOrganizationsId?: string;
    organizationUsersId?: string;
};
export declare type UserOrganizationCreateFormValidationValues = {
    userId?: ValidationFunction<string>;
    user?: ValidationFunction<User>;
    organizationId?: ValidationFunction<string>;
    organization?: ValidationFunction<Organization>;
    role?: ValidationFunction<string>;
    userOrganizationsId?: ValidationFunction<string>;
    organizationUsersId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserOrganizationCreateFormOverridesProps = {
    UserOrganizationCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    user?: PrimitiveOverrideProps<AutocompleteProps>;
    organizationId?: PrimitiveOverrideProps<TextFieldProps>;
    organization?: PrimitiveOverrideProps<AutocompleteProps>;
    role?: PrimitiveOverrideProps<SelectFieldProps>;
    userOrganizationsId?: PrimitiveOverrideProps<AutocompleteProps>;
    organizationUsersId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type UserOrganizationCreateFormProps = React.PropsWithChildren<{
    overrides?: UserOrganizationCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserOrganizationCreateFormInputValues) => UserOrganizationCreateFormInputValues;
    onSuccess?: (fields: UserOrganizationCreateFormInputValues) => void;
    onError?: (fields: UserOrganizationCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserOrganizationCreateFormInputValues) => UserOrganizationCreateFormInputValues;
    onValidate?: UserOrganizationCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserOrganizationCreateForm(props: UserOrganizationCreateFormProps): React.ReactElement;
