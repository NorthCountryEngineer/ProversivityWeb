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
export declare type NoteCreateFormInputValues = {
    meetingID?: string;
    meeting?: Meeting;
    userID?: string;
    user?: User;
    content?: string;
    test?: string;
    timestamp?: number;
    meetingNotesId?: string;
};
export declare type NoteCreateFormValidationValues = {
    meetingID?: ValidationFunction<string>;
    meeting?: ValidationFunction<Meeting>;
    userID?: ValidationFunction<string>;
    user?: ValidationFunction<User>;
    content?: ValidationFunction<string>;
    test?: ValidationFunction<string>;
    timestamp?: ValidationFunction<number>;
    meetingNotesId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NoteCreateFormOverridesProps = {
    NoteCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    meetingID?: PrimitiveOverrideProps<TextFieldProps>;
    meeting?: PrimitiveOverrideProps<AutocompleteProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
    user?: PrimitiveOverrideProps<AutocompleteProps>;
    content?: PrimitiveOverrideProps<TextFieldProps>;
    test?: PrimitiveOverrideProps<TextFieldProps>;
    timestamp?: PrimitiveOverrideProps<TextFieldProps>;
    meetingNotesId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type NoteCreateFormProps = React.PropsWithChildren<{
    overrides?: NoteCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: NoteCreateFormInputValues) => NoteCreateFormInputValues;
    onSuccess?: (fields: NoteCreateFormInputValues) => void;
    onError?: (fields: NoteCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: NoteCreateFormInputValues) => NoteCreateFormInputValues;
    onValidate?: NoteCreateFormValidationValues;
} & React.CSSProperties>;
export default function NoteCreateForm(props: NoteCreateFormProps): React.ReactElement;
