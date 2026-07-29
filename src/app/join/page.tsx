"use client";

import { motion } from "framer-motion";
import { FormEvent, useState } from "react";
import { Loader2, CreditCard, Lock } from "lucide-react";

export default function Join() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [measurement, setMeasurement] = useState("");
  const [advantage, setAdvantage] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          measurement,
          advantage,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to initialize verification checkout.");
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No Stripe checkout URL received.");
      }
    } catch (err: unknown) {
      console.error(err);
      setErrorMsg(err instanceof Error ? err.message : "An unexpected error occurred.");
      setLoading(false);
    }
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
          className="text-gray-400 font-light text-center mb-8"
        >
          Submit your credentials. Only the truly optimized will be accepted.
        </motion.p>

        {errorMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 p-4 border border-rose-500/30 bg-rose-950/20 text-rose-300 text-xs font-mono rounded"
          >
            {errorMsg}
          </motion.div>
        )}

        <motion.form variants={itemVariants} className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
                Legal Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
              value={measurement}
              onChange={(e) => setMeasurement(e.target.value)}
              className="w-full px-4 py-3 text-sm rounded-none focus:ring-0 appearance-none bg-transparent border border-white/20 text-white transition-colors duration-300 focus:border-white focus:outline-none [&>option]:bg-[#0a0a0a]"
            >
              <option value="" disabled>
                Select your engineering tolerance...
              </option>
              <option value="Sub-10mm (Grand Master Class)">Sub-10mm (Grand Master Class)</option>
              <option value="10mm - 25mm (Elite)">10mm - 25mm (Elite)</option>
              <option value="25mm - 50mm (Distinguished)">25mm - 50mm (Distinguished)</option>
              <option value="50mm - 88.9mm (Standard IMA Tolerance)">50mm - 88.9mm (Standard IMA Tolerance)</option>
              <option value="89mm+ (Ineligible)">89mm+ (Ineligible - Too much drag)</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold tracking-widest uppercase text-gray-500 mb-2">
              Tactical Advantage
            </label>
            <textarea
              required
              rows={4}
              value={advantage}
              onChange={(e) => setAdvantage(e.target.value)}
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

          <div className="pt-2 border-t border-white/10">
            <div className="flex items-center justify-between text-xs text-gray-500 mb-4 font-mono">
              <span className="flex items-center gap-1.5">
                <Lock className="w-3 h-3 text-gray-400" />
                VERIFICATION DUES:
              </span>
              <span className="text-white font-bold">$45 CAD (Lifetime)</span>
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              type="submit"
              disabled={loading}
              className="w-full bg-white text-black py-4 text-sm font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Connecting to Stripe...</span>
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  <span>Pay $45 CAD & Submit for Verification</span>
                </>
              )}
            </motion.button>
          </div>
        </motion.form>
      </motion.div>
    </main>
  );
}
