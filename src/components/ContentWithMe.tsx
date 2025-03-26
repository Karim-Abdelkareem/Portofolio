"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  LinkedinIcon,
  MessageCircle,
} from "lucide-react";

const ContactWithMe = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "alkar33m@gmail.com",
      link: "mailto:alkar33m@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+201098661981",
      link: "tel:+201098661981",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Egypt, Giza",
      link: "#",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      link: "https://github.com/Karim-Abdelkareem",
    },
    {
      icon: <LinkedinIcon className="w-6 h-6" />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/karim-abdelkareem/",
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      link: "https://wa.me/201098661981",
    },
  ];

  return (
    <div className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-white text-7xl font-bold mb-4">
          Let&apos;s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Connect
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Feel free to reach out for collaborations or just a friendly chat
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-white text-2xl font-semibold mb-6">
            Contact Information
          </h3>
          {contactInfo.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm group transition-all duration-300 hover:bg-white/10"
            >
              <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-medium">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.value}</p>
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <h3 className="text-white text-2xl font-semibold mb-6">
            Social Links
          </h3>
          {socialLinks.map((item, index) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 bg-white/5 rounded-lg backdrop-blur-sm group transition-all duration-300 hover:bg-white/10"
            >
              <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                {item.icon}
              </div>
              <div>
                <h4 className="text-white font-medium">{item.title}</h4>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-center mt-16 pt-8 border-t border-white/10"
      >
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Karim Abdelkareem. All rights reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default ContactWithMe;
