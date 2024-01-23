import DynamicInput from "@/components/DynamicInput";
import { Button } from "@/components/ui/button";
import type { FC } from "react";
import { YeFormProps } from "./YeForm.types.ts";
import YeFormCustom from "@/components/YeFormCustom.tsx";

const YeForm: FC<YeFormProps> = (props) => {
  return (
    <YeFormCustom button={Button} dynamicInput={DynamicInput} {...props} />
  );
};

export default YeForm;
