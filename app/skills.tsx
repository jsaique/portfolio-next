import { Flask } from "@/components/logos/flask";
import { JavaScript } from "@/components/logos/js";
import { NextJs } from "@/components/logos/nextjs";
import { Python } from "@/components/logos/python";
import { React } from "@/components/logos/react";
import { Sql } from "@/components/logos/sql";
import { TypeScript } from "@/components/logos/typescript";

export const Skills = () => (
  <>
    <p>My Skills</p>
    <p>Tech Stack</p>
    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem]">
      <div className="flex flex-col items-center">
        <JavaScript className="w-8 h-8" />
        <p>JavaScript</p>
      </div>
      <div className="flex flex-col items-center">
        <NextJs className="w-8 h-8" />
        <p>NextJS</p>
      </div>
      <div className="flex flex-col items-center">
        <Python className="w-8 h-8" />
        <p>Python</p>
      </div>
      <div className="flex flex-col items-center">
        <Flask className="w-8 h-8" />
        <p>Flask</p>
      </div>
      <div className="flex flex-col items-center">
        <React className="w-8 h-8" />
        <p>React</p>
      </div>
      <div className="flex flex-col items-center">
        <Sql className="w-8 h-8" />
        <p>SQL</p>
      </div>
      <div className="flex flex-col items-center">
        <TypeScript className="w-8 h-8" />
        <p>TypeScript</p>
      </div>
    </div>
  </>
);
