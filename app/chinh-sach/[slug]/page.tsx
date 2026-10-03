import { policies } from "@/lib/content";
import PolicyView from "./view";

export function generateStaticParams() {
  return policies.map((policy) => ({ slug: policy.slug }));
}

export default function PolicyPage() {
  return <PolicyView />;
}
