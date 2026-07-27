"use client";

import { motion } from "framer-motion";
import { FormEvent } from "react";

export default function Join() {
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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Transmission secure. The board will evaluate your micro-credentials.");
  };

  return (
    <main className="flex-grow pt-32 pb-20 px-6 flex justify-center items-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-xl w-full"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl font-bold tracking-tighter text-white mb-4 text-center"
        >
          Verification Protocol
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-gray-400 font-light text-center mb-12"
        >
          Submit your credentials. Only the truly optimized will be accepted.
        </motion.p>

        <motion.form variants={itemVariants} className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
                Legal Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-3 text-sm rounded-none focus:ring-0 bg-transparent border border-white/20 text-white transition-colors duration-300 focus:border-white focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
                Secure Email
              </label>
              <input
                type="email"
                required
                className="w-full px-4 py-3 text-sm rounded-none focus:ring-0 bg-transparent border border-white/20 text-white transition-colors duration-300 focus:border-white focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
              Current Measurement (MM)
            </label>
            <p className="text-xs text-gray-600 mb-3 italic">
              Precision matters. Please calibrate your calipers before answering.
            </p>
            <select
              required
              className="w-full px-4 py-3 text-sm rounded-none focus:ring-0 appearance-none bg-transparent border border-white/20 text-white transition-colors duration-300 focus:border-white focus:outline-none [&>option]:bg-[#0a0a0a]"
            >
              <option value="" disabled selected>
                Select your engineering tolerance...
              </option>
              <option value="sub-10">Sub-10mm (Grand Master Class)</option>
              <option value="10-25">10mm - 25mm (Elite)</option>
              <option value="25-50">25mm - 50mm (Distinguished)</option>
              <option value="50-88">50mm - 88.9mm (Standard IMA Tolerance)</option>
              <option value="reject">89mm+ (Ineligible - Too much drag)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
              Tactical Advantage
            </label>
            <textarea
              required
              rows={4}
              placeholder="Describe a time your streamlined anatomy provided a definitive tactical advantage in a professional or athletic setting..."
              className="w-full px-4 py-3 text-sm rounded-none focus:ring-0 resize-none bg-transparent border border-white/20 text-white transition-colors duration-300 focus:border-white focus:outline-none"
            ></textarea>
          </div>

          <div className="flex items-start space-x-4">
            <input
              type="checkbox"
              required
              id="confirm"
              className="mt-1 accent-white bg-transparent border-gray-600 w-4 h-4 rounded-none cursor-pointer"
            />
            <label
              htmlFor="confirm"
              className="text-sm text-gray-400 font-light cursor-pointer select-none"
            >
              I hereby swear under penalty of perjury that my equipment does not exceed the
              legal IMA limit of 3.5 inches on a warm day.
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full bg-white text-black py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors duration-300"
          >
            Submit for Verification
          </motion.button>
        </motion.form>
      </motion.div>
    </main>
  );
}
