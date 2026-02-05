import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import CurriculumSection from "@/components/CurriculumSection";
import EligibilitySection from "@/components/EligibilitySection";
import Hero from "@/components/Hero";
import IndustryBenefits from "@/components/IndustryBenefits";
import TeachingApproach from "@/components/TeachingApproach";
import WhyChooseSolar from "@/components/WhyChooseSolar";

export const metadata: Metadata = {
  title: "Solar Training",
  description: "Professional solar installation and maintenance training. Learn practical skills for a career in the solar industry.",
  keywords: ["solar training", "solar installation", "solar technician", "renewable energy training", "solar career"],
};

export default function SolarTrainingPage() {
  return (
    <>
      <Hero />
      <WhyChooseSolar />
      <EligibilitySection />
      <CurriculumSection />
      <TeachingApproach />
      <IndustryBenefits />
      <ContactSection />
    </>
  );
}
