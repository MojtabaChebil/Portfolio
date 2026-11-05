"use client";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { site } from "@/lib/site";


const socials = [
  { icon: <FaGithub />, path: site.github, label: "GitHub" },
  { icon: <FaLinkedinIn />, path: site.linkedin, label: "LinkedIn" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials
        .filter((item) => item.path) 
        .map((item, index) => {
          return (
            <a
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
              className={iconStyles}
            >
              {item.icon}
            </a>
          );
        })}
    </div>
  );
};

export default Social;
