<script setup lang="ts">
import { SelectIcon, SelectTrigger, type SelectTriggerProps } from "radix-vue";
import { ChevronDownIcon } from "@radix-icons/vue";
import { cn } from "@/lib/utils";

const props = withDefaults(
  defineProps<SelectTriggerProps & { class?: string; invalid?: boolean }>(),
  {
    class: "",
    invalid: false,
  },
);
</script>

<template>
  <SelectTrigger
    data-ye-element="select"
    v-bind="props"
    :class="[
      cn(
        'flex h-9 w-full items-center justify-between rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-800 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus:ring-slate-300',
        props.class,
      ),
      props.invalid
        ? '!ring-destructive ring-2 placeholder:!text-destructive'
        : '',
    ]"
  >
    <slot />
    <SelectIcon as-child>
      <ChevronDownIcon class="w-4 h-4 opacity-50" />
    </SelectIcon>
  </SelectTrigger>
</template>
