"use client";

import Image from "next/image";
import Link from "next/link";
import { Playfair_Display, Inter } from "next/font/google";
import { Reveal } from "@/components/Reveal";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-white ${inter.className} overflow-x-hidden`}>
      
      {/* 1. BÖLÜM: MİNİMAL BAŞLIK (Animasyonlu) */}
      <div className="bg-fener-navy pt-32 pb-20 px-6 text-center shadow-xl relative z-20">
        <Reveal>
          <h1 className={`${playfair.className} text-4xl md:text-6xl text-white font-bold tracking-tight mb-2`}>
            Hakkımızda
          </h1>
          <div className="w-16 h-1 bg-fener-yellow mx-auto mb-4"></div>
          <p className="text-gray-300 text-sm md:text-base uppercase tracking-widest font-medium">
            Adalet • Sadakat • Dayanışma
          </p>
        </Reveal>
      </div>

      {/* 2. BÖLÜM: BİZ KİMİZ? (Animasyonlu) */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="lg:w-1/2 space-y-8 order-2 lg:order-1">
            <Reveal delay={0.2}>
              <h2 className={`${playfair.className} text-4xl md:text-5xl text-fener-navy leading-tight`}>
                Fenerbahçe'nin <br/>
                <span className="italic text-fener-yellow border-b-4 border-fener-yellow">Hukuk Zırhı.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Hukukçu Fenerbahçeliler Derneği (HUFEDER), Fenerbahçe Spor Kulübü'ne gönül vermiş avukatlar, hakimler, savcılar ve akademisyenlerin bir araya gelerek oluşturduğu <strong>resmî ve akredite</strong> bir sivil toplum kuruluşudur.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-gray-600 text-lg leading-relaxed">
                Kuruluşumuzdan bu yana, sadece bir taraftar grubu olmanın ötesine geçerek; spor hukukunun gelişimi, mesleki dayanışma ve kulübümüzün haklarının her platformda savunulması için mücadele ediyoruz.
              </p>
            </Reveal>
          </div>
          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <Reveal delay={0.2}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 group w-full">
                <div className="aspect-video relative w-full">
                   <Image
                     src="/about-group.jpg"
                     alt="HUFEDER Ailesi"
                     fill
                     className="object-cover object-[50%_60%] group-hover:scale-105 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-fener-navy/10 group-hover:bg-transparent transition-colors duration-500"></div>
                </div>
                <div className="bg-fener-navy p-4 text-center">
                   <p className="text-white text-sm font-medium">"Hukukçuyuz, Fenerbahçeliyiz, Ata'mızın İzindeyiz!"</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. BÖLÜM: MANİFESTO (Animasyonlu) */}
      <section className="py-24 bg-gray-50 relative border-t border-gray-100">
        <div className="container mx-auto px-6">
           <div className="space-y-16 max-w-5xl mx-auto">
              <Reveal>
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                   <div className="md:w-auto shrink-0">
                      <span className={`${playfair.className} text-6xl md:text-7xl text-fener-navy/20 font-bold leading-none`}>01</span>
                   </div>
                   <div className="md:flex-1 pt-2">
                      <h3 className={`${playfair.className} text-3xl text-fener-navy mb-3`}>Resmî ve Akredite</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">Fenerbahçe Spor Kulübü Tüzüğü'ne tam bağlılıkla, kulübümüz tarafından resmen tanınan tek hukukçu yapılanmasıyız.</p>
                   </div>
                </div>
              </Reveal>
              <div className="w-full h-px bg-gray-200"></div> 
              <Reveal>
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                   <div className="md:w-auto shrink-0">
                      <span className={`${playfair.className} text-6xl md:text-7xl text-fener-yellow/40 font-bold leading-none`}>02</span>
                   </div>
                   <div className="md:flex-1 pt-2">
                      <h3 className={`${playfair.className} text-3xl text-fener-navy mb-3`}>Hukukun Üstünlüğü</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">Toplumsal adalet, kadın hakları ve çevre hukuku gibi konularda projeler üreterek evrensel normlara katkı sağlıyoruz.</p>
                   </div>
                </div>
              </Reveal>
              <div className="w-full h-px bg-gray-200"></div>
              <Reveal>
                <div className="flex flex-col md:flex-row items-start gap-6 md:gap-10">
                   <div className="md:w-auto shrink-0">
                      <span className={`${playfair.className} text-6xl md:text-7xl text-fener-navy/20 font-bold leading-none`}>03</span>
                   </div>
                   <div className="md:flex-1 pt-2">
                      <h3 className={`${playfair.className} text-3xl text-fener-navy mb-3`}>Fenerbahçe Savunması</h3>
                      <p className="text-gray-600 text-lg leading-relaxed">Kulübümüzün haklarını her platformda tavizsiz savunuyoruz. Bizim için Fenerbahçe, sadece bir takım değil, bir duruştur.</p>
                   </div>
                </div>
              </Reveal>
           </div>
        </div>
      </section>

      {/* 4. BÖLÜM: ATATÜRK PORTRESİ (ANİMASYONSUZ - SABİT - VAKUR) */}
      <section className="relative w-full py-24 bg-fener-navy flex flex-col items-center justify-center text-center px-6">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="relative z-10 w-full max-w-4xl">
           <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              
              {/* Portre (Reveal YOK, Sabit durur) */}
              <div className="shrink-0">
                <div className="relative w-64 h-80 rounded-lg overflow-hidden border-[4px] border-fener-yellow shadow-2xl">
                    {/* Hover efektini bile kaldırdık, tam bir anıt gibi dursun */}
                    <Image src="/ataturk-portrait.jpg" alt="Atatürk" fill className="object-cover" />
                </div>
              </div>

              {/* Yazı (Reveal YOK, Sabit durur) */}
              <div className="text-left md:w-1/2">
                 <h3 className={`${playfair.className} text-3xl md:text-4xl text-fener-yellow mb-4 italic`}>
                   "Hayatta en hakiki mürşit ilimdir."
                 </h3>
                 <div className="w-12 h-1 bg-white/20 mb-4"></div>
                 <p className="text-gray-300 font-light">
                   Akıl ve bilimin rehberliğinde, Ulu Önder Mustafa Kemal Atatürk'ün açtığı yolda, gösterdiği hedefe durmadan yürümektir.
                 </p>
              </div>

           </div>
        </div>
      </section>

    </div>
  );
}