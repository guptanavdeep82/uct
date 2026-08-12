import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import ScrollProgress from "./ScrollProgress";
import ScrollToTop from "./ScrollToTop";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function Layout() {
  useScrollReveal();

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
