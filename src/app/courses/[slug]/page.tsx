// src/app/courses/[slug]/page.tsx

import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Laptop, Home, Signal, Sun, Car, ArrowLeft, Check } from "lucide-react";

interface Course {
  id: string;
  slug: string;
  title: string;
  jobOrientedPoints: string[];
  workAs: string[];
  whoCanJoin: string[];
  icon: React.ReactNode;
  imageAlt: string;
  imageSrc: string;
}

const coursesData: Record<string, Course> = {
  "laptop-repair-training": {
    id: "1",
    slug: "laptop-repair-training",
    title: "Laptop Repair Training",
    jobOrientedPoints: [
      "Learn by doing",
      "Real machines",
      "Short-term training",
    ],
    workAs: [
      "Laptop technician",
      "Service center staff",
      "Own repair shop",
    ],
    whoCanJoin: [
      "10th pass & above",
      "No experience needed",
    ],
    icon: <Laptop className="size-6 text-primary" />,
    imageAlt: "Laptop repair lab, technician tools",
    imageSrc: "/solar-unsplash_06.png",
  },
  "appliance-repair-training": {
    id: "2",
    slug: "appliance-repair-training",
    title: "Home Appliance Repair Training",
    jobOrientedPoints: [
      "Learn by doing",
      "Real machines",
      "Short-term training",
    ],
    workAs: [
      "Appliance technician",
      "Service center staff",
      "Own repair business",
    ],
    whoCanJoin: [
      "10th pass & above",
      "No experience needed",
    ],
    icon: <Home className="size-6 text-primary" />,
    imageAlt: "Appliance repair practical",
    imageSrc: "/solar-unsplash_07.png",
  },
  "telecom-5g-technician-training": {
    id: "3",
    slug: "telecom-5g-technician-training",
    title: "Telecom 5G Technician Training",
    jobOrientedPoints: [
      "Learn by doing",
      "Real equipment",
      "Short-term training",
    ],
    workAs: [
      "5G technician",
      "Field service staff",
      "Network installation specialist",
    ],
    whoCanJoin: [
      "10th pass & above",
      "No experience needed",
    ],
    icon: <Signal className="size-6 text-primary" />,
    imageAlt: "Telecom field work, towers",
    imageSrc: "/solar-unsplash_10.png",
  },
  "solar-technician-training": {
    id: "4",
    slug: "solar-technician-training",
    title: "Solar Technician Training",
    jobOrientedPoints: [
      "Learn by doing",
      "Real equipment",
      "Short-term training",
    ],
    workAs: [
      "Solar technician",
      "Installation specialist",
      "Own solar business",
    ],
    whoCanJoin: [
      "10th pass & above",
      "No experience needed",
    ],
    icon: <Sun className="size-6 text-primary" />,
    imageAlt: "Solar panel installation",
    imageSrc: "/solar-unsplash_08.png",
  },
  "ev-technician-training": {
    id: "5",
    slug: "ev-technician-training",
    title: "EV Technician Training",
    jobOrientedPoints: [
      "Learn by doing",
      "Real equipment",
      "Short-term training",
    ],
    workAs: [
      "EV technician",
      "Service center staff",
      "Own EV service shop",
    ],
    whoCanJoin: [
      "10th pass & above",
      "No experience needed",
    ],
    icon: <Car className="size-6 text-primary" />,
    imageAlt: "EV training lab, electric vehicles",
    imageSrc: "/solar-unsplash_09.png",
  },
};

// Generate static params for all courses
export function generateStaticParams() {
  return Object.keys(coursesData).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each course
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = coursesData[slug];

  if (!course) {
    return {
      title: "Course Not Found",
      description: "The requested course could not be found.",
    };
  }

  const description = `Learn ${course.title.toLowerCase()}. ${course.jobOrientedPoints.join(". ")}. Work as ${course.workAs.join(", ")}. ${course.whoCanJoin.join(". ")}. Call now for course details.`;

  return {
    title: course.title,
    description: description,
    keywords: [
      course.title.toLowerCase(),
      "practical training",
      "job-oriented course",
      "skill training",
      "hands-on learning",
      ...course.workAs.map(role => role.toLowerCase()),
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
  const course = coursesData[slug];

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
      {/* Page Title Section */}
      <section className="relative overflow-hidden pt-10 px-4 sm:pt-10 sm:px-6 lg:pt-12 lg:px-8 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-subtext-light hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="size-4" />
            <span>Back to Courses</span>
          </Link>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Content */}
            <div>
              {/* Course Title */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8 font-sora">
                {course.title}
              </h2>

              {/* Job-Oriented Practical Course */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-sora">
                  Job-Oriented Practical Course
                </h3>
                <ul className="space-y-2">
                  {course.jobOrientedPoints.map((point, index) => (
                    <li key={index} className="flex items-center gap-3 text-base sm:text-lg text-subtext-light">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="size-4 text-primary" />
                      </div>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* You Can Work As */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-sora">
                  You Can Work As
                </h3>
                <ul className="space-y-2">
                  {course.workAs.map((role, index) => (
                    <li key={index} className="flex items-center gap-3 text-base sm:text-lg text-subtext-light">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="size-4 text-primary" />
                      </div>
                      <span>{role}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Who Can Join */}
              <div className="mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-sora">
                  Who Can Join
                </h3>
                <ul className="space-y-2">
                  {course.whoCanJoin.map((criteria, index) => (
                    <li key={index} className="flex items-center gap-3 text-base sm:text-lg text-subtext-light">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                        <Check className="size-4 text-primary" />
                      </div>
                      <span>{criteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Section */}
              <div className="space-y-4">
                <a
                  href="tel:+923001234567"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-brand-600 transition-colors"
                >
                  <span>👉</span>
                  <span>Call Now for Course Details</span>
                </a>
                <p className="text-sm sm:text-base text-red-600 font-semibold">
                  Seats filling fast
                </p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative w-full mt-8 lg:mt-0">
              <div className="relative w-full rounded-xl overflow-hidden aspect-[4/3] border border-gray-100">
                <Image
                  alt={course.imageAlt}
                  className="w-full h-full object-cover"
                  src={course.imageSrc}
                  width={600}
                  height={450}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
