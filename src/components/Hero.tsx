"use client";
import React from "react";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { Spotlight } from "./ui/spotlight";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import Button from "./ui/Button";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import FramerMagnetic from "./ui/Framer";
import { cn } from "@/lib/utils";
import Link from "next/link";

const words: string =
  "                 I specialize in building dynamic and scalable web applications using MongoDB, Express.js, React, and Node.js. From creating responsive front-end interfaces with React to developing powerful back-end services with Node.js and Express.";

const somoothWords = [
  {
    text: "Hi,",
  },
  {
    text: "I'm",
  },
  {
    text: "Karim",
  },
  {
    text: "Abdelkareem",
  },
];
const Hero = () => {
  return (
    <div className="relative flex h-[40rem] w-full items-center justify-center">
      <div
        className={cn(
          "absolute -inset-16",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute -inset-16 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50wv]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50wv]" fill="blue" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Welcome to my Portfolio.
          </h2>
          <div className="flex gap-3 items-center">
            <TypewriterEffectSmooth
              className="text-center"
              words={somoothWords}
            />
            <FramerMagnetic>
              <Link
                href={
                  "https://drive.google.com/file/d/1QYCaFHAjuwY44hN_LLMxTDzdP5EsvieV/view?usp=sharing"
                }
                target="_blank"
              >
                <Button
                  title="Resume"
                  icon={<FileText />}
                  position="end"
                ></Button>
              </Link>
            </FramerMagnetic>
          </div>
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.75,
              delay: 3.5,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className=" xl:text-7xl md:text-6xl text-5xl text-transparent bg-clip-text bg-gradient-to-r py-2 md:p-0 from-stone-200 via-stone-400 to-stone-600 font-bold capitaliz"
          >
            Full Stack Developer.
          </motion.h1>
          <TextGenerateEffect className="text-center" words={words} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
