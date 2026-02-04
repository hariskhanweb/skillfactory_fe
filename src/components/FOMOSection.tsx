// src/components/FOMOSection.tsx

"use client";

import React from "react";
import { Phone, MessageCircle, AlertCircle, Clock, Users } from "lucide-react";

interface FOMOSectionProps {
  className?: string;
  callLink?: string;
  whatsappLink?: string;
}

const FOMOSection = ({
  className = "",
  callLink = "tel:+923001234567",
  whatsappLink = "https://wa.me/923001234567",
}: FOMOSectionProps) => {
  return (
    <section
      id="fomo"
      className={`relative overflow-hidden bg-gradient-to-br from-primary/10 via-red-50/40 to-orange-50/30 ${className}`}
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-200/20 rounded-full blur-3xl pointer-events-none" aria-hidden />
      
      <div className="relative w-full">
        {/* Main CTA Card */}
        <div className="bg-white p-8 sm:p-10 lg:p-12 border-2 border-primary/20">
          <div className="text-center max-w-4xl mx-auto">
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full mb-6">
              <AlertCircle className="size-4 text-red-600" />
              <span className="text-sm font-semibold text-red-600">Limited Seats Available</span>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-sora">
              Limited Seats Per Batch
            </h2>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-subtext-light mb-6 max-w-2xl mx-auto">
              We keep small batches for practical training.
            </p>
            
            {/* Features */}
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm sm:text-base text-subtext-light">
                <Users className="size-5 text-primary" />
                <span>Small batch sizes</span>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base text-subtext-light">
                <Clock className="size-5 text-primary" />
                <span>Limited availability</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 mb-6">
              <a
                href={callLink}
                className="group inline-flex items-center justify-center gap-3 bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-bold hover:bg-brand-600 hover:-translate-y-1 transition-all duration-300"
              >
                <Phone className="size-6 sm:size-7" />
                <span>Call Now</span>
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl text-lg sm:text-xl font-bold hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300"
              >
                <MessageCircle className="size-6 sm:size-7" />
                <span>WhatsApp Now</span>
              </a>
            </div>
            
            {/* Urgency Message */}
            <div className="flex items-center justify-center gap-2 text-base sm:text-lg text-red-600 font-semibold">
              <AlertCircle className="size-5 sm:size-6 shrink-0" />
              <span className="italic">Delay may cost this batch</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FOMOSection;
