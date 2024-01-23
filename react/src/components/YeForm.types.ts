import type {
  EmailHandler,
  Language,
  RestHandler,
  YeFormConfig,
  YeFormField,
} from "@yoe-form/shared";
import type { ComponentType, FC } from "react";
import type { ControllerRenderProps } from "react-hook-form";

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
};

export type YeFormCustomProps = YeFormProps & {
  button: ComponentType;
  dynamicInput: CustomDynamicInputComponent;
};
