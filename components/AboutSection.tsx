import Link from "next/link";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* SOL TARA: Güncel Etkinlik Görseli */}
          <div className="w-full lg:w-1/2 relative">
            {/* Dekoratif Arka Plan Karesi (Sarı) */}
            <div className="absolute -top-4 -left-4 w-2/3 h-2/3 bg-fener-yellow/20 rounded-3xl -z-10"></div>
            {/* Dekoratif Arka Plan Karesi (Lacivert) */}
            <div className="absolute -bottom-4 -right-4 w-2/3 h-2/3 bg-fener-navy/10 rounded-3xl -z-10"></div>
            
            {/* Ana Resim Çerçevesi */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 aspect-video">
               {/* VİDEODAN ALINAN GÖRSEL BURAYA GELİYOR */}
               <Image 
                 src="/about-video.jpeg" // Public klasöründeki dosya adı
                 alt="HUFEDER Başkanı ve Etkinlik Sahnesi" 
                 fill 
                 className="object-cover hover:scale-105 transition-transform duration-700" // Hafif bir zoom efekti ekledik
               />
               {/* Resmin üzerine hafif lacivert bir filtre atalım ki sağdaki yazılarla bütünleşsin */}
               <div className="absolute inset-0 bg-fener-navy/20 mix-blend-multiply"></div>
            </div>
            
            {/* Yüzen İstatistik Kutusu */}
            <div className="absolute -bottom-8 -left-8 md:bottom-10 md:-left-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100 max-w-xs hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-4xl font-bold text-fener-navy">1907+</div>
                <div className="text-sm text-gray-600 font-medium leading-tight">
                  Gönüllü Hukukçu<br/>ile Büyük Bir Aileyiz
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ TARAF: Metin İçeriği (Aynı kalıyor) */}
          <div className="w-full lg:w-1/2">
            <h4 className="text-fener-yellow font-bold tracking-widest uppercase mb-2">
              HAKKIMIZDA
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-fener-navy mb-6 leading-tight">
              Fenerbahçe Sevgisiyle <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-fener-navy to-blue-600">
                Hukukun Gücünü
              </span> Birleştiriyoruz
            </h2>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Hukukçu Fenerbahçeliler Derneği (HUFEDER), adaletin tesisi ve hukukun üstünlüğü ilkesi ışığında, sarı lacivert renklere gönül vermiş hukukçuları bir çatı altında toplamak amacıyla kurulmuştur.
            </p>

            {/* Maddeler */}
            <div className="space-y-4 mb-10">
              {[
                "Mesleki dayanışmayı güçlendirmek",
                "Kulübümüzün haklarını hukuki zeminde savunmak",
                "Toplumsal adalet bilincine katkı sağlamak"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-fener-yellow flex-shrink-0" />
                  <span className="text-fener-navy font-medium">{item}</span>
                </div>
              ))}
            </div>

            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 px-8 py-4 bg-fener-navy text-white font-semibold rounded-lg hover:bg-fener-blue transition-all group shadow-lg shadow-fener-navy/20"
            >
              Devamını Oku
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;