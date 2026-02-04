import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales obligatoires en France.",
};

export default function MentionsLegalesPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Mentions légales
        </p>
        <h1 className="text-3xl font-semibold text-zinc-100 sm:text-4xl">
          Informations légales
        </h1>
        <p className="max-w-2xl text-base leading-7 text-zinc-300">
          Ces informations sont obligatoires en France. Remplace les champs
          entre crochets par tes données exactes.
        </p>
      </div>

      <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-sm text-zinc-300 shadow-sm">
        <p>
          <span className="font-semibold text-zinc-100">Éditeur du site :</span>{" "}
          [Nom ou raison sociale]
        </p>
        <p>
          <span className="font-semibold text-zinc-100">Adresse :</span>{" "}
          [Adresse complète]
        </p>
        <p>
          <span className="font-semibold text-zinc-100">Email :</span>{" "}
          valentinfleygnac71350@gmail.com
        </p>
        <p>
          <span className="font-semibold text-zinc-100">Téléphone :</span>{" "}
          06 69 48 69 90
        </p>
        <p>
          <span className="font-semibold text-zinc-100">SIRET :</span>{" "}
          [Numéro SIRET]
        </p>
        <p>
          <span className="font-semibold text-zinc-100">TVA :</span>{" "}
          [Numéro TVA intracommunautaire si applicable]
        </p>
        <p>
          <span className="font-semibold text-zinc-100">Hébergeur :</span>{" "}
          [Nom, adresse et téléphone de l'hébergeur]
        </p>
      </div>
    </section>
  );
}
