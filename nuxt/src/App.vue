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
  <div class="flex justify-center w-full h-full">
    <div class="flex flex-col items-center justify-center w-1/2">
      <h1 class="text-5xl">Nuxt</h1>
      <YeForm
        :config="example"
        :emailHandler="handleEmail"
        :restHandler="handleRestCall"
        language="de"
        class="ye-radio-checked:bg-slate-50"
      />
    </div>
  </div>
</template>
