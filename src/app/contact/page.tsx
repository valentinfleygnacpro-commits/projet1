import type { Metadata } from "next";
import ContactSection from "../../components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description: "Parlons de ton projet sportif et définissons un plan clair.",
};

export default function ContactPage() {
  return (
    <section className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Contact
        </p>
        <h1 className="text-3xl font-semibold text-zinc-100 sm:text-4xl">
          Parlons de ton projet
        </h1>
        <p className="max-w-2xl text-base leading-7 text-zinc-300">
          Décris ton objectif et je reviens vers toi avec une proposition claire.
        </p>
      </div>
      <ContactSection
        title="Discutons de ton objectif"
        description="Donne le maximum d'infos pour recevoir un plan adapté."
      />
    </section>
  );
}
