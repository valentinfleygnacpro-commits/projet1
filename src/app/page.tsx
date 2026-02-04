import Image from "next/image";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <section className="space-y-14">
      <div className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
          Préparation physique
        </p>
        <h1 className="text-5xl font-semibold leading-tight text-zinc-100">
          Préparation physique & nutrition pour{" "}
          <span className="text-amber-300">performer</span>
        </h1>
        <p className="max-w-2xl text-xl leading-8 text-zinc-300">
          Programmes sur mesure, suivi précis et nutrition adaptée pour
          améliorer force, endurance et explosivité.
        </p>
        <p className="text-sm font-medium text-zinc-400">
          Bourgogne & région parisienne — suivi à distance possible.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-amber-300"
            href="#contact"
          >
            Prendre rendez-vous
          </a>
          <a
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 hover:border-zinc-500"
            href="#services"
          >
            Voir les services
          </a>
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 shadow-sm">
        <Image
          src="/imagex3.png"
          alt="Coaching personnalisé en salle"
          width={1200}
          height={560}
          sizes="(max-width: 768px) 100vw, 960px"
          className="h-auto w-full object-cover"
          priority
        />
      </div>

      <div id="services" className="space-y-5">
        <h2 className="text-3xl font-semibold text-zinc-100">Services</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-100">Prépa physique</h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">
              Planification des séances, travail de puissance et endurance
              selon ton sport.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-100">
              Musculation ciblée
            </h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">
              Programmes adaptés pour gagner en force et en explosivité sans
              se blesser.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-100">
              Nutrition sportive
            </h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">
              Ajustement des apports pour optimiser la récup, l'énergie et la
              composition corporelle.
            </p>
          </div>
        </div>
      </div>

      <div id="methode" className="space-y-5">
        <h2 className="text-3xl font-semibold text-zinc-100">
          Méthode en 3 étapes
        </h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <p className="text-sm font-semibold text-amber-300">01</p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-100">
              Bilan & objectifs
            </h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">
              Analyse du niveau, contraintes et calendrier pour définir le plan.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <p className="text-sm font-semibold text-amber-300">02</p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-100">
              Plan d'action
            </h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">
              Séances structurées + nutrition adaptée à ton rythme de vie.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <p className="text-sm font-semibold text-amber-300">03</p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-100">
              Suivi & ajustements
            </h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">
              Check hebdomadaire pour mesurer les progrès et optimiser.
            </p>
          </div>
        </div>
      </div>

      <div id="results" className="space-y-5">
        <h2 className="text-3xl font-semibold text-zinc-100">Résultats</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center shadow-sm">
            <p className="text-4xl font-semibold text-zinc-100">8–12</p>
            <p className="mt-3 text-base text-zinc-300">semaines par cycle</p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center shadow-sm">
            <p className="text-4xl font-semibold text-zinc-100">+30%</p>
            <p className="mt-3 text-base text-zinc-300">
              objectif de gain de performance
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-center shadow-sm">
            <p className="text-4xl font-semibold text-zinc-100">Suivi</p>
            <p className="mt-3 text-base text-zinc-300">
              ajusté chaque semaine
            </p>
          </div>
        </div>
      </div>

      <div id="avant-apres" className="space-y-5">
        <h2 className="text-3xl font-semibold text-zinc-100">
          Avant / Après
        </h2>
        <p className="max-w-2xl text-base leading-7 text-zinc-300">
          Exemple représentatif (données illustratives) pour montrer la
          progression sur un cycle complet.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Avant
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-300">
              <li>Endurance : 5 km en 26:30</li>
              <li>Force : squat 1RM 110 kg</li>
              <li>Composition : -</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-6 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-widest text-amber-200">
              Après 10 semaines
            </p>
            <ul className="mt-4 space-y-2 text-sm text-zinc-200">
              <li>Endurance : 5 km en 23:40</li>
              <li>Force : squat 1RM 135 kg</li>
              <li>Composition : -3,2% masse grasse</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="testimonials" className="space-y-5">
        <h2 className="text-3xl font-semibold text-zinc-100">Témoignages</h2>
        <div className="grid gap-6 sm:grid-cols-3">
          <figure className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <blockquote className="text-base leading-7 text-zinc-300">
              "J'ai gagné en explosivité et en endurance. Les séances sont
              claires et efficaces."
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-zinc-100">
              Maxime — MMA
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <blockquote className="text-base leading-7 text-zinc-300">
              "Plan simple, suivi régulier. Mes performances en foot ont
              explosé."
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-zinc-100">
              Léo — Football
            </figcaption>
          </figure>
          <figure className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <blockquote className="text-base leading-7 text-zinc-300">
              "Nutrition mieux cadrée, récupération améliorée. Je progresse
              plus vite."
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-zinc-100">
              Sarah — Fitness
            </figcaption>
          </figure>
        </div>
      </div>

      <div id="tarifs" className="space-y-5">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-semibold text-zinc-100">Tarifs</h2>
            <p className="mt-2 max-w-2xl text-base leading-7 text-zinc-400">
              Des formats flexibles selon ton objectif. Tarifs ajustés au niveau
              et à la fréquence d'entraînement.
            </p>
          </div>
          <a
            className="hidden rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-500 sm:inline-flex"
            href="#contact"
          >
            Obtenir un devis
          </a>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            {
              title: "Starter",
              price: "Sur devis",
              items: ["Bilan complet", "Plan d'entraînement", "Suivi mensuel"],
            },
            {
              title: "Performance",
              price: "Sur devis",
              items: ["Suivi hebdo", "Nutrition adaptée", "Ajustements rapides"],
            },
            {
              title: "Elite",
              price: "Sur devis",
              items: ["Prépa compétition", "Suivi serré", "Support prioritaire"],
            },
          ].map((plan) => (
            <div
              key={plan.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-zinc-100">
                {plan.title}
              </h3>
              <p className="mt-2 text-2xl font-semibold text-amber-300">
                {plan.price}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-zinc-300">
                {plan.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div id="faq" className="space-y-5">
        <h2 className="text-3xl font-semibold text-zinc-100">FAQ</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-100">
              Pour quels sports ?
            </h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">
              MMA, sports collectifs, fitness, musculation et sports d'endurance.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-100">
              Comment se déroule le suivi ?
            </h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">
              Bilan, objectifs, plan personnalisé et ajustements chaque semaine.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-100">
              En présentiel ou à distance ?
            </h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">
              Les deux sont possibles selon ta localisation et tes contraintes.
            </p>
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-zinc-100">
              Et pour la nutrition ?
            </h3>
            <p className="mt-3 text-base leading-7 text-zinc-300">
              Conseils pratiques et plan alimentaire adapté à ton rythme de vie.
            </p>
          </div>
        </div>
      </div>

      <ContactSection />

      <div className="rounded-3xl border border-zinc-800 bg-gradient-to-r from-amber-400/15 via-zinc-900 to-zinc-900 p-8 text-center shadow-sm sm:p-12">
        <h2 className="text-3xl font-semibold text-zinc-100">
          Prêt à passer un cap ?
        </h2>
        <p className="mt-3 text-base text-zinc-300">
          Un plan clair, un suivi régulier et des résultats mesurables.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-amber-300"
            href="#contact"
          >
            Réserver un bilan
          </a>
          <a
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 hover:border-zinc-500"
            href="#tarifs"
          >
            Voir les formules
          </a>
        </div>
      </div>
    </section>
  );
}
