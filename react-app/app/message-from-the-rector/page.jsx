import MessageFromRector from "@/views/about/MessageFromRector";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/message-from-the-rector");

export default function Page() {
  return <MessageFromRector />;
}
