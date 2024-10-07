import type { MultiLang } from "src/i18n/utils";

type Product = {
  name: MultiLang<string>;
  img: string;
};

export const products: Product[] = [
  {
    name: { hu: "Fekete Mez", en: "Black Jersey" },
    img: "/images/products/jersey-black.png",
  },
  {
    name: { hu: "Piros Mez", en: "Red Jersey" },
    img: "/images/products/jersey-red.png",
  },
  {
    name: { hu: "Fekete Pulcsi", en: "Black Hoodie" },
    img: "/images/products/hoodie-black.png",
  },
  {
    name: { hu: "Piros Pulcsi", en: "Red Hoodie" },
    img: "/images/products/hoodie-red.png",
  },
  {
    name: { hu: "Fekete Galléros Pulcsi", en: "Black Sweater" },
    img: "/images/products/sweater-black.png",
  },
  {
    name: { hu: "Piros Galléros Pulcsi", en: "Red Sweater" },
    img: "/images/products/sweater-red.png",
  },
  {
    name: { hu: "Fehér Póló", en: "White T-Shirt" },
    img: "/images/products/tshirt-white.png",
  },
  {
    name: { hu: "Sárga Póló", en: "Yellow T-Shirt" },
    img: "/images/products/tshirt-yellow.png",
  },
  {
    name: { hu: "Rövidnadrág", en: "Short" },
    img: "/images/products/short.png",
  },
  {
    name: { hu: "Melegítő Nadrág", en: "Sweatpants" },
    img: "/images/products/sweatpants-black.png",
  },
  {
    name: { hu: "Fekete Törölköző", en: "Towel Black" },
    img: "/images/products/towel-black.png",
  },
  {
    name: { hu: "Piros Törölköző", en: "Red Towel" },
    img: "/images/products/towel-red.png",
  },
  {
    name: { hu: "Hátizsák", en: "Backpack" },
    img: "/images/products/backpack.png",
  },
  {
    name: { hu: "Kabát", en: "Jacket" },
    img: "/images/products/jacket.png",
  },
  {
    name: { hu: "Téli Sapka", en: "Beanie" },
    img: "/images/products/beanie.png",
  },
  {
    name: { hu: "Baseball Sapka", en: "Baseball Hat" },
    img: "/images/products/baseball.png",
  },
];
