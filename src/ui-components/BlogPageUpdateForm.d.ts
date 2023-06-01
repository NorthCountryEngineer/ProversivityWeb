/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { BlogPage, User, Blog } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogPageUpdateFormInputValues = {
    title?: string;
    overview?: string;
    author?: User;
    posts?: Blog[];
};
export declare type BlogPageUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    overview?: ValidationFunction<string>;
    author?: ValidationFunction<User>;
    posts?: ValidationFunction<Blog>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogPageUpdateFormOverridesProps = {
    BlogPageUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    overview?: PrimitiveOverrideProps<TextFieldProps>;
    author?: PrimitiveOverrideProps<AutocompleteProps>;
    posts?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BlogPageUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlogPageUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blogPage?: BlogPage;
    onSubmit?: (fields: BlogPageUpdateFormInputValues) => BlogPageUpdateFormInputValues;
    onSuccess?: (fields: BlogPageUpdateFormInputValues) => void;
    onError?: (fields: BlogPageUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogPageUpdateFormInputValues) => BlogPageUpdateFormInputValues;
    onValidate?: BlogPageUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlogPageUpdateForm(props: BlogPageUpdateFormProps): React.ReactElement;
