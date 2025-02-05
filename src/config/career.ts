import type { MultiLang } from 'src/i18n/utils';

export type CareerPackage = {
    name: MultiLang<string>;
    price: string;
    points: MultiLang<string[]>;
    regularity: 'monthly' | 'one-time';
};

export const consultationPackage: CareerPackage = {
    name: {
        hu: 'Alap Konzultációs Csomag',
        en: 'Basic Consultation Package',
    },
    price: '25.000',
    regularity: 'one-time',
    points: {
        hu: [
            'Kezdeti konzultáció',
            'Mérkőzés videó elemzés (külső videó elemzővel)',
            'Egyéni fejlesztési terv kidolgozása az elemzés alapján',
            'Játékos képességek felmérése (pl. NHL összehasonlítási lista)',
        ],
        en: [
            'Initial consultation',
            'Match video analysis (with an external video analyst)',
            'Development of an individual development plan based on the analysis',
            'Player skill assessment (e.g., NHL comparison list)',
        ],
    },
};

export const careerPackages: CareerPackage[] = [
    {
        name: { hu: 'Kis Csomag', en: 'Small Package' },
        price: '30.000',
        regularity: 'monthly',
        points: {
            hu: [
                'Minimum 3 hónapos elköteleződés',
                'Folyamatos játékos követés',
                '1 mérkőzés elemzés havonta',
                'Egyéni fejlesztési terv és játékos menedzsment',
                'Szakmai tanácsadás',
                'Őszinte, számokkal mérhető válaszok!',
            ],
            en: [
                'Minimum 1-year commitment',
                'Continuous player monitoring',
                '1 match analysis',
                'Player and parent management',
                '1 Mental Training (Mental Coaching)',
                'Player development monitoring',
                'Professional advice',
                'Honest, measurable feedback with data!',
            ],
        },
    },
    {
        name: { hu: 'Közepes Csomag', en: 'Medium Package' },
        price: '60.000',
        regularity: 'monthly',
        points: {
            hu: [
                'Az alapcsomag minden eleme',
                'Sporttáplálkozás terv',
                'Mentális tréning (Mental Coaching)',
            ],
            en: [
                'Minimum 1-year commitment',
                'Continuous player monitoring',
                'Building an overseas career',
                '1 match analysis',
                '1 Mental Training (Mental Coaching)',
                'Trial games at home and abroad',
                'Player and parent management, match viewing, professional advice',
                'School and club recommendations',
                'Honest, measurable feedback with data!',
                'Monitoring',
            ],
        },
    },
    {
        name: { hu: 'Nagy Csomag', en: 'Large Package' },
        price: '90.000',
        regularity: 'monthly',
        points: {
            hu: [
                'A közepes csomag minden eleme',
                'Játékos fejlődés monitorozása és nyomon követés',
                'Ügynökségi szolgáltatások (karrier menedzsment, kapcsolatok, lehetőségek)',
            ],
            en: [
                'Minimum 1-year commitment',
                'Continuous player monitoring',
                'Building an overseas career',
                '2 match analyses',
                '2 Mental Trainings (Mental Coaching)',
                'Trial games at home and abroad',
                'Player and parent management, match viewing, professional advice',
                'School and club recommendations',
                'Travel, accommodation, and meals arrangement',
                'Honest, measurable feedback with data!',
                'Monitoring',
            ],
        },
    },
];
