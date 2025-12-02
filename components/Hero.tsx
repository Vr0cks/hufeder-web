"use client"; // Animasyon için şart

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; // HAREKET MOTORU

const Hero = () => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-fener-navy">
      
      {/* 1. KATMAN: Fotoğraf ve Filtre (Sabit durur, zoom yapar) */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/hero-bg.jpg" // Public'teki foton
            alt="HUFEDER"
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
        {/* Lacivert Filtre */}
        <div className="absolute inset-0 bg-fener-navy/85 mix-blend-multiply"></div>
      </div>

      {/* 2. KATMAN: İçerik (Animasyonlu Giriş) */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        
        {/* Rozet */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-block mb-4 px-4 py-1.5 rounded-full border border-fener-yellow/30 bg-fener-navy/40 backdrop-blur-md"
        >
          <span className="text-fener-yellow text-xs md:text-sm font-bold tracking-widest uppercase">
            Resmî ve Akredite Kuruluş
          </span>
        </motion.div>

        {/* Ana Slogan */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-lg"
        >
          Adalete <span className="text-fener-yellow">Fener</span> Olacağız
        </motion.h1>

        {/* Açıklama */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-md"
        >
          Hukukun üstünlüğü ilkesiyle, Fenerbahçe Spor Kulübü'nün değerlerini savunan hukukçuların buluşma noktası.
        </motion.p>

        {/* Butonlar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link 
            href="/uyelik" 
            className="w-full sm:w-auto px-8 py-4 bg-fener-yellow text-fener-navy font-bold rounded-lg hover:bg-white transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,237,0,0.4)]"
          >
            Aramıza Katılın
          </Link>
          
          <Link 
            href="/hakkimizda" 
            className="w-full sm:w-auto px-8 py-4 bg-white/10 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-all backdrop-blur-sm"
          >
            Derneği Tanıyın
          </Link>
        </motion.div>
      </div>

      {/* Alt Dekoratif Çizgi */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r from-fener-navy via-fener-yellow to-fener-navy z-20 origin-center"
      ></motion.div>
    </section>
  );
};

export default Hero;