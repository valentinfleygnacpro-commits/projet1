import type { Metadata } from "next";
import ShopClient from "./ShopClient";

export const metadata: Metadata = {
  title: "Boutique",
  description: "Boutique officielle ValentinPrepPhysique.fr.",
};

export default function ShopPage() {
  return <ShopClient />;
}
