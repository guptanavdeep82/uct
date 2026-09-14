import { notFound } from "next/navigation";
import NewsDetail from "@/views/news/NewsDetail";
import { fetchNews, fetchNewsItem } from "@/lib/content";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = await fetchNewsItem(slug);
  if (!article) {
    return { title: "Article Not Found" };
  }
  return {
    title: article.meta_title || article.title,
    description: article.meta_description || article.excerpt,
    alternates: { canonical: `/events/${article.slug}/` },
    openGraph: {
      title: article.meta_title || article.title,
      description: article.meta_description || article.excerpt,
      images: article.og_image || article.image ? [article.og_image || article.image] : undefined,
    },
  };
}

export default async function EventPage({ params }) {
  const { slug } = await params;
  const [article, archive] = await Promise.all([fetchNewsItem(slug), fetchNews()]);
  if (!article) notFound();
  return <NewsDetail article={article} archive={archive} />;
}
