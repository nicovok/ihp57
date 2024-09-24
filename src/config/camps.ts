import type { MultiLang } from "../i18n/utils";

type Camp = {
  name: MultiLang<string>;
  description: MultiLang<string>;
  link: string;
  image?: string;
};

export const camps: Camp[] = [
  {
    name: {
      hu: "Mini Campek",
      en: "Mini Camps",
    },
    description: {
      hu: "Egész évben futó képzéseink.",
      en: "Two-day camps every weekend.",
    },
    link: "https://docs.google.com/forms/d/e/1FAIpQLSc8d67_lrYK-CvRNr9yQNG3N61QBTRh_BzNZRV8bhJyJl78Lw/viewform",
  },
];
