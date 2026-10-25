import React, { useState, useEffect } from 'react';
import { personalData } from '../data';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Tentang', href: '#tentang', id: 'tentang' },
    { label: 'Proyek', href: '#proyek', id: 'proyek' },
    { label: 'Kemampuan', href: '#kemampuan', id: 'kemampuan' },
    { label: 'Pendidikan', href: '#pendidikan', id: 'pendidikan' },
    { label: 'Kontak', href: '#kontak', id: 'kontak' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      setIsScrolled(scrollPos > 80);

      const sectionElements = navLinks
        .map((link) => {
          const el = document.getElementById(link.id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id: link.id, top: rect.top, bottom: rect.bottom };
        })
        .filter(Boolean) as { id: string; top: number; bottom: number }[];

      const current = sectionElements.find(
        (sec) => sec.top <= 140 && sec.bottom >= 140
      );

      if (current) {
        setActiveSection(current.id);
      } else if (scrollPos < 200) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 border-b border-[#151515]/12 ${
        isScrolled
          ? 'bg-[#F6F3EE]/95 backdrop-blur-md shadow-xs'
          : 'bg-[#F6F3EE]'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-8">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-black tracking-tight text-[#151515] uppercase whitespace-nowrap shrink-0 hover:text-[#E5482D] transition-colors focus-visible:outline-2 focus-visible:outline-[#E5482D]"
          >
            {personalData.name}
          </a>

          {/* Zone 2: Navigation Links (Desktop) with Scroll-Spy & Orange Accent Underline */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-wider text-[#8A8480]"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative py-1 transition-colors whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#E5482D] ${
                    isActive ? 'text-[#151515]' : 'hover:text-[#151515]'
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#E5482D] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Menu Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#kontak"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F6F3EE] bg-[#151515] hover:bg-[#E5482D] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#E5482D]"
            >
              <span>Hubungi</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#151515] hover:bg-[#E0DBDB] transition-colors focus-visible:outline-2 focus-visible:outline-[#E5482D]"
              aria-label={mobileMenuOpen ? 'Tutup navigasi' : 'Buka navigasi'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#151515]/12 bg-[#F6F3EE] px-6 py-4 space-y-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-3 py-2 text-sm font-bold uppercase tracking-wider transition-colors ${
                  isActive
                    ? 'text-[#E5482D] bg-[#E0DBDB]/60 border-l-2 border-[#E5482D]'
                    : 'text-neutral-700 hover:text-[#151515] hover:bg-[#E0DBDB]/40'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <div className="pt-3 border-t border-[#151515]/12">
            <a
              href="#kontak"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-bold uppercase tracking-wider text-[#F6F3EE] bg-[#151515] hover:bg-[#E5482D] transition-colors"
            >
              <span>Hubungi Sekarang</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
