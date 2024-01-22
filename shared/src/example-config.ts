import { SubmissionMethod } from "./enums";
import { YeFormConfig } from "@/types.ts";

export const example: YeFormConfig = {
  rows: [
    {
      fields: [
        {
          name: "checkbox",
          type: "checkbox",
          label: {
            default: "Checkbox",
            translations: {
              fr: { translated: true, value: "Checkbox" },
              it: { translated: true, value: "Checkbox" },
              en: { translated: true, value: "Checkbox" },
            },
          },
          required: false,
          layout: { spanMobile: 3, spanDesktop: 3 },
        },
      ],
    },
    {
      fields: [
        {
          name: "dob",
          type: "date",
          label: {
            default: "Geburtsdatum",
            translations: {
              fr: { translated: true, value: "Date de naissance" },
              it: { translated: true, value: "Data di nascita" },
              en: { translated: true, value: "Date of birth" },
            },
          },
          required: false,
          layout: { spanMobile: 3, spanDesktop: 3 },
          tooltip: {
            default: "Geburtsdatum",
            translations: {
              fr: { translated: true, value: "Date de naissance" },
              it: { translated: true, value: "Data di nascita" },
              en: { translated: true, value: "Date of birth" },
            },
          },
        },
      ],
    },
    {
      fields: [
        {
          name: "title",
          type: "select",
          label: {
            default: "Anrede",
            translations: {
              fr: { translated: true, value: "Civilité" },
              it: { translated: true, value: "Civiltà" },
              en: { translated: true, value: "Title" },
            },
          },
          required: false,
          options: [
            {
              name: {
                default: "Herr",
                translations: {
                  fr: { translated: true, value: "Monsieur" },
                  it: { translated: true, value: "Signore" },
                  en: { translated: true, value: "Mr" },
                },
              },
              value: "mr",
            },
            {
              name: {
                default: "Frau",
                translations: {
                  fr: { translated: true, value: "Madame" },
                  it: { translated: true, value: "Signora" },
                  en: { translated: true, value: "Mrs" },
                },
              },
              value: "mrs",
            },
            {
              name: {
                default: "Divers",
                translations: {
                  fr: { translated: true, value: "Divers" },
                  it: { translated: true, value: "Diverso" },
                  en: { translated: true, value: "Other" },
                },
              },
              value: "other",
            },
          ],
          layout: {
            spanMobile: 3,
            spanDesktop: 3,
          },
        },
      ],
    },
    {
      fields: [
        {
          name: "theme",
          type: "radio",
          label: {
            default: "Theme",
            translations: {
              fr: { translated: true, value: "Thème" },
              it: { translated: true, value: "Tema" },
              en: { translated: true, value: "Theme" },
            },
          },
          required: false,
          options: [
            {
              name: {
                default: "Hell",
                translations: {
                  fr: { translated: true, value: "Clair" },
                  it: { translated: true, value: "Chiaro" },
                  en: { translated: true, value: "Light" },
                },
              },
              value: "light",
            },
            {
              name: {
                default: "Dunkel",
                translations: {
                  fr: { translated: true, value: "Sombre" },
                  it: { translated: true, value: "Scuro" },
                  en: { translated: true, value: "Dark" },
                },
              },
              value: "dark",
            },
            {
              name: {
                default: "System",
                translations: {
                  fr: { translated: true, value: "Système" },
                  it: { translated: true, value: "Sistema" },
                  en: { translated: true, value: "System" },
                },
              },
              value: "system",
            },
          ],
          layout: {
            spanMobile: 3,
            spanDesktop: 6,
          },
        },
      ],
    },
    {
      fields: [
        {
          name: "firstName",
          type: "text",
          label: {
            default: "Vorname",
            translations: {
              fr: { translated: true, value: "Prénom" },
              it: { translated: true, value: "Nome" },
              en: { translated: true, value: "First name" },
            },
          },
          required: false,
          validators: {
            min: 1,
          },
          placeholder: {
            default: "Vorname",
            translations: {
              fr: { translated: true, value: "Prénom" },
              it: { translated: true, value: "Nome" },
              en: { translated: true, value: "First name" },
            },
          },

          layout: {
            spanMobile: 3,
            spanDesktop: 3,
          },
        },
        {
          name: "lastName",
          type: "text",
          label: {
            default: "Nachname",
            translations: {
              fr: { translated: true, value: "Nom" },
              it: { translated: true, value: "Cognome" },
              en: { translated: true, value: "Last name" },
            },
          },
          required: false,
          validators: {
            min: 1,
          },
          placeholder: {
            default: "Nachname",
            translations: {
              fr: { translated: true, value: "Nom" },
              it: { translated: true, value: "Cognome" },
              en: { translated: true, value: "Last name" },
            },
          },
          layout: {
            spanMobile: 3,
            spanDesktop: 3,
          },
        },
      ],
    },
    {
      fields: [
        {
          name: "address",
          type: "text",
          label: {
            default: "Adresse",
            translations: {
              fr: { translated: true, value: "Adresse" },
              it: { translated: true, value: "Indirizzo" },
              en: { translated: true, value: "Address" },
            },
          },
          required: false,
          placeholder: {
            default: "Adresse",
            translations: {
              fr: { translated: true, value: "Adresse" },
              it: { translated: true, value: "Indirizzo" },
              en: { translated: true, value: "Address" },
            },
          },
          layout: {
            spanMobile: 3,
            spanDesktop: 4,
          },
        },
        {
          name: "number",
          type: "number",
          label: {
            default: "Nummer",
            translations: {
              fr: { translated: true, value: "Numéro" },
              it: { translated: true, value: "Numero" },
              en: { translated: true, value: "Number" },
            },
          },
          required: false,
          placeholder: {
            default: "Nummer",
            translations: {
              fr: { translated: true, value: "Numéro" },
              it: { translated: true, value: "Numero" },
              en: { translated: true, value: "Number" },
            },
          },
          layout: {
            spanMobile: 3,
            spanDesktop: 2,
          },
        },
      ],
    },
    {
      fields: [
        {
          name: "email",
          type: "email",
          label: {
            default: "Email",
          },
          placeholder: {
            default: "email@test.com",
          },
          required: true,
          layout: {
            spanMobile: 3,
            spanDesktop: 6,
          },
        },
      ],
    },
  ],
  restEndpoint: "someotherendpoint.com",
  buttonText: {
    default: "Senden",
    translations: {
      de: { translated: true, value: "Senden" },
      fr: { translated: true, value: "Envoyer" },
      it: { translated: true, value: "Invia" },
      en: { translated: true, value: "Send" },
    },
  },
  emailConfig: {
    sender: "Peter",
    internalRecipient: "test@youengineering.ch",
    internalSubject: "Neuer User",
    internalTemplate:
      "{{firstname}} {{lastname}} hat sich angemeldet. {{title}}",
    confirmationRecipientField: "email",
    confirmationSubject: {
      default: "Anmeldung {{firstname}} {{lastname}}",
      translations: {
        en: {
          translated: true,
          value: "Registration {{firstname}} {{lastname}}",
        },
        fr: {
          translated: true,
          value: "Inscription {{firstname}} {{lastname}}",
        },
        it: {
          translated: true,
          value: "Registrazione {{firstname}} {{lastname}}",
        },
      },
    },
    confirmationTemplate: {
      default: "Hello {{firstname}} {{lastname}}. Thank you for registering.",
      translations: {
        en: {
          translated: true,
          value: "Hello {{firstname}} {{lastname}}. Thank you for registering.",
        },
        fr: {
          translated: true,
          value:
            "Bonjour {{firstname}} {{lastname}}. Merci de vous être inscrit.",
        },
        it: {
          translated: true,
          value:
            "Ciao {{firstname}} {{lastname}}. Grazie per esserti registrato.",
        },
      },
    },
  },
  submissionMethod: SubmissionMethod.email,
};
