"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

const STORAGE_KEY = "intellibot_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY);
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(STORAGE_KEY, "declined");
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-1/2 z-[70] w-[92%] max-w-xl -translate-x-1/2 sm:bottom-6"
        >
          <div className="glass-card flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-navy-light text-accent-light">
              <Cookie className="h-5 w-5" />
            </span>
            <p className="flex-1 text-sm text-muted">
              We use cookies to improve your experience on our site. By continuing, you
              agree to our use of cookies.
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                onClick={decline}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-text"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent-light"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}