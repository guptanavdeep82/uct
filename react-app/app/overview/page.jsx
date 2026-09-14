import AboutOverview from "@/views/about/AboutOverview";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/overview");

export default function Page() {
  return <AboutOverview />;
}
