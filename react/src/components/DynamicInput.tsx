import { useMemo } from "react";
import { FormControl, FormItem, FormLabel } from "./ui/form";
import { ControllerRenderProps } from "react-hook-form";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { getTranslation, Language, YeFormField } from "@yoe-form/shared";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select.tsx";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group.tsx";
import { Button } from "@/components/ui/button.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Switch } from "@/components/ui/switch.tsx";

type DynamicInputProps = {
  fieldConfig: YeFormField;
  language: Language;
  field: ControllerRenderProps;
};

const DynamicInput = ({ fieldConfig, language, field }: DynamicInputProps) => {
  const placeholder = useMemo(
    () => getTranslation(fieldConfig.placeholder, language),
    [fieldConfig, language],
  );

  const renderField = () => {
    switch (fieldConfig.type) {
      case "text":
      case "email":
      case "password":
      case "number":
      case "url":
        return (
          <FormControl>
            <Input
              type={fieldConfig.type}
              placeholder={placeholder}
              data-ye-element="input"
              {...field}
            />
          </FormControl>
        );
      case "checkbox":
        return (
          <FormControl className="flex flex-row items-start">
            <Checkbox
              checked={field.value}
              onCheckedChange={field.onChange}
              data-ye-element="checkbox"
            />
          </FormControl>
        );
      case "switch":
        return (
          <FormControl className="flex flex-row items-start">
            <Switch
              checked={field.value}
              onCheckedChange={field.onChange}
              data-ye-element="switch"
            />
          </FormControl>
        );
      case "select":
        return (
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {fieldConfig.options.map(({ name, value }) => (
                <SelectItem key={value} value={value}>
                  {getTranslation(name, language)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "radio":
        return (
          <RadioGroup
            className="flex gap-4"
            onValueChange={field.onChange}
            defaultValue={field.value}
          >
            {fieldConfig.options.map(({ name, value }) => (
              <FormItem key={value}>
                <FormLabel className="flex cursor-pointer gap-4 ">
                  <div
                    data-ye-element="radio"
                    className="flex items-center gap-4 rounded-md border border-slate-200 px-4 py-2 shadow-sm [&:has([data-state=checked])]:border-slate-400"
                  >
                    <FormControl>
                      <RadioGroupItem value={value} />
                    </FormControl>
                    {getTranslation(name, language)}
                  </div>
                </FormLabel>
              </FormItem>
            ))}
          </RadioGroup>
        );
      case "date":
        return (
          <Popover>
            <PopoverTrigger asChild>
              <FormControl>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full pl-3 text-left font-normal",
                    !field.value && "text-muted-foreground",
                  )}
                  data-ye-element="date"
                >
                  {field.value ? (
                    format(field.value, "PPP")
                  ) : (
                    <span>{placeholder}</span>
                  )}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </FormControl>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
                defaultMonth={new Date(2000, 0)}
                captionLayout="dropdown-buttons"
                fromYear={1960}
                toYear={2030}
              />
            </PopoverContent>
          </Popover>
        );
      case "textarea":
        return (
          <Textarea
            className="resize-none"
            rows={6}
            placeholder={placeholder}
            data-ye-element="input"
          />
        );
      default:
        return null;
    }
  };

  return <>{renderField()}</>;
};
export default DynamicInput;
