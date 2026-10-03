import React from 'react';
import { Cpu, Compass, Shield, Terminal, Binary, Microscope, Globe, Users, Award, ExternalLink, Sparkles, Building } from 'lucide-react';
import { SectionHeader } from '../components/SectionHeader';
import { SITE_CONFIG } from '../data/site';

export const AboutUsPage: React.FC = () => {
  return (
    <div className="page-shell space-y-12 sm:space-y-16">
      
      {/* Page Header */}
      <SectionHeader
        level="h1"
        badge="ABOUT OUR CHAPTER"
        title="About Us"
        subtitle="Exploring the mission, global technical scope, and institutional research ecosystem of IEEE CASS SBC IIT Jammu."
      />

      {/* SECTION 1: ABOUT IEEE CIRCUITS AND SYSTEMS SOCIETY */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-sky-200 pb-3">
          <Cpu className="w-5 h-5 text-sky-600" />
          <h2 className="subsection-heading">
            1. About IEEE Circuits and Systems Society (IEEE CASS)
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 max-w-prose space-y-5 text-slate-600 leading-7 text-base">
            <p>
              The <strong className="text-[#003366] font-bold">IEEE Circuits and Systems Society (CASS)</strong> is the foremost international organization dedicated to the theory, analysis, design, and practical implementation of circuits, integrated systems, and algorithms.
            </p>
            <p>
              Bridging foundational physical device physics with modern computer architectures, IEEE CASS drives global progress across critical semiconductor paradigms:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="p-4 surface-card space-y-1">
                <span className="font-bold text-xs text-[#003366] block flex items-center gap-1.5">
                  <Binary className="w-3.5 h-3.5 text-sky-600" />
                  VLSI &amp; Digital/Analog ICs
                </span>
                <p className="text-xs text-slate-600">
                  Transistor-level design, standard cells, full-custom layout, low-power analog mixed-signal processing.
                </p>
              </div>

              <div className="p-4 surface-card space-y-1">
                <span className="font-bold text-xs text-[#003366] block flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                  AI Hardware &amp; Accelerators
                </span>
                <p className="text-xs text-slate-600">
                  Energy-efficient tensor architectures, in-memory computing, and neural processing units.
                </p>
              </div>

              <div className="p-4 surface-card space-y-1">
                <span className="font-bold text-xs text-[#003366] block flex items-center gap-1.5">
                  <Microscope className="w-3.5 h-3.5 text-sky-600" />
                  Bioelectronics &amp; Healthcare
                </span>
                <p className="text-xs text-slate-600">
                  Ingestible electronic pills, microfluidics, biosensors, and secure biological telemetry platforms.
                </p>
              </div>

              <div className="p-4 surface-card space-y-1">
                <span className="font-bold text-xs text-[#003366] block flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-sky-600" />
                  Signal Processing &amp; Systems
                </span>
                <p className="text-xs text-slate-600">
                  Adaptive filtering, communication hardware, cryptography, and real-time DSP implementations.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-sky-800">
              GLOBAL FOOTPRINT
            </h4>
            <div className="space-y-3 text-xs text-slate-700">
              <div className="info-row border-b border-sky-200/60 pb-2">
                <span>Parent Organization:</span>
                <strong className="text-[#003366]">IEEE</strong>
              </div>
              <div className="info-row border-b border-sky-200/60 pb-2">
                <span>Technical Society:</span>
                <strong className="text-[#003366]">IEEE CASS</strong>
              </div>
              <div className="info-row border-b border-sky-200/60 pb-2">
                <span>Focus:</span>
                <strong className="text-slate-800">Theory, Design &amp; Silicon</strong>
              </div>
            </div>
            <a
              href={SITE_CONFIG.officialLinks.cass}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-800 pt-2"
            >
              <span>Visit IEEE CASS Global</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: ABOUT IEEE STUDENT BRANCH CHAPTER AT IIT JAMMU */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-sky-200 pb-3">
          <Compass className="w-5 h-5 text-sky-600" />
          <h2 className="subsection-heading">
            2. About IEEE Student Branch Chapter at IIT Jammu
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="p-6 surface-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
              <Terminal className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#003366]">Technical Learning &amp; Workshops</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Conducting hands-on workshops on open-source EDA tools, RISC-V physical design, SKY130nm PDKs, and STM32 embedded Edge AI systems with industry leaders.
            </p>
          </div>

          <div className="p-6 surface-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
              <Globe className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#003366]">Distinguished Lectures &amp; Talks</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Hosting renowned international faculty and scientists from Boston University, Ruhr University Bochum, UVA, and IISc Bangalore on emerging hardware frontiers.
            </p>
          </div>

          <div className="p-6 surface-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-[#003366]">Student Engagement &amp; Ventures</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Empowering students to translate research into ventures, connecting academic lab projects with startup incubators like AIC IIT Delhi and STMicroelectronics.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CHAPTER INFORMATION */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-sky-200 pb-3">
          <Shield className="w-5 h-5 text-sky-600" />
          <h2 className="subsection-heading">
            3. Chapter Information
          </h2>
        </div>

        <div className="surface-card p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="space-y-1">
            <span className="text-xs font-sans text-slate-400 font-bold uppercase">OFFICIAL ENTITY</span>
            <h4 className="text-base font-bold text-[#003366]">{SITE_CONFIG.shortName}</h4>
            <p className="text-xs text-slate-600">{SITE_CONFIG.chapterName}</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-sans text-slate-400 font-bold uppercase">INSTITUTION</span>
            <h4 className="text-base font-bold text-slate-800">{SITE_CONFIG.institutionShort}</h4>
            <p className="text-xs text-slate-600">{SITE_CONFIG.institution}</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-sans text-slate-400 font-bold uppercase">GEOGRAPHIC REGION</span>
            <h4 className="text-base font-bold text-sky-700">{SITE_CONFIG.region}</h4>
            <p className="text-xs text-slate-600">{SITE_CONFIG.section}</p>
          </div>

          <div className="space-y-1">
            <span className="text-xs font-sans text-slate-400 font-bold uppercase">CHAPTER CODE</span>
            <h4 className="text-lg font-sans font-extrabold text-[#003366]">{SITE_CONFIG.chapterCode}</h4>
            <p className="text-xs text-slate-600">Official Charter Identifier</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CHAPTER AT A GLANCE (Verified Statistics) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-sky-200 pb-3">
          <Award className="w-5 h-5 text-sky-600" />
          <h2 className="subsection-heading">
            4. Chapter at a Glance (2025 Record)
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 surface-card space-y-1">
            <span className="text-3xl font-extrabold font-sans text-sky-600">30</span>
            <h4 className="text-sm font-bold text-[#003366]">Chapter Members</h4>
            <p className="text-xs text-slate-500">Documented IEEE &amp; CASS student membership count for 2025.</p>
          </div>

          <div className="p-6 surface-card space-y-1">
            <span className="text-3xl font-extrabold font-sans text-sky-600">6</span>
            <h4 className="text-sm font-bold text-[#003366]">Documented Activities</h4>
            <p className="text-xs text-slate-500">Conducted in 2025 across lectures, workshops, and symposiums.</p>
          </div>

          <div className="p-6 surface-card space-y-1">
            <span className="text-3xl font-extrabold font-sans text-[#003366]">R10</span>
            <h4 className="text-sm font-bold text-[#003366]">Region 10</h4>
            <p className="text-xs text-slate-500">Affiliated with IEEE Asia-Pacific organizational territory.</p>
          </div>

          <div className="p-6 surface-card space-y-1">
            <span className="text-2xl font-extrabold font-sans text-[#003366] tracking-tight">{SITE_CONFIG.chapterCode}</span>
            <h4 className="text-sm font-bold text-[#003366]">Student Chapter Code</h4>
            <p className="text-xs text-slate-500">Assigned charter reference within the IEEE master directory.</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: COLLABORATION / ECOSYSTEM (IC-ResQ LAB) */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 border-b border-sky-200 pb-3">
          <Building className="w-5 h-5 text-sky-600" />
          <h2 className="subsection-heading">
            5. Research Ecosystem &amp; Collaboration: IC-ResQ Lab
          </h2>
        </div>

        <div className="surface-card p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-50 text-sky-800 border border-sky-200">
              <Cpu className="w-3.5 h-3.5 text-sky-600" />
              <span>FACULTY RESEARCH LAB • IIT JAMMU</span>
            </div>
            
            <h3 className="text-2xl font-extrabold text-[#003366]">
              {SITE_CONFIG.ecosystem.labFullName}
            </h3>

            <p className="text-sm text-slate-600 leading-relaxed">
              The <strong>IC-ResQ Lab</strong>, headed by Faculty Advisor <strong>Dr. Ambika Prasad Shah</strong> in the Department of Electrical Engineering at IIT Jammu, forms a vital research partner and academic foundation for chapter activities.
            </p>

            <p className="text-xs text-slate-500 leading-relaxed">
              Research at IC-ResQ focuses on hardware security, reliability in nanoscale CMOS and post-CMOS devices, RFETs, approximate computing, and fault-tolerant system-on-chip architectures, directly fueling the chapter’s advanced technical seminars.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-sky-50/80 border border-sky-200 space-y-3 shrink-0 text-center w-full lg:w-72">
            <div className="w-14 h-14 mx-auto rounded-xl bg-white border border-sky-300 flex items-center justify-center text-sky-600 shadow-2xs">
              <Cpu className="w-7 h-7" />
            </div>
            <div className="text-xs font-semibold text-[#003366]">
              IC-ResQ Research Portal
            </div>
            <a
              href={SITE_CONFIG.ecosystem.labUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-xl bg-white hover:bg-sky-50 text-sky-700 font-bold text-xs border border-sky-300 shadow-2xs transition-colors"
            >
              <span>Explore IC-ResQ Lab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
