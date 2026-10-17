import LocalBusinessSchema from "@/app/components/LocalBusinessSchema";
import SeoSchema from "@/app/components/SeoSchema";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import FloatingChatbot from "./components/FloatingChatbot";

export const metadata: Metadata = {
  metadataBase: new URL("https://rockyescortskarachi.com"),
  title: {
    default: "Rocky Escorts Karachi | Premium VIP Call Girls & Elite Companions",
    template: "%s | Rocky Escorts Karachi",
  },
  description:
    "Rocky Escorts Karachi offers premium VIP call girls, verified escorts and elite companions in DHA, Clifton, Bahria Town, PECHS, Gulshan and major hotels. Discreet 24/7 service. Call 03708540579.",
  keywords: [
    "Rocky Escorts Karachi",
    "Karachi Escorts",
    "VIP Escorts Karachi",
    "Call Girls Karachi",
    "Escorts in DHA Karachi",
    "Escorts in Clifton Karachi",
    "Escorts in Bahria Town Karachi",
    "Escorts in PECHS Karachi",
    "Hotel Escorts Karachi",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rocky Escorts Karachi | Premium VIP Call Girls",
    description:
      "Premium VIP call girls and elite companions in Karachi. Discreet, verified and available 24/7. Call 03708540579.",
    type: "website",
    url: "https://rockyescortskarachi.com",
    siteName: "Rocky Escorts Karachi",
    images: [
      {
        url: "/karachi-escorts-vip-call-girls-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Rocky Escorts Karachi - VIP Call Girls",
      },
    ],
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rocky Escorts Karachi | Premium VIP Call Girls",
    description: "Verified VIP escorts and call girls in Karachi. Call 03708540579",
    images: ["/karachi-escorts-vip-call-girls-hero.jpg"],
  },
  verification: {
    google: "k9QKCa-USGD0yWx10q9fzrEBHRl5LqVegMSaP3dTbbg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0a0a0a] text-gray-200 antialiased">
        <LocalBusinessSchema />
        <SeoSchema />
        <Header />
        <WhatsAppButton />
        <FloatingChatbot />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}