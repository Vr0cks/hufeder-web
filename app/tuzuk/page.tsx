"use client";

import { useState } from "react";
import { Playfair_Display, Inter } from "next/font/google";
import { FileText, Download, ChevronRight, Scale } from "lucide-react";
import { motion } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

// TÜZÜK MADDELERİ (Buraları gerçek metinle doldurursun)
const articles = [
  {
    id: "madde-1",
    title: "Madde 1: Ad ve Merkez",
    content: "Derneğin adı 'Hukukçu Fenerbahçeliler Derneği'dir. Kısa adı HUFEDER'dir. Derneğin merkezi İstanbul'dadır. Şubesi açılmayacaktır ancak gerekli görülen yerlerde temsilcilikler verilebilir."
  },
  {
    id: "madde-2",
    title: "Madde 2: Derneğin Amacı",
    content: "Dernek; Fenerbahçe Spor Kulübü'ne gönül vermiş hukukçuları bir çatı altında toplamak, üyeleri arasında mesleki ve sosyal dayanışmayı sağlamak, spor hukukunun gelişmesine katkıda bulunmak ve Fenerbahçe Spor Kulübü'nün hak ve menfaatlerini hukuk zemininde savunmak amacıyla kurulmuştur."
  },
  {
    id: "madde-3",
    title: "Madde 3: Çalışma Konuları",
    content: "Dernek, amacını gerçekleştirmek için şu çalışmaları yapar: \n a) Üyeleri arasında iletişimi sağlamak için toplantılar, yemekler ve geziler düzenler. \n b) Spor hukuku alanında paneller, sempozyumlar ve konferanslar organize eder. \n c) Fenerbahçe Spor Kulübü ile koordineli çalışarak hukuki destek sağlar."
  },
  {
    id: "madde-4",
    title: "Madde 4: Üyelik Şartları",
    content: "Derneğe üye olabilmek için Türk Medeni Kanunu ve Dernekler Kanunu'nda belirtilen şartları taşımanın yanı sıra; Hukuk Fakültesi mezunu olmak (Avukat, Hakim, Savcı, Noter, Akademisyen vb.) ve Fenerbahçe taraftarı olmak şarttır."
  },
  {
    id: "madde-5",
    title: "Madde 5: Üyelikten Çıkarma",
    content: "Dernek tüzüğüne aykırı hareket edenler, derneğin manevi şahsiyetine zarar verenler ve üyelik aidatını üst üste iki dönem ödemeyenler, Yönetim Kurulu kararıyla üyelikten çıkarılabilir."
  },
  // Buraya istediğin kadar madde ekleyebilirsin...
];

export default function TuzukPage() {
  const [activeSection, setActiveSection] = useState("madde-1");

  // Tıklayınca o maddeye kaydıran fonksiyon
  const scrollToArticle = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Header payı
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className={`min-h-screen bg-slate-50 ${inter.className}`}>
      
      {/* HEADER KISMI */}
      <div className="bg-fener-navy pt-32 pb-16 px-6 text-center shadow-lg relative overflow-hidden">
        {/* Arka Plan Deseni */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        <div className="relative z-10">
           <div className="inline-flex items-center gap-2 text-fener-yellow bg-white/5 px-4 py-1.5 rounded-full mb-6 border border-white/10 backdrop-blur-sm">
              <Scale size={16} />
              <span className="text-xs font-bold tracking-widest uppercase">Resmî Belge</span>
           </div>
           <h1 className={`${playfair.className} text-4xl md:text-5xl text-white font-bold tracking-tight mb-4`}>
             Dernek Tüzüğü
           </h1>
           <p className="text-gray-300 max-w-xl mx-auto font-light">
             Hukukçu Fenerbahçeliler Derneği'nin anayasası, kuruluş amaçları ve işleyiş kuralları.
           </p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* SOL TARA: YAPIŞKAN MENÜ (Sticky Sidebar) */}
          <div className="lg:w-1/4 lg:sticky lg:top-32 hidden lg:block">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-2">
               <div className="p-4 border-b border-gray-100 mb-2">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">İçindekiler</span>
               </div>
               <nav className="space-y-1">
                 {articles.map((item) => (
                   <button
                     key={item.id}
                     onClick={() => scrollToArticle(item.id)}
                     className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between group ${
                       activeSection === item.id 
                         ? "bg-fener-navy text-white shadow-md" 
                         : "text-gray-600 hover:bg-slate-50 hover:text-fener-navy"
                     }`}
                   >
                     <span className="truncate pr-4">{item.title.split(":")[0]}</span>
                     {activeSection === item.id && <ChevronRight size={14} />}
                   </button>
                 ))}
               </nav>
               
               {/* PDF İndir Butonu (Sidebar Altı) */}
               <div className="mt-4 p-2">
                 <button className="w-full flex items-center justify-center gap-2 bg-fener-yellow text-fener-navy font-bold text-sm py-3 rounded-xl hover:bg-yellow-400 transition-colors">
                    <Download size={16} />
                    PDF Olarak İndir
                 </button>
               </div>
            </div>
          </div>

          {/* SAĞ TARA: İÇERİK (Kağıt Görünümlü) */}
          <div className="lg:w-3/4 w-full">
             
             {/* Mobil İçin Üst İndirme Butonu */}
             <div className="lg:hidden mb-8">
                <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-fener-navy font-bold py-4 rounded-xl shadow-sm">
                    <FileText size={18} />
                    Tüzüğü PDF İndir
                </button>
             </div>

             <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-16 relative overflow-hidden">
                {/* Kağıt Üstü Filigran (Logo) */}
                <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
                   {/* Buraya logo componenti veya resmi gelebilir, şimdilik ikon */}
                   <Scale size={300} />
                </div>

                <div className="prose prose-lg max-w-none text-gray-600">
                   {/* Başlık */}
                   <div className="border-b-2 border-fener-yellow pb-6 mb-10">
                      <h2 className={`${playfair.className} text-3xl text-fener-navy font-bold`}>
                        Hukukçu Fenerbahçeliler Derneği Tüzüğü
                      </h2>
                      <span className="text-sm text-gray-400 mt-2 block">Son Güncelleme: 01.01.2024</span>
                   </div>

                   {/* Maddeler */}
                   <div className="space-y-16">
                      {articles.map((item, index) => (
                        <motion.div 
                          key={item.id} 
                          id={item.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="scroll-mt-32" // Scroll payı
                        >
                           <h3 className={`${playfair.className} text-2xl text-fener-navy font-bold mb-4 flex items-center gap-3`}>
                              <span className="w-8 h-8 rounded-lg bg-fener-navy/5 text-fener-navy text-sm flex items-center justify-center font-sans font-bold">
                                {index + 1}
                              </span>
                              {item.title.split(":")[1] || item.title}
                           </h3>
                           <p className="leading-relaxed whitespace-pre-line text-justify">
                              {item.content}
                           </p>
                        </motion.div>
                      ))}
                   </div>

                   {/* Alt İmza Alanı */}
                   <div className="mt-20 pt-10 border-t border-gray-100 flex justify-end">
                      <div className="text-center">
                         <div className={`${playfair.className} text-xl text-fener-navy font-bold`}>HUFEDER</div>
                         <div className="text-xs text-gray-400 uppercase tracking-widest mt-1">Yönetim Kurulu</div>
                      </div>
                   </div>

                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
}