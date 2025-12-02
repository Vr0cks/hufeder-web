import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Twitter, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fener-navy text-white pt-20 pb-10 border-t-4 border-fener-yellow">
      <div className="container mx-auto px-6">
        
        {/* Üst Kısım: 4 Sütunlu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* 1. Sütun: Logo ve Özet */}
          <div className="space-y-6">
            <Link href="/" className="inline-block relative w-48 h-16">
               <Image 
                src="/logo-footer.png" 
                alt="HUFEDER" 
                fill 
                className="object-contain object-left" 
               />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Hukukun üstünlüğü ve Fenerbahçe sevgisiyle, adaletin tecellisi için çalışıyoruz. Resmî ve akredite bir sivil toplum kuruluşuyuz.
            </p>
            {/* Sosyal Medya İkonları - GÜNCELLENDİ */}
            <div className="flex gap-4 pt-2">
              <SocialIcon 
                icon={<Twitter size={20} />} 
                href="https://x.com/HUFEDER1907" // X Linki Eklendi
              />
              <SocialIcon 
                icon={<Instagram size={20} />} 
                href="https://www.instagram.com/hukukcufenerbahcelilerdernegi/" // Insta Linki Eklendi
              />
              <SocialIcon icon={<Linkedin size={20} />} href="#" /> {/* Varsa eklersin */}
              <SocialIcon icon={<Facebook size={20} />} href="#" /> {/* Varsa eklersin */}
            </div>
          </div>

          {/* 2. Sütun: Hızlı Menü */}
          <div>
            <h3 className="text-fener-yellow font-bold text-lg mb-6 tracking-wide">KURUMSAL</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <FooterLink href="/hakkimizda" text="Hakkımızda" />
              <FooterLink href="/yonetim" text="Yönetim Kurulu" />
              <FooterLink href="/tuzuk" text="Dernek Tüzüğü" />
              <FooterLink href="/uyelik" text="Üyelik Başvurusu" />
            </ul>
          </div>

          {/* 3. Sütun: Bağlantılar */}
          <div>
            <h3 className="text-fener-yellow font-bold text-lg mb-6 tracking-wide">ETKİNLİKLER</h3>
            <ul className="space-y-4 text-sm text-gray-300">
              <FooterLink href="/haberler" text="Haberler & Duyurular" />
              <FooterLink href="/galeri" text="Fotoğraf Galerisi" />
              <FooterLink href="/projeler" text="Sosyal Sorumluluk" />
              <FooterLink href="/iletisim" text="Bize Ulaşın" />
            </ul>
          </div>

          {/* 4. Sütun: İletişim Bilgileri */}
          <div>
            <h3 className="text-fener-yellow font-bold text-lg mb-6 tracking-wide">İLETİŞİM</h3>
            <ul className="space-y-5 text-sm text-gray-300">
              <li className="flex items-start gap-3">
                <MapPin className="text-fener-yellow shrink-0 mt-1" size={18} />
                <span>İLKADIM MAH.YEŞİLVADİ CAD. NO:73 DİKMEN VADİSİ, 06450 Çankaya/Ankara</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-fener-yellow shrink-0" size={18} />
                <a href="tel:05522421907" className="hover:text-white transition-colors">0552 242 1907</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-fener-yellow shrink-0" size={18} />
                <a href="mailto:info@hufeder.org" className="hover:text-white transition-colors">info@hufeder.org</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Alt Çizgi */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} HUFEDER. Tüm hakları saklıdır.
          </p>
          
          {/* İMZA KISMI */}
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <span>Developed by</span>
            <a 
              href="https://vrocks-agency.vercel.app" 
              target="_blank" 
              className="text-fener-yellow hover:text-white font-bold transition-colors flex items-center gap-1"
            >
              vr0cks 
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Yardımcı Küçük Bileşenler
const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <li>
    <Link href={href} className="hover:text-fener-yellow hover:translate-x-1 transition-all inline-block">
      {text}
    </Link>
  </li>
);

// Social Icon bileşenini güncelledim: target="_blank" ekledim ki sayfa kapanmasın, yeni sekmede açılsın.
const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href} 
    target="_blank" // Yeni sekmede aç
    rel="noopener noreferrer" // Güvenlik için
    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-fener-yellow hover:text-fener-navy transition-all duration-300"
  >
    {icon}
  </a>
);

export default Footer;