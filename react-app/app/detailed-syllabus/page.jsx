import Curriculum from "@/views/academics/Curriculum";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/detailed-syllabus");

export default function Page() {
  return <Curriculum />;
}
