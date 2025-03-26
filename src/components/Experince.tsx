"use client";
import React from "react";
import { motion } from "framer-motion";
import experienceData from "@/data/experience.json";

const Experince = () => {
  return (
    <div className="py-20 px-4">
      <h2 className="text-white text-7xl font-bold text-center mb-12">
        {experienceData.title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto pt-16">
        {experienceData.sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.02, translateY: -20 }}
            className="relative bg-white/5 p-6 rounded-lg backdrop-blur-sm group transition-all duration-300"
          >
            {/* Animated Border */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-[1px] rounded-lg bg-black" />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-white text-xl font-semibold mb-4">
                {section.title}
              </h3>
              <p className="text-gray-300 mb-4">{section.description}</p>
              <div className="flex flex-wrap gap-2">
                {section.technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3 py-1 bg-${tech.color}-500/20 text-${tech.color}-300 rounded-full text-sm transition-all duration-300 group-hover:bg-${tech.color}-500/30`}
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
