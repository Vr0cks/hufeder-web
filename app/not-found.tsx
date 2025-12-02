import Link from "next/link";
import { Construction } from "lucide-react"; // İnşaat ikonu

export default function NotFound() {
  return (
    <div className="min-h-screen bg-fener-navy flex flex-col items-center justify-center text-center px-6">
      
      {/* Arka Plan Deseni */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <div className="relative z-10 max-w-2xl">
        <div className="mb-8 inline-flex p-6 bg-white/5 rounded-full border border-white/10 animate-pulse">
           <Construction className="w-16 h-16 text-fener-yellow" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          Hazırlanıyoruz...
        </h1>
        
        <p className="text-xl text-gray-300 mb-10 leading-relaxed">
          Aradığınız sayfa şu an yapım aşamasında veya taşınmış olabilir. <br/>
          Hukuk komisyonumuz bu konuyu inceliyor. :)
        </p>

        <Link 
          href="/" 
          className="inline-block px-10 py-4 bg-fener-yellow text-fener-navy font-bold rounded-lg hover:bg-white transition-all shadow-[0_0_20px_rgba(255,237,0,0.3)]"
        >
          Ana Sayfaya Dön
        </Link>
      </div>
      
      <div className="absolute bottom-10 text-white/20 text-sm">
        HUFEDER &copy; 2025
      </div>
    </div>
  );
}