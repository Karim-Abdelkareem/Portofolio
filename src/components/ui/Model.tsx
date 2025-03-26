import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import img0 from "../../../public/udemy.png";
import img1 from "../../../public/Codementor.png";
import img2 from "../../../public/rsay.png";
import { StaticImageData } from "next/image";

interface Project {
  src: string;
  href: string;
}

interface ModalProps {
  modal: {
    active: boolean;
    index: number;
  };
  projects: Project[];
}

// Mapping of image filenames to imported images with the correct type
const imageMap: Record<string, StaticImageData> = {
  "udemy.png": img0,
  "Codementor.png": img1,
  "rsay.png": img2,
};

// Rest of your component logic...

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

export default function Modal({ modal, projects }: ModalProps) {
  const { active, index } = modal;
  const modalContainer = useRef<HTMLDivElement | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [containerPosition, setContainerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { pageX, pageY } = e;
      setCursorPosition({ x: pageX, y: pageY });
      setContainerPosition({ x: pageX, y: pageY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainer}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="absolute hidden md:flex h-[250px] w-[280px] bg-white overflow-hidden items-center justify-center pointer-events-none rounded-lg shadow-xl"
        style={{
          left: containerPosition.x,
          top: containerPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{ top: `${index * -100}%` }}
          className="absolute h-full w-full transition-[top] duration-500 ease-[cubic-bezier(0.76, 0, 0.24, 1)]"
        >
          {projects.map((project, idx) => {
            const imgSrc = imageMap[project.src] || img0;

            return (
              <div
                key={`modal_${idx}`}
                className="flex items-center bg-white justify-center h-full w-full p-2"
              >
                <Image
                  src={imgSrc}
                  className="object-cover w-full h-full rounded-md"
                  alt={`Project Image ${idx}`}
                />
              </div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className="absolute hidden md:flex z-20 w-16 h-16 rounded-full bg-opacity-90 bg-stone-950 text-white items-center justify-center pointer-events-none"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      ></motion.div>

      <motion.div
        className="absolute hidden md:flex z-20 w-16 h-16 rounded-full bg-transparent text-white items-center justify-center pointer-events-none text-sm font-medium"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? "enter" : "closed"}
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          transform: "translate(-50%, -50%)",
        }}
      >
        View
      </motion.div>
    </>
  );
}
