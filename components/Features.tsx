"use client";

import { useState } from "react";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";
import { ArrowRight, X, Scale, ShieldCheck, HeartHandshake } from "lucide-react"; // X ikonu eklendi
import { motion, AnimatePresence } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin"] });

// DETAYLI İÇERİK VERİLERİ
const features = [
  {
    id: "01",
    title: "Hukukun Üstünlüğü",
    shortDesc: "Adaletin tecellisi ve evrensel hukuk normları ışığında, mesleki dayanışmayı esas alarak hak mücadelesi veriyoruz.",
    fullDesc: `HUFEDER olarak pusulamız her zaman hukukun evrensel ilkeleridir. Sadece bir spor kulübü taraftarı olmanın ötesinde, hukukun üstünlüğüne inanan hukukçular olarak; adil yargılanma hakkı, spor hukukunun gelişimi ve camiamızın maruz kaldığı haksızlıkların giderilmesi için akademik ve pratik çalışmalar yürütüyoruz.

    Amacımız, sadece "kazanmak" değil, "haklı olanın hakkını teslim etmek"tir. Türk yargı sistemine olan güvenimizle, Fenerbahçe'mize karşı yapılan her türlü hukuk dışı saldırının karşısında, kanunlardan aldığımız güçle bir set gibi duruyoruz.`,
    image: "/feature-law.jpg",
    icon: <Scale className="w-16 h-16 text-fener-yellow" />,
  },
  {
    id: "02",
    title: "Fenerbahçe Savunması",
    shortDesc: "Kulübümüzün hak ve menfaatlerini her platformda, hukuk çerçevesinde tavizsiz bir şekilde koruyoruz.",
    fullDesc: `Fenerbahçe, tarihi boyunca pek çok zorlukla karşılaşmış ancak "Yıkılmayan Kale" unvanını her zaman korumuştur. Biz hukukçular, bu kalenin en önemli savunma hattıyız.

    Gerek 3 Temmuz sürecinde gösterilen destansı direnişin hukuki mirasını korumak, gerekse günümüzde kulübümüze, sporcularımıza ve yöneticilerimize yönelik asılsız ithamlar, iftiralar ve marka değerini zedeleyici saldırılara karşı anında ve etkili hukuki refleksler geliştirmek öncelikli görevimizdir.`,
    image: "/feature-stadium.jpg",
    icon: <ShieldCheck className="w-16 h-16 text-fener-yellow" />,
  },
  {
    id: "03",
    title: "Sosyal Dayanışma",
    shortDesc: "Sadece mahkeme salonlarında değil, hayatın içindeyiz. Sosyal projelerle topluma değer katmayı görev biliyoruz.",
    fullDesc: `HUFEDER, sadece bir meslek örgütü değil, aynı zamanda bir sivil toplum hareketidir. Atatürk'ün "Ben sporcunun zeki, çevik ve aynı zamanda ahlaklısını severim" sözünü şiar edinerek; geleceğin hukukçularına burs imkanları sağlamak, ihtiyaç sahibi okullara kütüphaneler kurmak ve toplumsal cinsiyet eşitliği, çocuk hakları, çevre bilinci gibi konularda farkındalık projeleri yürütmek asli sorumluluklarımızdandır.

    Sarı lacivert sevdamızı, toplumsal faydaya dönüştürmek için var gücümüzle çalışıyoruz.`,
    image: "/feature-social.jpg",
    icon: <HeartHandshake className="w-16 h-16 text-fener-yellow" />,
  },
];

