import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Binary,
  BlocksIcon,
  BrainCircuit,
  BrainCog,
  BrainIcon,
  Database,
  EthernetPort,
  TabletSmartphone,
} from "lucide-react";
import React from "react";

const ProfessionalSkills = () => {
  const professionalSkills = [
    { label: "Blockchain", icon: <BlocksIcon size={30} /> },
    { label: "Machine Learning", icon: <BrainCircuit size={30} /> },
    { label: "Artificial Intelligence", icon: <BrainIcon size={30} /> },
    { label: "Deep Learning", icon: <BrainCog size={30} /> },
    { label: "IOT", icon: <EthernetPort size={30} /> },
    { label: "Software Development", icon: <Binary size={30} /> },
    { label: "Data Consultancy", icon: <Database size={30} /> },
    { label: "Mobile App Development", icon: <TabletSmartphone size={30} /> },
  ];
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
        {professionalSkills.map((skill, i) => (
          <Card
            key={i}
            className="text-center h-[200px] flex items-center justify-center"
          >
            <CardContent className="flex flex-col items-center justify-center gap-[12px]">
              {skill.icon}
              <CardTitle>{skill.label}</CardTitle>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProfessionalSkills;
