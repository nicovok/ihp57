import { useForm } from "react-hook-form";
import {
  contactFormSchema,
  type ContactFormSchema,
} from "src/lib/schemas/contact-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { getLangFromUrl, useTranslations } from "src/i18n/utils";
import { useState } from "react";

const ContactForm = ({ lang }: { lang: "hu" | "en" }) => {
  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState(0);
  const t = useTranslations(lang);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = handleSubmit(async (fields) => {
    setPending(true);
    const res = await fetch("/api/contact-form", {
      method: "POST",
      body: JSON.stringify(fields),
    });

    setPending(false);
    setStatus(res.status);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="relative flex flex-col gap-5 mt-5 md:max-w-md p-2    "
    >
      {status == 200 && (
        <div className="absolute inset-0 w-full h-full backdrop-blur-sm flex flex-col text-center justify-center items-center">
          <div className="max-w-sm">
            <p className="font-bold uppercase text-xl">
              Köszönjük, hogy kitöltötted az űrlapot!
            </p>
            <p>
              Néhány napon belül felvesszük veled a kapcsolatot az általad
              megadott elérhetőségek egyikén.
            </p>
            <button
              className="px-3 py-2 border border-black mt-5"
              onClick={() => {
                setStatus(0);
                reset();
              }}
            >
              Vissza
            </button>
          </div>
        </div>
      )}
      {status > 200 && (
        <div className="absolute inset-0 w-full h-full backdrop-blur-sm flex flex-col text-center justify-center items-center">
          <div className="max-w-sm">
            <p className="font-bold uppercase text-xl">Hiba történt!</p>
            <p>
              Valamilyen hiba történt az űrlap beküldése közben. Kérlek próbáld
              újra később, vagy keress fel minket telefonon, vagy e-mailen.
            </p>
            <button
              className="px-3 py-2 border border-black mt-5"
              onClick={() => setStatus(0)}
            >
              Újrapróbálkozás
            </button>
          </div>
        </div>
      )}
      <div>
        <label className="font-medium">Neved</label>
        <input
          disabled={pending}
          className="shadow border border-black/70 py-1 px-2 outline-none bg-white w-full disabled:cursor-not-allowed disabled:opacity-50"
          {...register("name")}
        />
        {errors.name && (
          <p className="mt-1 text-red-600">{t(errors.name.message ?? "")}</p>
        )}
      </div>

      <div>
        <label className="font-medium">Mit kell rólad tudni?</label>
        <textarea
          disabled={pending}
          className="resize-none shadow border border-black/70 py-1 px-2 outline-none bg-white w-full disabled:cursor-not-allowed disabled:opacity-50"
          rows={4}
          {...register("description")}
        ></textarea>
        {errors.description && (
          <p className="mt-1 text-red-600">
            {t(errors.description.message ?? "")}
          </p>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-5">
        <div>
          <label className="font-medium">E-mail címed</label>
          <input
            disabled={pending}
            className="shadow border border-black/70 py-1 px-2 outline-none bg-white w-full disabled:cursor-not-allowed disabled:opacity-50"
            {...register("email")}
          />
          {errors.email && (
            <p className="mt-1 text-red-600">{t(errors.email.message ?? "")}</p>
          )}
        </div>
        <div>
          <label className="font-medium">Telefonszámod</label>
          <input
            disabled={pending}
            className="shadow border border-black/70 py-1 px-2 outline-none bg-white w-full disabled:cursor-not-allowed disabled:opacity-50"
            {...register("phone")}
          />
          {errors.phone && (
            <p className="mt-1 text-red-600">{t(errors.phone.message ?? "")}</p>
          )}
        </div>
      </div>
      <button
        disabled={pending}
        className="border border-black py-4 font-bold text-xl bg-white disabled:cursor-not-allowed"
      >
        Küldés
      </button>
    </form>
  );
};

export default ContactForm;
