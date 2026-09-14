import "@/styles/tokens.css";
import "@/styles/layout.css";
import "@/styles/components.css";
import "@/styles/about.css";
import "@/styles/home.css";
import SiteChrome from "@/components/layout/SiteChrome";
import { pageMetadata } from "@/data/seo";

export const metadata = {
  ...pageMetadata("/"),
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.uct.tl"),
  icons: { icon: "/favicon.svg" },
};

export const viewport = {
  themeColor: "#7A1E3C",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
