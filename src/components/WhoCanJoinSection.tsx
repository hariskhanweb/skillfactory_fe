// src/components/WhoCanJoinSection.tsx

"use client";

import React from "react";
import { GraduationCap, UserPlus, Briefcase, RefreshCw, ThumbsUp, Phone } from "lucide-react";

interface WhoCanJoinSectionProps {
  className?: string;
  callLink?: string;
}

const eligibilityItems = [
  {
    icon: <GraduationCap className="size-4 text-primary" />,
    text: "10th pass & above",
  },
  {
    icon: <UserPlus className="size-4 text-primary" />,
    text: "Freshers welcome",
  },
  {
    icon: <Briefcase className="size-4 text-primary" />,
    text: "Working candidates",
  },
  {
    icon: <RefreshCw className="size-4 text-primary" />,
    text: "Career switchers",
  },
];

const WhoCanJoinSection = ({
  className = "",
  callLink = "tel:+923001234567",
}: WhoCanJoinSectionProps) => {
  return (
    <section
      id="who-can-join"
      className={`relative overflow-hidden py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 ${className}`}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" aria-hidden />
      
      <div className="relative max-w-5xl mx-auto">
        <div className="text-center">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wider font-sora mb-4 sm:mb-6">
            Who Can Join
          </h2>
          
          {/* Eligibility Items - Compact Horizontal Layout */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            {eligibilityItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex-shrink-0 w-6 h-6 bg-primary/10 rounded flex items-center justify-center">
                  {item.icon}
                </div>
                <p className="text-sm sm:text-base font-medium text-gray-900 whitespace-nowrap">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          
          {/* Prominent CTA Section */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border-2 border-primary/20 shadow-xl">
            <div className="mb-6">
              <p className="text-base sm:text-lg text-subtext-light mb-6">
                Ready to start your journey? Check if you&apos;re eligible today!
              </p>
            </div>
            
            {/* Large CTA Button */}
            <a
              href={callLink}
              className="inline-flex items-center gap-3 bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-bold hover:bg-brand-600 hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300 group"
            >
              <ThumbsUp className="size-6 sm:size-7" />
              <span>Call to Check Eligibility</span>
              <Phone className="size-5 sm:size-6 group-hover:animate-pulse" />
            </a>
            
            <p className="mt-4 text-xs sm:text-sm text-subtext-light">
              Free consultation • Quick response • Expert guidance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoCanJoinSection;
