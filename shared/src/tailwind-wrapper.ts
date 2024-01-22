import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
import animate from "tailwindcss-animate";
import forms from "@tailwindcss/forms";

export function yeFormTW(twConfig: Config) {
  if (!twConfig.safelist) {
    twConfig.safelist = [];
  }

  twConfig.safelist.push({
    pattern: /col-span-(1|2|3|4|5|6|7|8|9|10|11|12)/,
    variants: ["sm", "md"],
  });

  const yePlugin = plugin(({ addVariant }) => {
    addVariant("ye-item", '& [data-ye-element="item"]');
    addVariant("ye-button", '& [data-ye-element="button"]');
    addVariant("ye-label", '& [data-ye-element="label"]');
    addVariant("ye-input", '& [data-ye-element="input"]');
    addVariant("ye-checkbox", '& [data-ye-element="checkbox"]');
    addVariant("ye-select", '& [data-ye-element="select"]');
    addVariant("ye-date", '& [data-ye-element="date"]');
    addVariant("ye-radio", '& [data-ye-element="radio"]');
    addVariant(
      "ye-radio-checked",
      '& [data-ye-element="radio"]:has([data-state="checked"])',
    );
    addVariant("ye-error", '& [data-ye-element="error"]');
  });

  if (!twConfig.plugins) {
    twConfig.plugins = [];
  }

  twConfig.plugins.push(yePlugin, animate, forms);

  return twConfig;
}
