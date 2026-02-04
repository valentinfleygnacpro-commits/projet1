import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

const catalog = {
  tshirt: { name: "T-shirt Performance", price: 2900 },
  casquette: { name: "Casquette Logo", price: 2400 },
  pull: { name: "Hoodie Training", price: 5400 },
  short: { name: "Short Training", price: 3200 },
  gourde: { name: "Gourde", price: 1600 },
  sac: { name: "Sac de sport", price: 4900 },
};

type Item = { id: keyof typeof catalog; quantity: number };

export async function POST(req: Request) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return Response.json(
        { error: "Missing STRIPE_SECRET_KEY" },
        { status: 500 },
      );
    }

    const { items } = (await req.json()) as { items?: Item[] };
    if (!items || items.length === 0) {
      return Response.json({ error: "No items" }, { status: 400 });
    }

    const amount = items.reduce((sum, item) => {
      const product = catalog[item.id];
      if (!product || item.quantity <= 0) return sum;
      return sum + product.price * item.quantity;
    }, 0);

    if (amount <= 0) {
      return Response.json({ error: "Invalid amount" }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "eur",
      automatic_payment_methods: { enabled: true },
    });

    return Response.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
