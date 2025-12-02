"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Reveal } from "@/components/Reveal"; // Reveal'ı doğru yerden import et

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function ContactPage() {
  return (
    <div className={`min-h-screen bg-slate-50 ${inter.className}`}>
      
      {/* HEADER */}
      <div className="bg-fener-navy pt-32 pb-16 px-6 text-center shadow-lg relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10">
           <h1 className={`${playfair.className} text-4xl md:text-5xl text-white font-bold tracking-tight mb-4`}>
             İletişim
           </h1>
           <p className="text-gray-300 max-w-xl mx-auto font-light">
             Sorularınız, görüşleriniz ve üyelik başvurularınız için bizimle irtibata geçin.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* SOL: İletişim Bilgileri */}
          <div className="lg:w-1/3 space-y-8">
            <Reveal>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className={`${playfair.className} text-2xl text-fener-navy mb-6`}>Merkez Ofis</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-fener-navy/5 p-3 rounded-lg text-fener-navy">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-fener-navy">Adres</p>
                      <p className="text-gray-600 text-sm mt-1">
                        İLKADIM MAH.YEŞİLVADİ CAD. NO:73 DİKMEN VADİSİ, 06450 Çankaya/Ankara
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-fener-navy/5 p-3 rounded-lg text-fener-navy">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-fener-navy">Telefon</p>
                      <p className="text-gray-600 text-sm mt-1">0552 242 19 07</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-fener-navy/5 p-3 rounded-lg text-fener-navy">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-fener-navy">E-Posta</p>
                      <p className="text-gray-600 text-sm mt-1">info@hufeder.org</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-fener-navy/5 p-3 rounded-lg text-fener-navy">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-fener-navy">Çalışma Saatleri</p>
                      <p className="text-gray-600 text-sm mt-1">Pazartesi - Cuma: 10:00 - 17:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* SAĞ: Form */}
          <div className="lg:w-2/3">
            <Reveal delay={0.2}>
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
                <h3 className={`${playfair.className} text-3xl text-fener-navy mb-2`}>Bize Yazın</h3>
                <p className="text-gray-500 mb-8">Formu doldurun, hukuk komisyonumuz en kısa sürede size dönüş yapsın.</p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-fener-navy mb-2">Adınız Soyadınız</label>
                      <input type="text" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-200 focus:border-fener-yellow focus:ring-1 focus:ring-fener-yellow outline-none transition-all" placeholder="Örn: Ahmet Yılmaz" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-fener-navy mb-2">E-Posta Adresi</label>
                      <input type="email" className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-200 focus:border-fener-yellow focus:ring-1 focus:ring-fener-yellow outline-none transition-all" placeholder="ornek@mail.com" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-fener-navy mb-2">Konu</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-200 focus:border-fener-yellow focus:ring-1 focus:ring-fener-yellow outline-none transition-all">
                      <option>Genel Bilgi</option>
                      <option>Üyelik Başvurusu</option>
                      <option>Hukuki Destek</option>
                      <option>Basın ve Medya</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-fener-navy mb-2">Mesajınız</label>
                    <textarea rows={5} className="w-full px-4 py-3 rounded-lg bg-slate-50 border border-gray-200 focus:border-fener-yellow focus:ring-1 focus:ring-fener-yellow outline-none transition-all" placeholder="Mesajınızı buraya yazınız..."></textarea>
                  </div>

                  <button type="button" className="w-full md:w-auto px-8 py-4 bg-fener-navy text-white font-bold rounded-lg hover:bg-fener-yellow hover:text-fener-navy transition-all flex items-center justify-center gap-2">
                    <Send size={18} />
                    Gönder
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  );
}