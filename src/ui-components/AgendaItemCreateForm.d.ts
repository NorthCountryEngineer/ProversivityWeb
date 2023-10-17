/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AgendaItemCreateFormInputValues = {
    meetingID?: string;
    meeting?: any;
    title?: string;
    description?: string;
    duration?: number;
    order?: number;
    status?: string;
    meetingAgendaItemsId?: string;
};
export declare type AgendaItemCreateFormValidationValues = {
    meetingID?: ValidationFunction<string>;
    meeting?: ValidationFunction<any>;
    title?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    duration?: ValidationFunction<number>;
    order?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
    meetingAgendaItemsId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AgendaItemCreateFormOverridesProps = {
    AgendaItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    meetingID?: PrimitiveOverrideProps<TextFieldProps>;
    meeting?: PrimitiveOverrideProps<AutocompleteProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    order?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    meetingAgendaItemsId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AgendaItemCreateFormProps = React.PropsWithChildren<{
    overrides?: AgendaItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AgendaItemCreateFormInputValues) => AgendaItemCreateFormInputValues;
    onSuccess?: (fields: AgendaItemCreateFormInputValues) => void;
    onError?: (fields: AgendaItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AgendaItemCreateFormInputValues) => AgendaItemCreateFormInputValues;
    onValidate?: AgendaItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function AgendaItemCreateForm(props: AgendaItemCreateFormProps): React.ReactElement;
