import { Resend } from "resend";

if (!import.meta.env.RESEND_KEY) console.error("Resend key not set!!");

export const resend = new Resend(import.meta.env.RESEND_KEY);
