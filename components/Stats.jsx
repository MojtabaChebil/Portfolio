"use client";

import CountUp from "react-countup";
import { useLang } from "./LanguageProvider";

// "key" points to the label in lib/dictionaries.js (stats.*)
const stats = [
  { num: 4, key: "internships" },
  { num: 7, suffix: "+", key: "projects" },
  { num: 10, suffix: "+", key: "technologies" },
  { value: "C1", key: "german" },
];

const numberClass = "text-4xl xl:text-6xl font-extrabold";

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
                  // The final number is in the HTML from the server, so it is never empty
                  // (Google, LinkedIn previews, slow JS). CountUp then animates it in the browser.
                  <CountUp end={item.num} suffix={item.suffix || ""} duration={2} delay={0.3}>
                    {({ countUpRef }) => (
                      <span ref={countUpRef} className={numberClass}>
                        {item.num}
                        {item.suffix || ""}
                      </span>
                    )}
                  </CountUp>
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
