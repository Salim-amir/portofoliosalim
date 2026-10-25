import React, { useState } from 'react';
import { motion } from 'motion/react';
import { personalData } from '../data';
import { SectionHeader } from './SectionHeader';
import { Github, MapPin, Copy, Check, ArrowUpRight, MessageSquare } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalData.email);
    } catch {
      const textArea = document.createElement('textarea');
      textArea.value = personalData.email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="kontak" className="border-b border-[#8A8480]/20 bg-[#151515] text-[#F6F3EE] py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeader
          number="05 / HUBUNGI SAYA"
          title="KONTAK"
          subtitle="SALURAN KOMUNIKASI LANGSUNG"
          theme="dark"
        />

        {/* Big Editorial Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Direct Action & Email Copy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 border border-[#8A8480]/30 bg-[#1B1B1B] p-6 sm:p-8 lg:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="inline-block bg-[#242424] border border-[#8A8480]/30 px-3 py-1 text-xs font-mono font-bold uppercase tracking-wider text-[#E5482D] mb-6">
                Saluran Utama
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#F6F3EE] mb-4">
                Punya proyek atau ingin berkolaborasi? Hubungi saya.
              </h3>
              <p className="text-neutral-300 leading-relaxed mb-8">
                Saya selalu terbuka untuk mendiskusikan ide aplikasi baru, proyek pengembangan web, maupun peluang kerja sama teknis.
              </p>

              {/* Email Box with Copy Button */}
              <div className="border border-[#8A8480]/30 bg-[#151515] p-4 sm:p-5 mb-6">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8480] mb-1">
                  Alamat Email
                </span>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="font-mono text-base sm:text-lg font-bold text-[#F6F3EE] hover:text-[#E5482D] transition-colors break-all"
                  >
                    {personalData.email}
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-[#151515] bg-[#F6F3EE] hover:bg-[#E5482D] hover:text-[#F6F3EE] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shrink-0 focus-visible:outline-2 focus-visible:outline-[#E5482D]"
                    aria-label="Salin alamat email"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                        <span>Tersalin</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Salin Email</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#8A8480]/20 flex items-center justify-between text-xs font-mono text-[#8A8480]">
              <span>Waktu Respon: Cepat via WhatsApp/Email</span>
              <span>Zona Waktu: WIB (GMT+7)</span>
            </div>
          </motion.div>

          {/* Right Column: WhatsApp, GitHub, and Location Info */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* WhatsApp Card */}
            <motion.a
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#8A8480]/30 bg-[#1B1B1B] p-6 sm:p-7 hover:bg-[#222222] hover:border-[#E5482D]/50 transition-all duration-200 flex items-start justify-between group focus-visible:outline-2 focus-visible:outline-[#E5482D]"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8480] flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-[#E5482D]" aria-hidden="true" />
                  WhatsApp / Telepon
                </span>
                <p className="text-lg font-mono font-bold text-[#F6F3EE] group-hover:text-white transition-colors">
                  {personalData.phone}
                </p>
                <p className="text-xs text-[#8A8480]">
                  Kirim pesan langsung via WhatsApp
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#8A8480] group-hover:text-[#E5482D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 shrink-0" aria-hidden="true" />
            </motion.a>

            {/* GitHub Card */}
            <motion.a
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#8A8480]/30 bg-[#1B1B1B] p-6 sm:p-7 hover:bg-[#222222] hover:border-[#E5482D]/50 transition-all duration-200 flex items-start justify-between group focus-visible:outline-2 focus-visible:outline-[#E5482D]"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8480] flex items-center gap-1.5">
                  <Github className="w-3.5 h-3.5 text-[#E5482D]" aria-hidden="true" />
                  Profil GitHub
                </span>
                <p className="text-lg font-mono font-bold text-[#F6F3EE] group-hover:text-white transition-colors">
                  github.com/Salim-amir
                </p>
                <p className="text-xs text-[#8A8480]">
                  Lihat riwayat kode & repositori proyek
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#8A8480] group-hover:text-[#E5482D] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-200 shrink-0" aria-hidden="true" />
            </motion.a>

            {/* Location Card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.26 }}
              className="border border-[#8A8480]/30 bg-[#242424] p-6 sm:p-7 flex items-start justify-between"
            >
              <div className="space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#8A8480] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E5482D]" aria-hidden="true" />
                  Lokasi & Kesiapan
                </span>
                <p className="text-lg font-bold text-[#F6F3EE]">
                  {personalData.location}
                </p>
                <p className="text-xs text-neutral-400">
                  Tersedia untuk proyek onsite di Malang & remote
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
