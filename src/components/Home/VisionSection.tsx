import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import Image from "next/image";

const VisionSection = () => {
  const visionCard = [
    {
      id: 1,
      title: "Tech Innovation",
      description:
        "Building cutting-edge AI and blockchain solutions that drive business transformation and future-proof industries worldwide.",
      img: "/assets/innovation.png",
    },
    {
      id: 2,
      title: "Leadership Growth",
      description:
        "Mentoring future leaders by offering career acceleration, freelancing guidance, and real-world industry insights.",
      img: "/assets/leadership.png",
    },
    {
      id: 3,
      title: "Social Empowerment",
      description:
        "Providing free technical education to youth, ensuring access to opportunities for skill development and financial independence.",
      img: "/assets/social.png",
    },
  ];

  return (
    <section id="vision" className="p-5 md:p-20 mx-auto">
      <div className="flex flex-col md:flex-row justify-between gap-10 relative">
        {/* Sticky Left Section */}
        <div className="w-[100%] h-fit md:sticky top-10 self-start">
          <h3 className="text-2xl">What’s Irfan’s Vision?</h3>
          <h2 className="text-4xl font-bold leading-tight">
            Advancing Innovation, Leadership, and Impact
          </h2>
          <p className="mt-4">
            Irfan Malik is a tech entrepreneur, AI expert, and data scientist
            dedicated to building cutting-edge solutions, mentoring future
            leaders, and driving social impact. As the Founder & CEO of Xeven
            Solutions, he helps businesses embrace AI and blockchain, while
            empowering youth through free technical education, career
            acceleration, and freelancing mentorship.
            <br />
            <br />
            From overcoming challenges to leading a global tech company, his
            journey is a testament to resilience, vision, and a deep commitment
            to empowering others through technology and opportunity.
            <br />
            <br />
            Irfan is also passionate about making technology more accessible,
            ensuring that everyone—regardless of background—has the chance to
            thrive in the digital world. By mentoring the next generation of
            tech leaders, he equips them with the skills, knowledge, and
            guidance needed to harness technology for good and drive lasting,
            positive change.
          </p>
        </div>

        {/* Right Section with Normal Scrolling Cards */}
        <div className="w-[100%] md:w-[60%] flex flex-col gap-6">
          {visionCard.map((vision) => (
            <Card key={vision.id} className="w-full md:w-[100%] max-w-full">
              <CardHeader>
                <div className="bg-gray-100 rounded-full mx-auto p-4">
                  <Image
                    src={vision.img}
                    alt={vision.title}
                    width={40}
                    height={40}
                  />
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <CardTitle className="text-2xl font-bold">
                  {vision.title}
                </CardTitle>
                <p className="text-gray-600">{vision.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
