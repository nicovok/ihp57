import type { MultiLang } from '../i18n/utils';

type Camp = {
    name: MultiLang<string>;
    description: MultiLang<string>;
    link: string;
    image?: string;
};

export const camps: Camp[] = [
    {
        name: {
            hu: 'Hétvégi Mini Campek',
            en: 'Weekend Mini Camps',
        },
        description: {
            hu: 'Egész évben hétvégi képzések.',
            en: 'Two-day camps every weekend.',
        },
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSc8d67_lrYK-CvRNr9yQNG3N61QBTRh_BzNZRV8bhJyJl78Lw/viewform',
    },
    {
        name: {
            hu: '2024 Nyári tábor',
            en: '2024 Summer camp',
        },
        description: {
            hu: 'Jelentkezés 2024-es nyári táborunkba.',
            en: 'Registration for our 2024 summer camp.',
        },
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSePSED4uTUqm4NUmsgYxkZg92nzSuA8iTFKLvA3-SRJbMFiSQ/viewform?usp=sharing',
        image: '/images/camps/summer.jpg',
    },
];
