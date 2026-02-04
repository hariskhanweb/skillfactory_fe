// src/app/placement-careers/page.tsx

import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { MessageSquare, FileText, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Placement & Careers",
  description: "Career support after training at Techlocal Skill Factory. Interview preparation, job references, and work guidance. Placement assistance available. Call for career counselling.",
  keywords: ["placement", "career support", "job assistance", "interview preparation", "job references", "career guidance", "placement assistance"],
};

export default function PlacementCareersPage() {
  return (
    <>
      {/* Career Support Section */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Section Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-sora">
                Career Support
              </h2>
              
              {/* Bullet Points */}
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3 text-base sm:text-lg text-subtext-light">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="size-4 text-primary" />
                  </div>
                  <span>Interview preparation</span>
                </li>
                <li className="flex items-center gap-3 text-base sm:text-lg text-subtext-light">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <FileText className="size-4 text-primary" />
                  </div>
                  <span>Job references</span>
                </li>
                <li className="flex items-center gap-3 text-base sm:text-lg text-subtext-light">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="size-4 text-primary" />
                  </div>
                  <span>Work guidance</span>
                </li>
              </ul>
              
              {/* Conditional Text */}
              <p className="text-sm sm:text-base text-subtext-light italic mb-8">
                Placement assistance only
              </p>
              
              {/* CTA Button */}
              <a
                href="tel:+923001234567"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-brand-600 transition-colors"
              >
                <span>👉</span>
                <span>Call for Counselling</span>
              </a>
            </div>

            {/* Right Content - Image */}
            <div className="relative w-full mt-8 lg:mt-0">
              <div className="relative w-full rounded-xl overflow-hidden aspect-[4/3] border border-gray-100">
                <Image
                  alt="Career discussion, student counselling visuals"
                  className="w-full h-full object-cover"
                  src="/solar-unsplash_05.png"
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
