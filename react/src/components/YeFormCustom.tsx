import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { setLocale } from "yup";
import type { FC } from "react";
import {
  buildDefaultValues,
  buildEmails,
  buildFormSchema,
  errorTranslations,
  type FormValues,
  getGridClasses,
  getTranslation,
} from "@yoe-form/shared";
import { cn } from "@/lib/utils.ts";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip.tsx";
import { YeFormCustomProps } from "./YeForm.types.ts";

const YeForm: FC<YeFormCustomProps> = ({
  className,
  config,
  emailHandler,
  restHandler,
  language = "de",
  button,
  dynamicInput,
}) => {
  // set error language
  if (language && language !== "en") {
    setLocale(errorTranslations[language]);
  }

  const formSchema = buildFormSchema(config.rows);
  // Since FormField is using a controlled component, we need to provide a default value for all fields.
  const defaultValues = buildDefaultValues(config.rows);

  console.log("defaultValues", defaultValues);

  const form = useForm<FormValues>({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const onSubmit = form.handleSubmit(async (values) => {
    if (
      config.submissionMethod === "email" &&
      config.emailConfig &&
      emailHandler
    ) {
      const { internalEmail, confirmationEmail } = buildEmails(
        config.emailConfig,
        values,
        language,
      );
      return emailHandler(values, internalEmail, confirmationEmail);
    } else if (
      config.submissionMethod === "rest" &&
      config.restEndpoint &&
      restHandler
    ) {
      return restHandler(config.restEndpoint, values);
    }
  });
  const ButtonComponent = button;
  const DynamicInputComponent = dynamicInput;

  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className={cn("my-4 space-y-4", className ?? "")}
      >
        {config.rows.map((row, index) => (
          <div key={index} className="grid grid-cols-6 gap-4">
            {row.fields.map((yeField, index) => (
              <div key={index} className={getGridClasses(yeField.layout)}>
                <FormField
                  control={form.control}
                  name={yeField.name}
                  render={({ field }) => (
                    <FormItem data-ye-element="item">
                      <div className="flex items-center gap-4">
                        {!config.disableLabels && (
                          <FormLabel data-ye-element="label">
                            {getTranslation(yeField.label, language)}
                            {!config.disableRequiredStars &&
                              yeField.required && (
                                <span className="text-red-500"> *</span>
                              )}
                          </FormLabel>
                        )}
                        {yeField.tooltip && (
                          <TooltipProvider delayDuration={50}>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="xs"
                                  className="cursor-default rounded-full bg-slate-200"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  ?
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>
                                  {getTranslation(yeField.tooltip, language)}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        )}
                      </div>
                      <DynamicInputComponent
                        fieldConfig={yeField}
                        language={language}
                        field={field}
                      />
                      <FormMessage data-ye-element="error" />
                    </FormItem>
                  )}
                />
              </div>
            ))}
          </div>
        ))}
        <ButtonComponent type="submit" data-ye-element="button">
          {getTranslation(config.buttonText, language)}
        </ButtonComponent>
      </form>
    </Form>
  );
};

export default YeForm;
