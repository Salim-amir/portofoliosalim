import React from 'react';
import { motion } from 'motion/react';
import { skillsData } from '../data';
import { SectionHeader } from './SectionHeader';
import { Code2, Server, Wrench, Smartphone } from 'lucide-react';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Backend':
        return <Server className="w-4 h-4 text-[#E5482D]" aria-hidden="true" />;
      case 'Frontend':
        return <Code2 className="w-4 h-4 text-[#E5482D]" aria-hidden="true" />;
      case 'Mobile':
        return <Smartphone className="w-4 h-4 text-[#E5482D]" aria-hidden="true" />;
      case 'Tools':
        return <Wrench className="w-4 h-4 text-[#E5482D]" aria-hidden="true" />;
      default:
        return null;
    }
  };

  return (
    <section id="kemampuan" className="border-b border-[#151515]/20 bg-[#F6F3EE] py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader
          number="03 / KEAHLIAN TEKNIS"
          title="KEMAMPUAN"
          subtitle="DIKELOMPOKKAN MENURUT SPESIALISASI"
          theme="light"
        />

        {/* Grouped Clean Text Lists with Staggered Entrance and Hover Orange Underline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: groupIdx * 0.1,
              }}
              className="border-2 border-[#151515] bg-white p-6 sm:p-8 lg:p-10 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center justify-between border-b-2 border-[#151515] pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(group.category)}
                    <h3 className="text-base font-black uppercase tracking-wider text-[#151515]">
                      {group.category}
                    </h3>
                  </div>
                  <span className="text-xs font-mono font-bold text-[#8A8480]">
                    {group.items.length} ITEM
                  </span>
                </div>

                {/* Staggered Item List with Expanding Orange Underline on Hover */}
                <ul className="space-y-3.5 divide-y divide-[#151515]/10 font-mono">
                  {group.items.map((skill, index) => (
                    <motion.li
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: groupIdx * 0.1 + index * 0.08,
                      }}
                      className={`group/item relative flex items-center justify-between py-2 cursor-default ${
                        index > 0 ? 'pt-3' : ''
                      }`}
                    >
                      <span className="text-base font-bold text-[#151515] group-hover/item:text-[#E5482D] transition-colors">
                        {skill}
                      </span>
                      <span className="text-xs text-[#8A8480] group-hover/item:text-[#151515] transition-colors">
                        0{index + 1}
                      </span>

                      {/* Orange Underline expanding from left on hover */}
                      <span
                        className="absolute bottom-0 left-0 h-0.5 bg-[#E5482D] w-0 group-hover/item:w-full transition-all duration-300 origin-left"
                        aria-hidden="true"
                      />
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Minimal Base Note */}
              <div className="pt-6 mt-6 border-t border-[#151515]/10 text-[11px] font-mono text-[#8A8480] uppercase tracking-wider">
                Status: Dipelajari & Diterapkan di Proyek
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
