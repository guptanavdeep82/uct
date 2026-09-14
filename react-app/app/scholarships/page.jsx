import Scholarship from "@/views/admissions/Scholarship";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/scholarships");

export default function Page() {
  return <Scholarship />;
}
