"use client";
import React from "react";
import img0 from "../../../public/rsay.png";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProjectProps {
  index: number;
  title: string;
  subTitle: string;
  src: string;
  href: string;
  setModal: React.Dispatch<
    React.SetStateAction<{ active: boolean; index: number }>
  >;
}

// Mapping of image filenames to imported images
const imageMap: Record<string, StaticImageData> = {
  "rsay.png": img0,
};

export default function Project({
  index,
  title,
  setModal,
  subTitle,
  href,
  src,
}: ProjectProps) {
  const imgSrc = imageMap[src] || img0;

  return (
    <motion.div
      onMouseEnter={() => setModal({ active: true, index })}
      onMouseLeave={() => setModal({ active: false, index })}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <Link
        target="_blank"
        href={`${href}`}
        className="flex w-full justify-between flex-col gap-3 md:flex-row transition-all duration-300 hover:bg-white/5 items-center md:p-9 p-4 border-t border-stone-900 cursor-pointer last:border-b group"
      >
        <Image
          src={imgSrc}
          className="h-[200px] md:hidden object-contain transition-transform duration-300 group-hover:scale-105"
          alt={`${title} image`}
        />

        <motion.h2 
          className="xl:text-[44px] text-2xl m-0 text-white font-normal transition-all duration-300 group-hover:translate-x-[-20px] group-hover:text-blue-400"
          whileHover={{ scale: 1.05 }}
        >
          {title}
        </motion.h2>

        <motion.p 
          className="text-white transition-all duration-300 group-hover:translate-x-[10px] group-hover:text-purple-400 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          {subTitle}
        </motion.p>
      </Link>
    </motion.div>
  );
}