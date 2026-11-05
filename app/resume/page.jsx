"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaAngular,
  FaJava,
  FaPhp,
  FaLaravel,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiFlutter,
  SiSpringboot,
  SiExpress,
  SiNestjs,
  SiFastify,
  SiMysql,
  SiMongodb,
  SiAdobepremierepro,
  SiAdobephotoshop,
  SiPrestashop,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { site } from "@/lib/site";

const about = {
  title: "About me",
  description:
    "I'm a full-stack developer from Tunisia, now based in Braunschweig and studying for an M.Sc. in Computer Science at Ostfalia. I've built web applications in internships and thesis projects with React/Next.js, Node.js, Spring Boot and MongoDB. Outside of code I've led teams as president of JCI Bekalta, which taught me to organise, communicate and take responsibility.",
  info: [
    { fieldName: "Name", fieldValue: site.name },
    { fieldName: "Location", fieldValue: site.location },
    { fieldName: "Phone", fieldValue: site.phone },
    { fieldName: "Email", fieldValue: site.email },
    { fieldName: "Availability", fieldValue: "Werkstudent (20 h/week) or full-time" },
    { fieldName: "Languages", fieldValue: "Arabic (native), German (C1), French (B2), English (B1)" },
  ],
};

// ⚠ Les dates lazem ykounou NAFS EL DATES elli fel CV.
const experience = {
  title: "My experience",
  description:
    "Internships and thesis projects where I built real applications for companies, from e-commerce to technical recruiting platforms.",
  items: [
    {
      company: "Pixelium · Sousse",
      position: "Master's Thesis – Full-Stack Developer",
      duration: "02.2024 – 05.2024",
      stack: "Next.js, Fastify, MongoDB, Docker",
    },
    {
      company: "DIGINOV · Sousse",
      position: "Bachelor's Thesis – Web Developer",
      duration: "02.2022 – 05.2022",
      stack: "PrestaShop, PHP",
    },
    {
      company: "Alpha Computers & Consulting · Mahdia",
      position: "Full-Stack Developer Intern",
      duration: "08.2021",
      stack: "MongoDB, Express, React, Node.js",
    },
    // TODO: Proxym Group ken s7i7 → zidou fel CV zeda w na7i el // 9bal el ligne
    // { company: "Proxym Group", position: "Full-Stack Developer Intern", duration: "08.2020 – 09.2020", stack: "" },
    {
      company: "eNano-Tech · Monastir",
      position: "Front-End Developer Intern",
      duration: "01.2020",
      stack: "HTML, CSS, JavaScript",
    },
  ],
};

const education = {
  title: "My education",
  description:
    "Computer science studies in Tunisia and Germany, with a focus on web and multimedia applications.",
  items: [
    {
      institution: "Ostfalia University of Applied Sciences, Wolfenbüttel",
      degree: "M.Sc. Computer Science",
      duration: "2026 – present",
    },
    {
      institution: "ISITCom Sousse · recognised by the ZAB as a German Master's level",
      degree: "Professional Master in Web & Multimedia Services",
      duration: "2022 – 2024",
    },
    {
      institution: "ISITCom Hammam Sousse",
      degree: "Bachelor in Computer Science & Multimedia",
      duration: "2019 – 2022",
    },
    {
      institution: "Bekalta High School",
      degree: "Baccalaureate, Computer Science",
      duration: "2019",
    },
  ],
};

// Skills m9assmin: "core" = elli tesst3melhom w tnajjem t7ki 3lihom fel entretien
const skills = {
  title: "My skills",
  description: "Core technologies I use in my projects, plus tools I have worked with.",
  groups: [
    {
      name: "Core",
      items: [
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTypescript />, name: "TypeScript" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiFastify />, name: "Fastify" },
        { icon: <FaJava />, name: "Java" },
        { icon: <SiSpringboot />, name: "Spring Boot" },
        { icon: <FaAngular />, name: "Angular" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <SiMysql />, name: "MySQL" },
        { icon: <FaDocker />, name: "Docker" },
        { icon: <FaGitAlt />, name: "Git / GitHub" },
      ],
    },
    {
      name: "Also worked with",
      items: [
        { icon: <FaHtml5 />, name: "HTML 5" },
        { icon: <FaCss3 />, name: "CSS 3" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiNestjs />, name: "Nest.js" },
        { icon: <SiFlutter />, name: "Flutter" },
        { icon: <FaPhp />, name: "PHP" },
        { icon: <FaLaravel />, name: "Laravel" },
        { icon: <SiPrestashop />, name: "PrestaShop" },
        { icon: <FaFigma />, name: "Figma" },
        { icon: <SiAdobephotoshop />, name: "Photoshop" },
        { icon: <SiAdobepremierepro />, name: "Premiere Pro" },
      ],
    },
  ],
};

