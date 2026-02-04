import React from "react";
import Image from "next/image";

const WhyChooseSolar = () => {
  const cardData = [
    {
      title: "Industry Growth",
      description: "The solar industry has seen a 145% capacity increase in 2024, creating a surge in job openings.",
      imageUrl: "/solar-unsplash_01.jpg",
    },
    {
      title: "Job Security",
      description: "Solar jobs are projected to grow 105% over the next decade, ensuring long-term career stability.",
      imageUrl: "/solar-unsplash_02.jpg",
    },
    {
      title: "Environmental Impact",
      description: "Working in solar directly contributes to a sustainable future, reducing reliance on fossil fuels.",
      imageUrl: "/solar-unsplash_03.jpg",
    },
    {
      title: "Innovation",
      description: "The solar sector is at the forefront of technological advancements, offering exciting opportunities for innovation.",
      imageUrl: "/solar-unsplash_04.jpg",
    },
  ];

  return (
    <section className="bg-white py-20 sm:py-24 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-black leading-tight font-sora">
            Why Choose a Career in Solar Energy?
          </h2>
          <p className="mt-4 text-md text-subtext-light">
            The solar energy sector is booming, offering numerous opportunities for skilled professionals. Here&apos;s why a career in solar could be the right choice for you.
          </p>
        </div>
        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardData.map((card) => (
            <div key={card.title} className="flex flex-col gap-3">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src={card.imageUrl}
                  alt={card.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div>
                <p className="text-black text-xl font-medium leading-normal">{card.title}</p>
                <p className="text-subtext-light text-sm font-normal leading-normal mt-1">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSolar;
