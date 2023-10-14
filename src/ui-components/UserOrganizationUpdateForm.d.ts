/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserOrganization, User, Organization } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserOrganizationUpdateFormInputValues = {
    userId?: string;
    user?: User;
    organizationId?: string;
    organization?: Organization;
    role?: string;
    userOrganizationsId?: string;
    organizationUsersId?: string;
};
export declare type UserOrganizationUpdateFormValidationValues = {
    userId?: ValidationFunction<string>;
    user?: ValidationFunction<User>;
    organizationId?: ValidationFunction<string>;
    organization?: ValidationFunction<Organization>;
    role?: ValidationFunction<string>;
    userOrganizationsId?: ValidationFunction<string>;
    organizationUsersId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserOrganizationUpdateFormOverridesProps = {
    UserOrganizationUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    user?: PrimitiveOverrideProps<AutocompleteProps>;
    organizationId?: PrimitiveOverrideProps<TextFieldProps>;
    organization?: PrimitiveOverrideProps<AutocompleteProps>;
    role?: PrimitiveOverrideProps<SelectFieldProps>;
    userOrganizationsId?: PrimitiveOverrideProps<AutocompleteProps>;
    organizationUsersId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type UserOrganizationUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserOrganizationUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userOrganization?: UserOrganization;
    onSubmit?: (fields: UserOrganizationUpdateFormInputValues) => UserOrganizationUpdateFormInputValues;
    onSuccess?: (fields: UserOrganizationUpdateFormInputValues) => void;
    onError?: (fields: UserOrganizationUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserOrganizationUpdateFormInputValues) => UserOrganizationUpdateFormInputValues;
    onValidate?: UserOrganizationUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserOrganizationUpdateForm(props: UserOrganizationUpdateFormProps): React.ReactElement;
