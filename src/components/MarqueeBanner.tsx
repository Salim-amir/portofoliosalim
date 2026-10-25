import React from 'react';

const marqueeItems = [
  'PHP',
  'Laravel',
  'MySQL',
  'Git',
  'GitHub',
  'HTML',
  'Tailwind CSS',
  'React',
  'Web Developer',
  'Politeknik Negeri Malang',
  'D4 Sistem Informasi Bisnis',
  'Malang, Jawa Timur',
];

export const MarqueeBanner: React.FC = () => {
  // Duplicate array to ensure seamless infinite loop
  const displayItems = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div
      className="border-y border-[#151515] bg-[#151515] text-[#F6F3EE] py-2.5 overflow-hidden select-none"
      role="region"
      aria-label="Sorotan Keahlian dan Peran"
    >
      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap text-xs font-mono font-bold uppercase tracking-widest">
        {displayItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="hover:text-[#E5482D] transition-colors">{item}</span>
            <span className="text-[#E5482D] select-none" aria-hidden="true">
              ◆
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
