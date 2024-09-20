import type { MultiLang } from 'src/i18n/utils';

type Sponsor = {
    img: string;
    name: MultiLang<string>;
    url: string;
};

export const sponsors: Sponsor[] = [
    {
        img: '/images/sponsors/bauer.svg',
        name: {
            hu: 'Bauer',
            en: 'Bauer',
        },
        url: 'https://www.bauer.com/',
    },
    {
        img: '/images/sponsors/marcziskate.jpg',
        name: {
            hu: 'Marczi Skate',
            en: 'Marczi Skate',
        },
        url: 'https://www.marcziskate.hu/',
    },
    {
        img: '/images/sponsors/gloria.png',
        name: {
            hu: 'Glória cipő',
            en: 'Glória shoes',
        },
        url: 'http://gloriacipo.hu/',
    },
];
