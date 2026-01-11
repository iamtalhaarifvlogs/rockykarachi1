import LocalBusinessSchema from "@/app/components/LocalBusinessSchema";
import SeoSchema from "@/app/components/SeoSchema";
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import WhatsAppButton from "@/app/components/WhatsAppButton";
import FacebookButton from "@/app/components/FacebookButton";

export const metadata: Metadata = {
  title: "Rocky Escorts Karachi | Premium Escort Services in Karachi",
  description:
    "Rocky Escorts Karachi offers premium escort services with verified models, 24/7 availability, and discreet service in Karachi.",
  keywords: [
    "Rocky Escorts Karachi",
    "Karachi Escorts",
    "VIP Escorts Karachi",
    "Call Girls Karachi",
    "Luxury Escorts Karachi",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Rocky Escorts Karachi",
    description:
      "Premium escort services in Karachi with luxury companions and full privacy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-gray-200">
<LocalBusinessSchema />
<SeoSchema />
        <Header />
<WhatsAppButton />
<FacebookButton />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
