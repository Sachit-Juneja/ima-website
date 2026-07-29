"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
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
    <>
      <main className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl w-full"
        >
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-9xl font-extrabold tracking-tighter text-white mb-6"
          >
            Less is More.
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-2xl font-light text-gray-400 max-w-2xl mx-auto mb-12 tracking-wide leading-relaxed"
          >
            Welcome to the International Micropenis Association.<br />
            Precision. Efficiency. Elegance.
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href="/join"
              className="inline-block bg-white text-black px-10 py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors duration-300"
            >
              Join the Elite
            </Link>
          </motion.div>
        </motion.div>
      </main>

      <section className="py-32 bg-black border-t border-white/10 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-8">
            Our Mission
          </h2>
          <p className="text-3xl md:text-5xl font-light leading-tight tracking-tight">
            Society has long misunderstood the compact gentleman. We exist to celebrate{" "}
            <span className="text-white font-semibold">aerodynamic efficiency</span>{" "}
            and streamlined living.
          </p>
          <p className="mt-8 text-gray-400 font-light text-lg">
            Excess is a flaw. Optimization is a feature.
          </p>
        </motion.div>
      </section>

      <section className="py-32 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-4 text-center"
          >
            Verified Members
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-600 text-sm text-center mb-16"
          >
            901 members and counting
          </motion.p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-12">
            {[
              { name: "Arthur P.", title: "Chief of Streamlining", img: "https://randomuser.me/api/portraits/men/32.jpg" },
              { name: "William T.", title: "Director of Precision", img: "https://randomuser.me/api/portraits/men/45.jpg" },
              { name: "James K.", title: "Grand Optimiser", img: "https://randomuser.me/api/portraits/men/67.jpg" },
              { name: "Robert M.", title: "Baron of Biomechanics", img: "https://randomuser.me/api/portraits/men/12.jpg" },
              { name: "Aneesh", title: "Aerodynamic Pioneer", img: "/assets/6E84D118-76DC-4645-BD09-68BFD7933FCA.jpg" },
              { name: "Daniel S.", title: "Sage of Streamlining", img: "https://randomuser.me/api/portraits/men/88.jpg" },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="border border-white/10 p-3 hover:border-white/30 transition-colors duration-500 group"
              >
                <div className="aspect-square mb-3 overflow-hidden bg-[#111]">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h3 className="text-sm font-semibold text-white truncate">{member.name}</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider truncate">{member.title}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/members"
              className="inline-block border border-white/10 text-gray-400 hover:text-white hover:border-white/30 px-8 py-3 text-sm tracking-widest uppercase transition-all duration-300"
            >
              View All 901 Members →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
