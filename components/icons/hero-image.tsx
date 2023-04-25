"use client";

import classNames from "classnames";
import { CSSProperties, useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Genrate a random numaber between
const randomNumberBetween = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

interface Line {
  id: string;
  direction: "to bottom" | "to right";
  size: number;
  duration: number;
}

export const HeroImage = () => {
  const { ref, inView } = useInView({ threshold: 0.4, triggerOnce: true });
  const [lines, setLines] = useState<Line[]>([
    // { direction: "to bottom", duration: 2000, size: 20, id: "test1" },
    // { direction: "to right", duration: 3000, size: 15, id: "test2" },
  ]);

  // Removing the lines after the animation
  const removeLine = (id: string) => {
    setLines((prev) => prev.filter((line) => line.id !== id));
  };

  // Line interval
  useEffect(() => {
    if (!inView) return;

    const renderLine = (timeout: number) => {
      setTimeout(() => {
        setLines((lines) => [
          ...lines,
          {
            direction: Math.random() > 0.5 ? "to bottom" : "to right",
            duration: randomNumberBetween(1300, 3500),
            size: randomNumberBetween(10, 30),
            id: Math.random().toString(36).substring(7),
          },
        ]);
        renderLine(randomNumberBetween(800, 2500));
      }, timeout);
    };
    renderLine(randomNumberBetween(800, 1300));
  }, [inView, setLines]);

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
        <div className="absolute top-0 left-0 z-20 h-full w-full">
          {lines.map((line) => (
            <span
              // Removing the lines after animation
              onAnimationEnd={() => removeLine(line.id)}
              style={
                {
                  "--direction": line.direction,
                  "--size": line.size,
                  "--animation-duration": `${line.duration}ms`,
                } as CSSProperties
              }
              className={classNames(
                "bg-glow-lines block absolute top-0 w-[10rem] h-[1px]",
                line.direction === "to right" &&
                  "left-0 h-[1px] w-[calc(var(--size)*1rem)] animate-glow-line-horizontal",
                line.direction === "to bottom" &&
                  "right-0 h-[calc(var(--size)*1rem)] w-[1px] animate-glow-line-vertical"
              )}
            />
          ))}
        </div>
        <svg
          width="100%"
          viewBox="0 0 1499 778"
          fill="none"
          className={classNames(
            // Animation for the sketch lines
            "absolute left-0 top-0 h-full w-full",
            "[&_path]:stroke-white [&_path]:[stroke-opacity:0.2] [&_path]:[stroke-dasharray:1] [&_path]:[stroke-dashoffset:1]",
            inView && "[&_path]:animate-sketch-lines"
          )}
        >
          <path pathLength="1" d="M1500 72L220 72"></path>
          <path pathLength="1" d="M1500 128L220 128"></path>
          <path pathLength="1" d="M1500 189L220 189"></path>
          <path pathLength="1" d="M220 777L220 1"></path>
          <path pathLength="1" d="M538 777L538 128"></path>
        </svg>

        <img
          className={classNames(
            "relative z-10 opacity-0 transition-opacity delay-[600ms]",
            inView && "opacity-100"
          )}
          src="/img/code.jpg"
          alt="code image"
        />
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
