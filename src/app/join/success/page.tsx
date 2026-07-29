"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";

export default function JoinSuccess() {
  return (
    <main className="flex-grow pt-32 pb-20 px-6 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-lg w-full text-center border border-white/10 bg-[#0a0a0a] p-10 relative overflow-hidden"
      >
        <div className="flex justify-center mb-6 text-emerald-400">
          <CheckCircle2 className="w-16 h-16 stroke-[1.5]" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
          Transmission Received.
        </h1>

        <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm md:text-base">
          Your verification payment of <span className="text-white font-medium">$45 CAD</span> has been processed. The board is evaluating your micro-credentials for admission into the International Micropenis Association.
        </p>

        <div className="border-t border-b border-white/10 py-4 mb-8 text-left space-y-2 text-xs text-gray-500 font-mono">
          <div className="flex justify-between items-center">
            <span>STATUS:</span>
            <span className="text-emerald-400 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 inline" /> VERIFIED DUES PAID
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>DRAG COEFFICIENT:</span>
            <span className="text-gray-300">MINIMAL</span>
          </div>
          <div className="flex justify-between items-center">
            <span>PROFILE STATUS:</span>
            <span className="text-gray-300">PENDING BOARD ROLL CALL</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/members"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors duration-300"
          >
            <span>Explore Members</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-white/30 px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
