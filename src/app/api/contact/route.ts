export const runtime = "nodejs";

type Payload = {
  name?: string;
  sport?: string;
  email?: string;
  phone?: string;
  message?: string;
};

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(req: Request) {
  try {
    const data = (await req.json()) as Payload;
    const name = data.name?.trim() || "";
    const email = data.email?.trim() || "";
    const message = data.message?.trim() || "";

    if (!name || !email || !message) {
      return Response.json(
        { error: "Champs requis manquants." },
        { status: 400 },
      );
    }

    if (!isEmail(email)) {
      return Response.json({ error: "Email invalide." }, { status: 400 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Erreur serveur." }, { status: 500 });
  }
}
