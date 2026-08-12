import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";

const Home = lazy(() => import("./pages/Home"));

const AboutUs = lazy(() => import("./pages/about/AboutUs"));
const AboutOverview = lazy(() => import("./pages/about/AboutOverview"));
const VisionMission = lazy(() => import("./pages/about/VisionMission"));
const MilestonesHistory = lazy(() => import("./pages/about/MilestonesHistory"));
const MessageFromRector = lazy(() => import("./pages/about/MessageFromRector"));
const MessageFromVPM = lazy(() => import("./pages/about/MessageFromVPM"));

const CampusLife = lazy(() => import("./pages/campus/CampusLife"));
const Infrastructure = lazy(() => import("./pages/campus/Infrastructure"));
const Library = lazy(() => import("./pages/campus/Library"));
const Laboratories = lazy(() => import("./pages/campus/Laboratories"));
const Facilities = lazy(() => import("./pages/campus/Facilities"));
const Hostel = lazy(() => import("./pages/campus/Hostel"));
const Sports = lazy(() => import("./pages/campus/Sports"));
const LifeOfIndianStudents = lazy(() => import("./pages/campus/LifeOfIndianStudents"));

const Academics = lazy(() => import("./pages/academics/Academics"));
const MbbsProgram = lazy(() => import("./pages/academics/MbbsProgram"));

const Services = lazy(() => import("./pages/Services"));

const Admissions = lazy(() => import("./pages/admissions/Admissions"));
const AdmissionProcess = lazy(() => import("./pages/admissions/AdmissionProcess"));
const AdmissionEnquiry = lazy(() => import("./pages/admissions/AdmissionEnquiry"));
const FeesStructure = lazy(() => import("./pages/admissions/FeesStructure"));
const Scholarship = lazy(() => import("./pages/admissions/Scholarship"));

const Accreditation = lazy(() => import("./pages/Accreditation"));
const Gallery = lazy(() => import("./pages/Gallery"));

const NewsEvents = lazy(() => import("./pages/news/NewsEvents"));
const NewsDetail = lazy(() => import("./pages/news/NewsDetail"));

const Blog = lazy(() => import("./pages/blog/Blog"));
const BlogDetail = lazy(() => import("./pages/blog/BlogDetail"));

const Contact = lazy(() => import("./pages/Contact"));
const AntiRaggingPolicy = lazy(() => import("./pages/AntiRaggingPolicy"));
const NotFound = lazy(() => import("./pages/NotFound"));

function PageFallback() {
  return (
    <div style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
      <span
        aria-hidden="true"
        style={{
          width: 42,
          height: 42,
          borderRadius: "50%",
          border: "3px solid rgba(122,30,60,0.15)",
          borderTopColor: "var(--blue)",
          animation: "spin 0.9s linear infinite",
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/about-us/overview" element={<AboutOverview />} />
          <Route path="/about-us/vision-mission" element={<VisionMission />} />
          <Route path="/about-us/milestones-history" element={<MilestonesHistory />} />
          <Route path="/about-us/message-from-rector" element={<MessageFromRector />} />
          <Route path="/about-us/message-from-vice-prime-minister" element={<MessageFromVPM />} />

          <Route path="/campus-life" element={<CampusLife />} />
          <Route path="/campus-life/infrastructure" element={<Infrastructure />} />
          <Route path="/campus-life/library" element={<Library />} />
          <Route path="/campus-life/laboratories" element={<Laboratories />} />
          <Route path="/campus-life/facilities" element={<Facilities />} />
          <Route path="/campus-life/hostel" element={<Hostel />} />
          <Route path="/campus-life/sports-extracurriculars" element={<Sports />} />
          <Route path="/campus-life/life-of-indian-students" element={<LifeOfIndianStudents />} />

          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/mbbs-program" element={<MbbsProgram />} />

          <Route path="/services" element={<Services />} />

          <Route path="/admissions" element={<Admissions />} />
          <Route path="/admissions/admission-process" element={<AdmissionProcess />} />
          <Route path="/admissions/admission-enquiry" element={<AdmissionEnquiry />} />
          <Route path="/admissions/fees-structure" element={<FeesStructure />} />
          <Route path="/admissions/scholarship" element={<Scholarship />} />

          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route path="/news-events" element={<NewsEvents />} />
          <Route path="/news/:slug" element={<NewsDetail />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />

          <Route path="/contact-us" element={<Contact />} />
          <Route path="/anti-ragging-policy" element={<AntiRaggingPolicy />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
