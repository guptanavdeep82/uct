import Home from "@/views/Home";
import { pageMetadata } from "@/data/seo";
import { fetchCampusFilms, fetchGallery } from "@/lib/content";

export const metadata = pageMetadata("/");

export default async function HomePage() {
  const photos = await fetchGallery();
  const films = await fetchCampusFilms();
  return <Home photos={photos} films={films} />;
}
