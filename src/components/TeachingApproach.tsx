// src/components/TeachingApproach.tsx

import React from "react";
import Image from "next/image";
import { Award, Beaker, Code, PieChart, Users } from "lucide-react";

const features = [
  {
    icon: <PieChart className="h-6 w-6 text-primary" />,
    title: "70:30 Theory-Practical Ratio",
    description: "Emphasis on hands-on learning to build real-world skills.",
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Industry Expert Faculty",
    description: "Learn from professionals with over 10 years of experience.",
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Real Project Exposure & Software Training",
    description: "Gain practical experience through live projects and modern software.",
  },
  {
    icon: <Beaker className="h-6 w-6 text-primary" />,
    title: "Modern Lab Facilities & Industry Visits",
    description: "Access to state-of-the-art labs and insightful industry tours.",
  },
  {
    icon: <Award className="h-6 w-6 text-primary" />,
    title: "Multiple Certifications",
    description: "Earn valuable certifications from SCGJ, NSDC, and Suryamitra.",
  },
];

const TeachingApproach = () => {
  return (
    <section id="products" className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* --- Image Gallery --- */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {/* Aspect Ratio Container */}
              <div className="relative w-full aspect-square"> 
                <Image
                  alt="Industry expert faculty member teaching students"
                  className="rounded-lg shadow-lg object-cover"
                  src="/solar-unsplash_07.jpg"
                  fill
                  sizes="(max-width: 640px) 50vw, 300px"
                />
              </div>
              {/* Aspect Ratio Container */}
              <div className="relative w-full aspect-square">
                <Image
                  alt="Students working on a solar panel installation project"
                  className="rounded-lg shadow-lg object-cover"
                  src="/solar-unsplash_06.jpg"
                  fill
                  sizes="(max-width: 640px) 50vw, 300px"
                />
              </div>
            </div>
            {/* Aspect Ratio Container */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[2/1]">
              <Image
                alt="Modern lab with solar panel equipment"
                className="rounded-lg shadow-lg object-cover"
                src="/solar-unsplash_05.jpg"
                fill
                sizes="(max-width: 640px) 100vw, 624px"
              />
            </div>
          </div>

          {/* --- Text Content (no changes) --- */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 font-sora">
              How We Will Teach
            </h2>
            <p className="text-subtext-light mb-8 text-lg">
              We focus on a practical, hands-on approach to ensure our students are industry-ready.
            </p>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-light-bg bg-brand-50 rounded-lg flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-black">
                      {feature.title}
                    </h3>
                    <p className="text-subtext-light mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingApproach;
