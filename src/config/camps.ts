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
  {
    name: {
      hu: "Kapus Táborok",
      en: "Goalie Camps",
    },
    description: {
      hu: "Kapus fejlesztő tábor két turnusban, öt napon át. Június 23. - Június 27. és Június 30. - Július 4.",
      en: "Goalkeeper development camp in two sessions over five days. June 23 - June 27 and 30 June - 4 July",
    },
    image: "/images/camps/goalie.jpg",
    link: "https://forms.gle/yf3iXiQ8aSFfvJzq7",
  },
];
