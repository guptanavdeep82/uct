import Facilities from "@/views/campus/Facilities";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/facilities-amp-amenities");

export default function Page() {
  return <Facilities />;
}
