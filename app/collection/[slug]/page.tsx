import { notFound } from "next/navigation";
import CategoryQuickView from "../CategoryQuickView";

const categories: Record<string, string> = {
  "pre-rolls": "Pre-Rolls",
  flower: "Flower",
  disposables: "Disposables",
  edibles: "Edibles",
  moonrocks: "Moonrocks",
  snowcaps: "Snowcaps",
};

export function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({
    slug,
  }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories[slug];

  if (!category) notFound();

  return <CategoryQuickView category={category} />;
}
