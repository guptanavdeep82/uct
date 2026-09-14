import AdmissionProcess from "@/views/admissions/AdmissionProcess";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/admission-process");

export default function Page() {
  return <AdmissionProcess />;
}
