"use client";
import React from "react";
import { motion } from "framer-motion";
import experienceData from "@/data/experience.json";

const Experince = () => {
  return (
    <div className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center">
        <span className="text-4xl sm:text-5xl lg:text-7xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8 sm:mb-12">
          {experienceData.title}
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto pt-8 sm:pt-16">
        {experienceData.sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, translateY: -10 }}
            className="relative bg-white/5 p-4 sm:p-6 rounded-lg backdrop-blur-sm group transition-all duration-300"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-[1px] rounded-lg bg-black" />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-white text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                {section.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                {section.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {section.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm transition-all duration-300 ${
                      tech.color === "blue"
                        ? "bg-blue-500/20 text-blue-300 group-hover:bg-blue-500/30"
                        : tech.color === "purple"
                        ? "bg-purple-500/20 text-purple-300 group-hover:bg-purple-500/30"
                        : tech.color === "pink"
                        ? "bg-pink-500/20 text-pink-300 group-hover:bg-pink-500/30"
                        : tech.color === "green"
                        ? "bg-green-500/20 text-green-300 group-hover:bg-green-500/30"
                        : "bg-gray-500/20 text-gray-300 group-hover:bg-gray-500/30"
                    }`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experince;
