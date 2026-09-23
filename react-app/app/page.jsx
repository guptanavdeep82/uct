import Home from "@/views/Home";
import { pageMetadata } from "@/data/seo";
import { fetchGallery } from "@/lib/content";

export const metadata = pageMetadata("/");

export default async function HomePage() {
  const photos = await fetchGallery();
  return <Home photos={photos} />;
}
