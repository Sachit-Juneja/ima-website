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
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
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
            className="text-xs font-bold tracking-[0.3em] uppercase text-gray-500 mb-16 text-center"
          >
            Verified Members
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                quote:
                  "Since joining the IMA, I've realized my physical optimization is a feature, not a bug. The mental clarity is unparalleled.",
                name: "Arthur P.",
                title: "Chief of Streamlining",
              },
              {
                quote:
                  "I used to feel burdened. Now I realize I'm simply a marvel of modern micro-engineering. Precision at its finest.",
                name: "William T.",
                title: "Director of Precision",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="border border-white/10 p-10 hover:border-white/30 transition-colors duration-500 group"
              >
                <p className="text-xl font-light italic mb-8 text-gray-300 group-hover:text-white transition-colors duration-300">
                  "{testimonial.quote}"
                </p>
                <div className="text-sm font-bold tracking-wide uppercase text-white">
                  — {testimonial.name}
                </div>
                <div className="text-xs text-gray-500 mt-1">{testimonial.title}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
