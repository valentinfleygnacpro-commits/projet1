import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://valentinprepphysique.fr"),
  title: {
    default: "ValentinPrepPhysique.fr",
    template: "%s — ValentinPrepPhysique.fr",
  },
  description: "Préparation physique, suivi et nutrition pour performer.",
  openGraph: {
    title: "ValentinPrepPhysique.fr",
    description: "Préparation physique, suivi et nutrition pour performer.",
    url: "/",
    siteName: "ValentinPrepPhysique.fr",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ValentinPrepPhysique.fr",
    description: "Préparation physique, suivi et nutrition pour performer.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-zinc-950">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-zinc-950 text-zinc-100 antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900 focus:not-sr-only focus:fixed focus:left-6 focus:top-6"
        >
          Aller au contenu
        </a>
        <header className="border-b border-zinc-800 bg-zinc-950">
          <nav className="mx-auto flex h-20 w-full max-w-5xl items-center justify-between px-6">
            <Link className="flex items-center gap-3" href="/">
              <Image
                src="/logo.svg"
                alt="Logo Valentin Prep Physique"
                width={44}
                height={44}
                priority
              />
              <span className="text-xl font-semibold text-zinc-100 sm:text-2xl">
                ValentinPrepPhysique.fr
              </span>
            </Link>
            <div className="hidden items-center gap-4 text-sm font-medium text-zinc-300 sm:flex">
              <Link className="hover:text-white" href="/">
                Accueil
              </Link>
              <Link className="hover:text-white" href="/about">
                À propos
              </Link>
              <Link className="hover:text-white" href="/shop">
                Boutique
              </Link>
              <Link className="hover:text-white" href="/contact">
                Contact
              </Link>
            </div>
            <details className="relative sm:hidden">
              <summary className="cursor-pointer rounded-full border border-zinc-700 px-4 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-500">
                Menu
              </summary>
              <div className="absolute right-0 mt-3 w-48 rounded-2xl border border-zinc-800 bg-zinc-950 p-3 text-sm font-medium text-zinc-200 shadow-xl">
                <Link className="block rounded-lg px-3 py-2 hover:bg-zinc-900" href="/">
                  Accueil
                </Link>
                <Link className="block rounded-lg px-3 py-2 hover:bg-zinc-900" href="/about">
                  À propos
                </Link>
                <Link className="block rounded-lg px-3 py-2 hover:bg-zinc-900" href="/shop">
                  Boutique
                </Link>
                <Link className="block rounded-lg px-3 py-2 hover:bg-zinc-900" href="/contact">
                  Contact
                </Link>
              </div>
            </details>
          </nav>
        </header>
        <main
          id="main-content"
          className="mx-auto w-full max-w-5xl bg-zinc-950 px-6 py-12"
        >
          {children}
        </main>
        <footer className="border-t border-zinc-800 bg-zinc-950">
          <div className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-6 py-8 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 ValentinPrepPhysique.fr</p>
            <div className="flex flex-wrap gap-4">
              <Link className="hover:text-white" href="/mentions-legales">
                Mentions légales
              </Link>
              <Link className="hover:text-white" href="/politique-remboursement">
                Politique de remboursement
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}

