"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const alreadyLoaded = sessionStorage.getItem("intellibot_loaded");
    if (alreadyLoaded) {
      setLoading(false);
      return;
    }
    const timer = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("intellibot_loaded", "true");
    }, 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <motion.span
              animate={{ boxShadow: ["0 0 20px rgba(46,107,255,0.3)", "0 0 40px rgba(46,107,255,0.6)", "0 0 20px rgba(46,107,255,0.3)"] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent"
            >
              <Bot className="h-7 w-7 text-white" />
            </motion.span>
            <div className="h-1 w-32 overflow-hidden rounded-full bg-navy-light">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
                className="h-full w-full bg-gradient-to-r from-transparent via-accent-light to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}