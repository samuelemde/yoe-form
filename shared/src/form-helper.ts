import {
  boolean,
  type BooleanSchema,
  date,
  type DateSchema,
  number,
  type NumberSchema,
  object,
  string,
  type StringSchema,
} from "yup";
import { InputType, Language } from "./enums";
import {
  Email,
  EmailConfig,
  FormValues,
  TranslatableText,
  YeFormField,
  YeFormLayout,
  YeFormRow,
} from "@/types.ts";

const buildStringValidators = (input: YeFormField) => {
  let schema = string();

  if (input.type === "email") {
    schema = schema.email();
  } else if (input.type === "url") {
    schema = schema.url();
  }
  if (input.validators) {
    if (input.validators.min !== undefined) {
      schema = schema.min(input.validators.min);
    }
    if (input.validators.max !== undefined) {
      schema = schema.max(input.validators.max);
    }
    if (input.validators.length !== undefined) {
      schema = schema.length(input.validators.length);
    }
    if (input.validators.matches !== undefined) {
      schema = schema.matches(input.validators.matches);
    }
  }
  return schema;
};

const buildNumberValidators = (input: YeFormField) => {
  let schema = number();
  if (input.validators) {
    if (input.validators.min !== undefined) {
      schema = schema.min(input.validators.min);
    }
    if (input.validators.max !== undefined) {
      schema = schema.max(input.validators.max);
    }
  }
  return schema;
};

const buildDateValidators = (input: YeFormField) => {
  let schema = date();
  if (input.validators) {
    if (input.validators.min !== undefined) {
      schema = schema.min(input.validators.min);
    }
    if (input.validators.max !== undefined) {
      schema = schema.max(input.validators.max);
    }
  }
  return schema;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const buildBooleanValidators = (_input: YeFormField) => {
  return boolean();
};

const validation: {
  [K in InputType]: (
    input: YeFormField,
  ) => StringSchema | NumberSchema | DateSchema | BooleanSchema;
} = {
  text: buildStringValidators,
  email: buildStringValidators,
  password: buildStringValidators,
  textarea: buildStringValidators,
  number: buildNumberValidators,
  checkbox: buildBooleanValidators,
  switch: buildBooleanValidators,
  select: buildStringValidators,
  radio: buildStringValidators,
  date: buildDateValidators,
  url: buildStringValidators,
};

const getValidators = (input: YeFormField) => {
  let validators = validation[input.type](input);
  if (input.required) {
    validators = validators.required();
  }
  return validators;
};

export const buildFormSchema = (rows: YeFormRow[]) => {
  // Flatten the rows to get a list of inputs
  const inputs = rows.flatMap((row) => row.fields);

  // build form schema based on the row items
  return object({
    ...inputs.reduce((acc, input) => {
      return {
        ...acc,
        [input.name]: getValidators(input),
      };
    }, {}),
  });
};

const DefaultValue = {
  text: "",
  email: "",
  password: "",
  textarea: "",
  number: undefined,
  checkbox: false,
  switch: false,
  select: "",
  radio: "",
  date: undefined,
  url: "",
};

export const buildDefaultValues = (rows: YeFormRow[]): FormValues => {
  return rows.reduce((acc, row) => {
    row.fields.forEach((field) => {
      acc[field.name] = DefaultValue[field.type];
    });
    return acc;
  }, {});
};

export const replacePlaceholders = (str: string, variables: FormValues) => {
  return str.replace(/\{{2}(.*?)}{2}/g, (_, g) => {
    const value = variables[g];

    if (value === undefined) {
      return "";
    }

    return typeof value === "string" ? value : value.toString();
  });
};

export const getTranslation = (
  field: TranslatableText | undefined,
  language: Language | undefined,
): string => {
  if (!field) {
    return "";
  }
  const translation =
    !!language && field.translations && field.translations[language];

  if (translation && translation.translated && translation.value) {
    return translation.value;
  }

  return field.default;
};

export const buildEmails = (
  emailConfig: EmailConfig,
  values: FormValues,
  language: Language | undefined,
) => {
  const internalEmail: Email = {
    recipient: emailConfig.internalRecipient,
    subject: replacePlaceholders(emailConfig.internalSubject, values),
    body: replacePlaceholders(emailConfig.internalTemplate, values),
  };
  let confirmationEmail: Email | undefined;
  if (
    emailConfig.confirmationSubject &&
    emailConfig.confirmationTemplate &&
    emailConfig.confirmationRecipientField &&
    emailConfig.confirmationRecipientField in values
  ) {
    confirmationEmail = {
      recipient: values[emailConfig.confirmationRecipientField] as string,
      subject: replacePlaceholders(
        getTranslation(emailConfig.confirmationSubject, language),
        values,
      ),
      body: replacePlaceholders(
        getTranslation(emailConfig.confirmationTemplate, language),
        values,
      ),
    };
  }
  return {
    internalEmail,
    confirmationEmail,
  };
};

export const getGridClasses = (layout: YeFormLayout) => {
  return `col-span-${layout.spanMobile} md:col-span-${layout.spanDesktop} `;
};
