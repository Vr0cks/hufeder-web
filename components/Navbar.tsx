"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 50px aşağı inince menü renk değiştirsin
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Anasayfa", href: "/" },
    { name: "Hakkımızda", href: "/hakkimizda" },
    { name: "Tüzük", href: "/tuzuk" },
    { name: "Etkinlikler", href: "/etkinlikler" },
    { name: "İletişim", href: "/iletisim" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out border-b border-transparent ${
        scrolled
          ? "bg-fener-navy/95 backdrop-blur-md py-3 shadow-2xl border-b-fener-yellow/20" // Aşağı inince: Koyu Lacivert + Altın Çizgi
          : "bg-transparent py-6" // Tepedeyken: Şeffaf
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO ALANI */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-white/10 rounded-full p-1 backdrop-blur-sm"> 
              <Image
                src="/logo-nav.png"
                alt="HUFEDER Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            
            <div className="flex flex-col">
              <span className={`text-xl font-bold leading-none tracking-tight transition-colors ${scrolled ? 'text-white' : 'text-white drop-shadow-md'}`}>
                HUFEDER
              </span>
              <span className={`text-[10px] font-medium uppercase tracking-widest transition-colors ${scrolled ? 'text-gray-400' : 'text-gray-300'}`}>
                Hukukçu Fenerbahçeliler
              </span>
            </div>
          </Link>

          {/* DESKTOP MENÜ */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-fener-yellow transition-all relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fener-yellow transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            <Link
              href="/uyelik"
              className="px-6 py-2.5 text-sm font-bold text-fener-navy bg-fener-yellow rounded-lg hover:bg-yellow-400 hover:scale-105 transition-all shadow-[0_0_15px_rgba(194,155,64,0.4)]"
            >
              Üye Ol
            </Link>
          </div>

          {/* MOBİL MENÜ BUTONU */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBİL MENÜ (Siyah Arka Planlı) */}
      <div
        className={`md:hidden absolute w-full bg-fener-navy border-t border-white/10 transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-md"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;