<script lang="ts" setup>
import { Label, type LabelProps } from "radix-vue";
import { useFormField } from "./useFormField";
import { cn } from "@/lib/utils";

defineProps<LabelProps>();

const { error, formItemId } = useFormField();
</script>

<template>
  <Label
    :class="
      cn(
        'block text-sm tracking-tight font-medium text-slate-950 text-left dark:text-slate-50',
        error && 'text-red-500 dark:text-red-900',
        $attrs.class ?? '',
      )
    "
    :for="formItemId"
  >
    <slot />
  </Label>
</template>
