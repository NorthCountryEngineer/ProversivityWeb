/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Blog, BlogPage } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlogUpdateFormInputValues = {
    title?: string;
    content?: string;
    blogPage?: BlogPage;
    blogPagePostsId?: string;
};
export declare type BlogUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    content?: ValidationFunction<string>;
    blogPage?: ValidationFunction<BlogPage>;
    blogPagePostsId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlogUpdateFormOverridesProps = {
    BlogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    blogPage?: PrimitiveOverrideProps<AutocompleteProps>;
    blogPagePostsId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type BlogUpdateFormProps = React.PropsWithChildren<{
    overrides?: BlogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    blog?: Blog;
    onSubmit?: (fields: BlogUpdateFormInputValues) => BlogUpdateFormInputValues;
    onSuccess?: (fields: BlogUpdateFormInputValues) => void;
    onError?: (fields: BlogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: BlogUpdateFormInputValues) => BlogUpdateFormInputValues;
    onValidate?: BlogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function BlogUpdateForm(props: BlogUpdateFormProps): React.ReactElement;
