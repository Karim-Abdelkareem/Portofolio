"use client";
import { MotionValue, useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import node from "../../public/nodejs-icon.svg";
import next from "../../public/next.svg";
import react from "../../public/react-2.svg";
import tailwind from "../../public/tailwind.svg";
import Image from "next/image";

interface SliderProps {
  src: string;
  dir: "left" | "right";
  left: string;
  progress: MotionValue<number>;
}

interface PhraseProps {
  src: string;
}
export default function ParallaxSlider() {
  const container = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <main className="overflow-hidden py-20">
      <div className="h-full">
        <div ref={container}>
          <Slider
            src={node}
            dir="left"
            left="-40%"
            progress={scrollYProgress}
          />
          <Slider
            src={react}
            dir="right"
            left="-25%"
            progress={scrollYProgress}
          />
          <Slider
            src={next}
            dir="left"
            left="-35%"
            progress={scrollYProgress}
          />
          <Slider
            src={tailwind}
            dir="right"
            left="-20%"
            progress={scrollYProgress}
          />
        </div>
        <div className="h-[10vh]" />
      </div>
    </main>
  );
}

const Slider: React.FC<SliderProps> = (props) => {
  const dir = props.dir === "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * dir, -150 * dir]
  );
  return (
    <motion.div
      className="relative flex whitespace-nowrap"
      style={{ x: translateX, left: props.left }}
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase: React.FC<PhraseProps> = ({ src }) => {
  return (
    <div className={"px-5 flex gap-5 items-center"}>
      <p className="text-[4vw] text-white">Full Stack Developer</p>
      <span className="relative h-[8vw] md:h-[5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image style={{ objectFit: "contain" }} src={src} alt="image" fill />
      </span>
    </div>
  );
};
