import Infrastructure from "@/views/campus/Infrastructure";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/infrastructure");

export default function Page() {
  return <Infrastructure />;
}
