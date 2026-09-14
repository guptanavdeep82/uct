"""Convert the Vite SPA into a Next.js App Router tree and rewrite live UCT URLs."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SRC = ROOT / "src"
APP = ROOT / "app"

ROUTER_IMPORT = 'from "@/lib/navigation"'

PATHS = [
    ("/about-us/message-from-vice-prime-minister", "/the-vice-prime-minister"),
    ("/about-us/milestones-history", "/milestones-history"),
    ("/about-us/vision-mission", "/vision-mission"),
    ("/about-us/message-from-rector", "/message-from-the-rector"),
    ("/about-us/overview", "/overview"),
    ("/campus-life/sports-extracurriculars", "/sports-amp-extracurriculars"),
    ("/campus-life/life-of-indian-students", "/life-for-indian-students"),
    ("/campus-life/infrastructure", "/infrastructure"),
    ("/campus-life/laboratories", "/laboratories"),
    ("/campus-life/facilities", "/facilities-amp-amenities"),
    ("/campus-life/library", "/library"),
    ("/campus-life/hostel", "/hostel-amp-student-housing"),
    ("/academics/family-community-medicine", "/family-community-medicine"),
    ("/academics/national-lab-report", "/national-lab-report"),
    ("/academics/mbbs-program", "/mbbs-program"),
    ("/academics/curriculum", "/detailed-syllabus"),
    ("/academics/hospitals", "/hospitals"),
    ("/academics/faculty", "/faculty"),
    ("/admissions/admission-enquiry", "/admission-enquiry"),
    ("/admissions/admission-process", "/admission-process"),
    ("/admissions/fees-structure", "/tuition-fees"),
    ("/admissions/scholarship", "/scholarships"),
    ("/admissions/prospectus", "/prospectus"),
    ("/campus-life", "/infrastructure"),
    ("/about-us", "/overview"),
    ("/academics", "/mbbs-program"),
    ("/admissions", "/admission"),
    ("/news-events", "/news-updates"),
    ("/gallery", "/media"),
    ("/news/", "/events/"),
]

PAGES = [
    ("overview", "pages/about/AboutOverview.jsx", "/overview"),
    ("vision-mission", "pages/about/VisionMission.jsx", "/vision-mission"),
    ("milestones-history", "pages/about/MilestonesHistory.jsx", "/milestones-history"),
    ("message-from-the-rector", "pages/about/MessageFromRector.jsx", "/message-from-the-rector"),
    ("the-vice-prime-minister", "pages/about/MessageFromVPM.jsx", "/the-vice-prime-minister"),
    ("infrastructure", "pages/campus/Infrastructure.jsx", "/infrastructure"),
    ("library", "pages/campus/Library.jsx", "/library"),
    ("laboratories", "pages/campus/Laboratories.jsx", "/laboratories"),
    ("facilities-amp-amenities", "pages/campus/Facilities.jsx", "/facilities-amp-amenities"),
    ("hostel-amp-student-housing", "pages/campus/Hostel.jsx", "/hostel-amp-student-housing"),
    ("sports-amp-extracurriculars", "pages/campus/Sports.jsx", "/sports-amp-extracurriculars"),
    ("life-for-indian-students", "pages/campus/LifeOfIndianStudents.jsx", "/life-for-indian-students"),
    ("mbbs-program", "pages/academics/MbbsProgram.jsx", "/mbbs-program"),
    ("detailed-syllabus", "pages/academics/Curriculum.jsx", "/detailed-syllabus"),
    ("family-community-medicine", "pages/academics/FamilyCommunityMedicine.jsx", "/family-community-medicine"),
    ("national-lab-report", "pages/academics/NationalLabReport.jsx", "/national-lab-report"),
    ("faculty", "pages/academics/Faculty.jsx", "/faculty"),
    ("hospitals", "pages/academics/Hospitals.jsx", "/hospitals"),
    ("services", "pages/Services.jsx", "/services"),
    ("admission", "pages/admissions/Admissions.jsx", "/admission"),
    ("admission-process", "pages/admissions/AdmissionProcess.jsx", "/admission-process"),
    ("admission-enquiry", "pages/admissions/AdmissionEnquiry.jsx", "/admission-enquiry"),
    ("tuition-fees", "pages/admissions/FeesStructure.jsx", "/tuition-fees"),
    ("scholarships", "pages/admissions/Scholarship.jsx", "/scholarships"),
    ("prospectus", "pages/admissions/Prospectus.jsx", "/prospectus"),
    ("accreditation", "pages/Accreditation.jsx", "/accreditation"),
    ("contact-us", "pages/Contact.jsx", "/contact-us"),
    ("faq", "pages/FAQ.jsx", "/faq"),
    ("anti-ragging-policy", "pages/AntiRaggingPolicy.jsx", "/anti-ragging-policy"),
]

SKIP_USE_CLIENT = {
    "lib/navigation.js",
}


def add_use_client(text: str) -> str:
    if text.startswith('"use client"') or text.startswith("'use client'"):
        return text
    return '"use client";\n\n' + text


def rewrite_router_imports(text: str) -> str:
    text = text.replace('from "react-router-dom"', ROUTER_IMPORT)
    text = text.replace("from 'react-router-dom'", ROUTER_IMPORT)
    return text


def rewrite_paths(text: str) -> str:
    for old, new in PATHS:
        text = text.replace(old, new)
    return text


def transform_file(path: Path) -> None:
    rel = path.relative_to(SRC).as_posix()
    if rel.startswith("lib/") or rel == "data/seo.js" or rel == "data/navigation.js":
        return
    text = path.read_text(encoding="utf-8")
    original = text
    if path.suffix == ".jsx":
        text = add_use_client(text)
        text = rewrite_router_imports(text)
    text = rewrite_paths(text)
    if text != original:
        path.write_text(text, encoding="utf-8")
        print(f"updated {rel}")


def write_static_page(slug: str, component: str, meta_path: str) -> None:
    dest = APP / slug / "page.jsx"
    dest.parent.mkdir(parents=True, exist_ok=True)
    name = Path(component).stem
    dest.write_text(
        f'''import {name} from "@/{component.replace(".jsx", "")}";
import {{ pageMetadata }} from "@/data/seo";

export const metadata = pageMetadata("{meta_path}");

export default function Page() {{
  return <{name} />;
}}
''',
        encoding="utf-8",
    )


def main() -> None:
    for path in SRC.rglob("*"):
        if path.suffix in {".js", ".jsx"} and path.is_file():
            transform_file(path)
    for slug, component, meta_path in PAGES:
        write_static_page(slug, component, meta_path)
        print(f"page {slug}")


if __name__ == "__main__":
    main()
