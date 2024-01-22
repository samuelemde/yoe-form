<script setup lang="ts">
import {
  RadioGroupIndicator,
  RadioGroupItem,
  type RadioGroupItemProps,
} from "radix-vue";
import { CheckIcon } from "@radix-icons/vue";
import { cn } from "@/lib/utils";

const props = defineProps<RadioGroupItemProps & { class?: string }>();
</script>

<template>
  <RadioGroupItem
    v-bind="props"
    :class="
      cn(
        'aspect-square h-4 w-4 rounded-full border border-slate-200 border-slate-900 text-slate-900 shadow focus:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:border-slate-50 dark:text-slate-50 dark:focus-visible:ring-slate-300',
        props.class,
      )
    "
  >
    <RadioGroupIndicator
      :class="cn('flex items-center justify-center', props.class)"
    >
      <CheckIcon class="h-3.5 w-3.5 fill-primary" />
    </RadioGroupIndicator>
  </RadioGroupItem>
</template>
