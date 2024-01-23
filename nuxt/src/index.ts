import "./index.css";

export { default as YeForm } from "./components/YeForm.vue";
export { default as YeFormCustom } from "./components/YeFormCustom.vue";
export { type DynamicInputProps } from "./components/DynamicInput.vue";
export { FormControl } from "./components/ui/form";

export { yeFormTW, getTranslation } from "@yoe-form/shared";
export type {
  YeFormConfig,
  Email,
  FormValues,
  EmailHandler,
  RestHandler,
  Language,
} from "@yoe-form/shared";
