// src/app/about/page.tsx

import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { BookOpen, Target, Briefcase, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: "Techlocal Skill Factory - A skill-based training institute focused on job-ready technicians. Practical learning, industry-relevant skills, and career-focused approach. Visit our training center today.",
  keywords: ["about us", "training institute", "skill training", "practical learning", "career-focused training", "job-ready technicians"],
};

export default function AboutPage() {
  return (
    <>
      {/* About Us Section */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">              
              {/* Section Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-sora">
                About Us
              </h2>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-subtext-light mb-6 leading-relaxed">
                Skill-based training institute focused on <span className="font-bold text-gray-900">job-ready technicians</span>.
              </p>
              
              {/* Bullet Points */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-base sm:text-lg text-subtext-light">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <BookOpen className="size-4 text-primary" />
                  </div>
                  <span>Practical learning</span>
                </li>
                <li className="flex items-center gap-3 text-base sm:text-lg text-subtext-light">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="size-4 text-primary" />
                  </div>
                  <span>Industry-relevant skills</span>
                </li>
                <li className="flex items-center gap-3 text-base sm:text-lg text-subtext-light">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Briefcase className="size-4 text-primary" />
                  </div>
                  <span>Career-focused approach</span>
                </li>
              </ul>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+923001234567"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-brand-600 transition-colors"
                >
                  <Phone className="size-5" />
                  <span>Call Us</span>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-white text-primary border-2 border-primary px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-primary/5 transition-colors"
                >
                  <MapPin className="size-5" />
                  <span>Visit Center</span>
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative w-full mt-8 lg:mt-0">
              <div className="relative w-full rounded-xl overflow-hidden aspect-[4/3] border border-gray-100">
                <Image
                  alt="Institute building, training classroom"
                  className="w-full h-full object-cover"
                  src="/solar-unsplash_03.png"
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
