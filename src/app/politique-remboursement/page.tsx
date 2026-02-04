import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de remboursement",
  description: "Conditions de remboursement et retours.",
};

export default function PolitiqueRemboursementPage() {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Politique de remboursement
        </p>
        <h1 className="text-3xl font-semibold text-zinc-100 sm:text-4xl">
          Retours & remboursements
        </h1>
        <p className="max-w-2xl text-base leading-7 text-zinc-300">
          Politique simplifiée à adapter selon tes conditions réelles de vente.
        </p>
      </div>

      <div className="space-y-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-sm text-zinc-300 shadow-sm">
        <p>
          <span className="font-semibold text-zinc-100">Délai de retour :</span>{" "}
          14 jours après réception de la commande.
        </p>
        <p>
          <span className="font-semibold text-zinc-100">État des articles :</span>{" "}
          non portés, non lavés, dans leur emballage d'origine.
        </p>
        <p>
          <span className="font-semibold text-zinc-100">Frais de retour :</span>{" "}
          à la charge du client (sauf erreur de notre part).
        </p>
        <p>
          <span className="font-semibold text-zinc-100">Remboursement :</span>{" "}
          sous 7 à 10 jours ouvrés après réception et contrôle des articles.
        </p>
        <p>
          <span className="font-semibold text-zinc-100">Contact :</span>{" "}
          valentinfleygnac71350@gmail.com
        </p>
      </div>
    </section>
  );
}
