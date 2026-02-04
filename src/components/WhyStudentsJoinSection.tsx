// src/components/WhyStudentsJoinSection.tsx

"use client";

import React from "react";
import Image from "next/image";
import { Hand, Users, Target, Briefcase, ThumbsUp } from "lucide-react";

interface WhyStudentsJoinSectionProps {
  className?: string;
  imageSrc?: string;
  counsellorLink?: string;
}

const features = [
  {
    icon: <Hand className="size-5 text-primary" />,
    text: "Hands-on practice",
  },
  {
    icon: <Users className="size-5 text-primary" />,
    text: "Small batches",
  },
  {
    icon: <Target className="size-5 text-primary" />,
    text: "Industry-needed skills",
  },
  {
    icon: <Briefcase className="size-5 text-primary" />,
    text: "Career guidance",
  },
];

const WhyStudentsJoinSection = ({
  className = "",
  imageSrc = "/solar-unsplash_01.png",
  counsellorLink = "tel:+923001234567",
}: WhyStudentsJoinSectionProps) => {
  return (
    <section
      id="why-join"
      className={`relative overflow-hidden py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-primary/10 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-left">
            {/* Main Heading */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wider font-sora mb-4">
              Why Students Join Us
            </h2>
            
            {/* Sub-heading */}
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6 font-sora">
              Trusted Training Center
            </h3>
            
            {/* Features List */}
            <ul className="space-y-3 mb-6">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-base sm:text-lg text-subtext-light"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <span>{feature.text}</span>
                </li>
              ))}
            </ul>
            
            {/* Supporting Statement */}
            <p className="text-sm sm:text-base text-subtext-light italic mb-6">
              Skilled technicians are in short supply
            </p>
            
            {/* CTA Button */}
            <a
              href={counsellorLink}
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-brand-600 hover:shadow-lg hover:shadow-primary/25 transition-all duration-200"
            >
              <ThumbsUp className="size-5" />
              <span>Talk to Counsellor</span>
            </a>
          </div>

          {/* Image Section */}
          <div className="relative w-full mt-8 lg:mt-0">
            <div className="relative w-full rounded-xl overflow-hidden aspect-[4/3] border border-gray-100">
              <Image
                alt="Trainer teaching, students using equipment"
                className="w-full h-full object-cover"
                src={imageSrc}
                width={600}
                height={450}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyStudentsJoinSection;
