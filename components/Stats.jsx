"use client";

import { useEffect, useState } from "react";
import { useLang } from "./LanguageProvider";
const stats = [
  { num: 4, key: "internships" },
  { num: 7, suffix: "+", key: "projects" },
  { num: 10, suffix: "+", key: "technologies" },
  { value: "C1", key: "german" },
];

const numberClass = "text-4xl xl:text-6xl font-extrabold";
const AnimatedNumber = ({ value, suffix = "", duration = 2000, delay = 300 }) => {
  const [current, setCurrent] = useState(value);

  useEffect(() => {
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || document.hidden) return;

    let frame;
    let startTime;
    const step = (now) => {
      if (startTime === undefined) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      setCurrent(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    setCurrent(0);
    const timer = setTimeout(() => {
      frame = requestAnimationFrame(step);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
      setCurrent(value);
    };
  }, [value, duration, delay]);

  return (
    <span className={numberClass}>
      {current}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const { t } = useLang();
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item) => {
            const text = t.stats[item.key];
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={item.key}
              >
                {item.value ? (
                  <span className={numberClass}>{item.value}</span>
                ) : (
                  <AnimatedNumber value={item.num} suffix={item.suffix} />
                )}
                <p
                  className={`${
                    text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
