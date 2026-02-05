// src/components/TeachingApproach.tsx

import React from "react";
import Image from "next/image";
import { Award, Beaker, Code, PieChart, Users } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface TeachingApproachProps {
  title?: string;
  description?: string;
  features?: Feature[];
  images?: string[];
}

const defaultFeatures: Feature[] = [
  {
    title: "70:30 Theory-Practical Ratio",
    description: "Emphasis on hands-on learning to build real-world skills.",
  },
  {
    title: "Industry Expert Faculty",
    description: "Learn from professionals with over 10 years of experience.",
  },
  {
    title: "Real Project Exposure & Software Training",
    description: "Gain practical experience through live projects and modern software.",
  },
  {
    title: "Modern Lab Facilities & Industry Visits",
    description: "Access to state-of-the-art labs and insightful industry tours.",
  },
  {
    title: "Multiple Certifications",
    description: "Earn valuable certifications from SCGJ, NSDC, and Suryamitra.",
  },
];

const iconMap: Record<string, React.ReactNode> = {
  "70:30 Theory-Practical Ratio": <PieChart className="h-6 w-6 text-primary" />,
  "Industry Expert Faculty": <Users className="h-6 w-6 text-primary" />,
  "Real Project Exposure & Software Training": <Code className="h-6 w-6 text-primary" />,
  "Modern Lab Facilities & Industry Visits": <Beaker className="h-6 w-6 text-primary" />,
  "Multiple Certifications": <Award className="h-6 w-6 text-primary" />,
  "Real Project Exposure": <Code className="h-6 w-6 text-primary" />,
  "Field Training": <Users className="h-6 w-6 text-primary" />,
  "Certification": <Award className="h-6 w-6 text-primary" />,
};

const TeachingApproach = ({
  title = "How We Will Teach",
  description = "We focus on a practical, hands-on approach to ensure our students are industry-ready.",
  features = defaultFeatures,
  images = ["/solar-unsplash_07.jpg", "/solar-unsplash_06.jpg", "/solar-unsplash_05.jpg"]
}: TeachingApproachProps) => {
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
                  src={images[0] || "/solar-unsplash_07.jpg"}
                  fill
                  sizes="(max-width: 640px) 50vw, 300px"
                />
              </div>
              {/* Aspect Ratio Container */}
              <div className="relative w-full aspect-square">
                <Image
                  alt="Students working on a project"
                  className="rounded-lg shadow-lg object-cover"
                  src={images[1] || "/solar-unsplash_06.jpg"}
                  fill
                  sizes="(max-width: 640px) 50vw, 300px"
                />
              </div>
            </div>
            {/* Aspect Ratio Container */}
            <div className="relative w-full aspect-[16/9] sm:aspect-[2/1]">
              <Image
                alt="Modern lab with equipment"
                className="rounded-lg shadow-lg object-cover"
                src={images[2] || "/solar-unsplash_05.jpg"}
                fill
                sizes="(max-width: 640px) 100vw, 624px"
              />
            </div>
          </div>

          {/* --- Text Content (no changes) --- */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4 font-sora">
              {title}
            </h2>
            <p className="text-subtext-light mb-8 text-lg">
              {description}
            </p>
            <div className="space-y-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-light-bg bg-brand-50 rounded-lg flex items-center justify-center">
                    {iconMap[feature.title] || <PieChart className="h-6 w-6 text-primary" />}
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
