"use client";

import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <main className="flex-grow pt-32 pb-20 px-6">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8"
        >
          Superior by Design.
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl text-gray-400 font-light leading-relaxed mb-20"
        >
          The prevailing narrative equates mass with capability. At the IMA, our research
          indicates the exact opposite. We are the vanguard of human evolution, shedding
          unnecessary biological weight for ultimate cognitive superiority.
        </motion.p>

        <motion.h2
          variants={itemVariants}
          className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-8 border-b border-white/10 pb-4"
        >
          The Science of Streamlining
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Optimized Vascular Routing
            </h3>
            <p className="text-gray-400 font-light leading-relaxed">
              By minimizing peripheral tissue, the cardiovascular system operates at peak
              efficiency. Less blood flow required below the equator results in a 42%
              increase in cerebral circulation. Our members literally think faster.
            </p>
          </motion.div>
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-4">
              Aerodynamic Supremacy
            </h3>
            <p className="text-gray-400 font-light leading-relaxed">
              A reduced physical profile significantly lowers the drag coefficient during
              high-stakes athletic maneuvers. We are built for speed, agility, and
              uncompromising performance.
            </p>
          </motion.div>
        </div>

        <motion.h2
          variants={itemVariants}
          className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-8 border-b border-white/10 pb-4"
        >
          Our Legacy
        </motion.h2>

        <div className="space-y-12">
          {[
            {
              year: "1892",
              title: "The Foundation",
              desc: "A clandestine society of Victorian intellectuals realizes that less physical burden equates to superior cognitive bandwidth. The IMA is born in the shadows of London.",
            },
            {
              year: "1954",
              title: "The Post-War Boom",
              desc: 'IMA members, acting as shadow advisors, help design the first silicon microchip. The philosophy of "smaller is more powerful" crosses from biology to technology.',
            },
            {
              year: "TODAY",
              title: "The Modern Era",
              desc: "We step into the light. The IMA opens its highly exclusive doors to the top 1% of the bottom 1%.",
            },
          ].map((legacy) => (
            <motion.div
              key={legacy.year}
              variants={itemVariants}
              className="flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-1/4 text-white font-bold tracking-widest">
                {legacy.year}
              </div>
              <div className="md:w-3/4">
                <h4 className="text-lg font-semibold text-white mb-2">{legacy.title}</h4>
                <p className="text-gray-400 font-light">{legacy.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
