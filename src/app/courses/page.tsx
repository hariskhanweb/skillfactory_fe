import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Laptop, Home, Signal, Sun, Car, ArrowRight, Clock, Check } from "lucide-react";
import FOMOSection from "@/components/FOMOSection";

export const metadata: Metadata = {
  title: "Courses Overview",
  description: "Explore our comprehensive range of high-demand skill courses: Laptop Repair, Appliance Repair, Telecom 5G Technician, Solar Technician, and EV Technician. Choose one skill. Build your future.",
  keywords: ["courses", "skill courses", "training courses", "laptop repair course", "appliance repair course", "solar training", "EV technician course", "5G technician course"],
};

interface Course {
  id: string;
  slug: string;
  title: string;
  description: string;
  points: string[];
  duration: string;
  level: string;
  icon: React.ReactNode;
}

const courses: Course[] = [
  {
    id: "4",
    slug: "solar-technician-training",
    title: "Solar Technician Training",
    description: "Join the renewable energy revolution. Learn rooftop solar installation and maintenance in a fast-growing sector.",
    points: [
      "Rooftop solar work",
      "Renewable energy sector",
      "Fast-growing demand",
    ],
    duration: "4 Months",
    level: "Intermediate",
    icon: <Sun className="size-6 text-primary" />,
  },
  {
    id: "2",
    slug: "appliance-repair-training",
    title: "Home / Large Appliance Repair",
    description: "Learn to repair AC, refrigerators, washing machines, and other large appliances. High daily demand with flexible work options.",
    points: [
      "AC, Fridge, Washing Machine",
      "Daily service demand",
      "Work anywhere",
    ],
    duration: "2.5 Months",
    level: "Beginner",
    icon: <Home className="size-6 text-primary" />,
  },
  {
    id: "1",
    slug: "laptop-repair-training",
    title: "Laptop Repair & Basic Networking",
    description: "Master laptop and computer repair along with basic networking skills. Perfect for starting your own service center or joining established repair shops.",
    points: [
      "Laptop & computer repair",
      "Service center ready skill",
      "Shop & job options",
    ],
    duration: "3 Months",
    level: "Beginner",
    icon: <Laptop className="size-6 text-primary" />,
  },
  {
    id: "5",
    slug: "ev-technician-training",
    title: "EV (Electric Vehicle) Technician",
    description: "Future-proof your career with electric vehicle servicing skills. High industry demand as EV adoption grows rapidly.",
    points: [
      "EV basics & servicing",
      "Future automobile skill",
      "High industry demand",
    ],
    duration: "3.5 Months",
    level: "Intermediate",
    icon: <Car className="size-6 text-primary" />,
  },
  {
    id: "3",
    slug: "telecom-5g-technician-training",
    title: "Telecom 5G Technician",
    description: "Enter the growing telecom industry with 5G technology skills. Field work opportunities in a rapidly expanding sector.",
    points: [
      "Telecom & field work",
      "Growing industry",
      "Outdoor job roles",
    ],
    duration: "3 Months",
    level: "Intermediate",
    icon: <Signal className="size-6 text-primary" />,
  },
];

export default function CoursesPage() {
  return (
    <>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-8 bg-gradient-to-b from-brand-50/60 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-sora">
                Courses Overview
              </h1>
              <p className="text-lg sm:text-xl text-subtext-light mx-auto">
                Explore our comprehensive range of high-demand skill courses designed to get you job-ready
              </p>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="pb-12 px-4 sm:pb-16 sm:px-6 lg:pb-20 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="group relative bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
                >
                  {/* Decorative accent */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/70 via-primary to-primary/70 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-50 via-white to-brand-50 rounded-xl border-2 border-gray-100 group-hover:border-primary/40 group-hover:from-brand-100 group-hover:to-brand-50 group-hover:shadow-md transition-all duration-300">
                      {course.icon}
                    </div>
                  </div>
                  
                  {/* Course Title */}
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {course.title}
                  </h2>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-subtext-light mb-4 leading-relaxed flex-grow">
                    {course.description}
                  </p>
                  
                  {/* Course Meta */}
                  <div className="flex items-center gap-4 mb-4 text-xs sm:text-sm text-subtext-light">
                    <div className="flex items-center gap-1.5">
                      <Clock className="size-4 text-primary" />
                      <span>{course.duration}</span>
                    </div>
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                      {course.level}
                    </span>
                  </div>
                  
                  {/* Bullet Points */}
                  <ul className="space-y-2 mb-6">
                    {course.points.map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2.5 text-sm text-subtext-light"
                      >
                        <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                          <Check className="size-3 text-primary" />
                        </div>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Link
                    href={`/courses/${course.slug}`}
                    className="w-full flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-brand-600 transition-colors duration-200 group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOMO Section */}
        <FOMOSection />
    </>
  );
}
