import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TimeLine from "./Timeline/TimeLine";
import Image from "next/image";
import Journey from "./Timeline/Journey";
import ProfessionalSkills from "./Timeline/ProfessionalSkills";

const CareerTimelineSection = () => {
  const educationData = [
    {
      title: "Bachelors Of Science",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Irfan Malik earned a Bachelor of Science degree from Islamia
            University Bahawalpur. His education laid the groundwork for his
            expertise in AI, software development, and data analytics.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/assets/islamia-uni.jpeg"
              alt="Islamia University Bahawalpur"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Master's in Information Technology",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Irfan earned his Master&apos;s in Information Technology from UMT.
            With a strong enthusiasm for technology, he remains dedicated to
            lifelong learning and making a lasting impact in the AI industry.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/assets/umt.jpeg"
              alt="University of Management and Technology (UMT)"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "PhD in Artificial Intelligence",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Irfan is pursuing a PhD in Artificial Intelligence from London
            Metropolitan University, strengthening his mission to advance tech
            growth in Pakistan. He aims to drive innovation and emerge as a
            leader in AI-driven progress.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/assets/london-uni.jpeg"
              alt="London Metropolitan University"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Master's in Artificial Intelligence",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Irfan completed his Master&apos;s degree in Artificial Intelligence
            from Virtual University of Pakistan. Passionate about technology, he
            is committed to continuous learning and strives to make a meaningful
            contribution to the AI field.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Image
              src="/assets/virtual.webp"
              alt="Virtual University of Pakistan"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-md"
            />
          </div>
        </div>
      ),
    },
  ];

  const experienceData = [
    {
      title: "Founder & CEO",
      subTitle: "Xeven Solutions",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Founded a tech firm specializing in AI-driven healthcare apps,
            e-commerce, digital marketing, game development, and SEO solutions.
          </p>
        </div>
      ),
    },
    {
      title: "CEO",
      subTitle: "Xeven Social",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Built a digital branding agency helping businesses grow through
            innovative marketing, user experience design, and global outreach.
          </p>
        </div>
      ),
    },
    {
      title: "Co-Founder/COO",
      subTitle: "iMedHealth",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Led healthcare software development, focusing on AI-based research,
            telemedicine, HIMS, and clinic management solutions.
          </p>
        </div>
      ),
    },
    {
      title: "CEO",
      subTitle: "Xeven Skills",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Founded a platform offering free courses in high-tech skills,
            empowering students with emerging technology education and career
            growth.
          </p>
        </div>
      ),
    },
    {
      title: "CTO",
      subTitle: "My Florida Green",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed medical cannabis software streamlining patient
            certification, care management, and physician network integration in
            Florida.
          </p>
        </div>
      ),
    },
    {
      title: "Chief Technical Advisor",
      subTitle: "The Doc App",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Led technical strategy for an AI-powered healthcare platform,
            optimizing patient data management, appointment tracking, and
            provider communication.
          </p>
        </div>
      ),
    },
    {
      title: "Software Engineer",
      subTitle: "Emblem Technologies (Pvt) Ltd.",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Developed and optimized software solutions, contributing to
            application development, coding, and system enhancements.
          </p>
        </div>
      ),
    },
    {
      title: "Chief Technical Advisor",
      subTitle: "Buch Hospital",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Provides technology consulting and advisory services, focusing on
            HIMS, executive strategy, and CIO-level healthcare tech solutions.
          </p>
        </div>
      ),
    },
    {
      title: "Technical Lead",
      subTitle: "OffRoadStudios",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Managed technical projects, ensuring innovative digital solutions
            and team leadership in software development and implementation.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="p-[20px] md:p-[80px] mx-auto">
      <Tabs defaultValue="education" className="w-[100%]">
        <TabsList className="w-full flex items-start flex-wrap h-max">
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="journey">The Journey</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Professional Skills</TabsTrigger>
        </TabsList>
        <TabsContent value="education">
          <TimeLine data={educationData} />
        </TabsContent>
        <TabsContent value="journey">
          <Journey
            videoSrc="https://www.youtube.com/embed/iwFeGIMEEyU"
            thumbnailSrc="https://img.youtube.com/vi/iwFeGIMEEyU/maxresdefault.jpg"
            thumbnailAlt="What our Youth Must Know: Success, Technology, & Life"
          />
        </TabsContent>
        <TabsContent value="experience">
          <TimeLine data={experienceData} />
        </TabsContent>
        <TabsContent value="skills">
          <ProfessionalSkills />
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default CareerTimelineSection;
