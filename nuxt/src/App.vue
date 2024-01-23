<script setup lang="ts">
import type { EmailHandler, RestHandler } from "@yoe-form/shared";
import { example } from "@yoe-form/shared";
import YeForm from "@/components/YeForm.vue";

const handleEmail: EmailHandler = async (
  _values,
  _internalEmail,
  confirmationEmail,
) => {
  alert(JSON.stringify(confirmationEmail));
};

const handleRestCall: RestHandler = async (values, url) => {
  alert(JSON.stringify({ url, ...values }));
};
</script>

<template>
  <div class="flex h-full w-full justify-center">
    <div class="flex w-1/2 flex-col items-center justify-center">
      <h1 class="text-5xl">Nuxt</h1>
      <YeForm
        :config="example"
        :emailHandler="handleEmail"
        :restHandler="handleRestCall"
        language="de"
        class="ye-button:bg-green-600 ye-radio-checked:bg-slate-50"
      />
    </div>
  </div>
</template>
