<script setup lang="ts">
import { useForm } from "vee-validate";
import { setLocale } from "yup";
import { type Component } from "vue";
import { Button } from "@/components/ui/button";
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { vAutoAnimate } from "@formkit/auto-animate/vue";
import {
  buildEmails,
  buildFormSchema,
  Email,
  errorTranslations,
  getGridClasses,
  getTranslation,
  Language,
  YeFormConfig,
} from "@yoe-form/shared";
import { cn } from "@/lib/utils.ts";

export interface YeFormProps {
  config: YeFormConfig;
  emailHandler?: (
    values: unknown,
    internalEmail: Email,
    confirmationEmail?: Email,
  ) => Promise<void>;
  restHandler?: (url: string, values: unknown) => Promise<void>;
  language?: Language;
  button: Component;
  dynamicInput: Component;
}

const { config, emailHandler, restHandler, language } =
  defineProps<YeFormProps>();
const {
  rows,
  emailConfig,
  restEndpoint,
  buttonText,
  submissionMethod,
  disableLabels,
  disableRequiredStars,
} = config;

// translate error messages
if (language && language !== "en") {
  setLocale(errorTranslations[language]);
}

const form = useForm({
  validationSchema: buildFormSchema(rows),
});

const onSubmit = form.handleSubmit(async (values) => {
  if (submissionMethod === "email" && emailConfig && emailHandler) {
    const { internalEmail, confirmationEmail } = buildEmails(
      emailConfig,
      values,
      language,
    );
    return emailHandler(values, internalEmail, confirmationEmail);
  } else if (submissionMethod === "rest" && restEndpoint && restHandler) {
    return restHandler(restEndpoint, values);
  }
});
</script>

<template>
  <form
    :class="cn('my-4 space-y-4', $attrs.class ?? '')"
    @submit.prevent="onSubmit"
  >
    <div
      v-for="(row, index) in rows"
      :key="index"
      class="grid grid-cols-3 gap-4 md:grid-cols-6"
    >
      <div
        v-for="(field, index) in row.fields"
        :key="index"
        :class="getGridClasses(field.layout)"
      >
        <FormField
          v-slot="{ componentField, value, handleChange }"
          :name="field.name"
          :type="field.type"
        >
          <FormItem v-auto-animate data-ye-element="item">
            <div class="flex items-center gap-4">
              <FormLabel v-if="!disableLabels" data-ye-element="label"
                >{{ getTranslation(field.label, language) }}
                <span
                  v-if="field.required && !disableRequiredStars"
                  class="text-red-500"
                  >*</span
                >
              </FormLabel>
              <div v-if="field.tooltip">
                <TooltipProvider :delay-duration="50">
                  <Tooltip>
                    <TooltipTrigger as-child>
                      <Button
                        variant="outline"
                        size="xs"
                        class="cursor-default rounded-full bg-slate-200"
                        @click.prevent
                        >?</Button
                      >
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{{ getTranslation(field.tooltip, language) }}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
            <component
              :is="dynamicInput"
              :field="field"
              :language="language"
              :componentField="componentField"
              :value="value"
              :handleChange="handleChange"
            />
            <FormMessage data-ye-element="error" />
          </FormItem>
        </FormField>
      </div>
    </div>
    <component :is="button" type="submit" data-ye-element="button">
      {{ getTranslation(buttonText, language) }}
    </component>
  </form>
</template>
