import type { GetStaticPaths } from "astro";
import { ui, defaultLang } from "./ui";

export type MultiLang<T> = Record<keyof typeof ui, T>;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang] | string) {
    return ui[lang][key] || ui[defaultLang][key] || "";
  };
}

export function staticPathsForMultilang() {
  return (() => {
    return Object.keys(ui).map((lang) => ({
      params: { lang },
      props: { lang },
    }));
  }) satisfies GetStaticPaths;
}
