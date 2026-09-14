import Services from "@/views/Services";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/services");

export default function Page() {
  return <Services />;
}
