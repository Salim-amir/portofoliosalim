import React from 'react';
import { motion } from 'motion/react';
import { educationData } from '../data';
import { SectionHeader } from './SectionHeader';

export const Education: React.FC = () => {
  return (
    <section id="pendidikan" className="border-b border-[#151515]/20 bg-[#E0DBDB] py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader
          number="04 / RIWAYAT AKADEMIK"
          title="PENDIDIKAN"
          subtitle="JALUR PENDIDIKAN FORMAL"
          theme="gray"
        />

        {/* Structured Editorial Timeline Grid with 80ms Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: index * 0.08,
              }}
              className="border-2 border-[#151515] bg-[#F6F3EE] p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 border-b border-[#151515]/15 pb-4 mb-5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#151515] bg-[#D6D0D0] px-2.5 py-1 border border-[#151515]/20">
                    {item.period}
                  </span>
                  <span className="text-xs font-mono text-[#8A8480]">
                    Jenjang {index === 0 ? 'Pendidikan Tinggi' : 'Menengah Atas'}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-[#151515] mb-2">
                  {item.institution}
                </h3>
                <p className="text-sm font-semibold text-neutral-700">
                  {item.program}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#151515]/10 flex items-center justify-between text-xs text-[#8A8480] font-mono">
                <span>Status: {index === 0 ? 'Aktif' : 'Lulus'}</span>
                <span>Malang, Jawa Timur</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
