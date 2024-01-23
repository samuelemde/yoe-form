<script setup lang="ts">
import { Email, example } from "@yoe-form/shared";
import YeForm from "@/components/YeForm.vue";

const handleEmail = async (
  _values: any,
  _internalEmail: Email,
  confirmationEmail?: Email,
) => {
  alert(JSON.stringify(confirmationEmail));
};

const handleRestCall = async (url: string, values: any) => {
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
