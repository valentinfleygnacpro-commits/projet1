"use client";

import { useState } from "react";

type FormValues = {
  name: string;
  sport: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  name: "",
  sport: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle",
  );
  const [serverMessage, setServerMessage] = useState<string | null>(null);

  const setField = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const validate = () => {
    const nextErrors: FormErrors = {};

    if (!values.name.trim()) nextErrors.name = "Merci d'indiquer ton nom.";
    if (!values.email.trim()) {
      nextErrors.email = "L'email est requis.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = "L'email semble invalide.";
    }
    if (!values.message.trim()) nextErrors.message = "Décris ton objectif.";

    return nextErrors;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    setServerMessage(null);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        const payload = (await response.json()) as { error?: string };
        throw new Error(payload.error || "Erreur lors de l'envoi.");
      }

      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      setStatus("error");
      setServerMessage((err as Error).message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="text-sm font-medium text-zinc-100" htmlFor="name">
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-500"
            placeholder="Ton nom"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
          />
          {errors.name && (
            <p id="name-error" className="text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-zinc-100" htmlFor="sport">
            Sport
          </label>
          <input
            id="sport"
            name="sport"
            type="text"
            autoComplete="organization"
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-500"
            placeholder="MMA, foot, fitness..."
            value={values.sport}
            onChange={(e) => setField("sport", e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-zinc-100" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-500"
            placeholder="ton@email.com"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
          />
          {errors.email && (
            <p id="email-error" className="text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
        <div className="space-y-1">
          <label className="text-sm font-medium text-zinc-100" htmlFor="phone">
            Téléphone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-500"
            placeholder="06 00 00 00 00"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
          />
        </div>
      </div>
      <div className="mt-4 space-y-1">
        <label className="text-sm font-medium text-zinc-100" htmlFor="message">
          Objectif
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-500"
          placeholder="Explique ton objectif et tes contraintes."
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
        />
        {errors.message && (
          <p id="message-error" className="text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-4 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-amber-300 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Envoi en cours..." : "Envoyer la demande"}
      </button>
      <p className="mt-3 text-xs text-zinc-500">
        Réponse sous 24-48h. Tes informations restent confidentielles.
      </p>
      <div className="mt-3 text-sm" aria-live="polite">
        {status === "success" && (
          <p className="text-emerald-400">
            Merci ! Ta demande est bien envoyée.
          </p>
        )}
        {status === "error" && serverMessage && (
          <p className="text-red-400">{serverMessage}</p>
        )}
      </div>
    </form>
  );
}
