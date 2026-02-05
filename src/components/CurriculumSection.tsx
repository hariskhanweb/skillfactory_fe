"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"; // Import from shadcn/ui

interface CurriculumItem {
  id: string;
  title: string;
  content: string;
}

interface CurriculumSectionProps {
  title?: string;
  description?: string;
  items?: CurriculumItem[];
}

const defaultCurriculumData: CurriculumItem[] = [
    {
      id: "item-1",
      title: "Solar Fundamentals & Electrical Concepts",
      content: "Dive into the core principles of solar energy, including photovoltaic (PV) effect, solar radiation, and basic electrical theory. Understand circuits, voltage, current, and resistance as they apply to solar PV systems.",
    },
    {
      id: "item-2",
      title: "System Components & Design",
      content: "Learn about the various components of a solar PV system, including modules, inverters, racking, and batteries. Gain hands-on experience with system sizing, component selection, and creating effective site layouts and electrical diagrams.",
    },
    {
      id: "item-3",
      title: "Installation & Safety Procedures",
      content: "Master the best practices for residential and commercial solar installations. This module emphasizes safety protocols, including fall protection, electrical safety (lockout/tagout), and proper handling of equipment according to OSHA and NEC standards.",
    },
    {
      id: "item-4",
      title: "Testing & Commissioning",
      content: "Understand the critical final steps of a project. This includes system verification, performance testing, and troubleshooting common issues. Learn how to properly commission a system to ensure it operates safely and efficiently.",
    },
    {
      id: "item-5",
      title: "Maintenance & Operations",
      content: "Explore the long-term care of solar PV systems. This module covers preventative maintenance schedules, performance monitoring techniques, and common repair procedures to maximize the system's lifespan and energy production.",
    },
    {
      id: "item-6",
      title: "Business & Entrepreneurship Skills",
      content: "Gain the knowledge to succeed in the business side of solar. Topics include project cost analysis, financing options, proposal writing, customer acquisition, and understanding local permits and utility interconnection processes.",
    },
];

const CurriculumSection = ({
  title = "What We Will Teach",
  description = "Our comprehensive curriculum covers every aspect of the solar energy industry.",
  items = defaultCurriculumData
}: CurriculumSectionProps) => {
  return (
    <section id="services" className="bg-brand-50 py-20 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-sora">
            {title}
          </h2>
          <p className="mt-4 text-lg text-subtext-light">
            {description}
          </p>
        </div>

        {/* Shadcn Accordion */}
        <Accordion type="single" collapsible defaultValue={items[0]?.id || "item-1"} className="w-full space-y-4">
          {items.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="bg-white rounded-lg shadow-md border-b-0">
              <AccordionTrigger className="p-6 text-left text-lg sm:text-xl font-semibold text-black hover:no-underline">
                {item.title}
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-subtext-light">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default CurriculumSection;

