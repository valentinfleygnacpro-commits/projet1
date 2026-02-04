import ContactForm from "./ContactForm";

type ContactSectionProps = {
  title?: string;
  description?: string;
};

export default function ContactSection({
  title = "Demander un accompagnement",
  description = "Décris ton objectif et tes contraintes pour recevoir un plan clair.",
}: ContactSectionProps) {
  return (
    <div id="contact" className="space-y-5">
      <div>
        <h2 className="text-3xl font-semibold text-zinc-100">{title}</h2>
        <p className="mt-2 max-w-2xl text-base leading-7 text-zinc-400">
          {description}
        </p>
      </div>
      <div className="grid gap-8 sm:grid-cols-[1.1fr_0.9fr]">
        <ContactForm />
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-zinc-100">Contact direct</h3>
          <p className="mt-3 text-base leading-7 text-zinc-300">
            Tu peux aussi me joindre directement pour un premier échange.
          </p>
          <div className="mt-4 space-y-2 text-base text-zinc-200">
            <p>
              Email :{" "}
              <a className="hover:text-white" href="mailto:valentinfleygnac71350@gmail.com">
                valentinfleygnac71350@gmail.com
              </a>
            </p>
            <p>
              Téléphone :{" "}
              <a className="hover:text-white" href="tel:+33669486990">
                06 69 48 69 90
              </a>
            </p>
            <p className="text-sm text-zinc-400">
              Basé en Bourgogne — accompagnement possible en région parisienne et
              à distance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
