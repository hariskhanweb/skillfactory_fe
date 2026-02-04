// src/components/Hero.tsx

"use client";

import React from "react";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";

interface HeroProps {
  imageSrc?: string;
  callLink?: string;
  whatsappLink?: string;
  className?: string;
}

const checkIcon = (
  <svg className="size-4 shrink-0 text-primary sm:size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const Hero = ({
  imageSrc = "/solar-unsplash.png",
  callLink = "tel:+923001234567",
  whatsappLink = "https://wa.me/923001234567",
  className = "",
}: HeroProps) => {
  return (
    <section
      id="home"
      className={`relative overflow-hidden py-12 px-4 sm:py-16 sm:px-5 lg:py-20 lg:px-6 ${className}`}
    >
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50/60 to-white pointer-events-none" aria-hidden />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 xl:gap-12 items-center">
          {/* --- Text Content --- */}
          <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-900 leading-tight tracking-tight font-sora sm:text-3xl lg:text-4xl xl:text-[2.75rem]">
              Learn a Skill.{" "}
              <span className="text-primary block mt-1">Start Working Fast.</span>
            </h1>
            <p className="mt-3 text-sm text-subtext-light max-w-xl leading-relaxed sm:mt-4 sm:text-base">
              High-demand technician courses.
              <br />
              Practical training. Limited seats.
            </p>

            {/* Why Join card */}
            <div className="mt-5 p-4 sm:mt-6 sm:p-5 lg:mx-0">
              <h2 className="text-base font-bold text-gray-900 font-sora sm:text-lg">
                Why Join
              </h2>
              <ul className="mt-3 space-y-2">
                {[
                  "100% practical learning",
                  "No experience needed",
                  "Job & self-work guidance",
                  "Short-term courses",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-subtext-light text-sm sm:gap-2.5 sm:text-base">
                    {checkIcon}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA block */}
            <div className="mt-5 space-y-3 sm:mt-6">
              <p className="text-sm font-semibold text-gray-900 sm:text-base">
                👉 Call Now for Free Counselling
              </p>
              <div className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:gap-3">
                <a
                  href={callLink}
                  className="inline-flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg text-base font-semibold hover:bg-brand-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:px-4 sm:py-2.5 sm:text-sm lg:min-w-[180px] lg:px-6 lg:py-4 lg:text-base"
                >
                  <Phone className="size-5 shrink-0 lg:size-6" aria-hidden />
                  Call
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-5 py-3 rounded-lg text-base font-semibold hover:bg-[#20bd5a] transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 sm:px-4 sm:py-2.5 sm:text-sm lg:min-w-[180px] lg:px-6 lg:py-4 lg:text-base"
                >
                  <MessageCircle className="size-5 shrink-0 lg:size-6" aria-hidden />
                  WhatsApp
                </a>
              </div>
              <p className="inline-block px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold sm:text-sm">
                Next batch starting soon
              </p>
            </div>
          </div>

          {/* --- Image Content --- */}
          <div className="relative mt-6 w-full lg:mt-0">
            <div className="relative w-full rounded-xl overflow-hidden">
              <Image
                alt="Students working in lab, trainers guiding, real machines"
                className="w-full h-auto object-cover"
                src={imageSrc}
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
  );
};

export default Hero;
