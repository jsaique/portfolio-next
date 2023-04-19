"use client";

import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  console.log(inView);

  return (
    // Wraping div to add perspective
    <div
      ref={ref}
      className="mt-[12.8rem] overflow-hidden [perspective:2000px]"
    >
      <div
        className={classNames(
          "transition-transform bg-hero-gradient bg-white bg-opacity-[0.01] border border-transparent-white rounded-lg",
          inView ? "transform-none" : "[transform:rotateX(25deg)]"
        )}
      >
        <img className="" src="/img/code.jpg" alt="code image" />
        {/* Photo by
      <a href="https://unsplash.com/@mitchel3uo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Mitchell Luo
      </a>
      on
      <a href="https://unsplash.com/photos/FWoq_ldWlNQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
        Unsplash
      </a> */}
      </div>
    </div>
  );
};
