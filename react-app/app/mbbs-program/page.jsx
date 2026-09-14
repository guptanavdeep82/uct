import MbbsProgram from "@/views/academics/MbbsProgram";
import { pageMetadata } from "@/data/seo";

export const metadata = pageMetadata("/mbbs-program");

export default function Page() {
  return <MbbsProgram />;
}
