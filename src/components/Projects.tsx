import React from 'react';
import { motion } from 'motion/react';
import { projectsData } from '../data';
import { SectionHeader } from './SectionHeader';
import { Github, ExternalLink, Image as ImageIcon } from 'lucide-react';

export const Projects: React.FC = () => {
  return (
    <section id="proyek" className="border-b border-[#8A8480]/20 bg-[#151515] text-[#F6F3EE] py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Dark Theme & Growing Hairline */}
        <SectionHeader
          number="02 / PORTOFOLIO KARYA"
          title="PROYEK"
          subtitle="APLIKASI WEB & MOBILE TERPILIH"
          theme="dark"
        />

        {/* Large Numbered Editorial Rows (01, 02) */}
        <div className="space-y-12 sm:space-y-16">
          {projectsData.map((project, idx) => (
            <motion.article
              key={project.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
                delay: idx * 0.1,
              }}
              className="group border border-[#8A8480]/30 bg-[#1B1B1B] hover:bg-[#222222] transition-colors duration-300 overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                {/* Left/Main Column: Project Details */}
                <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#8A8480]/30">
                  <div>
                    {/* Top Meta Line: Number and Type */}
                    <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#8A8480]/20">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl sm:text-5xl font-black font-mono tracking-tighter text-[#E5482D]">
                          {project.number}
                        </span>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#8A8480]">
                          / PROYEK
                        </span>
                      </div>
                      <span className="text-xs font-mono text-[#8A8480] uppercase tracking-wider">
                        {project.subtitle}
                      </span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight text-[#F6F3EE] mb-2 group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm font-semibold uppercase tracking-wider text-[#8A8480] mb-4">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-base text-neutral-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack: Clean Unboxed Text with Separators */}
                    <div className="mb-8 pt-4 border-t border-[#8A8480]/20">
                      <span className="block text-[11px] font-bold uppercase tracking-wider text-[#8A8480] mb-2">
                        Teknologi & Stack:
                      </span>
                      <div className="flex flex-wrap items-center gap-y-1 gap-x-2.5 text-xs font-mono font-bold text-[#F6F3EE]">
                        {project.stack.map((tech, i) => (
                          <React.Fragment key={i}>
                            <span>{tech}</span>
                            {i < project.stack.length - 1 && (
                              <span className="text-[#8A8480] select-none" aria-hidden="true">
                                ·
                              </span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons: Repo & Demo (TODO: Nonaktif & tampil abu bila link belum ada) */}
                  <div className="pt-4 border-t border-[#8A8480]/20 flex flex-wrap items-center gap-3">
                    {/* Repo Button */}
                    {project.githubRepo ? (
                      <a
                        href={project.githubRepo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#151515] bg-[#F6F3EE] hover:bg-[#E5482D] hover:text-[#F6F3EE] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#E5482D]"
                      >
                        <Github className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Repo</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#8A8480] bg-[#181818] border border-[#8A8480]/30 cursor-not-allowed opacity-60"
                        title="TODO: Masukkan link githubRepo di src/data.ts"
                      >
                        <Github className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Repo (TODO)</span>
                      </button>
                    )}

                    {/* Demo Button */}
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-[#F6F3EE] border border-[#F6F3EE] hover:bg-[#E5482D] hover:border-[#E5482D] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#E5482D]"
                      >
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Demo</span>
                      </a>
                    ) : (
                      <button
                        type="button"
                        disabled
                        className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-mono font-bold uppercase tracking-wider text-[#8A8480] bg-[#181818] border border-[#8A8480]/30 cursor-not-allowed opacity-60"
                        title="TODO: Masukkan link demoUrl di src/data.ts"
                      >
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Demo (TODO)</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Right Column: Screenshot Placeholder (Aspect ~16:10, Scales 1.03 on hover inside overflow-hidden) */}
                <div className="lg:col-span-5 bg-[#0D0D0D] p-6 sm:p-8 lg:p-10 flex flex-col justify-center items-center overflow-hidden">
                  <div className="w-full aspect-[16/10] border border-dashed border-[#8A8480]/40 bg-[#151515] overflow-hidden flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-full h-full flex flex-col items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.03]">
                      {project.screenshotUrl ? (
                        <img
                          src={project.screenshotUrl}
                          alt={`Screenshot ${project.title}`}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        <div className="space-y-2">
                          <div className="w-12 h-12 mx-auto border border-[#8A8480]/40 bg-[#1E1E1E] flex items-center justify-center">
                            <ImageIcon className="w-6 h-6 text-[#E5482D]" aria-hidden="true" />
                          </div>
                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#F6F3EE]">
                              Slot Screenshot {project.title}
                            </p>
                            <p className="text-[11px] font-mono text-[#8A8480] mt-0.5">
                              TODO: screenshotUrl di src/data.ts
                            </p>
                          </div>
                          <p className="text-[10px] text-[#8A8480] uppercase tracking-widest pt-1">
                            Rasio 16:10 · Mockup / UI
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
