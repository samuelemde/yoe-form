<script setup lang="ts">
import {
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  type SelectItemProps,
} from "radix-vue";
import { CheckIcon } from "@radix-icons/vue";
import { cn } from "@/lib/utils";

const props = defineProps<SelectItemProps & { class?: string }>();
</script>

<template>
  <SelectItem
    data-ye-element="YEYEYEY"
    v-bind="props"
    :class="
      cn(
        'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50',
        props.class,
      )
    "
  >
    <span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectItemIndicator>
        <CheckIcon class="h-4 w-4" />
      </SelectItemIndicator>
    </span>

    <SelectItemText>
      <slot />
    </SelectItemText>
  </SelectItem>
</template>
