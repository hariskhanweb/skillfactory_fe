// src/app/contact/page.tsx

import type { Metadata } from "next";
import React from "react";
import Image from "next/image";
import { Phone, MessageCircle, MapPin, ThumbsUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Techlocal Skill Factory. Call us, WhatsApp us, or visit our training center. Submit your details for a callback and start your skill training journey today.",
  keywords: ["contact", "training center", "phone", "whatsapp", "address", "callback", "enquiry"],
};

export default function ContactPage() {
  return (
    <>
      {/* Contact Us Section */}
      <section className="py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-8 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              {/* Section Heading */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 font-sora">
                Contact Us
              </h2>
              
              {/* Contact Information */}
              <div className="space-y-6 mb-8">
                {/* Phone */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="size-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-subtext-light mb-1">Phone</p>
                    <a href="tel:+919876543210" className="text-base sm:text-lg font-semibold text-gray-900 hover:text-primary transition-colors">
                      +91 XXXXXXXXXX
                    </a>
                  </div>
                </div>
                
                {/* WhatsApp */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#25D366]/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="size-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-sm text-subtext-light mb-1">WhatsApp</p>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-semibold text-gray-900 hover:text-[#25D366] transition-colors">
                      +91 XXXXXXXXXX
                    </a>
                  </div>
                </div>
                
                {/* Training Center Address */}
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center">
                    <MapPin className="size-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-subtext-light mb-1">Training Center Address</p>
                    <p className="text-base sm:text-lg font-semibold text-gray-900">
                      [Your Address Here]
                    </p>
                  </div>
                </div>
              </div>
              
              {/* CTA Button */}
              <a
                href="#callback-form"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-brand-600 transition-colors"
              >
                <ThumbsUp className="size-5" />
                <span>Submit Details – Get Callback</span>
              </a>
            </div>

            {/* Right Content - Image */}
            <div className="relative w-full mt-8 lg:mt-0">
              <div className="relative w-full rounded-xl overflow-hidden aspect-[4/3] border border-gray-100">
                <Image
                  alt="Reception area, institute exterior"
                  className="w-full h-full object-cover"
                  src="/solar-unsplash_04.png"
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
