import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F3EE] text-[#151515] font-sans antialiased">
      {/* Skip to Main Content for Accessibility */}
      <a
        href="#konten-utama"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#151515] focus:text-[#F6F3EE] focus:text-xs focus:font-bold focus:uppercase focus:ring-2 focus:ring-[#E5482D]"
      >
        Lewati ke Konten Utama
      </a>

      {/* Header & Sticky Navigation */}
      <Navbar />

      {/* Main Content Sections with Alternating Flat Color Blocks */}
      <main id="konten-utama" className="flex-1">
        {/* Section 1: Hero (Putih tulang) */}
        <Hero />

        {/* Section 2: Tentang (Abu hangat) */}
        <About />

        {/* Section 3: Proyek (Hitam tinta) */}
        <Projects />

        {/* Section 4: Kemampuan (Putih tulang) */}
        <Skills />

        {/* Section 5: Pendidikan (Abu hangat) */}
        <Education />

        {/* Section 6: Kontak (Hitam tinta) */}
        <Contact />
      </main>

      {/* Single-Line Footer */}
      <Footer />
    </div>
  );
}
