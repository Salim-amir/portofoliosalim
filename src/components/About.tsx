import React from 'react';
import { motion } from 'motion/react';
import { personalData } from '../data';

export const About: React.FC = () => {
  const factList = [
    { label: 'Lokasi', value: personalData.location },
    { label: 'Pendidikan', value: 'D4 Sistem Informasi Bisnis · POLINEMA' },
    { label: 'Fokus', value: 'Pengembangan Web & Aplikasi' },
    { label: 'Stack Inti', value: 'Laravel, MySQL, React, Tailwind CSS' },
  ];

  return (
    <section id="tentang" className="border-b border-[#151515]/20 bg-[#E0DBDB] py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Animated Expanding Top Rule */}
        <motion.div
          className="h-px w-full bg-[#151515]/20 origin-left mb-12 sm:mb-16"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        />

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Column: Big Title "TENTANG" */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 bg-[#E5482D]" aria-hidden="true" />
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8A8480]">
                01 / PROFIL
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-[#151515] leading-none mb-4">
              TENTANG
            </h2>
            <p className="text-xs font-mono text-[#8A8480] uppercase tracking-wider">
              LATAR BELAKANG & SPESIALISASI
            </p>
          </div>

          {/* Right Column: Profile Paragraph & Fact List with Thin Dividers */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            {/* Primary Profile Paragraph */}
            <p className="text-lg sm:text-xl font-medium text-[#151515] leading-relaxed mb-8">
              {personalData.profile}
            </p>

            {/* Structured Facts with Thin Dividers */}
            <div className="border-t border-[#151515]/20 divide-y divide-[#151515]/15 font-mono text-xs">
              {factList.map((fact, idx) => (
                <div
                  key={idx}
                  className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-1"
                >
                  <span className="text-[#8A8480] uppercase font-bold tracking-wider">
                    {fact.label}
                  </span>
                  <span className="text-[#151515] font-bold text-sm sm:text-xs">
                    {fact.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
