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
    name: { hu: "Fekete Hosszúujjú Póló", en: "Black Long Sleeve T-Shirt" },
    img: "/images/products/sweater-black.png",
  },
  {
    name: { hu: "Piros Hosszúujjú Póló", en: "Red Long Sleeve T-Shirt" },
    img: "/images/products/sweater-red.png",
  },
  {
    name: { hu: "Fehér Edzés Póló", en: "White T-Shirt" },
    img: "/images/products/tshirt-white.png",
  },
  {
    name: { hu: "Sárga Edzés Póló", en: "Yellow T-Shirt" },
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
    name: { hu: "Téli Sapka 2", en: "Beanie 2" },
    img: "/images/products/beanie2.png",
  },
  {
    name: { hu: "Téli Sapka 3", en: "Beanie 3" },
    img: "/images/products/beanie3.png",
  },
  {
    name: { hu: "Baseball Sapka", en: "Baseball Hat" },
    img: "/images/products/baseball.png",
  },
  {
    name: { hu: "Babzsák", en: "Beanbag" },
    img: "/images/products/baseball.png",
  },
];
