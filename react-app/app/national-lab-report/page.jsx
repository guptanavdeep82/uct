import NationalLabReport from "@/views/academics/NationalLabReport";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/national-lab-report");

export default function Page() {
  return <NationalLabReport />;
}
