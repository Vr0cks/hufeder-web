"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

// Mock Veri
const events = [
  {
    id: 1,
    title: "Geleneksel Anıtkabir Ziyareti",
    date: "10 Kasım 2024",
    location: "Anıtkabir, Ankara",
    image: "/about-group.jpg", // Var olan resmi kullandık
    desc: "Büyük önderimiz Mustafa Kemal Atatürk'ü anmak üzere, tüm üyelerimizle birlikte Ata'mızın huzuruna çıkıyoruz."
  },
  {
    id: 2,
    title: "Spor Hukuku Paneli: Güncel Sorunlar",
    date: "15 Aralık 2024",
    location: "Fenerbahçe Faruk Ilgaz Tesisleri",
    image: "/hero-bg.jpg", // Var olan resmi kullandık
    desc: "Türkiye'nin önde gelen spor hukukçularının katılımıyla, futbolda adalet ve güncel hukuki sorunları tartışıyoruz."
  },
  {
    id: 3,
    title: "Üye Tanışma ve Dayanışma Kahvaltısı",
    date: "20 Ocak 2025",
    location: "Divan Fenerbahçe",
    image: "/feature-social.jpg", // Varsa bunu, yoksa diğerini kullan
    desc: "Yeni katılan üyelerimizle tanışmak ve mesleki dayanışmayı artırmak amacıyla düzenlediğimiz kahvaltı organizasyonu."
  }
];

export default function EventsPage() {
  return (
    <div className={`min-h-screen bg-slate-50 ${inter.className}`}>
      
      {/* HEADER */}
      <div className="bg-fener-navy pt-32 pb-16 px-6 text-center shadow-lg relative">
        <div className="relative z-10">
           <h1 className={`${playfair.className} text-4xl md:text-5xl text-white font-bold tracking-tight mb-4`}>
             Etkinlikler
           </h1>
           <p className="text-gray-300 max-w-xl mx-auto font-light">
             HUFEDER ailesi olarak gerçekleştirdiğimiz ve planladığımız organizasyonlar.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <Reveal key={event.id} delay={index * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 flex flex-col h-full">
                
                {/* Resim Alanı */}
                <div className="h-56 relative overflow-hidden">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-fener-yellow text-fener-navy px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide">
                    Yaklaşan Etkinlik
                  </div>
                </div>

                {/* İçerik */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-medium uppercase tracking-wider">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} className="text-fener-yellow" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} className="text-fener-yellow" />
                      {event.location.split(",")[0]}
                    </div>
                  </div>

                  <h3 className={`${playfair.className} text-2xl text-fener-navy font-bold mb-4 group-hover:text-fener-yellow transition-colors`}>
                    {event.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                    {event.desc}
                  </p>

                  <button className="w-full py-3 rounded-lg border border-fener-navy text-fener-navy font-bold text-sm hover:bg-fener-navy hover:text-white transition-all flex items-center justify-center gap-2 group/btn">
                    Detayları İncele
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}