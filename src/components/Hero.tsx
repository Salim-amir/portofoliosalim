import React from 'react';
import { motion } from 'motion/react';
import { personalData } from '../data';
import { ArrowDown, FileText, User } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative bg-[#F6F3EE] flex flex-col justify-between min-h-[calc(100svh-4rem)] sm:min-h-[calc(100svh-5rem)] border-b border-[#151515]/15">
      {/* Main Hero Viewport Content */}
      <div className="max-w-[1400px] w-full mx-auto px-6 sm:px-8 lg:px-12 pt-8 sm:pt-12 lg:pt-16 pb-12 flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Mobile Foto Slot (Shown first on mobile, hidden on lg) */}
          <div className="lg:hidden w-full max-w-xs mx-auto mb-4">
            <div className="relative">
              {/* Offset warm gray block */}
              <div
                className="absolute inset-0 bg-[#E0DBDB] border border-[#151515] translate-x-3 translate-y-3"
                aria-hidden="true"
              />
              <div className="relative aspect-[4/5] bg-[#E0DBDB] border border-[#151515] overflow-hidden flex flex-col items-center justify-center p-4">
                {personalData.photoUrl ? (
                  <img
                    src={personalData.photoUrl}
                    alt={personalData.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center text-center p-4">
                    <User className="w-12 h-12 text-[#151515] mb-2" aria-hidden="true" />
                    <span className="text-[11px] font-mono uppercase text-[#8A8480]">
                      TODO: Ganti Foto Profil
                    </span>
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-[#151515] text-[#F6F3EE] text-[9px] font-mono uppercase tracking-widest px-2 py-0.5">
                  MALANG — 2026
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Left Column: Text (Cols 1–8) with high z-index to slightly overlay photo */}
          <div className="lg:col-span-8 z-10 flex flex-col">
            {/* Top Micro-Bar: Vertical Orange Bar + Role, and Location */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              className="flex items-center justify-between max-w-2xl mb-4 sm:mb-6 text-xs font-mono font-bold uppercase tracking-wider text-[#151515]"
            >
              <div className="flex items-center gap-2">
                <span className="w-1 h-3.5 bg-[#E5482D]" aria-hidden="true" />
                <span className="text-[#151515]">{personalData.role}</span>
              </div>
              <span className="text-[#8A8480]">{personalData.location}</span>
            </motion.div>

            {/* Giant Name "SALIM AMIR": Mask-reveal per baris, 120ms stagger */}
            <div className="space-y-0 select-none mb-6">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="font-black uppercase tracking-[-0.04em] text-[#151515] leading-[0.85]"
                  style={{ fontSize: 'clamp(4rem, 13vw, 12rem)' }}
                >
                  SALIM
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: '105%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: 0.22 }}
                  className="font-black uppercase tracking-[-0.04em] text-[#151515] leading-[0.85]"
                  style={{ fontSize: 'clamp(4rem, 13vw, 12rem)' }}
                >
                  AMIR
                </motion.h1>
              </div>
            </div>

            {/* Sub-role under name */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.34 }}
              className="text-base sm:text-lg font-bold tracking-wider uppercase text-[#151515] mb-4"
            >
              {personalData.subRole}
            </motion.div>

            {/* Short Hero sentence (max 48ch) */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.44 }}
              className="text-base sm:text-lg text-neutral-800 leading-relaxed max-w-[48ch] mb-5"
            >
              {personalData.headline}
            </motion.p>

            {/* Availability status with subtle pulsating orange dot */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.54 }}
              className="flex items-center gap-2 text-xs font-mono font-semibold text-[#151515] mb-8"
            >
              <span
                className="w-2 h-2 rounded-full bg-[#E5482D] inline-block animate-pulse"
                style={{ animationDuration: '2.4s' }}
                aria-hidden="true"
              />
              <span>{personalData.status}</span>
            </motion.div>

            {/* Action Buttons: Positioned directly beneath text with tight rhythm */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.64 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary button */}
              <a
                href="#proyek"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#F6F3EE] bg-[#151515] hover:bg-[#E5482D] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#E5482D]"
              >
                <span>Lihat Proyek</span>
                <ArrowDown className="w-4 h-4" aria-hidden="true" />
              </a>

              {/* Secondary button: Unduh CV (TODO: Letakkan file di public/cv.pdf) */}
              <a
                href={personalData.cvUrl}
                download="Salim_Amir_CV.pdf"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-[#151515] bg-transparent border border-[#151515] hover:bg-[#E5482D] hover:border-[#E5482D] hover:text-[#F6F3EE] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#E5482D]"
                title="Unduh CV Salim Amir (PDF)"
              >
                <FileText className="w-4 h-4" aria-hidden="true" />
                <span>Unduh CV</span>
              </a>
            </motion.div>
          </div>

          {/* Desktop Right Column: Photo Slot (Cols 9–12) */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="relative w-full max-w-md ml-auto">
              {/* Offset warm gray block sliding in 200ms after photo */}
              <motion.div
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x: 16, y: 16 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
                className="absolute inset-0 bg-[#E0DBDB] border border-[#151515]"
                aria-hidden="true"
              />

              {/* Photo Box with Bottom-Up Clip-Path Reveal */}
              <motion.div
                initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
                animate={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                className="relative aspect-[3/4] bg-[#E0DBDB] border border-[#151515] overflow-hidden flex flex-col items-center justify-center p-6 text-center"
              >
                {personalData.photoUrl ? (
                  <img
                    src={personalData.photoUrl}
                    alt={personalData.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center p-6 text-center">
                    <div className="w-20 h-20 border border-[#151515] bg-[#F6F3EE] flex items-center justify-center mb-4">
                      <User className="w-10 h-10 text-[#151515]" aria-hidden="true" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#151515] mb-1">
                      Slot Foto Profil
                    </p>
                    <p className="text-[11px] font-mono text-[#8A8480]">
                      TODO: photoUrl di src/data.ts
                    </p>
                    <p className="text-[10px] text-[#8A8480] uppercase tracking-widest pt-3 mt-3 border-t border-[#151515]/20">
                      Rasio 3:4 · Crop Tegas
                    </p>
                  </div>
                )}

                {/* Stamp label on photo corner */}
                <div className="absolute bottom-3 right-3 bg-[#151515] text-[#F6F3EE] text-[10px] font-mono uppercase tracking-widest px-2.5 py-1">
                  MALANG — 2026
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Info Strip at the base of Hero + Scroll Indicator */}
      <div className="border-t border-[#151515]/15 bg-[#F6F3EE]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* 3 Info Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-xs font-mono text-[#151515]">
              <div className="border-l-2 border-[#151515] pl-3">
                <span className="text-[#8A8480] block text-[10px] uppercase">Institusi</span>
                <span className="font-bold">KAMPUS: {personalData.infoStrip.campus}</span>
              </div>
              <div className="border-l-2 border-[#151515] pl-3">
                <span className="text-[#8A8480] block text-[10px] uppercase">Bidang</span>
                <span className="font-bold">FOKUS: {personalData.infoStrip.focus}</span>
              </div>
              <div className="border-l-2 border-[#151515] pl-3">
                <span className="text-[#8A8480] block text-[10px] uppercase">Keahlian</span>
                <span className="font-bold">STACK: {personalData.infoStrip.stack}</span>
              </div>
            </div>

            {/* Subtle Scroll Indicator at bottom right */}
            <div className="hidden md:flex items-center gap-2 text-[10px] font-mono font-bold tracking-widest text-[#8A8480] uppercase">
              <span>SCROLL</span>
              <div className="w-px h-6 bg-[#151515]/20 relative overflow-hidden">
                <motion.div
                  className="w-full h-2 bg-[#E5482D]"
                  animate={{ y: [0, 16, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
