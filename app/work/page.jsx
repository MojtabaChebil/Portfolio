"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import ProjectImage from "@/components/ProjectImage";
import { Button } from "@/components/ui/button";
import { projects as allProjects, localizeProject } from "@/data/projects";
import { useLang } from "@/components/LanguageProvider";

const IconLink = ({ href, label, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
            {children}
          </span>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </a>
);

const Work = () => {
  const { lang, t } = useLang();
  const projects = allProjects.map((p) => localizeProject(p, lang));
  const [index, setIndex] = useState(0);
  const project = projects[index];
  const handleSlideChange = (swiper) => {
    setIndex(swiper.activeIndex);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-[30px]">
          <div className="w-full xl:w-[50%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[24px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <div>
                <h2 className="text-[34px] xl:text-[42px] font-bold leading-tight text-white">
                  {project.title}
                </h2>
                <p className="text-accent mt-2">
                  {project.type} · {project.year}
                </p>
              </div>
              <p className="text-white/60">{project.summary}</p>
              <ul className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-accent border border-accent/40 rounded-full px-3 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex flex-wrap items-center gap-4">
                <Link href={`/work/${project.slug}`}>
                  <Button variant="outline" size="lg">{t.work.caseStudy}</Button>
                </Link>
                {project.live && (
                  <IconLink href={project.live} label={t.work.liveDemo}>
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                  </IconLink>
                )}
                {project.github && (
                  <IconLink href={project.github} label={t.work.github}>
                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                  </IconLink>
                )}
                {!project.github && project.note && (
                  <span className="text-sm text-white/40">{project.note}</span>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="!pb-16 mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((p) => (
                <SwiperSlide key={p.slug} className="w-full">
                
                  <div className="rounded-xl overflow-hidden border border-white/10 bg-[#232329] shadow-2xl">
                    <div className="h-8 flex items-center gap-2 px-4 bg-[#27272c] border-b border-white/10">
                      <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
                      <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
                      <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
                    </div>
                    <div className="relative w-full aspect-[2/1]">
                      <ProjectImage project={p} altPrefix={t.work.screenshotOf} />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                current={project.num}
                total={String(projects.length).padStart(2, "0")}
                prevLabel={t.work.previous}
                nextLabel={t.work.next}
                containerStyles="flex items-center gap-4 absolute right-0 bottom-0 z-20"
                btnStyles="w-11 h-11 rounded-full border border-accent/60 text-accent text-lg flex justify-center items-center transition-all hover:bg-accent hover:text-primary"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
