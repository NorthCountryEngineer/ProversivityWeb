/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ActionItem, Meeting, User } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ActionItemUpdateFormInputValues = {
    meetingID?: string;
    meeting?: Meeting;
    assignedToUserID?: string;
    assignedToUser?: User;
    description?: string;
    dueDate?: string;
    status?: string;
    meetingActionItemsId?: string;
};
export declare type ActionItemUpdateFormValidationValues = {
    meetingID?: ValidationFunction<string>;
    meeting?: ValidationFunction<Meeting>;
    assignedToUserID?: ValidationFunction<string>;
    assignedToUser?: ValidationFunction<User>;
    description?: ValidationFunction<string>;
    dueDate?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    meetingActionItemsId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ActionItemUpdateFormOverridesProps = {
    ActionItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    meetingID?: PrimitiveOverrideProps<TextFieldProps>;
    meeting?: PrimitiveOverrideProps<AutocompleteProps>;
    assignedToUserID?: PrimitiveOverrideProps<TextFieldProps>;
    assignedToUser?: PrimitiveOverrideProps<AutocompleteProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    dueDate?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    meetingActionItemsId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type ActionItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: ActionItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    actionItem?: ActionItem;
    onSubmit?: (fields: ActionItemUpdateFormInputValues) => ActionItemUpdateFormInputValues;
    onSuccess?: (fields: ActionItemUpdateFormInputValues) => void;
    onError?: (fields: ActionItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ActionItemUpdateFormInputValues) => ActionItemUpdateFormInputValues;
    onValidate?: ActionItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ActionItemUpdateForm(props: ActionItemUpdateFormProps): React.ReactElement;
