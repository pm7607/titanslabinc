import type { Metadata, Viewport } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export const viewport: Viewport = {
  themeColor: "#7c3aed",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

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
  alternates: {
    canonical: "https://titanslab.in",
  },
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
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Titanslab Inc. | Enterprise Software Engineering & Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Titanslab Inc. | Technology & Digital Solutions Company",
    description: "Building modern websites, custom software, cloud solutions and automation.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  }
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://titanslab.in/#organization",
      "name": "Titanslab Inc.",
      "url": "https://titanslab.in",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://titanslab.in/#logo",
        "url": "https://titanslab.in/assets/titanslab-logo.webp",
        "caption": "Titanslab Inc."
      },
      "image": "https://titanslab.in/assets/titanslab-logo.webp",
      "description": "Titanslab Inc. is a technology and digital solutions company building high-performance websites, enterprise applications, automation, and cloud infrastructure.",
      "email": "titanslabinc@gmail.com",
      "telephone": "+91 97121 17087",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Rajkot",
        "addressRegion": "Gujarat",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/titanslab",
        "https://www.instagram.com/titanslab.inc",
        "https://www.facebook.com/titanslab"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://titanslab.in/#website",
      "url": "https://titanslab.in",
      "name": "Titanslab Inc.",
      "description": "Technology & Digital Solutions Partner",
      "publisher": {
        "@id": "https://titanslab.in/#organization"
      },
      "inLanguage": "en-US"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-white text-slate-900 min-h-screen flex flex-col antialiased selection:bg-purple-700 selection:text-white">
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
