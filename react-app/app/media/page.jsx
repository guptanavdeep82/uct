import Gallery from "@/views/Gallery";
import { pageMetadata } from "@/data/seo";
import { fetchCampusFilms, fetchGallery } from "@/lib/content";

export const metadata = pageMetadata("/media");

export default async function MediaPage() {
  const [photos, films] = await Promise.all([fetchGallery(), fetchCampusFilms()]);
  return <Gallery photos={photos} films={films} />;
}
