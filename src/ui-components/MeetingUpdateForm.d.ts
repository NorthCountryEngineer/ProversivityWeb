/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { ActionItem, AgendaItem, Meeting, Note } from "../API.ts";
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
export declare type MeetingUpdateFormInputValues = {
    scheduledTime?: number;
    duration?: number;
    locationLink?: string;
    status?: string;
    agendaItems?: AgendaItem[];
    actionItems?: ActionItem[];
    notes?: Note[];
    relationshipMeetingsId?: string;
};
export declare type MeetingUpdateFormValidationValues = {
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
export declare type MeetingUpdateFormOverridesProps = {
    MeetingUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    scheduledTime?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    locationLink?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    agendaItems?: PrimitiveOverrideProps<AutocompleteProps>;
    actionItems?: PrimitiveOverrideProps<AutocompleteProps>;
    notes?: PrimitiveOverrideProps<AutocompleteProps>;
    relationshipMeetingsId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type MeetingUpdateFormProps = React.PropsWithChildren<{
    overrides?: MeetingUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    meeting?: Meeting;
    onSubmit?: (fields: MeetingUpdateFormInputValues) => MeetingUpdateFormInputValues;
    onSuccess?: (fields: MeetingUpdateFormInputValues) => void;
    onError?: (fields: MeetingUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: MeetingUpdateFormInputValues) => MeetingUpdateFormInputValues;
    onValidate?: MeetingUpdateFormValidationValues;
} & React.CSSProperties>;
export default function MeetingUpdateForm(props: MeetingUpdateFormProps): React.ReactElement;
