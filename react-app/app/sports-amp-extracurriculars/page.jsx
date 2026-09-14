import Sports from "@/views/campus/Sports";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/sports-amp-extracurriculars");

export default function Page() {
  return <Sports />;
}
