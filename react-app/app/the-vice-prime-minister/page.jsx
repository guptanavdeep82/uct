import MessageFromVPM from "@/views/about/MessageFromVPM";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/the-vice-prime-minister");

export default function Page() {
  return <MessageFromVPM />;
}
