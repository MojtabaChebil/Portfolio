"use client";

import CountUp from "react-countup";

// Ar9am s7i7a bark, elli tnajjem tethbetha fel entretien.
// - num: ra9m (ya3mel animation)  /  value: texte (ex: "C1")
// - suffix: ex "+"
const stats = [
  { num: 4, text: "Internships & theses" },
  { num: 7, suffix: "+", text: "Projects built" },
  { num: 10, suffix: "+", text: "Technologies in use" },
  { value: "C1", text: "German (telc Hochschule)" },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                {item.value ? (
                  <span className="text-4xl xl:text-6xl font-extrabold">{item.value}</span>
                ) : (
                  <CountUp
                    end={item.num}
                    suffix={item.suffix || ""}
                    duration={2}
                    delay={0.3}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                )}
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
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
