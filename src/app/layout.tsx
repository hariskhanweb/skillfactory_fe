import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Techlocal Skill Factory - High-Demand Skill Training Courses",
    template: "%s | Techlocal Skill Factory",
  },
  description: "Learn practical, job-ready skills with hands-on training. Courses in Laptop Repair, Appliance Repair, Telecom 5G, Solar Technician, and EV Technician. Start your career fast with industry-focused training.",
  keywords: ["skill training", "technical courses", "job-oriented training", "laptop repair", "appliance repair", "solar technician", "EV technician", "5G technician", "practical training"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Techlocal Skill Factory",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={sora.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
