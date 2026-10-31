import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next"
import { Orbitron, Questrial } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/navbar";
import HomeSide from "@/components/home/home";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const headingFont = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-heading",
});
const bodyFont = Questrial({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-body",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Olaegbe Abdul-Rahmon | Developer Portfolio",
  description:
    "Discover Olaegbe Abdul-Rahmon, also known as Noble Sentinel — a full-stack developer and cybersecurity professional.",
  keywords: [
    "Olaegbe Abdul-Rahmon",
    "Noble Sentinel",
    "@Noble_Sentinel_",
    "Developer Portfolio",
    "React Developer",
    "Cybersecurity",
    "Ethical Hacker",
    "TypeScript Developer",
    "Three.js Developer",
    "FullStack Developer",
    "Certified Ethical Hacker",
    "CompTIA Network+",
    "WEB3 Developer",
    "3D Web Developer",
    "Web Development Portfolio",
    "Noble Sentinel Portfolio",
  ],
  authors: [
    {
      name: "Olaegbe Abdul-Rahmon",
      url: "https://olaegbe-portfolio.vercel.app/",
    },
  ],
  robots: "index, follow",
  openGraph: {
    title: "Olaegbe Abdul-Rahmon | Developer Portfolio",
    description:
      "Discover Olaegbe Abdul-Rahmon, also known as Noble Sentinel — a full-stack developer and cybersecurity professional.",
    url: "https://olaegbe-portfolio.vercel.app/",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Olaegbe Abdul-Rahmon's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Noble_Sentinel_",
    site: "@Noble_Sentinel_",
    title: "Olaegbe Abdul-Rahmon | Developer Portfolio",
    description:
      "Discover Olaegbe Abdul-Rahmon, also known as Noble Sentinel — a full-stack developer and cybersecurity professional.",
    images: [
      {
        url: "/og-image.png",
        alt: "Olaegbe Abdul-Rahmon's Portfolio",
      },
    ],
  },
  icons: {
  icon: [{ url: "/logo.png", type: "image/png" }],
  apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased bg-[url('/general_bg.jpg')] w-full h-full bg-cover bg-center bg-no-repeat`}
      >
        <main className="lg:flex lg:items-center lg:justify-center w-full h-full">
          <Navbar />
          <div className="lg:h-[550px] lg:pt-0 flex flex-col lg:flex-row items-center lg:justify-center h-full">
            <HomeSide view={false} />
            {children}
          </div>
        </main>

        <Analytics />
      </body>
    </html>
  );
}