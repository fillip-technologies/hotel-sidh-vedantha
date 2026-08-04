"use client";

import { motion } from "framer-motion";

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function FadeIn({ children, className = "", delay = 0 }: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      transition={{ delay, duration: 0.55, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.35 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
