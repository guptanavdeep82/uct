import AdmissionEnquiry from "@/views/admissions/AdmissionEnquiry";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/admission-enquiry");

export default function Page() {
  return <AdmissionEnquiry />;
}
