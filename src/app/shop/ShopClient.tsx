"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
const stripePromise = loadStripe(stripeKey);
const hasStripeKey = Boolean(stripeKey);

type Product = {
  id: "tshirt" | "casquette" | "pull" | "short" | "gourde" | "sac";
  name: string;
  price: number;
  desc: string;
  image: string;
  stock: number;
  colors?: { name: string; hex: string; image: string }[];
  sizes?: string[];
};

const products: Product[] = [
  {
    id: "tshirt",
    name: "T-shirt Performance",
    price: 29,
    desc: "Coupe sportive, tissu respirant.",
    image: "/tshirt.png",
    stock: 18,
    colors: [
      { name: "Noir", hex: "#0f0f10", image: "/tshirt-noir.png" },
      { name: "Bleu", hex: "#1e3a8a", image: "/tshirt-bleu.png" },
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
  },
  {
    id: "casquette",
    name: "Casquette Logo",
    price: 24,
    desc: "Ajustable, logo brodé.",
    image: "/casquette.png",
    stock: 12,
    colors: [
      { name: "Noir", hex: "#0f0f10", image: "/casquette-noir.png" },
      { name: "Bleu", hex: "#1e3a8a", image: "/casquette-bleu.png" },
    ],
    sizes: ["Unique"],
  },
  {
    id: "pull",
    name: "Hoodie Training",
    price: 54,
    desc: "Chaud et confortable.",
    image: "/pull.png",
    stock: 10,
    colors: [
      { name: "Noir", hex: "#111827", image: "/pull-noir.png" },
      { name: "Bleu", hex: "#1e3a8a", image: "/pull-bleu.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "short",
    name: "Short Training",
    price: 32,
    desc: "Léger, conçu pour l'effort.",
    image: "/short.png",
    stock: 16,
    colors: [
      { name: "Noir", hex: "#111827", image: "/short-noir.png" },
      { name: "Bleu", hex: "#1d4ed8", image: "/short-bleu.png" },
    ],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "gourde",
    name: "Gourde",
    price: 16,
    desc: "Hydratation tout au long de la séance.",
    image: "/gourde.png",
    stock: 24,
  },
  {
    id: "sac",
    name: "Sac de sport",
    price: 49,
    desc: "Compartiments pratiques.",
    image: "/sac.png",
    stock: 8,
  },
];

function CheckoutForm({ clientSecret }: { clientSecret: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "processing" | "succeeded">(
    "idle",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    setLoading(true);
    setError(null);
    setStatus("processing");

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/shop` },
      redirect: "if_required",
    });

    if (result.error) {
      const maybeSucceeded = result.paymentIntent?.status === "succeeded";
      if (maybeSucceeded) {
        setStatus("succeeded");
        setError(null);
      } else {
        setStatus("idle");
        setError(result.error.message || "Paiement refusé.");
      }
    } else if (result.paymentIntent?.status === "succeeded") {
      setStatus("succeeded");
    } else {
      setStatus("idle");
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm"
    >
      <PaymentElement />
      {status === "succeeded" && (
        <p className="mt-3 text-sm text-emerald-600">
          Paiement confirmé. Merci !
        </p>
      )}
      {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading || status === "succeeded"}
        className="mt-4 w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? "Paiement en cours..." : "Payer maintenant"}
      </button>
    </form>
  );
}

export default function ShopClient() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [selectedColor, setSelectedColor] = useState<Record<string, string>>({});
  const [selectedSize, setSelectedSize] = useState<Record<string, string>>({});
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const freeShippingThreshold = 90;

  const total = useMemo(() => {
    return products.reduce((sum, p) => {
      const qty = cart[p.id] || 0;
      return sum + qty * p.price;
    }, 0);
  }, [cart]);

  const items = useMemo(() => {
    return products
      .filter((p) => (cart[p.id] || 0) > 0)
      .map((p) => ({ id: p.id, quantity: cart[p.id] || 0 }));
  }, [cart]);

  const add = (id: Product["id"]) => {
    setCart((c) => ({ ...c, [id]: (c[id] || 0) + 1 }));
  };

  const remove = (id: Product["id"]) => {
    setCart((c) => {
      const next = { ...c };
      const qty = (next[id] || 0) - 1;
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });
  };

  const startCheckout = async () => {
    if (!hasStripeKey) {
      setError(
        "Paiement indisponible. Ajoute la clé STRIPE_PUBLISHABLE_KEY.",
      );
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const contentType = res.headers.get("content-type") || "";
      let data: { clientSecret?: string; error?: string } | null = null;

      if (contentType.includes("application/json")) {
        data = (await res.json()) as { clientSecret?: string; error?: string };
      } else {
        const text = (await res.text()).trim();
        throw new Error(
          text || `Erreur de paiement (réponse non JSON, ${res.status}).`,
        );
      }

      if (!res.ok) throw new Error(data?.error || "Erreur de paiement.");
      if (!data?.clientSecret) {
        throw new Error("Réponse de paiement invalide (clientSecret manquant).");
      }
      setClientSecret(data.clientSecret);
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="space-y-10">
      <div className="flex items-center gap-4">
        <Image src="/logo.svg" alt="Logo Valentin Prep Physique" width={48} height={48} />
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
            Boutique
          </p>
          <h1 className="text-3xl font-semibold text-zinc-100 sm:text-4xl">
            ValentinPrepPhysique.fr
          </h1>
        </div>
      </div>

      <p className="max-w-2xl text-base leading-7 text-zinc-400">
        Collection training avec ton logo. Sélectionne tes articles puis paie
        directement sur le site.
      </p>

      {!hasStripeKey && (
        <div className="rounded-2xl border border-amber-400/40 bg-amber-400/10 p-4 text-sm text-amber-200">
          Paiement indisponible : ajoute la clé STRIPE_PUBLISHABLE_KEY pour
          activer Stripe.
        </div>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => {
          const hasColors = Boolean(p.colors?.length);
          const hasSizes = Boolean(p.sizes?.length);
          const colorSelected = selectedColor[p.id];
          const sizeSelected = selectedSize[p.id];
          const currentQty = cart[p.id] || 0;
          const inStock = p.stock - currentQty;
          const canAdd =
            (!hasColors || Boolean(colorSelected)) &&
            (!hasSizes || Boolean(sizeSelected)) &&
            inStock > 0;

          return (
            <div
              key={p.id}
              className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 shadow-sm"
            >
              <div className="aspect-[3/4] bg-zinc-900 p-2">
                {(() => {
                  const colorName = selectedColor[p.id] || p.colors?.[0]?.name;
                  const color = p.colors?.find((c) => c.name === colorName);
                  const src = color?.image || p.image;
                  return (
                    <Image
                      src={src}
                      alt={p.name}
                      width={900}
                      height={1200}
                      sizes="(max-width: 1024px) 50vw, 320px"
                      className="h-full w-full object-contain"
                    />
                  );
                })()}
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-base font-semibold text-zinc-100">
                    {p.name}
                  </h2>
                  <span className="text-sm font-semibold text-zinc-100">
                    {p.price}€
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{p.desc}</p>
                <p className="mt-2 text-xs text-zinc-500">
                  {p.stock > 0 ? `Stock: ${inStock} dispo` : "Rupture de stock"}
                </p>
                {p.colors && p.colors.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Couleurs
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      {p.colors.map((c) => {
                        const active = selectedColor[p.id] === c.name;
                        return (
                          <button
                            key={c.name}
                            type="button"
                            aria-label={`Couleur ${c.name}`}
                            onClick={() =>
                              setSelectedColor((s) => ({ ...s, [p.id]: c.name }))
                            }
                            className={`h-7 w-7 rounded-full border ${
                              active
                                ? "border-amber-300 ring-2 ring-amber-300/30"
                                : "border-zinc-700"
                            }`}
                            style={{ backgroundColor: c.hex }}
                          />
                        );
                      })}
                    </div>
                    {!colorSelected && (
                      <p className="mt-2 text-xs text-amber-300">
                        Choisis une couleur pour ajouter au panier.
                      </p>
                    )}
                  </div>
                )}
                {p.sizes && p.sizes.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
                      Tailles
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {p.sizes.map((size) => {
                        const active = selectedSize[p.id] === size;
                        return (
                          <button
                            key={size}
                            type="button"
                            onClick={() =>
                              setSelectedSize((s) => ({ ...s, [p.id]: size }))
                            }
                            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
                              active
                                ? "border-amber-300 bg-amber-300 text-zinc-900"
                                : "border-zinc-700 text-zinc-100 hover:border-zinc-500"
                            }`}
                          >
                            {size}
                          </button>
                        );
                      })}
                    </div>
                    {!sizeSelected && (
                      <p className="mt-2 text-xs text-amber-300">
                        Choisis une taille pour ajouter au panier.
                      </p>
                    )}
                  </div>
                )}
                <div className="mt-4 flex items-center gap-3">
                  <button
                    type="button"
                    className="rounded-full border border-zinc-700 px-3 py-1.5 text-sm font-semibold text-zinc-200 hover:border-zinc-500"
                    onClick={() => remove(p.id)}
                  >
                    -
                  </button>
                  <span className="text-sm font-semibold text-zinc-100">
                    {currentQty}
                  </span>
                  <button
                    type="button"
                    disabled={!canAdd}
                    className="rounded-full bg-white px-3 py-1.5 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
                    onClick={() => add(p.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="text-base font-semibold text-zinc-100">Total</p>
          <p className="text-xl font-semibold text-zinc-100">{total}€</p>
        </div>
        <p className="mt-2 text-sm text-zinc-400">
          Livraison gratuite dès {freeShippingThreshold}€ d'achat.
        </p>
        <p className="mt-1 text-xs text-zinc-500">
          {total >= freeShippingThreshold
            ? "Tu profites de la livraison gratuite."
            : `Encore ${freeShippingThreshold - total}€ pour la livraison gratuite.`}
        </p>
        <button
          type="button"
          onClick={startCheckout}
          disabled={items.length === 0 || loading || !hasStripeKey}
          className="mt-4 w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Préparation du paiement..." : "Passer au paiement"}
        </button>
        {error && <p className="mt-3 text-sm text-red-600">{error}</p>}
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-sm text-zinc-300 shadow-sm">
        <p className="text-base font-semibold text-zinc-100">Livraison & retours</p>
        <ul className="mt-3 space-y-2">
          <li>Expédition sous 3 à 5 jours ouvrés.</li>
          <li>Livraison gratuite dès {freeShippingThreshold}€.</li>
          <li>Retours possibles sous 14 jours (articles non portés).</li>
          <li>Besoin d'aide ? Écris à valentinfleygnac71350@gmail.com</li>
        </ul>
      </div>

      {clientSecret && (
        <Elements
          stripe={stripePromise}
          options={{ clientSecret, appearance: { theme: "night" } }}
        >
          <CheckoutForm clientSecret={clientSecret} />
        </Elements>
      )}
    </section>
  );
}




