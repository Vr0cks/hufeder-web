import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Footer'ı çağırdık

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "HUFEDER - Hukukçu Fenerbahçeliler Derneği",
  description: "Adalete Fener Olacağız",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen bg-slate-100">
          {children}
        </main>
        <Footer /> {/* Ve en alta yapıştırdık */}
      </body>
    </html>
  );
}