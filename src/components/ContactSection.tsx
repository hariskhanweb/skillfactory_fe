"use client";

import React, { useState } from "react";
import { Globe, Mail, Phone, Loader2 } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const contactDetails = [
  {
    icon: <Phone className="h-6 w-6 text-primary" />,
    title: "Phone",
    value: "+1 (555) 123-4567",
  },
  {
    icon: <Mail className="h-6 w-6 text-primary" />,
    title: "Email",
    value: "support@techlocal.com",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Website",
    value: "www.techlocal.com",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    zipcode: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const payload = {
      fullname: formData.name.trim(),
      email: formData.email.trim() || null,
      whatsapp_number: formData.phone.trim(),
      pincode: formData.zipcode.trim(),
      customer_type: "solar",
    };

    try {
      const response = await fetch("https://devapi.orion22.com/api/v1/marketing/prospect/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      setSubmitStatus("success");
      setFormData({ name: "", phone: "", email: "", zipcode: "" });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
    <section id="get-started" className="bg-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-black font-sora">
                Need Help?
              </h3>
              <p className="text-subtext-light">
                Find us at our office or reach out via phone or email.
              </p>
            </div>
            <div className="space-y-6">
              {contactDetails.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div className="bg-brand-50 p-3 rounded-full">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-black">
                      {item.title}
                    </h4>
                    <p className="text-subtext-light">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full h-96 lg:h-[250px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4471.869497563802!2d73.015623!3d19.11123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c14c207fed19%3A0xeebc7bf1d274d5bb!2sUniserved%20Tech%20Solutions%20Private%20Limited!5e1!3m2!1sen!2sin!4v1759909002449!5m2!1sen!2sin"
                className="w-full h-96 lg:h-[200px]"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          
          <div className="space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold text-black font-sora">
                Start Your Enrollment
              </h2>
              <p className="text-subtext-light">
                We&apos;d love to hear from you! Fill out the form to begin.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" type="text" placeholder="Suraj Wasnik" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+91 9874563210" value={formData.phone} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="surajwasnik@example.com" value={formData.email} onChange={handleChange} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipcode">Pincode</Label>
                <Input id="zipcode" type="text" placeholder="123654" value={formData.zipcode} onChange={handleChange} required />
              </div>
              <Button type="submit" className="w-full flex items-center justify-center gap-2" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Enrolling...
                  </>
                ) : (
                  "Enroll Now"
                )}
              </Button>
            </form>
            
            {submitStatus === "success" && (
              <p className="text-green-600 font-medium">
                Thank you! Your enrollment has been submitted successfully.
              </p>
            )}
            {submitStatus === "error" && (
              <p className="text-red-600 font-medium">
                Something went wrong. Please try again later.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ContactSection;
