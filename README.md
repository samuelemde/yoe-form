# Vue Form Builder

A flexible form builder using shadcn/vue components as a default.

## Getting Started

Follow these steps to get the project up and running on your local machine.

### Installation
```shell
npm install
```

### Build
```shell
npm run build
```

### Development
To start a development server, which will render the component in the browser, run the following command:
```shell
npm run dev
```

## Consuming the Library
### Locally
To consume the library locally, clone the repo, install the dependencies and build the project. 
Then run this command to install the local lib as a dependency in your project:
```shell
npm install </path/to/vue-form-builder>
```

### Basic Usage
There are two components exported from the lib: YeForm and YeFormCustom.
YeForm comes with all the default components and is ready to use out of the box.
If you want to use your own components, you can use YeFormCustom and pass in your own button and input components.


### Nuxt
```vue

<script setup lang="ts">
  import {type EmailHandler, YeForm, YeFormCustom} from "@yoe-form/nuxt";

  const handleEmail: EmailHandler = async (values, internalEmail, confirmationEmail) => {
    alert(values);
  };
</script>

<template>
  <div class="mx-96">
    <YeForm
      :config="config"
      :emailHandler="handleEmail"
      language="de"
    />
    <YeFormCustom 
      :config="config"  
      :emailHandler="handleEmail"
      language="de"
      button="CustomButton"
      dynamicInput="CustomDynamicInput"
    />
  </div>
</template>  
```

### React
```typescript jsx
import {type EmailHandler, YeForm, YeFormCustom} from "@yoe-form/react";

const Form = () => {
    const handleEmail: EmailHandler = async (values, internalEmail, confirmationEmail) => {
        alert(values);
    };
    
  return (
    <>
      <YeForm
        config={config}
        emailHandler={handleEmail}
        language="de"
        className="ye-button:bg-red-500 ye-button:hover:bg-red-300 ye-item:space-y-4 ye-radio-checked:border-blue-500"
      />
      <YeFormCustom
          config={config}
          emailHandler={handleEmail}
          language="de"
          className="ye-button:bg-red-500 ye-button:hover:bg-red-300 ye-item:space-y-4 ye-radio-checked:border-blue-500"
          button={CustomButton}
          dynamicInput={CustomDynamicInput}
      />
    </>
   ) 
}
   
```

### Configuration
The YeForm accepts a couple of properties: 
```typescript
type YeFormProps = {
    config: FormConfig, // the actual config including all input fields
    emailHandler?: (emailConfig: EmailConfig, values: any) => Promise<void>, // a function that is called when the form is submitted and submission type is "email"
    restHandler?: (url: string, values: Record<string, unknown>,) => Promise<void>; // a function that is called when the form is submitted and submission type is "rest"
    language?: "en" | "de" | "fr" | "it", // the language of the form
    button?: Component, // optional button Component to be used for the submit button
    dyanmicInput?: Component, // optional dynamic input Component to be used for the dynamic input (see DyanmicInput)
    showLabels?: boolean, // whether to show labels for the input fields
    showRequiredStar?: boolean, // whether to show a star next to required input fields
}
```

## Styling
To style the form components load the corresponding css file. 
```typescript
import "@yoe-form/react/style.css";
```
#### Nuxt
Add the file to the css array in your nuxt config.
```typescript
export default defineNuxtConfig({
  css: ["@yoe-form/nuxt/style.css"],
  modules: [],
});

```
### Tailwind
The library exports a tailwind wrapper that includes additional variants that can be used to add some basic styling to the form.
It also adds some grid classes to the safelist to make sure the form is displayed correctly.
```javascript
import {yeFormTW} from '@yoe-form/react'

/** @type {import('tailwindcss').Config} */
export default yeFormTW({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
})
```

### Variants
The following variants are available:

| Variant          | Description                          |
|------------------|--------------------------------------|
| ye-item          | applied to all items in the form.    |
| ye-button        | applied to the submit button.        |
| ye-label         | applied to all labels.               |
| ye-input         | applied to all fields of type input. |
| ye-checkbox      | applied to all checkboxes.           |
| ye-switch        | applied to all switches.             |
| ye-select        | applied to the select trigger.       |
| ye-radio         | applied to the radio-group options.  |
| ye-radio-checked | applied to the selected radio item.  |
| ye-date          | applied to the date picker trigger.  |
| ye-error         | applied to the error message.        |

