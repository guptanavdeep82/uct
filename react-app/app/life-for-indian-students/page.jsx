import LifeOfIndianStudents from "@/views/campus/LifeOfIndianStudents";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/life-for-indian-students");

export default function Page() {
  return <LifeOfIndianStudents />;
}
