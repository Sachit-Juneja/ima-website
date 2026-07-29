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
        className="max-w-lg w-full text-center border border-[var(--border-main)] bg-[var(--bg-card)] p-10 relative overflow-hidden transition-colors duration-300"
      >
        <div className="flex justify-center mb-6 text-emerald-500">
          <CheckCircle2 className="w-16 h-16 stroke-[1.5]" />
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter text-[var(--text-primary)] mb-4">
          Transmission Received.
        </h1>

        <p className="text-[var(--text-secondary)] font-light leading-relaxed mb-8 text-sm md:text-base">
          Your verification payment of <span className="text-[var(--text-primary)] font-medium">$45 CAD</span> has been processed. The board is evaluating your micro-credentials for admission into the International Micropenis Association.
        </p>

        <div className="border-t border-b border-[var(--border-main)] py-4 mb-8 text-left space-y-2 text-xs text-[var(--text-muted)] font-mono">
          <div className="flex justify-between items-center">
            <span>STATUS:</span>
            <span className="text-emerald-500 font-bold flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 inline" /> VERIFIED DUES PAID
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span>DRAG COEFFICIENT:</span>
            <span className="text-[var(--text-primary)]">MINIMAL</span>
          </div>
          <div className="flex justify-between items-center">
            <span>PROFILE STATUS:</span>
            <span className="text-[var(--text-primary)]">PENDING BOARD ROLL CALL</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/members"
            className="inline-flex items-center justify-center gap-2 bg-[var(--button-bg)] text-[var(--button-text)] px-6 py-3 text-xs font-bold tracking-widest uppercase hover:opacity-90 transition-colors duration-300"
          >
            <span>Explore Members</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-[var(--border-main)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] px-6 py-3 text-xs tracking-widest uppercase transition-all duration-300"
          >
            Return Home
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
