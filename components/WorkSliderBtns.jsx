"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

// Boutons dawra + compteur "01 / 03"
const WorkSliderBtns = ({ containerStyles, btnStyles, iconsStyles, current, total }) => {
  const swiper = useSwiper();
  return (
    <div className={containerStyles}>
      <button className={btnStyles} onClick={() => swiper.slidePrev()} aria-label="Previous project">
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      {current && total && (
        <span className="text-sm text-white/60 tabular-nums">
          <span className="text-white">{current}</span> / {total}
        </span>
      )}
      <button className={btnStyles} onClick={() => swiper.slideNext()} aria-label="Next project">
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