const association = {
  title: "Volunteering & leadership",
  description:
    "Leadership roles in civic, humanitarian and student organisations, where I organised programmes, led teams and handled external relations.",
  items: [
    { company: "JCI Bekalta", position: "President", duration: "01.2023 – 12.2023" },
    {
      company: "JCI Bekalta",
      position: "Vice President, Programmes & External Relations",
      duration: "01.2022 – 12.2022",
    },
    { company: "Club ARSII-ISITCom", position: "Vice President", duration: "12.2021 – 12.2022" },
    {
      company: "Red Crescent (ISITCom chapter)",
      position: "Head of First Aid Department",
      duration: "09.2020 – 03.2023",
    },
    { company: "ARSII Association", position: "Member", duration: "03.2021 – 07.2024" },
    { company: "ENIM AeroSpace Club", position: "Member", duration: "10.2020 – 07.2024" },
  ],
};

// Carte wa7da lel Experience / Education / Association (9bal kenet mkarrra 3 marrat)
const TimelineCard = ({ duration, title, subtitle, extra }) => (
  <li className="bg-[#232329] min-h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
    <span className="text-accent">{duration}</span>
    <h3 className="text-xl max-w-[300px] min-h-[60px] text-center lg:text-left">{title}</h3>
    <div className="flex items-center gap-3">
      <span className="w-[6px] h-[6px] rounded-full bg-accent shrink-0"></span>
      <p className="text-white/60 text-center lg:text-left">{subtitle}</p>
    </div>
    {extra && <p className="text-white/40 text-sm mt-1">{extra}</p>}
  </li>
);

const TabHeader = ({ title, description }) => (
  <>
    <h3 className="text-4xl font-bold">{title}</h3>
    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{description}</p>
  </>
);

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="association">Volunteering</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <TabHeader {...experience} />
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <TimelineCard
                        key={index}
                        duration={item.duration}
                        title={item.position}
                        subtitle={item.company}
                        extra={item.stack}
                      />
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <TabHeader {...education} />
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <TimelineCard
                        key={index}
                        duration={item.duration}
                        title={item.degree}
                        subtitle={item.institution}
                      />
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <TabHeader {...skills} />
                </div>
                <ScrollArea className="h-[440px]">
                  <div className="flex flex-col gap-8">
                    {skills.groups.map((group) => (
                      <div key={group.name} className="flex flex-col gap-4">
                        <h4 className="text-xl text-accent text-center xl:text-left">{group.name}</h4>
                        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                          {group.items.map((skill) => (
                            <li key={skill.name}>
                              <TooltipProvider delayDuration={100}>
                                <Tooltip>
                                  <TooltipTrigger className="w-full h-[130px] bg-[#232329] rounded-xl flex flex-col gap-2 justify-center items-center group">
                                    <div className="text-5xl group-hover:text-accent transition-all duration-300">
                                      {skill.icon}
                                    </div>
                                    <span className="text-sm text-white/60">{skill.name}</span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>{skill.name}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="association" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <TabHeader {...association} />
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {association.items.map((item, index) => (
                      <TimelineCard
                        key={index}
                        duration={item.duration}
                        title={item.position}
                        subtitle={item.company}
                      />
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <TabHeader {...about} />
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-8 max-w-[760px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col xl:flex-row items-center xl:items-start justify-center xl:justify-start gap-1 xl:gap-4"
                    >
                      <span className="text-white/60 shrink-0">{item.fieldName}</span>
                      <span>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
