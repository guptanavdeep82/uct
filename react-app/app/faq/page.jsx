import FAQ from "@/views/FAQ";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/faq");

export default function Page() {
  return <FAQ />;
}
