import type {
  Email,
  Language,
  YeFormConfig,
  YeFormField,
} from "@yoe-form/shared";
import type { ComponentType, FC } from "react";
import type { ControllerRenderProps } from "react-hook-form";

type EmailHandler = (
  values: Record<string, unknown>,
  internalEmail: Email,
  confirmationEmail?: Email,
) => Promise<void>;

type RestHandler = (
  url: string,
  values: Record<string, unknown>,
) => Promise<void>;

type CustomDynamicInputComponent =
  | ComponentType<{
      fieldConfig: YeFormField;
      language: Language;
      field: ControllerRenderProps;
    }>
  | FC<unknown>;

export type YeFormProps = {
  className?: string;
  config: YeFormConfig;
  emailHandler?: EmailHandler;
  restHandler?: RestHandler;
  language?: Language;
  button?: ComponentType;
  dynamicInput?: CustomDynamicInputComponent;
};