const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false); // Modal açık mı kapalı mı?

  // Modalı açan fonksiyon
  const openModal = () => setModalOpen(true);
  // Modalı kapatan fonksiyon
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Arka Plan Dokusu */}
        <div className="absolute inset-0 z-0 opacity-[0.4]" style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Başlık */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
             <span className="text-fener-yellow font-bold tracking-widest uppercase text-xs mb-3 block">İLKELERİMİZ</span>
             <h2 className={`${playfair.className} text-4xl md:text-5xl text-fener-navy leading-tight`}>Manifestomuz</h2>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 lg:h-[550px]">
            
            {/* SOL MENÜ */}
            <div className="lg:w-1/3 flex flex-col justify-center space-y-2 lg:border-l border-gray-200 lg:pl-6">
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => setActiveIndex(index)} 
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer py-6 pr-6 transition-all duration-300 group relative select-none ${
                    activeIndex === index ? "lg:pl-6" : "lg:hover:pl-2"
                  }`}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-fener-yellow rounded-r-md transition-all duration-300 ${activeIndex === index ? "h-full opacity-100" : "h-0 opacity-0"}`}></div>
                  <div className="flex items-center justify-between">
                    <h3 className={`${playfair.className} text-2xl md:text-3xl transition-colors duration-300 ${
                      activeIndex === index ? "text-fener-navy scale-105 origin-left" : "text-gray-400 group-hover:text-gray-600"
                    }`}>
                      {item.title}
                    </h3>
                    <ArrowRight className={`text-fener-navy w-6 h-6 transition-all duration-300 ${activeIndex === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* SAĞ PANEL */}
            <div className="lg:w-2/3 rounded-3xl relative overflow-hidden flex flex-col justify-end p-8 md:p-16 shadow-2xl group min-h-[400px] border border-white/20">
               <AnimatePresence mode="wait">
                 <motion.div 
                   key={activeIndex} 
                   initial={{ opacity: 0, scale: 1.1 }}
                   animate={{ opacity: 1, scale: 1 }}
                   exit={{ opacity: 0 }}
                   transition={{ duration: 0.7 }}
                   className="absolute inset-0 z-0"
                 >
                    <div className="absolute inset-0 bg-fener-navy"></div>
                    <Image src={features[activeIndex].image} alt={features[activeIndex].title} fill className="object-cover" priority />
                    <div className="absolute inset-0 bg-fener-navy/90 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
                 </motion.div>
               </AnimatePresence>

               <div className="relative z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`content-${activeIndex}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                    >
                      <div className="absolute -top-32 -right-10 md:static md:mb-4">
                         <span className={`${playfair.className} text-[10rem] md:text-9xl text-white/5 font-bold leading-none select-none`}>
                            {features[activeIndex].id}
                         </span>
                      </div>
                      
                      <h3 className={`${playfair.className} text-3xl md:text-5xl text-white mb-6 drop-shadow-lg`}>
                         {features[activeIndex].title}
                      </h3>
                      
                      <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl font-light drop-shadow-md">
                         {features[activeIndex].shortDesc}
                      </p>

                      {/* MODAL AÇAN BUTON */}
                      <motion.button 
                        whileHover={{ x: 10 }}
                        onClick={openModal} // Tıklayınca modal açılır
                        className="mt-8 inline-flex items-center gap-2 text-fener-yellow font-bold text-sm tracking-widest uppercase cursor-pointer hover:text-white transition-colors"
                      >
                        Detaylı Bilgi <ArrowRight size={16} />
                      </motion.button>
                    </motion.div>
                  </AnimatePresence>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODAL (POPUP) KISMI --- */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Arka Plan Karartması */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] cursor-pointer"
            />
            
            {/* Modal Penceresi */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none"
            >
              <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl pointer-events-auto relative flex flex-col md:flex-row">
                
                {/* Kapat Butonu */}
                <button 
                  onClick={closeModal}
                  className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors z-20"
                >
                  <X className="text-fener-navy" />
                </button>

                {/* Sol Taraf: Resim (Mobil için gizli veya küçük olabilir) */}
                <div className="hidden md:block w-2/5 relative min-h-[400px]">
                   <Image 
                     src={features[activeIndex].image} 
                     alt={features[activeIndex].title} 
                     fill 
                     className="object-cover" 
                   />
                   <div className="absolute inset-0 bg-fener-navy/40 mix-blend-multiply"></div>
                </div>

                {/* Sağ Taraf: İçerik */}
                <div className="w-full md:w-3/5 p-8 md:p-12 bg-white">
                   <div className="mb-6 p-4 bg-fener-navy/5 rounded-2xl w-fit">
                      {/* İkonu dinamik çekmek zor olduğu için şimdilik manuel icon render yerine state'den iconu da çekebiliriz ama basit tutalım */}
                      <span className={`${playfair.className} text-4xl text-fener-navy font-bold`}>{features[activeIndex].id}</span>
                   </div>
                   
                   <h3 className={`${playfair.className} text-3xl md:text-4xl text-fener-navy mb-6`}>
                      {features[activeIndex].title}
                   </h3>
                   
                   <div className="prose prose-lg text-gray-600 leading-relaxed whitespace-pre-line">
                      {features[activeIndex].fullDesc}
                   </div>

                   <button 
                     onClick={closeModal}
                     className="mt-8 px-8 py-3 bg-fener-navy text-white font-bold rounded-lg hover:bg-fener-yellow hover:text-fener-navy transition-colors w-full md:w-auto"
                   >
                     Kapat
                   </button>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Features;