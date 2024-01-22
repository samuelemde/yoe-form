export const Language = {
  en: "en",
  de: "de",
  fr: "fr",
  it: "it",
} as const;

export type Language = keyof typeof Language;
