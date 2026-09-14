import NewsEvents from "@/views/news/NewsEvents";
import { pageMetadata } from "@/data/seo";
import { fetchNews } from "@/lib/content";

export const metadata = pageMetadata("/news-updates");

export default async function NewsUpdatesPage() {
  const items = await fetchNews();
  return <NewsEvents items={items} />;
}
