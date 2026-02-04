import React from "react";
import { BookOpen, Briefcase, CheckCircle, Languages, Users } from "lucide-react";

// Data for the criteria cards
const eligibilityData = [
  {
    icon: <BookOpen className="h-6 w-6 text-primary" />,
    title: "Educational Background",
    points: [
      "10th Pass students",
      "12th Pass students",
      "ITI holders (Electrician/Wireman/Electronics/Fitter)",
      "Diploma holders (Technical streams)",
      "Engineering graduates",
    ],
  },
  {
    icon: <Briefcase className="h-6 w-6 text-primary" />,
    title: "Professional Background",
    points: [
      "Electricians seeking career advancement",
      "EV charger installers",
      "Maintenance technicians",
      "Fresh graduates",
      "Career changers",
    ],
  },
  {
    icon: <Languages className="h-6 w-6 text-primary" />,
    title: "Language Skills",
    points: [
      "Basic understanding of English OR Hindi",
      "Ability to read technical documents",
      "Communication skills for customer interaction",
    ],
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Special Focus Groups",
    points: [
      "Unemployed youth",
      "Women candidates",
      "Rural area candidates",
      "Ex-servicemen",
      "Aspiring entrepreneurs",
    ],
  },
];

const EligibilitySection = () => {
  return (
    <section id="about" className="bg-white py-20 sm:py-24 px-5">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-10">
          <p className="text-brand-500 font-semibold text-base lg:text-xl tracking-widest uppercase mb-4">
            ELIGIBILITY CRITERIA
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-black font-sora">
            Who Can Enroll in Our Solar Training Program
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {eligibilityData.map((card) => (
            <div
              key={card.title}
              className="bg-card-light p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {card.icon}
                <h3 className="text-xl font-bold ml-3 text-black">{card.title}</h3>
              </div>
              <ul className="space-y-3 text-subtext-light">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-wrap break-all">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EligibilitySection;
