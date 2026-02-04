import type { Metadata } from "next";
import CareerSupportSection from "@/components/CareerSupportSection";
import CoursesSection from "@/components/CoursesSection";
import FOMOSection from "@/components/FOMOSection";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhoCanJoinSection from "@/components/WhoCanJoinSection";
import WhyStudentsJoinSection from "@/components/WhyStudentsJoinSection";

export const metadata: Metadata = {
  title: "Home",
  description: "Learn a skill. Start working fast. High-demand technician courses with 100% practical learning. No experience needed. Job & self-work guidance. Short-term courses available.",
  keywords: ["skill training", "practical courses", "job training", "technician courses", "hands-on learning"],
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CoursesSection />
      <WhyStudentsJoinSection />
      <WhoCanJoinSection />
      <CareerSupportSection />
      <FOMOSection /> 
    </>
  );
}
