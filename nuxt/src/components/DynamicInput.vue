<script setup lang="ts">
import { Checkbox } from "./ui/checkbox";
import { FormControl, FormItem, FormLabel } from "./ui/form";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { Button } from "./ui/button";
import { CalendarIcon } from "@radix-icons/vue";
import { format } from "date-fns";
import { computed } from "vue";
import { getTranslation, Language, YeFormField } from "@yoe-form/shared";
import { cn } from "@/lib/utils.ts";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

export type DynamicInputProps = {
  field: YeFormField;
  language?: Language;
  componentField: any;
  value: any;
  handleChange: (value: any) => void;
};

const { field, language } = defineProps<DynamicInputProps>();

const placeholder = computed(() => getTranslation(field.placeholder, language));
</script>

<template>
  <template
    v-if="['text', 'email', 'password', 'number', 'url'].includes(field.type)"
  >
    <FormControl>
      <Input
        :type="field.type"
        v-bind="componentField"
        :placeholder="placeholder"
        data-ye-element="input"
      />
    </FormControl>
  </template>
  <template v-else-if="field.type === 'checkbox'">
    <FormControl>
      <Checkbox
        :checked="value"
        @update:checked="handleChange"
        v-bind="componentField"
        data-ye-element="checkbox"
      />
    </FormControl>
  </template>
  <template v-else-if="field.type === 'switch'">
    <FormControl>
      <Switch
        :checked="value"
        @update:checked="handleChange"
        v-bind="componentField"
        data-ye-element="switch"
      />
    </FormControl>
  </template>
  <template v-else-if="field.type === 'select'">
    <Select v-bind="componentField">
      <FormControl>
        <SelectTrigger>
          <SelectValue :placeholder="placeholder" />
        </SelectTrigger>
      </FormControl>
      <SelectContent>
        <SelectItem
          v-for="(option, index) in field.options"
          :value="option.value"
          :key="index"
        >
          {{ getTranslation(option.name, language) }}
        </SelectItem>
      </SelectContent>
    </Select>
  </template>
  <template v-else-if="field.type === 'radio'">
    <FormControl>
      <RadioGroup v-bind="componentField" class="flex gap-4">
        <FormItem v-for="(option, index) in field.options" :key="index">
          <FormLabel
            class="flex cursor-pointer gap-4 [&:has([data-state=checked])>div]:border-slate-400"
          >
            <div
              data-ye-element="radio"
              class="flex items-center gap-4 rounded-md border px-4 py-2"
            >
              <FormControl>
                <RadioGroupItem :value="option.value" />
              </FormControl>

              {{ getTranslation(option.name, language) }}
            </div>
          </FormLabel>
        </FormItem>
      </RadioGroup>
    </FormControl>
  </template>
  <template v-else-if="field.type === 'date'">
    <Popover>
      <PopoverTrigger as-child>
        <FormControl>
          <Button
            variant="outline"
            :class="
              cn(
                'w-full pl-3 text-left font-normal',
                !value && 'text-muted-foreground',
              )
            "
            data-ye-element="date"
          >
            <span>{{ value ? format(value, "PPP") : placeholder }}</span>
            <CalendarIcon class="ml-auto h-5 w-5 opacity-50" />
          </Button>
        </FormControl>
      </PopoverTrigger>
      <PopoverContent class="p-0">
        <Calendar v-bind="componentField" />
      </PopoverContent> </Popover
  ></template>
  <template v-else-if="field.type === 'textarea'">
    <Textarea
      class="resize-none"
      rows="6"
      :placeholder="placeholder"
      data-ye-element="input"
    />
  </template>
</template>
