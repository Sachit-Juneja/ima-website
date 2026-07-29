"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { XCircle, ArrowLeft } from "lucide-react";

export default function JoinCancel() {
  return (
    <main className="flex-grow pt-32 pb-20 px-6 flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-lg w-full text-center border border-white/10 bg-[#0a0a0a] p-10 relative overflow-hidden"
      >
        <div className="flex justify-center mb-6 text-amber-500/80">
          <XCircle className="w-16 h-16 stroke-[1.5]" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-white mb-4">
          Verification Aborted.
        </h1>

        <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm md:text-base">
          Your payment session was cancelled. No charges were made to your account.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/join"
            className="inline-flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors duration-300"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Try Verification Again</span>
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
