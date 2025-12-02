// app/yonetim/page.tsx

"use client";

import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { Reveal } from "@/components/Reveal"; // components/Reveal yolunu kullanıyoruz
import { ArrowRight } from "lucide-react";

// *** VERİ BURADAN ÇEKİLİYOR - CMS SİMÜLASYONU ***
// NOT: Eğer "@/data" importu hata verirse, ".. ile manuel yolu kullanın."
import { yonetimKuruluData } from "@/data/yonetim-demo"; 

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

// Mock Veri silindi, yerine yonetimKuruluData kullanılıyor
const BaskanKarti = yonetimKuruluData.find(m => m.isPresident);
const Uyeler = yonetimKuruluData.filter(m => !m.isPresident);

export default function YonetimKuruluPage() {
  return (
    <div className={`min-h-screen bg-slate-50 ${inter.className}`}>
      
      {/* HEADER */}
      <div className="bg-fener-navy pt-32 pb-16 px-6 text-center shadow-lg relative overflow-hidden">
        <div className="relative z-10">
           <h1 className={`${playfair.className} text-4xl md:text-5xl text-white font-bold tracking-tight mb-4`}>
             Yönetim Kurulu
           </h1>
           <p className="text-gray-300 max-w-xl mx-auto font-light">
             Hukukçu Fenerbahçeliler Derneği'nin karar organı ve yönetim ekibi.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        {/* BAŞKAN KARTI (Magazine Spread - Dergi Kapağı Etkisi) */}
        {BaskanKarti && (
          <Reveal delay={0.1}>
            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 mb-20 relative overflow-hidden flex flex-col lg:flex-row items-center gap-10 lg:gap-20 border-t-8 border-fener-yellow">
              
              {/* Sol: Fotoğraf */}
              <div className="lg:w-1/3 relative h-80 lg:h-96 w-full rounded-xl overflow-hidden shadow-xl shrink-0">
                <Image 
                  src={BaskanKarti.image} 
                  alt={BaskanKarti.name} 
                  fill 
                  className="object-cover object-top"
                />
              </div>

              {/* Sağ: İsim ve Biyografi */}
              <div className="lg:w-2/3">
                <h3 className="text-fener-yellow tracking-widest uppercase text-sm font-bold mb-2">BAŞKAN</h3>
                <h2 className={`${playfair.className} text-4xl md:text-6xl text-fener-navy leading-tight mb-4`}>
                  {BaskanKarti.name}
                </h2>
                <p className="text-xl text-gray-700 font-medium mb-6">{BaskanKarti.title}</p>
                
                <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-fener-navy/50 pl-4">
                  {BaskanKarti.bio} {BaskanKarti.bio}
                  Daha detaylı bilgi, akademik yayınlar ve iletişim adresleri için Başkanımızın kişisel sayfasını inceleyebilirsiniz.
                </p>

                <button className="mt-8 flex items-center gap-2 text-fener-navy font-bold hover:text-fener-yellow transition-colors">
                  Detaylı CV <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </Reveal>
        )}

        {/* DİĞER ÜYELERİN LİSTESİ */}
        <h3 className={`${playfair.className} text-3xl text-fener-navy mb-8 mt-16`}>
          Yönetim Ekibi
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {Uyeler.map((member, index) => (
            <Reveal key={member.id} delay={index * 0.1}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 transform hover:-translate-y-1 transition-all duration-300">
                
                {/* Fotoğraf */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={member.image} 
                    alt={member.name} 
                    fill 
                    className="object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Fotoğraf Üzeri Başlık */}
                  <div className="absolute inset-0 bg-gradient-to-t from-fener-navy/70 to-transparent"></div>
                  <h4 className="absolute bottom-0 p-4 text-white font-bold text-lg">{member.title}</h4>
                </div>
                
                {/* İsim ve Unvan */}
                <div className="p-4">
                  <p className={`${playfair.className} text-xl font-bold text-fener-navy`}>
                    {member.name}
                  </p>
                  <p className="text-sm text-gray-500">{member.title}</p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}