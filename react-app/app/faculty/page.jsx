import Faculty from "@/views/academics/Faculty";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/faculty");

export default function Page() {
  return <Faculty />;
}
