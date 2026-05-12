/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Briefcase, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code2, 
  Database, 
  Layout as LayoutIcon, 
  Server,
  ChevronRight,
  GraduationCap,
  Award,
  X
} from "lucide-react";
import { PORTFOLIO_DATA } from "./constants";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  return (
    <div className="min-h-screen selection:bg-brand-ink selection:text-brand-bg transition-colors duration-500">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-ink/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-serif text-xl font-bold tracking-tight">
            {PORTFOLIO_DATA.name} <span className="font-sans font-normal text-xs opacity-50 uppercase tracking-widest ml-2 hidden sm:inline">{PORTFOLIO_DATA.engName}</span>
          </div>
          <nav className="flex gap-8 text-xs font-medium uppercase tracking-widest opacity-60">
            <a href="#about" className="hover:opacity-100 transition-opacity">About</a>
            <a href="#skills" className="hover:opacity-100 transition-opacity">Skills</a>
            <a href="#experience" className="hover:opacity-100 transition-opacity">Experience</a>
            <a href="#contact" className="hover:opacity-100 transition-opacity underline underline-offset-4 font-bold">Contact</a>
          </nav>
        </div>
      </header>

      <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="inline-block px-3 py-1 border border-brand-ink/20 rounded-full text-[10px] uppercase tracking-[0.2em] mb-6">
                Available for new opportunities
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-[1.2] text-balance mb-8">
                {PORTFOLIO_DATA.headline[0]} <br />
                <span className="italic font-light">{PORTFOLIO_DATA.headline[1]}</span> <br />
                {PORTFOLIO_DATA.headline[2]}.
              </h1>
              <div className="flex gap-12 mt-12 border-t border-brand-ink/10 pt-12">
                <div>
                  <div className="text-4xl font-serif font-bold">7+</div>
                  <div className="text-[10px] uppercase tracking-wider opacity-50 mt-1">Year Experience</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold">10K+</div>
                  <div className="text-[10px] uppercase tracking-wider opacity-50 mt-1">Monthly Users</div>
                </div>
                <div>
                  <div className="text-4xl font-serif font-bold">95%</div>
                  <div className="text-[10px] uppercase tracking-wider opacity-50 mt-1">Push Success</div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square max-w-md mx-auto lg:ml-auto"
            >
              {/* Circular Portrait Frame - Using an abstract representation inspired by the image */}
              <div className="w-full h-full rounded-full border border-brand-ink/5 p-4 overflow-hidden bg-[#ECECE8]">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-neutral-200 to-neutral-300 relative overflow-hidden flex items-end justify-center">
                   {/* Placeholder avatar representing the user */}
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-40"></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent"></div>
                </div>
              </div>
              
              {/* Floating tech tags around circle */}
              <div className="absolute -top-4 -right-4 bg-white border border-brand-ink/10 p-4 rounded-xl shadow-sm rotate-12">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="absolute bottom-12 -left-8 bg-white border border-brand-ink/10 p-4 rounded-xl shadow-sm -rotate-12">
                <Database className="w-6 h-6" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Introduction */}
        <section id="about" className="mb-48">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-brand-ink/10 pt-16">
            <h2 className="text-xs uppercase tracking-[0.25em] font-bold opacity-40">Introduction</h2>
            <div className="space-y-8">
              {PORTFOLIO_DATA.introduction.map((text, i) => (
                <motion.p 
                  key={i}
                  {...fadeInUp}
                  className={`text-2xl md:text-4xl font-serif leading-[1.4] text-balance ${i === 0 ? 'italic font-light' : 'font-medium'}`}
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Grid */}
        <section id="skills" className="mb-48">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12 border-t border-brand-ink/10 pt-16">
            <h2 className="text-xs uppercase tracking-[0.25em] font-bold opacity-40">Skills & Expertise</h2>
            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 gap-x-12 gap-y-16"
            >
              <div>
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 pb-2 border-b border-brand-ink/5">
                  <Code2 className="w-4 h-4" /> Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.skills.languages.map(skill => (
                    <span key={skill} className="bg-brand-ink/5 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 pb-2 border-b border-brand-ink/5">
                  <Server className="w-4 h-4" /> Frameworks
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.skills.frameworks.map(skill => (
                    <span key={skill} className="bg-brand-ink/5 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 pb-2 border-b border-brand-ink/5">
                  <LayoutIcon className="w-4 h-4" /> Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.skills.frontend.map(skill => (
                    <span key={skill} className="bg-brand-ink/5 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-6 pb-2 border-b border-brand-ink/5">
                  <Database className="w-4 h-4" /> Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  {PORTFOLIO_DATA.skills.infrastructure.map(skill => (
                    <span key={skill} className="bg-brand-ink/5 px-4 py-2 rounded-full text-sm font-medium">{skill}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Experience Timeline */}
        <section id="experience" className="mb-48">
          <div className="border-t border-brand-ink/10 pt-16 mb-16 flex items-center justify-between">
            <h2 className="text-xs uppercase tracking-[0.25em] font-bold opacity-40">Work Experience</h2>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-brand-ink text-brand-bg px-4 py-2 rounded-full">
              <Briefcase className="w-4 h-4" /> Professional Journey
            </div>
          </div>
          
          {PORTFOLIO_DATA.work_experience.map((work, idx) => (
            <div key={idx} className="space-y-16">
              <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start mb-24">
                <div className="sticky top-24">
                  <div className="text-xs font-bold text-brand-ink/40 uppercase tracking-widest mb-2">{work.period}</div>
                  <h3 className="text-4xl font-serif font-bold mb-4">{work.company}</h3>
                  <div className="text-lg opacity-60 flex items-center gap-2">
                    {work.role} <span className="text-xs bg-brand-ink/5 px-2 py-0.5 rounded uppercase tracking-wider">{work.duration}</span>
                  </div>
                </div>
                
                <div className="space-y-24">
                  {work.projects.map((project, pIdx) => (
                    <motion.div 
                      key={pIdx}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: pIdx * 0.1 }}
                      className="group cursor-pointer"
                      onClick={() => setSelectedProject(project)}
                    >
                      <div className="flex items-baseline justify-between mb-6 pb-4 border-b border-brand-ink/5">
                        <div className="flex items-center gap-3">
                          <h4 className="text-2xl font-serif font-bold group-hover:translate-x-2 transition-transform duration-300">
                            {project.title}
                          </h4>
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-40 transition-opacity" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest opacity-40 italic">{project.period}</span>
                      </div>
                      <ul className="space-y-4">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex gap-4 items-start group/li">
                            <div className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-ink/20 group-hover/li:bg-brand-ink transition-colors" />
                            <p className="text-lg font-light leading-relaxed opacity-70 group-hover/li:opacity-100 transition-opacity">
                              {highlight}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* Education & Certs */}
        <section className="mb-48 grid md:grid-cols-2 gap-12">
          <div className="border-t border-brand-ink/10 pt-16">
            <h2 className="text-xs uppercase tracking-[0.25em] font-bold opacity-40 mb-12">Education</h2>
            {PORTFOLIO_DATA.education.map((edu, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-brand-ink/5 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold">{edu.institution}</h3>
                  <p className="text-lg opacity-60">{edu.degree}</p>
                  <p className="text-xs uppercase tracking-widest opacity-40 mt-1">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-brand-ink/10 pt-16">
            <h2 className="text-xs uppercase tracking-[0.25em] font-bold opacity-40 mb-12">Certifications</h2>
            {PORTFOLIO_DATA.certifications.map((cert, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-12 h-12 rounded-full bg-brand-ink/5 flex items-center justify-center shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold">{cert.title}</h3>
                  <p className="text-[10px] uppercase tracking-widest opacity-40 mt-1">Acquired {cert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Footer */}
        <section id="contact" className="border-t-[10px] border-brand-ink pt-24">
          <div className="grid md:grid-cols-2 gap-24 items-end">
            <div>
              <h2 className="text-7xl md:text-[10rem] font-serif font-bold leading-none -ml-2 mb-12">
                Let's <br />
                Work.
              </h2>
              <p className="text-xl md:text-2xl opacity-60 max-w-md font-light leading-relaxed">
                7년의 경험으로 검증된 기술력과 <br />
                사용자 중심의 철학을 더해 최상의 시스템을 제안합니다.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-40">Contact Information</p>
                <div className="space-y-6">
                  <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-full border border-brand-ink/10 flex items-center justify-center group-hover:bg-brand-ink group-hover:text-brand-bg transition-all duration-500">
                      <Mail className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-serif font-bold underline underline-offset-8 decoration-brand-ink/20 group-hover:decoration-brand-ink transition-all">
                      {PORTFOLIO_DATA.contact.email}
                    </span>
                  </a>
                  <div className="flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-full border border-brand-ink/10 flex items-center justify-center group-hover:bg-brand-ink group-hover:text-brand-bg transition-all duration-500">
                      <Phone className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-serif font-bold">
                      {PORTFOLIO_DATA.contact.phone}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="pt-12 border-t border-brand-ink/5 flex items-center justify-between opacity-40 text-[10px] uppercase tracking-widest font-bold">
                <div>© 2026 {PORTFOLIO_DATA.name}. All rights reserved.</div>
                <div className="flex items-center gap-4">
                  <span>Seoul, KR</span>
                  <div className="w-1 h-1 rounded-full bg-brand-ink" />
                  <span>KST {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-brand-ink/40 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-x-6 bottom-6 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:top-1/2 md:-translate-y-1/2 md:w-[960px] md:h-[620px] bg-brand-bg z-[70] rounded-[32px] shadow-2xl border border-black/5 overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Side: Image */}
              <div className="w-full md:w-[52%] h-48 md:h-full overflow-hidden shrink-0">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Right Side: Content */}
              <div className="flex-1 p-10 md:p-12 overflow-y-auto relative flex flex-col bg-white">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 text-black/80 hover:opacity-50 transition-opacity z-10"
                >
                  <X className="w-7 h-7" />
                </button>

                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#F0F7F4] text-[#4A7C66] rounded-md text-[10px] uppercase tracking-widest font-bold">
                    {selectedProject.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-sans font-bold mb-6 text-[#1A1A1A] tracking-tight">
                  {selectedProject.title}
                </h3>

                <div className="space-y-6 flex-grow">
                  <p className="text-[15px] font-normal leading-relaxed text-[#444] mb-6">
                    {selectedProject.details}
                  </p>

                  <div className="p-6 bg-neutral-50 border-l-[3px] border-[#DDD] rounded-r-xl italic">
                    <ul className="space-y-3">
                      {selectedProject.highlights.map((highlight: string, i: number) => (
                        <li key={i} className="text-[13px] leading-relaxed text-[#666]">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {selectedProject.tags?.map((s: string) => (
                      <span key={s} className="px-3 py-1.5 bg-[#F4F4F4] rounded-full text-[11px] font-medium text-[#888]">#{s}</span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6">
                  <div className="mb-6">
                    <p className="text-[10px] uppercase tracking-widest font-bold text-[#AAA] mb-1">Period</p>
                    <p className="text-sm font-medium text-[#444] tracking-tight">{selectedProject.period}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-full py-4 bg-[#050505] text-white rounded-full text-[13px] font-bold uppercase tracking-widest hover:bg-black/90 transition-all shadow-md"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Decorative vertical rail */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 hidden xl:block mix-blend-difference pointer-events-none">
        <div className="writing-mode-vertical-rl text-[10px] uppercase tracking-[0.5em] font-bold text-white opacity-20 transform rotate-180">
          SENIOR WEB DEVELOPER • JAVA SPRING EXPERT • SINCE 2018
        </div>
      </div>
    </div>
  );
}
