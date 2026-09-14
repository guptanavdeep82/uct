import MilestonesHistory from "@/views/about/MilestonesHistory";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/milestones-history");

export default function Page() {
  return <MilestonesHistory />;
}
