import AntiRaggingPolicy from "@/views/AntiRaggingPolicy";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/anti-ragging-policy");

export default function Page() {
  return <AntiRaggingPolicy />;
}
