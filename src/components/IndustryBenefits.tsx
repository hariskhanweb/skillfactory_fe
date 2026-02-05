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

interface BenefitItem {
  title: string;
  description: string;
}

interface IndustryBenefitsProps {
  importanceTitle?: string;
  importanceHeading?: string;
  importanceData?: BenefitItem[];
  benefitsTitle?: string;
  benefitsHeading?: string;
  benefitsData?: BenefitItem[];
}

const iconMap: Record<string, React.ReactNode> = {
  "Government Push": <Landmark className="h-6 w-6 text-primary" />,
  "Technology Shift": <CircuitBoard className="h-6 w-6 text-primary" />,
  "Crisis & Opportunity": <AlertTriangle className="h-6 w-6 text-primary" />,
  "Future Integration": <Zap className="h-6 w-6 text-primary" />,
  "Immediate Employment": <Briefcase className="h-6 w-6 text-primary" />,
  "Career Progression": <TrendingUp className="h-6 w-6 text-primary" />,
  "Entrepreneurship": <Store className="h-6 w-6 text-primary" />,
  "Future-Proof Career": <ShieldCheck className="h-6 w-6 text-primary" />,
  "Growing Market": <TrendingUp className="h-6 w-6 text-primary" />,
  "Cost Savings": <Briefcase className="h-6 w-6 text-primary" />,
  "Environmental Impact": <Zap className="h-6 w-6 text-primary" />,
  "Stable Income": <ShieldCheck className="h-6 w-6 text-primary" />,
  "5G Rollout": <Zap className="h-6 w-6 text-primary" />,
  "Infrastructure Growth": <CircuitBoard className="h-6 w-6 text-primary" />,
  "Travel Opportunities": <Briefcase className="h-6 w-6 text-primary" />,
  "Rapid Adoption": <TrendingUp className="h-6 w-6 text-primary" />,
};

const defaultImportanceData: BenefitItem[] = [
  {
    title: "Government Push",
    description: "PM Surya Ghar aims to train 100,000 professionals, creating massive demand for skilled workers.",
  },
  {
    title: "Technology Shift",
    description: "The industry is moving towards TOPCon/HJT technologies, requiring new and updated skill sets.",
  },
  {
    title: "Crisis & Opportunity",
    description: "A 20% industry turnover is creating immediate openings for trained professionals to fill the gap.",
  },
  {
    title: "Future Integration",
    description: "Prepare for the future of energy with EV charging, battery storage, and smart grid integration.",
  },
];

const defaultBenefitsData: BenefitItem[] = [
  {
    title: "Immediate Employment",
    description: "With our 100% placement assistance, you can start your career right after training.",
  },
  {
    title: "Career Progression",
    description: "Follow a clear path from Installer to Supervisor, Manager, and even Business Owner.",
  },
  {
    title: "Entrepreneurship",
    description: "Receive guidance on business setup and get connected with our network of vendors.",
  },
  {
    title: "Future-Proof Career",
    description: "Join an industry with a projected 16%+ annual growth rate, ensuring long-term stability.",
  },
];

const IndustryBenefits = ({
  importanceTitle = "Why It's Important Today",
  importanceHeading = "The Solar Industry is booming. Are you ready?",
  importanceData = defaultImportanceData,
  benefitsTitle = "How It Will Benefit You",
  benefitsHeading = "Build a rewarding and future-proof career.",
  benefitsData = defaultBenefitsData
}: IndustryBenefitsProps) => {
  return (
    <section className="bg-brand-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Column 1: Why It's Important Today */}
          <div className="flex flex-col">
            <h2 className="text-base lg:text-lg leading-7 text-primary">
              {importanceTitle}
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl font-sora">
              {importanceHeading}
            </p>
            <div className="mt-8 space-y-6">
              {importanceData.map((item) => (
                <div key={item.title} className="flex items-start">
                  <div className="flex-shrink-0">{iconMap[item.title] || <Briefcase className="h-6 w-6 text-primary" />}</div>
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
              {benefitsTitle}
            </h2>
            <p className="mt-4 text-3xl font-bold tracking-tight text-black sm:text-4xl font-sora">
              {benefitsHeading}
            </p>
            <div className="mt-8 space-y-6">
              {benefitsData.map((item) => (
                <div key={item.title} className="flex items-start">
                  <div className="flex-shrink-0">{iconMap[item.title] || <Briefcase className="h-6 w-6 text-primary" />}</div>
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
