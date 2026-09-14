import Admissions from "@/views/admissions/Admissions";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/admission");

export default function Page() {
  return <Admissions />;
}
