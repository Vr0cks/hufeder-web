import Hero from "../components/Hero";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";
import { Reveal } from "../components/Reveal"; // Yeni sihirli kutumuz

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-slate-50">
      
      {/* Hero zaten kendi animasyonuna sahip, sarmalamıyoruz */}
      <Hero />
      
      {/* Features zaten kendi animasyonuna sahip, sarmalamıyoruz */}
      <Features />
      
      {/* AboutSection'ı sarmalıyoruz ki aşağı kayınca "Fade In" olsun */}
      <Reveal>
        <AboutSection />
      </Reveal>
      
      {/* Eğer başka section eklersen yine Reveal içine al:
          <Reveal delay={0.2}>
             <DigerBilesen />
          </Reveal>
      */}

    </main>
  );
}