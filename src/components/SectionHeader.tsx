import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle: string;
  theme?: 'light' | 'dark' | 'gray';
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  number,
  title,
  subtitle,
  theme = 'light',
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span
              className="inline-block w-1.5 h-1.5 bg-[#E5482D]"
              aria-hidden="true"
            />
            <span
              className={`text-xs font-bold uppercase tracking-widest ${
                isDark ? 'text-[#8A8480]' : 'text-neutral-500'
              }`}
            >
              {number}
            </span>
          </div>
          <h2
            className={`text-3xl md:text-4xl font-black uppercase tracking-tight ${
              isDark ? 'text-[#F6F3EE]' : 'text-[#151515]'
            }`}
          >
            {title}
          </h2>
        </div>
        <p
          className={`text-xs font-semibold uppercase tracking-wider ${
            isDark ? 'text-[#8A8480]' : 'text-neutral-600'
          }`}
        >
          {subtitle}
        </p>
      </div>

      {/* Animated Hairline Rule: expands from 0% to 100% width upon entering viewport */}
      <motion.div
        className={`h-px w-full origin-left ${
          isDark ? 'bg-[#8A8480]/30' : 'bg-[#151515]/20'
        }`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      />
    </div>
  );
};
