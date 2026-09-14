import FeesStructure from "@/views/admissions/FeesStructure";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/tuition-fees");

export default function Page() {
  return <FeesStructure />;
}
