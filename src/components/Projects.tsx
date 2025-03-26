"use client";
import React, { useState } from "react";
import Modal from "./ui/Model";
import Project from "./ui/Project";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Udemy",
    src: "udemy.png",
    subTitle: "E-Learning",
    href: "https://cloneudemy.vercel.app/en",
  },
  {
    title: "Codementor",
    src: "Codementor.png",
    subTitle: "Landing Page",
    href: "https://codementor-fawn.vercel.app/",
  },
  {
    title: "RSAY ICT",
    src: "rsay.png",
    subTitle: "Introductory Site",
    href: "https://www.rsaay.com/",
  },
];

const Projects = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <h1 className="text-white text-xl md:text-7xl w-[70%] mx-auto font-bold text-center mb-4">
          A Small Selection Of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Recent Projects
          </span>
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Explore some of my latest work showcasing my expertise in web
          development
        </p>
      </motion.div>
      <div className="container lg:w-[85vw] mx-auto">
        <div className=" w-full my-16 flex flex-col items-center justify-center">
          {projects.map((project, index) => {
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="w-full group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative">
                  <Project
                    index={index}
                    href={project.href}
                    src={project.src}
                    title={project.title}
                    setModal={setModal}
                    subTitle={project.subTitle}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Modal modal={modal} projects={projects} />
    </div>
  );
};

export default Projects;
