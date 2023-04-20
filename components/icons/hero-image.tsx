"use client";

import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });

  console.log(inView);

  return (
    // Wraping div to add perspective
    <div ref={ref} className="mt-[12.8rem] [perspective:2000px]">
      <div
        className={classNames(
          "relative bg-hero-gradient bg-white bg-opacity-[0.01] border border-transparent-white rounded-lg",
          inView ? "animate-image-rotate" : "[transform:rotateX(25deg)]",
          "before:absolute before:w-full before:h-full before:top-0 before:left-0 before:bg-hero-glow before:opacity-0 before:[filter:blur(120px)]",
          inView && "before:animate-image-glow"
        )}
      >
        <img className="relative z-10" src="/img/code.jpg" alt="code image" />
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
