import Contact from "@/views/Contact";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/contact-us");

export default function Page() {
  return <Contact />;
}
