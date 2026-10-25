import React from 'react';
import { personalData } from '../data';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-[#8A8480] border-t border-[#8A8480]/20">
      {/* Editorial Single Line Footer: Nama + Tahun Saja */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="text-[#F6F3EE] font-bold">
            © {currentYear} {personalData.name}
          </div>
          <div>
            MALANG, JAWA TIMUR
          </div>
        </div>
      </div>

      {/* Bottom Terracotta Accent Line */}
      <div className="h-1.5 w-full bg-[#E5482D]" aria-hidden="true" />
    </footer>
  );
};
