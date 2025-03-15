import AboutSection from "@/components/Home/AboutSection";
import CareerTimelineSection from "@/components/Home/CareerTimelineSection";
import CollaborationSection from "@/components/Home/CollaborationSection";
import MainSection from "@/components/Home/MainSection";
import VisionSection from "@/components/Home/VisionSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <AboutSection />
      <VisionSection />
      <CareerTimelineSection />
      <CollaborationSection />
    </>
  );
}
