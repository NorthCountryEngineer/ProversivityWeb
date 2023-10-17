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
export declare type AgendaItemUpdateFormInputValues = {
    meetingID?: string;
    meeting?: any;
    title?: string;
    description?: string;
    duration?: number;
    order?: number;
    status?: string;
    meetingAgendaItemsId?: string;
};
export declare type AgendaItemUpdateFormValidationValues = {
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
export declare type AgendaItemUpdateFormOverridesProps = {
    AgendaItemUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    meetingID?: PrimitiveOverrideProps<TextFieldProps>;
    meeting?: PrimitiveOverrideProps<AutocompleteProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    duration?: PrimitiveOverrideProps<TextFieldProps>;
    order?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    meetingAgendaItemsId?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type AgendaItemUpdateFormProps = React.PropsWithChildren<{
    overrides?: AgendaItemUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    agendaItem?: any;
    onSubmit?: (fields: AgendaItemUpdateFormInputValues) => AgendaItemUpdateFormInputValues;
    onSuccess?: (fields: AgendaItemUpdateFormInputValues) => void;
    onError?: (fields: AgendaItemUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AgendaItemUpdateFormInputValues) => AgendaItemUpdateFormInputValues;
    onValidate?: AgendaItemUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AgendaItemUpdateForm(props: AgendaItemUpdateFormProps): React.ReactElement;
