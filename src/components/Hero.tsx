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
    <div className="relative overflow-hidden flex min-h-[40rem] w-full items-center justify-center py-10 sm:py-20">
      <div
        className={cn(
          "absolute -inset-8 sm:-inset-16",
          "[background-size:20px_20px] sm:[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute -inset-8 sm:-inset-16 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <div>
        <Spotlight
          className="-top-20 -left-5 sm:-top-40 sm:-left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50wv] hidden sm:block"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50wv] hidden sm:block"
          fill="blue"
        />
      </div>

      <div className="flex justify-center relative my-10 sm:my-20 z-10">
        <div className="max-w-[95vw] sm:max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
          >
            Welcome to my Portfolio.
          </motion.h2>
          <div className="flex flex-col sm:flex-row gap-3 items-center">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-r py-2 md:p-0 from-stone-200 via-stone-400 to-stone-600 font-bold capitalize text-center"
          >
            Full Stack Developer.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 4 }}
            className="w-full md:mt-10"
          >
            <TextGenerateEffect
              className="text-center text-sm sm:text-base"
              words={words}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
