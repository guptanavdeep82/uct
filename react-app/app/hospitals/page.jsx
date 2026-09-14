import Hospitals from "@/views/academics/Hospitals";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/hospitals");

export default function Page() {
  return <Hospitals />;
}
