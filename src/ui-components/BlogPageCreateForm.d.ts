/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { User, Blog } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogPageCreateFormInputValues = {
    title?: string;
    overview?: string;
    author?: User;
    posts?: Blog[];
};
export declare type BlogPageCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    overview?: ValidationFunction<string>;
    author?: ValidationFunction<User>;
    posts?: ValidationFunction<Blog>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogPageCreateFormOverridesProps = {
    BlogPageCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    overview?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<AutocompleteProps>;
    posts?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BlogPageCreateFormProps = React.PropsWithChildren<{
    overrides?: BlogPageCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BlogPageCreateFormInputValues) => BlogPageCreateFormInputValues;
    onSuccess?: (fields: BlogPageCreateFormInputValues) => void;
    onError?: (fields: BlogPageCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogPageCreateFormInputValues) => BlogPageCreateFormInputValues;
    onValidate?: BlogPageCreateFormValidationValues;
} & React.CSSProperties>;
export default function BlogPageCreateForm(props: BlogPageCreateFormProps): React.ReactElement;
