import { type APIRoute } from 'astro';
import { resend } from 'src/lib/email';

import { contactFormSchema } from 'src/lib/schemas/contact-form';

export const POST: APIRoute = async ({ request }) => {
    const body = await request.json();
    const parseResult = contactFormSchema.safeParse(body);
    if (!parseResult.success)
        return new Response(null, { status: 400 });

    const fields = parseResult.data;

    const { error: err1 } = await resend.emails.send({
        from: 'Kapcsolatfelvétel <contact@ihp57.mdrrr.lol>',
        to: [fields.email],
        subject: 'Kapcsolatfelvétel visszajelzés.',
        text: `Kedves ${fields.name},

Köszönjük, hogy kitöltötted a kapcsolatfelvételi űrlapunkat!
        
Hamarosan felvesszük Veled a kapcsolatot, hogy megtervezzük az edzéseidet.
Addig is, ha bármilyen kérdése van, ne habozz, keress fel minket az alábbi telefonszámon: +36706157577

Üdvözlettel, Orbán Attila
https://icehockeypro57.com
        `,
    });

    const { error: err2 } = await resend.emails.send({
        from: 'Kapcsolatfelvétel <contact@ihp57.mdrrr.lol>',
        to: [
            'nicolas.prouteau.2007@gmail.com',
            // 'attilaorban57@gmail.com',
        ],
        subject: 'ŰRLAPKITÖLTÉS | ' + fields.name,
        text: `
[Név]:
${fields.name}

[Mit kell tudni rólad?]:
${fields.description}

[E-mail]:
${fields.email}

[Telefonszám]:
${fields.phone}
`,
    });

    console.log(err1, err2);
    if (err1 || err2) {
        return new Response(null, { status: 500 });
    }

    return new Response(null, { status: 200 });
};
