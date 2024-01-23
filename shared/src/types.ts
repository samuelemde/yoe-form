import { SubmissionMethod } from "@/enums/submission-method.ts";
import { InputType } from "@/enums/input-type.ts";
import { Language } from "@/enums/language.ts";

export type YeFormRow = {
  fields: YeFormField[];
};

export type YeFormConfig = {
  rows: YeFormRow[];
  buttonText: TranslatableText;
  emailConfig?: EmailConfig;
  restEndpoint?: string;
  submissionMethod: SubmissionMethod;
  disableLabels?: boolean;
  disableRequiredStars?: boolean;
};

export type YeFormLayout = {
  spanMobile: number;
  spanDesktop: number;
};

export type YeFormValidators = {
  min?: number;
  max?: number;
  length?: number;
  matches?: RegExp;
};

type BaseInput = {
  name: string;
  label: TranslatableText;
  type: InputType;
  placeholder?: TranslatableText;
  required: boolean;
  validators?: YeFormValidators;
  layout: YeFormLayout;
  tooltip?: TranslatableText;
};

type TextInput = BaseInput & {
  type: "text" | "email" | "password" | "textarea" | "url";
};

type NumberInput = BaseInput & {
  type: "number";
};

type DateInput = BaseInput & {
  type: "date";
};

type BooleanInput = BaseInput & {
  type: "checkbox" | "switch";
};

type SelectInput = BaseInput & {
  type: "select";
  options: { name: TranslatableText; value: string }[];
};

type RadioInput = BaseInput & {
  type: "radio";
  options: { name: TranslatableText; value: string }[];
};

export type YeFormField =
  | TextInput
  | NumberInput
  | DateInput
  | BooleanInput
  | SelectInput
  | RadioInput;

export type TranslatableText = {
  default: string;
  translations?: Partial<{
    [K in Language]: { translated: boolean; value?: string };
  }>;
};

export type Email = {
  recipient: string;
  subject: string;
  body: string;
};

export type EmailConfig = {
  sender: string;
  internalRecipient: string;
  internalSubject: string;
  internalTemplate: string;
  confirmationRecipientField?: string;
  confirmationSubject?: TranslatableText;
  confirmationTemplate?: TranslatableText;
};

export type FormValues = Record<string, string | number | Date | undefined>;

export type EmailHandler = (
  values: FormValues,
  internalEmail?: Email,
  confirmationEmail?: Email,
) => Promise<void>;

export type RestHandler = (values: FormValues, url: string) => Promise<void>;
