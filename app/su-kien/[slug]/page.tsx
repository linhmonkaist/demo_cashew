import { articles } from "@/lib/content";
import ArticleView from "./view";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default function ArticlePage() {
  return <ArticleView />;
}
