// src/components/TrustStrip.tsx

"use client";

import React from "react";
import { GraduationCap, Users, Wrench, Target } from "lucide-react";

interface TrustStripProps {
  className?: string;
}

const trustItems = [
  {
    icon: <GraduationCap className="size-5 text-primary" />,
    text: "Practical training center",
  },
  {
    icon: <Users className="size-5 text-primary" />,
    text: "Experienced trainers",
  },
  {
    icon: <Wrench className="size-5 text-primary" />,
    text: "Real machines & tools",
  },
  {
    icon: <Target className="size-5 text-primary" />,
    text: "Career-focused courses",
  },
];

const TrustStrip = ({ className = "" }: TrustStripProps) => {
  return (
    <section
      className={`relative overflow-hidden py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-primary/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 font-sora mb-3">
            Why Choose Our Training Platform
          </h2>
          <p className="text-sm sm:text-base text-subtext-light max-w-2xl mx-auto">
            Experience professional learning with industry-standard tools and expert guidance
          </p>
        </div>

        {/* Trust Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {trustItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-5 sm:p-6 overflow-hidden"
            >
              {/* Decorative accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/60 via-primary to-primary/60 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon container with enhanced styling */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-50 to-white rounded-xl border-2 border-gray-100 group-hover:border-primary/30 group-hover:from-brand-100 group-hover:to-brand-50 group-hover:shadow-md transition-all duration-300">
                  {item.icon}
                </div>
              </div>
              
              {/* Text with better typography */}
              <p className="text-sm sm:text-base font-semibold text-gray-900 leading-snug group-hover:text-primary transition-colors duration-300">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
