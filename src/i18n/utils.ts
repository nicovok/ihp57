import type { GetStaticPaths } from 'astro';
import { ui, defaultLang, type Language } from './ui';

export type MultiLang<T> = Record<Language, T>;

export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in ui) return lang as Language;
    return defaultLang;
}

export function useTranslations(lang: Language) {
    return function t(key: keyof (typeof ui)[typeof defaultLang]) {
        return ui[lang][key] || ui[defaultLang][key] || '';
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
