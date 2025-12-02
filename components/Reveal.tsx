"use client";

import { motion } from "framer-motion";

interface RevealProps {
  children: React.ReactNode;
  delay?: number; // Opsiyonel gecikme süresi
}

export const Reveal = ({ children, delay = 0 }: RevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Başlangıç: Görünmez ve 50px aşağıda
      whileInView={{ opacity: 1, y: 0 }} // Ekrana girince: Görünür ve yerine oturur
      viewport={{ once: true, margin: "-100px" }} // Sadece bir kere çalışsın, biraz içeri girince başlasın
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};