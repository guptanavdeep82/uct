import Gallery from "@/views/Gallery";
import { pageMetadata } from "@/data/seo";
import { fetchGallery } from "@/lib/content";

export const metadata = pageMetadata("/media");

export default async function MediaPage() {
  const photos = await fetchGallery();
  return <Gallery photos={photos} />;
}
