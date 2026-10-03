import { products } from "@/lib/content";
import ProductView from "./view";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default function ProductPage() {
  return <ProductView />;
}
