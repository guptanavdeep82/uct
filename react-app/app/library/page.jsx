import Library from "@/views/campus/Library";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/library");

export default function Page() {
  return <Library />;
}
