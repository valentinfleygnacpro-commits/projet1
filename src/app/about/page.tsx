import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvre l'approche de Valentin pour la préparation physique et la nutrition.",
};

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <div className="grid items-center gap-8 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            À propos
          </p>
          <h1 className="text-3xl font-semibold text-zinc-100 sm:text-4xl">
            Coach en préparation physique et nutrition
          </h1>
          <p className="max-w-2xl text-base leading-7 text-zinc-300">
            Combattant de MMA amateur, j'ai toujours été attiré par la
            musculation et la préparation physique, que j'ai commencées en même
            temps que le MMA. En aidant des amis dans leurs sports respectifs, j'ai
            accumulé de l'expérience et leurs performances ont nettement explosé.
            Aujourd'hui, j'accompagne aussi sur la nutrition, un levier clé pour
            progresser durablement.
          </p>
        </div>
        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-sm">
          <Image
            src="/imageportrait.png"
            alt="Coach en préparation physique"
            width={520}
            height={520}
            sizes="(max-width: 768px) 100vw, 420px"
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
          <h2 className="text-base font-semibold text-zinc-100">Mission</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Aider à progresser grâce à un entraînement structuré et une
            nutrition adaptée à chaque objectif.
          </p>
        </div>
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
          <h2 className="text-base font-semibold text-zinc-100">Approche</h2>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            Performance, rigueur et progression sur le long terme.
          </p>
        </div>
      </div>
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
        <h2 className="text-base font-semibold text-zinc-100">
          Certifications
        </h2>
        <p className="mt-2 text-sm leading-6 text-zinc-300">
          Ajoute ici tes diplômes ou certifications officielles pour renforcer
          la confiance.
        </p>
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          <li>BPJEPS AF — mention à renseigner</li>
          <li>Certification nutrition sportive — organisme à renseigner</li>
          <li>Formation prévention des blessures — organisme à renseigner</li>
        </ul>
      </div>
    </section>
  );
}
