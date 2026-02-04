"use client"

import { Building2, Globe, FileText, ArrowRight, ShieldCheck, X, Wrench, Settings, AlertCircle, Trash2, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { QRCodeSVG } from "qrcode.react"
import Image from "next/image"
import OemServiceLifecycleSection from "@/components/oem-service-lifecycle-section"

export default function HomePage() {
  const [showQRCode, setShowQRCode] = useState(false)
  const whatsappNumber = "917715867695" // Replace with actual WhatsApp number
  const whatsappMessage = "I would like to book a consult for Solar Vendor services"
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20 px-4 bg-gradient-to-b from-brand-50/60 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-sora">
                Your National Execution Partner for Solar Installation &amp; Lifecycle Management
              </h1>
              <p className="text-base sm:text-lg text-subtext-light mb-8 leading-relaxed">
                From rapid deployment to 24/7 O&amp;M, we provide the infrastructure to uphold your brand&apos;s performance promise.
              </p>
              <a
                href="#get-started"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg text-base sm:text-lg font-semibold hover:bg-brand-600 transition-colors"
              >
                Get Started
                <ArrowRight className="size-5" />
              </a>
            </div>

            {/* Right Content - Image */}
            <div className="relative w-full mt-8 lg:mt-0">
              <div className="relative w-full rounded-xl overflow-hidden aspect-[4/3] border border-gray-100">
                <Image
                  alt="Solar Vendor Support Services"
                  className="w-full h-full object-cover"
                  src="/oem-collage_02.png"
                  width={600}
                  height={450}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solar Vendor Service Lifecycle Section */}
      <OemServiceLifecycleSection />

      {/* Benefits Section */}
      <section id="benefits" className="py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-flex items-center justify-center gap-2 px-3 py-1 text-sm font-semibold text-orange-700 bg-orange-100 rounded-full mx-auto mb-4">
              <ShieldCheck className="w-4 h-4" />
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The only partner for Solar Field Services across country
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-orange-100 rounded-full mb-4">
                <Globe className="h-7 w-7 md:h-8 md:w-8 text-orange-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Unmatched National Reach</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Eliminate the logistics of hiring local vendors. We are present in 98% of pincodes, ensuring your projects move forward regardless of the location.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-orange-100 rounded-full mb-4">
                <Building2 className="h-7 w-7 md:h-8 md:w-8 text-orange-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Rapid Spare Management</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Minimize downtime with access to our 200+ strategically located spare depots. We ensure the right parts reach the site faster than anyone else.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-orange-100 rounded-full mb-4">
                <ShieldCheck className="h-7 w-7 md:h-8 md:w-8 text-orange-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Standardized Quality</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                We act as an extension of your brand. Every installation and service call follows rigorous SOPs to ensure safety, compliance, and peak system performance.
              </p>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 md:p-8 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-orange-100 rounded-full mb-4">
                <FileText className="h-7 w-7 md:h-8 md:w-8 text-orange-500" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Data-Driven Transparency</h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Real-time reporting on project milestones and maintenance tickets, giving you full visibility into your installed base.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Display */}
      <section id="services" className="py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive suite of services designed to support the entire lifecycle of a solar asset.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Solar Installation */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-orange-300 transition-all duration-300 group">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <div className="p-2.5 md:p-3 bg-orange-100 rounded-xl group-hover:bg-orange-500 transition-colors duration-300 shrink-0">
                  <Wrench className="h-5 w-5 md:h-6 md:w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Solar Installation
                </h3>
              </div>
              <div className="space-y-4 md:space-y-5">
                <div className="pl-1">
                  <div className="flex items-start gap-2 md:gap-3 mb-2">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 shrink-0" />
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">Rooftop &amp; Ground Mount</h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-6 md:ml-8">
                    End-to-end mechanical and electrical installation.
                  </p>
                </div>
                <div className="pl-1">
                  <div className="flex items-start gap-2 md:gap-3 mb-2">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 shrink-0" />
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">System Commissioning</h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-6 md:ml-8">
                    Rigorous testing to ensure the system meets your specific OEM performance benchmarks.
                  </p>
                </div>
              </div>
            </div>

            {/* Break-Fix & Corrective Support */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-orange-300 transition-all duration-300 group">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <div className="p-2.5 md:p-3 bg-orange-100 rounded-xl group-hover:bg-orange-500 transition-colors duration-300 shrink-0">
                  <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Break-Fix &amp; Corrective Support
                </h3>
              </div>
              <div className="space-y-4 md:space-y-5">
                <div className="pl-1">
                  <div className="flex items-start gap-2 md:gap-3 mb-2">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 shrink-0" />
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">Rapid Response</h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-6 md:ml-8">
                    On-site troubleshooting for inverter failures, DC/AC faults, or communication gateway issues.
                  </p>
                </div>
                <div className="pl-1">
                  <div className="flex items-start gap-2 md:gap-3 mb-2">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 shrink-0" />
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">Component Replacement</h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-6 md:ml-8">
                    Seamless swap-outs of panels, optimizers, or inverters using our local spare depots.
                  </p>
                </div>
              </div>
            </div>

            {/* De-installation & Retrofitting */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-orange-300 transition-all duration-300 group">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <div className="p-2.5 md:p-3 bg-orange-100 rounded-xl group-hover:bg-orange-500 transition-colors duration-300 shrink-0">
                  <Trash2 className="h-5 w-5 md:h-6 md:w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  De-installation &amp; Retrofitting
                </h3>
              </div>
              <div className="space-y-4 md:space-y-5">
                <div className="pl-1">
                  <div className="flex items-start gap-2 md:gap-3 mb-2">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 shrink-0" />
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">Safe Dismantling</h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-6 md:ml-8">
                    Expert de-installation for site relocations or end-of-life upgrades.
                  </p>
                </div>
                <div className="pl-1">
                  <div className="flex items-start gap-2 md:gap-3 mb-2">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 shrink-0" />
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">Site Restoration</h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-6 md:ml-8">
                    Ensuring the roof or ground site is returned to its original state post-removal.
                  </p>
                </div>
              </div>
            </div>

            {/* Periodic Maintenance (Preventive O&M) */}
            <div className="bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:border-orange-300 transition-all duration-300 group">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <div className="p-2.5 md:p-3 bg-orange-100 rounded-xl group-hover:bg-orange-500 transition-colors duration-300 shrink-0">
                  <Settings className="h-5 w-5 md:h-6 md:w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  Periodic Maintenance (Preventive O&amp;M)
                </h3>
              </div>
              <div className="space-y-4 md:space-y-5">
                <div className="pl-1">
                  <div className="flex items-start gap-2 md:gap-3 mb-2">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 shrink-0" />
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">Module Cleaning Optimization</h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-6 md:ml-8">
                    Scheduled cleaning to prevent soiling losses.
                  </p>
                </div>
                <div className="pl-1">
                  <div className="flex items-start gap-2 md:gap-3 mb-2">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 shrink-0" />
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">Thermal Imaging</h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-6 md:ml-8">
                    IR thermography to detect hotspots and prevent cell degradation.
                  </p>
                </div>
                <div className="pl-1">
                  <div className="flex items-start gap-2 md:gap-3 mb-2">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 shrink-0" />
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">Electrical Health Checks</h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-6 md:ml-8">
                    Testing of string voltages, inverter health, MC4 connector integrity, and cable insulation.
                  </p>
                </div>
                <div className="pl-1">
                  <div className="flex items-start gap-2 md:gap-3 mb-2">
                    <CheckCircle2 className="h-4 w-4 md:h-5 md:w-5 text-orange-500 mt-0.5 shrink-0" />
                    <h4 className="text-base md:text-lg font-semibold text-gray-900">Structure &amp; Earthing Audit</h4>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed ml-6 md:ml-8">
                    Checking for torque marks, rust, and ensuring Earth Resistance (ER) values are within safety limits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="get-started" className="py-16 md:py-20 px-4 bg-gradient-to-b from-orange-100 via-orange-50 to-white">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            Ready to scale your Solar <span className="hidden sm:inline"><br /></span><span className="sm:hidden"> </span>deployments without the overhead?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join forces with India&apos;s most expansive solar service network. Let&apos;s discuss how our 98% pincode coverage can accelerate your project pipeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <button
              onClick={() => setShowQRCode(true)}
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors group text-lg cursor-pointer"
            >
              Partner With Us Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* QR Code Modal */}
          {showQRCode && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
              onClick={() => setShowQRCode(false)}
            >
              <div
                className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-md w-full relative animate-in zoom-in-95 duration-200"
                onClick={(e: React.MouseEvent) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowQRCode(false)}
                  className="absolute top-4 right-4 z-10 flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-700 hover:bg-gray-100 bg-white border border-gray-200 rounded-full transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer"
                  aria-label="Close"
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
                <div className="text-center space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      Partner With Us Today
                    </h3>
                    <p className="text-gray-600 text-base">
                      Scan this QR code to discuss how our 98% pincode coverage can accelerate your solar project pipeline
                    </p>
                  </div>
                  <div className="flex justify-center py-6 px-4">
                    <div className="relative p-6 bg-linear-to-br from-gray-50 to-white rounded-2xl border-2 border-gray-100 shadow-inner">
                      <QRCodeSVG
                        value={whatsappUrl}
                        size={240}
                        level="H"
                        includeMargin={true}
                        className="mx-auto"
                      />
                    </div>
                  </div>
                  <div className="pt-2">
                    <p className="text-sm text-gray-500 mb-2">
                      Don&apos;t have a QR scanner?
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold underline transition-colors"
                    >
                      Click here to open WhatsApp
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
