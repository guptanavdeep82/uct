import Prospectus from "@/views/admissions/Prospectus";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/prospectus");

export default function Page() {
  return <Prospectus />;
}
