export const InputType = {
  text: "text",
  email: "email",
  password: "password",
  textarea: "textarea",
  number: "number",
  checkbox: "checkbox",
  switch: "switch",
  select: "select",
  radio: "radio",
  date: "date",
  url: "url",
} as const;

export type InputType = keyof typeof InputType;
