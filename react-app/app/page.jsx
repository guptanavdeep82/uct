import Home from "@/views/Home";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/");

export default function HomePage() {
  return <Home />;
}
