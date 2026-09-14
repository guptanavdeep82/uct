import Laboratories from "@/views/campus/Laboratories";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/laboratories");

export default function Page() {
  return <Laboratories />;
}
