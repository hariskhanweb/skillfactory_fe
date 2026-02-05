// src/app/courses/[slug]/page.tsx

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Check, Phone, MessageCircle, ArrowRight, User } from "lucide-react";
import coursesData from "@/data/courses.json";
import WhyChooseSolar from "@/components/WhyChooseSolar";
import EligibilitySection from "@/components/EligibilitySection";
import CurriculumSection from "@/components/CurriculumSection";
import TeachingApproach from "@/components/TeachingApproach";
import IndustryBenefits from "@/components/IndustryBenefits";
import ContactSection from "@/components/ContactSection";

// Generate static params for all courses
export function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each course
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesData[slug as keyof typeof coursesData];

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    };
  }

  const description = `Learn ${course.title.toLowerCase()}. Practical training. Job-oriented course. Call now for course details.`;

  return {
    title: course.title,
    description: description,
    keywords: [
      course.title.toLowerCase(),
      "practical training",
      "job-oriented course",
      "skill training",
      "hands-on learning",
    ],
    openGraph: {
      title: course.title,
      description: description,
      type: "website",
    },
  };
}

export default async function CourseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = coursesData[slug as keyof typeof coursesData];

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Course Not Found</h1>
          <Link href="/courses" className="text-primary hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="relative overflow-hidden py-12 px-4 sm:py-16 sm:px-5 lg:py-20 lg:px-6">
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-white pointer-events-none" aria-hidden />

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
            {/* --- Text Content --- */}
            <div className="text-left">
              <h1 className="text-2xl font-bold text-gray-900 leading-tight tracking-tight font-sora sm:text-3xl lg:text-4xl xl:text-[2.75rem]" style={{ lineHeight: '120%' }}>
                {"firstLine" in course.hero && (course.hero as any).firstLine ? (
                  <>
                    {(course.hero as any).firstLine}{" "}
                    <span className="text-primary">{course.hero.titleHighlight}</span>
                    {"secondLine" in course.hero && (course.hero as any).secondLine && (
                      <>
                        {" "}
                        <span>{(course.hero as any).secondLine}</span>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {course.hero.title}{" "}
                    <span className="text-primary">{course.hero.titleHighlight}</span>
                  </>
                )}
              </h1>
              <p className="mt-3 text-sm text-subtext-light max-w-lg leading-relaxed sm:mt-4 sm:text-base">
                {course.hero.subtitle && (
                  <>
                    {course.hero.subtitle}
                    {course.hero.description && <br />}
                  </>
                )}
                {course.hero.description && course.hero.description}
              </p>

              {/* CTA block */}
              <div className="mt-5 space-y-3 sm:mt-6">
                <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
                  <a
                    href="#get-started"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg text-base font-semibold hover:bg-brand-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:px-4 sm:py-2.5 sm:text-sm lg:min-w-[180px] lg:px-6 lg:py-4 lg:text-base"
                  > 
                    Get Enrolled Today
                  </a>
                </div>
              </div>
            </div>

            {/* --- Image Content --- */}
            <div className="relative mt-6 w-full lg:mt-0">
              <div className="relative w-full rounded-xl overflow-hidden">
                <Image
                  alt={course.hero.imageAlt}
                  className="w-full h-auto object-cover"
                  src={course.hero.imageSrc}
                  width={600}
                  height={450}
                  priority
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhyChooseSolar
        title={course.whyChoose.title}
        description={course.whyChoose.description}
        cards={course.whyChoose.cards}
      />
      <EligibilitySection
        title={course.eligibility.title}
        data={course.eligibility.data}
      />
      <CurriculumSection
        title={course.curriculum.title}
        description={course.curriculum.description}
        items={course.curriculum.items}
      />
      <TeachingApproach
        title={course.teachingApproach.title}
        description={course.teachingApproach.description}
        features={course.teachingApproach.features}
        images={course.teachingApproach.images}
      />
      <IndustryBenefits
        importanceTitle={course.industryBenefits.importanceTitle}
        importanceHeading={course.industryBenefits.importanceHeading}
        importanceData={course.industryBenefits.importanceData}
        benefitsTitle={course.industryBenefits.benefitsTitle}
        benefitsHeading={course.industryBenefits.benefitsHeading}
        benefitsData={course.industryBenefits.benefitsData}
      />
      
      {/* CTA Section */}
      <section className="bg-primary py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 font-sora">
            Start Your Enrollment Today
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Ready to begin your journey? Choose how you'd like to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary min-w-[200px]"
            >
              Enroll Now
              <ArrowRight className="size-5" aria-hidden />
            </a>
            <a
              href="tel:+91-9911433433"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary min-w-[200px]"
            >
              <User className="size-5" aria-hidden />
              Talk to a Counsellor
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
