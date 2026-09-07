import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import Preloader from "@/components/layout/Preloader";

export const metadata: Metadata = {
  title: "Titanslab Inc. | Technology & Digital Solutions Company",
  description: "Titanslab Inc. builds modern websites, custom software, e-commerce, business process automation, cloud infrastructure, AI/ML tools, and ERP solutions.",
  keywords: [
    "Titanslab",
    "Titanslab Inc",
    "Website Development",
    "E-commerce Development",
    "Business Automation",
    "AI ML Solutions",
    "UI UX Design",
    "ERP Solutions",
    "Cloud Services",
    "Algorithmic Trading Solutions",
    "Digital Marketing",
    "Software Agency India"
  ],
  authors: [{ name: "Titanslab Inc." }],
  creator: "Titanslab Inc.",
  metadataBase: new URL("https://titanslab.in"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Titanslab Inc. | Technology & Digital Solutions Company",
    description: "Building modern websites, custom software, automation, cloud solutions and digital experiences for high-growth businesses.",
    url: "https://titanslab.in",
    siteName: "Titanslab Inc.",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Titanslab Inc. | Technology & Digital Solutions Company",
    description: "Building modern websites, custom software, cloud solutions and automation.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-slate-900 min-h-screen flex flex-col antialiased selection:bg-purple-600 selection:text-white">
        <Preloader />
        <CustomCursor />
        <TopBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
