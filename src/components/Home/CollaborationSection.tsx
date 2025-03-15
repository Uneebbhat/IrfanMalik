import Image from "next/image";
import React from "react";

const CollaborationSection = () => {
  const collaborations = [
    {
      id: 1,
      title: "Partnership with The Bank of Punjab",
      description:
        "Irfan partners with the Bank of Punjab to drive financial innovation through AI-powered solutions.",
      img: "/assets/collab1.webp",
    },
    {
      id: 2,
      title: "Partnership with Allahwalay Trust",
      description:
        "Irfan and his team have partnered with Allah Walay Trust to empower underprivileged children through technology-driven education while nurturing strong ethical values.",
      img: "/assets/collab2.webp",
    },
    {
      id: 3,
      title: "Partnership with Cloud Solutions",
      description:
        "Irfan and Xeven Solutions, in collaboration with Cloud Solutions, introduced an innovative healthcare IT product at the Global Health Exhibition 2024 in Riyadh.",
      img: "/assets/collab3.webp",
    },
    {
      id: 4,
      title: "Partnership with Chughtai Lab",
      description:
        "Irfan secured a Tech Partnership with Chughtai Lab Pakistan, demonstrating a shared eagerness to use the power of AI.",
      img: "/assets/collab4.webp",
    },
    {
      id: 5,
      title: "Partnership with Urbi",
      description:
        "At Gitex Global, Irfan partnered with Urbi to integrate Xeven Solutions’ AI expertise with their advanced geo-platform to take data visualization to the next level.",
      img: "/assets/collab5.webp",
    },
    {
      id: 6,
      title: "Collaboration with Buch International Hospital, Multan",
      description:
        "In collaboration with Buch Hospital, Multan, Irfan led a workshop on Artificial Intelligence in Healthcare, highlighting the importance of integrating AI into the medical field.",
      img: "/assets/collab6.webp",
    },
  ];

  return (
    <section className="p-[10px] md:p-[80px] mx-auto max-w-full">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Collaborations Irfan Made
      </h2>
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {collaborations.map((collab) => (
          <div
            key={collab.id}
            className="relative overflow-hidden rounded-lg break-inside-avoid shadow-lg"
          >
            <Image
              src={collab.img}
              alt={collab.title}
              className="w-full h-auto object-cover rounded-lg"
              width={300}
              height={300}
            />
            <div className="bg-white p-4">
              <h3 className="text-lg font-bold">{collab.title}</h3>
              <p className="text-sm mt-2">{collab.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollaborationSection;
