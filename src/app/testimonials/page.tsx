"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const assets = [
    { type: "img", src: "/assets/6E84D118-76DC-4645-BD09-68BFD7933FCA.jpg" },
    { type: "img", src: "/assets/IMG_8523.HEIC" },
    { type: "img", src: "/assets/lp_image(1).heic" },
    { type: "img", src: "/assets/lp_image(2).heic" },
    { type: "img", src: "/assets/lp_image.heic" },
    { type: "video", src: "/assets/46eb2553d8e54c789b32f9c01aeda9d5.mov" },
    { type: "video", src: "/assets/88f5aa37254c4469b384743f004e6c62.mov" },
    { type: "video", src: "/assets/IMG_8526.MOV" },
    { type: "video", src: "/assets/IMG_9722.MOV" },
    { type: "video", src: "/assets/IMG_9843.MOV" },
    { type: "video", src: "/assets/a5a210088a3046baa69afe960cdd890a.mov" },
  ];

  return (
    <main className="flex-grow pt-32 pb-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8 text-center"
        >
          Verified Excellence.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-400 font-light leading-relaxed mb-16 text-center max-w-3xl mx-auto"
        >
          Real accounts from our esteemed members. Discover how aerodynamic efficiency and
          sheding excess burden unlocks true potential.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="border border-white/10 p-10 md:p-16 mb-20 relative overflow-hidden group hover:border-white/30 transition-colors duration-500"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">
            Aneesh's Journey to Optimization
          </h2>
          <div className="text-lg text-gray-300 font-light leading-relaxed mb-8 space-y-6">
            <p>
              "Before discovering the IMA, I didn't realize how much the standard societal
              expectations were weighing me down. The realization that my compact design was
              actually an evolutionary leap in aerodynamic supremacy completely changed my
              life."
            </p>
            <p>
              "I've attached some visual documentation of my journey, showcasing the
              unparalleled agility and streamlined lifestyle that comes with being a part of
              this elite echelon. Every movement is more precise, every thought clearer. My
              physical optimization is undeniably a feature, not a bug."
            </p>
          </div>
          <div className="text-sm font-bold tracking-wide uppercase text-white">
            — Aneesh
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Distinguished Member & Aerodynamic Pioneer
          </div>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-8 border-b border-white/10 pb-4 text-center"
        >
          Evidentiary Archives
        </motion.h2>

        <motion.div
          variants={containerVariants}
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          {assets.map((asset, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid border border-white/10 p-2 bg-[#0a0a0a] group relative"
            >
              <div className="overflow-hidden">
                {asset.type === "img" ? (
                  <img
                    src={asset.src}
                    alt="Evidence"
                    className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                ) : (
                  <video
                    src={asset.src}
                    controls
                    className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </main>
  );
}
