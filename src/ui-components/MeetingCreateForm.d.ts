/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ActionItem, AgendaItem, Note } from "../API.ts";
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
export declare type MeetingCreateFormInputValues = {
    scheduledTime?: number;
    duration?: number;
    locationLink?: string;
    status?: string;
    agendaItems?: AgendaItem[];
    actionItems?: ActionItem[];
    notes?: Note[];
    relationshipMeetingsId?: string;
};
export declare type MeetingCreateFormValidationValues = {
    scheduledTime?: ValidationFunction<number>;
    duration?: ValidationFunction<number>;
    locationLink?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    agendaItems?: ValidationFunction<AgendaItem>;
    actionItems?: ValidationFunction<ActionItem>;
    notes?: ValidationFunction<Note>;
    relationshipMeetingsId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type MeetingCreateFormOverridesProps = {
    MeetingCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    scheduledTime?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    locationLink?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    agendaItems?: PrimitiveOverrideProps<AutocompleteProps>;
    actionItems?: PrimitiveOverrideProps<AutocompleteProps>;
    notes?: PrimitiveOverrideProps<AutocompleteProps>;
    relationshipMeetingsId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type MeetingCreateFormProps = React.PropsWithChildren<{
    overrides?: MeetingCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: MeetingCreateFormInputValues) => MeetingCreateFormInputValues;
    onSuccess?: (fields: MeetingCreateFormInputValues) => void;
    onError?: (fields: MeetingCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MeetingCreateFormInputValues) => MeetingCreateFormInputValues;
    onValidate?: MeetingCreateFormValidationValues;
} & React.CSSProperties>;
export default function MeetingCreateForm(props: MeetingCreateFormProps): React.ReactElement;
