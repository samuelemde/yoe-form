<script setup lang="ts">
import { Email, Language, YeFormConfig } from "@yoe-form/shared";
import YeFormCustom from "@/components/YeFormCustom.vue";
import { Button } from "@/components/ui/button";
import DynamicInput from "@/components/DynamicInput.vue";

export interface YeFormProps {
  config: YeFormConfig;
  emailHandler?: (
    values: unknown,
    internalEmail: Email,
    confirmationEmail?: Email,
  ) => Promise<void>;
  restHandler?: (url: string, values: unknown) => Promise<void>;
  language?: Language;
}

const props = defineProps<YeFormProps>();
</script>

<template>
  <YeFormCustom v-bind="props" :button="Button" :dynamicInput="DynamicInput" />
</template>
