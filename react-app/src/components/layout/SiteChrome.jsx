"use client";

import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import DownloadDock from "../ui/DownloadDock";
import ScrollProgress from "./ScrollProgress";
import ScrollToTop from "./ScrollToTop";
import useScrollReveal from "../../hooks/useScrollReveal";

export default function SiteChrome({ children }) {
  useScrollReveal();

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
      <DownloadDock />
      <BackToTop />
    </>
  );
}
