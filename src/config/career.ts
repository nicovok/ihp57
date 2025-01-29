import type { MultiLang } from "src/i18n/utils";

export type CareerPackage = {
  name: MultiLang<string>;
  price: string;
  points: MultiLang<string[]>;
};

export const careerPackages: CareerPackage[] = [
  {
    name: { hu: "Kis Csomag", en: "Small Package" },
    price: "20.000",
    points: {
      hu: [
        "Minimum 1 év elkötelezettség",
        "Folyamatos játékos követés",
        "1 mérkőzés elemzés",
        "Játékos, szülő managelés",
        "1 Mental Tr. (Mentális tréning)",
        "Játékos fejlődés monitorozása",
        "Szakmai tanácsadás",
        "Őszinte, számokkal mérhető válaszok!",
      ],
      en: [
        "Minimum 1-year commitment",
        "Continuous player monitoring",
        "1 match analysis",
        "Player and parent management",
        "1 Mental Training (Mental Coaching)",
        "Player development monitoring",
        "Professional advice",
        "Honest, measurable feedback with data!",
      ],
    },
  },
  {
    name: { hu: "Közepes Csomag", en: "Medium Package" },
    price: "25.000",
    points: {
      hu: [
        "Minimum 1 év elkötelezettség",
        "Folyamatos játékos követés",
        "Külföldi karrier előépítése",
        "1 mérkőzés elemzés",
        "1 Mental Tr. (Mentális tréning)",
        "Próbajáték itthon, külföld",
        "Játékos, szülő managelés, mérkőzés nézés, szakmai tanácsadás",
        "Iskola, klubbok ajánlása",
        "Őszinte, számokkal mérhető válaszok!",
        "Monitorozás",
      ],
      en: [
        "Minimum 1-year commitment",
        "Continuous player monitoring",
        "Building an overseas career",
        "1 match analysis",
        "1 Mental Training (Mental Coaching)",
        "Trial games at home and abroad",
        "Player and parent management, match viewing, professional advice",
        "School and club recommendations",
        "Honest, measurable feedback with data!",
        "Monitoring",
      ],
    },
  },
  {
    name: { hu: "Nagy Csomag", en: "Large Package" },
    price: "35.000",
    points: {
      hu: [
        "Minimum 1 év elkötelezettség",
        "Folyamatos játékos követés",
        "Külföldi karrier előépítése",
        "2 mérkőzés elemzés",
        "2 Mental Tr. (Mentális tréning)",
        "Próbajáték itthon, külföld",
        "Játékos, szülő managelés, mérkőzés nézés, szakmai tanácsadás",
        "Iskola, klubbok ajánlása",
        "Utazás, szállás, ellátás szervezése",
        "Őszinte, számokkal mérhető válaszok!",
        "Monitorozás",
      ],
      en: [
        "Minimum 1-year commitment",
        "Continuous player monitoring",
        "Building an overseas career",
        "2 match analyses",
        "2 Mental Trainings (Mental Coaching)",
        "Trial games at home and abroad",
        "Player and parent management, match viewing, professional advice",
        "School and club recommendations",
        "Travel, accommodation, and meals arrangement",
        "Honest, measurable feedback with data!",
        "Monitoring",
      ],
    },
  },
];
