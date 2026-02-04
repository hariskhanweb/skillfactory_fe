// src/components/CoursesSection.tsx

"use client";

import React from "react";
import { Laptop, Home, Signal, Sun, Car, Check } from "lucide-react";

interface Course {
  id: string;
  title: string;
  points: string[];
  icon: React.ReactNode;
}

interface CoursesSectionProps {
  className?: string;
  callLink?: string;
}

const courses: Course[] = [
  {
    id: "1",
    title: "Laptop Repair & Basic Networking",
    points: [
      "Laptop & computer repair",
      "Service center ready skill",
      "Shop & job options",
    ],
    icon: <Laptop className="size-6 text-primary" />,
  },
  {
    id: "2",
    title: "Home / Large Appliance Repair",
    points: [
      "AC, Fridge, Washing Machine",
      "Daily service demand",
      "Work anywhere",
    ],
    icon: <Home className="size-6 text-primary" />,
  },
  {
    id: "3",
    title: "Telecom 5G Technician",
    points: [
      "Telecom & field work",
      "Growing industry",
      "Outdoor job roles",
    ],
    icon: <Signal className="size-6 text-primary" />,
  },
  {
    id: "4",
    title: "Solar Technician Training",
    points: [
      "Rooftop solar work",
      "Renewable energy sector",
      "Fast-growing demand",
    ],
    icon: <Sun className="size-6 text-primary" />,
  },
  {
    id: "5",
    title: "EV (Electric Vehicle) Technician",
    points: [
      "EV basics & servicing",
      "Future automobile skill",
      "High industry demand",
    ],
    icon: <Car className="size-6 text-primary" />,
  },
];

const CoursesSection = ({
  className = "",
  callLink = "tel:+923001234567",
}: CoursesSectionProps) => {
  return (
    <section
      id="courses"
      className={`relative overflow-hidden py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-b from-gray-50/50 to-white ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-sora mb-3">
            High-Demand Skill Courses
          </h2>
          <p className="text-sm sm:text-base text-subtext-light max-w-2xl mx-auto">
            Choose one skill. Build your future.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6 lg:gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative bg-white rounded-xl p-6 border-2 border-gray-100 hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col"
            >
              {/* Decorative accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary/70 via-primary to-primary/70 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon with enhanced styling */}
              <div className="mb-5">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-50 via-white to-brand-50 rounded-xl border-2 border-gray-100 shadow-sm group-hover:border-primary/40 group-hover:from-brand-100 group-hover:to-brand-50 group-hover:shadow-md transition-all duration-300">
                  {course.icon}
                </div>
              </div>
              
              {/* Course Title */}
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight min-h-[3.5rem]">
                {course.title}
              </h3>
              
              {/* Bullet Points with checkmarks */}
              <ul className="space-y-2.5 mb-6 flex-grow">
                {course.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2.5 text-sm text-subtext-light"
                  >
                    <div className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="size-3 text-primary" />
                    </div>
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button with enhanced styling */}
              <a
                href={callLink}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg text-sm font-semibold hover:bg-brand-600 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200 group/btn"
              >
                <span className="text-base">👉</span>
                <span>Call Now</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
