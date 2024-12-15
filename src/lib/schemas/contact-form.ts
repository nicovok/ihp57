import * as _z from 'zod';

const z = _z.default;

export const contactFormSchema = z.object(
    {
        name: z.string().min(5, 'formError.minlen'),
        description: z.string(),
        email: z.string().email('formError.invalid'),
        phone: z.string().regex(/((\+36)|(06))\d{9}/, {
            message: 'formError.invalid',
        }),
    },
    {required_error: 'formError.required'}
);

export type ContactFormSchema = z.infer<
    typeof contactFormSchema
>;
