"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const images = [
  "/MongoDB.jpeg",
  "/Express.jpeg",
  "/Angular.jpeg",
  "/React.jpeg",
  "/Node.jpeg",
];

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // منع التمرير عند تحميل الصفحة
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    document.body.style.top = `-${window.scrollY}px`;

    // تغيير الصور كل ثانية
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1000);

    // إخفاء Preloader بعد 4 ثواني
    const timer = setTimeout(() => {
      setIsLoading(false);
      // إعادة تفعيل التمرير بعد إخفاء Preloader
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(document.body.style.top || "0") * -1);
    }, 5000);

    return () => {
      clearInterval(imageInterval);
      clearTimeout(timer);
      // التأكد من إعادة تفعيل التمرير عند إزالة المكون
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      document.body.style.top = "";
      window.scrollTo(0, parseInt(document.body.style.top || "0") * -1);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
        >
          <div className="relative w-full h-full">
            {/* الصور المتحركة */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white/20">
                  <Image
                    src={images[currentImageIndex]}
                    alt={`Loading image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* العنوان المتحرك */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-1/6 left-1/2 -translate-x-1/2 text-center z-10"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
                MEARN STACK
              </h1>
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/80"
              >
                DEVELOPER
              </motion.h2>
            </motion.div>

            {/* مؤشر التحميل */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentImageIndex ? "bg-white" : "bg-white/30"
                  }`}
                  animate={{
                    scale: index === currentImageIndex ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
