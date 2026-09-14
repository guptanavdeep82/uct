import Hostel from "@/views/campus/Hostel";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/hostel-amp-student-housing");

export default function Page() {
  return <Hostel />;
}
