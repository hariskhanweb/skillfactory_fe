import React from "react";
import {
  AlertTriangle,
  Briefcase,
  CircuitBoard,
  Landmark,
  ShieldCheck,
  Store,
  TrendingUp,
  Zap,
} from "lucide-react";

const importanceData = [
  {
    icon: <Landmark className="h-6 w-6 text-primary" />,
    title: "Government Push",
    description: "PM Surya Ghar aims to train 100,000 professionals, creating massive demand for skilled workers.",
  },
  {
    icon: <CircuitBoard className="h-6 w-6 text-primary" />,
    title: "Technology Shift",
    description: "The industry is moving towards TOPCon/HJT technologies, requiring new and updated skill sets.",
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-primary" />,
    title: "Crisis & Opportunity",
    description: "A 20% industry turnover is creating immediate openings for trained professionals to fill the gap.",
  },
  {
    icon: <Zap className="h-6 w-6 text-primary" />,
    title: "Future Integration",
    description: "Prepare for the future of energy with EV charging, battery storage, and smart grid integration.",
  },
];

// Data for the "How It Will Benefit You" column
const benefitsData = [
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Immediate Employment",
    description: "With our 100% placement assistance, you can start your career right after training.",
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-primary" />,
    title: "Career Progression",
    description: "Follow a clear path from Installer to Supervisor, Manager, and even Business Owner.",
  },
  {
    icon: <Store className="h-6 w-6 text-primary" />,
    title: "Entrepreneurship",
    description: "Receive guidance on business setup and get connected with our network of vendors.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary" />,
    title: "Future-Proof Career",
    description: "Join an industry with a projected 16%+ annual growth rate, ensuring long-term stability.",
  },
];

const IndustryBenefits = () => {
  return (
    <section className="bg-brand-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Column 1: Why It's Important Today */}
          <div className="flex flex-col">
            <h2 className="text-base lg:text-lg leading-7 text-primary">
              Why It&apos;s Important Today
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl font-sora">
              The Solar Industry is booming. Are you ready?
            </p>
            <div className="mt-8 space-y-6">
              {importanceData.map((item) => (
                <div key={item.title} className="flex items-start">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-black">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-subtext-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: How It Will Benefit You */}
          <div className="flex flex-col">
            <h2 className="text-base lg:text-lg leading-7 text-primary">
              How It Will Benefit You
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl font-sora">
              Build a rewarding and future-proof career.
            </p>
            <div className="mt-8 space-y-6">
              {benefitsData.map((item) => (
                <div key={item.title} className="flex items-start">
                  <div className="flex-shrink-0">{item.icon}</div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-black">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-subtext-light">{item.description}</p>
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

export default IndustryBenefits;
