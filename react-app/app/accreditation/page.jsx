import Accreditation from "@/views/Accreditation";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/accreditation");

export default function Page() {
  return <Accreditation />;
}
