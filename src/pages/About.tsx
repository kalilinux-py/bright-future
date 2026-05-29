/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PageId } from '../types';
import { SCHOOL_TIMELINE, SCHOOL_FACULTY } from '../data';
import { ShieldCheck, Compass, Heart, Award, ArrowRight, Shield, Calendar, Sparkles, GraduationCap, Briefcase, UserCheck } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

interface AboutProps {
  setActivePage: (page: PageId) => void;
  onOpenInquiryModal: () => void;
}

export default function About({ setActivePage, onOpenInquiryModal }: AboutProps) {
  return (
    <div className="bg-white text-left">
      
      {/* 1. Hero Banner */}
      <section className="relative py-16 bg-[#071320] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-[#071320] to-transparent"></div>
          <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block">
            The Legend & Legacy
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-none">
            About Our Institution
          </h1>
          <p className="text-slate-350 text-xs md:text-sm max-w-2xl mx-auto">
            Discover our mission, elite faculty boards, school chronology, and administrative dedication towards Indian children.
          </p>
        </div>
      </section>

      {/* 2. School Introduction & Highlights Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-tight">
              Committed to Academic Dignity, Modern Technology & Holistic Student Growth
            </h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Bright Future Public School is a leading private day-boarding school in Lucknow that delivers an outstanding curriculum under CBSE guidelines. Founded on values of critical inquiry, competitive sportsmanship, and social integrity, our school prides itself on offering deep-enrichment education for secondary and high-school streams.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Through optimized computer centers, physical laboratories, and climate comfort digital classrooms, we foster a protective educational ecosystem. Our students graduate securing high placements across top Indian IITs, Central Medical colleges, and prestigious international tracks.
            </p>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-100 p-6 rounded-2xl space-y-4">
            <h3 className="font-display font-bold text-slate-800 text-base mb-2">School Accreditations</h3>
            
            {[
              { title: 'CBSE Affiliated Academic Body', desc: 'Syllabus perfectly mapped to NCERT and continuous assessment standard guidelines.' },
              { title: 'Certified Expert Educators', desc: '100% of our educators are trained post-graduates with specialized teacher teaching licenses.' },
              { title: 'Comprehensive CCTV Guard Nets', desc: 'Constant live patrol, high density lobby camera feeds, first aid nurse support.' },
              { title: 'Integrated Smart Board Labs', desc: 'Audio visual animations make logical sciences and historical maps easy to digest.' }
            ].map((highlight, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="mt-1 w-5 h-5 rounded bg-[#0B3C5D]/10 text-[#0B3C5D] flex items-center justify-center flex-shrink-0">
                  <span className="text-[10px] font-bold">✓</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-xs">{highlight.title}</h4>
                  <p className="text-slate-550 text-[11px] font-medium leading-normal mt-0.5">{highlight.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision Dual Cards */}
      <section className="py-16 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-150 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Compass className="h-6 w-6" />
            </div>
            <h3 className="font-display font-black text-[#0B3C5D] text-lg md:text-xl">
              Our High Mission
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              To provide a safe, intellectually inspiring day-boarding workspace where Indian students discover their utmost academic potential, hone specialized sport disciplines, and establish ethical, civic-leadership standards mapping global responsibilities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-150 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#0B3C5D]/10 text-[#0B3C5D] flex items-center justify-center">
              <Heart className="h-6 w-6" />
            </div>
            <h3 className="font-display font-black text-amber-500 text-lg md:text-xl">
              Our Grand Vision
            </h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
              We envision Bright Future Public School Lucknow as a premier landmark of scholastic progressiveness, where modern digital workflows merge beautifully with traditional respect values, giving the nation strong, logical minds and outstanding characters.
            </p>
          </div>

        </div>
      </section>

      {/* 4. Principal’s Message Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl overflow-hidden border border-slate-150 shadow-xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Headshot area */}
          <div className="lg:col-span-4 bg-[#0B3C5D] p-8 text-white flex flex-col justify-between items-center relative overflow-hidden min-h-[340px]">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="space-y-2 text-center relative z-10 w-full">
              <span className="text-amber-400 font-bold text-[10px] uppercase tracking-wider block">School Leadership</span>
              <h3 className="font-display font-bold text-lg leading-tight">From the Principal&apos;s Desk</h3>
            </div>

            <div className="relative w-44 h-44 rounded-full border-4 border-amber-400 p-1 bg-slate-100 z-10 my-4 shadow-lg overflow-hidden flex-shrink-0">
               <img
                 src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                 alt="Dr. Shailja Srivastav Principal of school"
                 className="w-full h-full object-cover"
                 referrerPolicy="no-referrer"
               />
            </div>

            <div className="text-center relative z-10 w-full space-y-0.5">
              <h4 className="font-bold text-sm text-white">Dr. Shailja Srivastav</h4>
              <p className="text-[10px] text-amber-300 font-semibold uppercase tracking-widest leading-none">M.Sc., Ph.D. • Lucknow Director</p>
            </div>
          </div>

          {/* Core message text */}
          <div className="lg:col-span-8 p-8 md:p-12 text-left space-y-5 flex flex-col justify-center">
            <h3 className="font-display font-black text-[#0B3C5D] text-2xl tracking-tight">
              &ldquo;Nurturing logical inquiry with moral rectitude defines our scholastic compass.&rdquo;
            </h3>
            
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Welcome dear Parents, Guardians, and Students,
            </p>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              At Bright Future Public School, we see education as an active process of discovery rather than a passive routine of notes memorization. Affiliated with CBSE, our academic framework operates on an inclusive, exploratory model where practical laboratory modules, digital ICT logic, and daily sports form standard benchmarks.
            </p>
            <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
              Lucknow represents a historic focal point of culture and deep intellect. Our Gomti Nagar Extension campus strives to protect this heritage while integrating global tech learning codes. I welcome you to partner with us in securing beautiful developmental tracks for your child.
            </p>

            <div className="pt-4 border-t border-slate-100 flex justify-between items-center flex-wrap gap-4">
              <div>
                <p className="text-xs text-slate-400 font-medium">Warm Regards,</p>
                <p className="font-display font-medium text-slate-700 text-sm mt-1">Dr. Shailja Srivastav</p>
                <p className="text-[10px] text-slate-400">Principal, Bright Future Public School</p>
              </div>
              
              <div className="text-right">
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-600 border border-emerald-100 font-bold uppercase tracking-wider block">Available for meet</span>
                <span className="text-[9px] text-slate-450 block mt-1">Saturdays with prior appointments</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Timeline Journey */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block">Establishing Milestones</span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight">The 15 Year Excellence Journey</h2>
            <p className="text-slate-500 text-xs md:text-sm">A brief overview of how we scaled from modest beginning in 2011 to Lucknow&apos;s leading CBSE day-boarding school.</p>
          </div>

          <div className="relative border-l-2 border-[#0B3C5D]/20 pl-6 md:pl-10 max-w-4xl mx-auto space-y-10 py-4 text-left">
            {SCHOOL_TIMELINE.map((step) => (
              <div key={step.id} className="relative group">
                {/* Visual marker */}
                <span className="absolute -left-[35px] md:-left-[51px] top-1 w-6 h-6 rounded-full bg-white border-4 border-[#0B3C5D] group-hover:bg-amber-500 group-hover:border-amber-400 transition-colors flex items-center justify-center">
                  <span className="w-1.5 h-1.5 bg-[#0B3C5D] rounded-full group-hover:bg-slate-950"></span>
                </span>
                
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-display font-extrabold text-[#0B3C5D] text-sm md:text-base leading-none bg-[#0B3C5D]/10 px-2 py-1 rounded">
                      Year {step.year}
                    </span>
                    <h4 className="font-bold text-slate-800 text-sm md:text-base">{step.title}</h4>
                  </div>
                  <p className="text-slate-500 text-xs md:text-sm font-sans leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Faculty Preview Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 bg-gradient-to-b from-transparent to-slate-50/20">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-[3px] block">
            Our Mentors
          </span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight">
            Our Elite Senior Faculty Board
          </h2>
          <p className="text-slate-550 text-xs md:text-sm">
            Driven by post-graduate specialists who hold continuous CBSE board workshop certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SCHOOL_FACULTY.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo frame with smooth hover scale */}
                <div className="h-60 bg-slate-50 overflow-hidden relative">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 filter brightness-[0.98] contrast-[1.01]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Absolute Top Designation Ribbon */}
                  <div className="absolute top-3 left-3 bg-[#1e3a8a] text-white text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md z-10">
                    {member.designation.split(' & ')[0]}
                  </div>

                  {/* Backdrop subtle dark fade for designation layout reference */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 flex items-end">
                    <p className="text-amber-400 font-bold text-[10px] uppercase tracking-wide leading-none select-none">
                      {member.designation}
                    </p>
                  </div>
                </div>

                {/* Content Details Area */}
                <div className="p-5 space-y-3.5 text-left">
                  <div>
                    <h4 className="font-display font-extrabold text-slate-800 text-sm md:text-base tracking-tight leading-snug group-hover:text-blue-900 transition-colors">
                      {member.name}
                    </h4>
                  </div>

                  {/* Qualification Block */}
                  <div className="flex gap-2.5 items-start">
                    <div className="w-5 h-5 rounded-md bg-blue-50 text-[#1e3a8a] flex items-center justify-center shrink-0 mt-0.5">
                      <GraduationCap className="h-3 w-3" />
                    </div>
                    <p className="text-slate-600 text-[11px] leading-relaxed font-sans font-medium">
                      {member.qualification}
                    </p>
                  </div>

                  {/* Focus Experience Box */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100/80 space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-600 font-bold text-[9px] uppercase tracking-wider">
                      <Briefcase className="h-3 w-3" />
                      <span>Professional Focus</span>
                    </div>
                    <p className="text-slate-500 text-[11px] font-sans leading-relaxed">
                      {member.experience}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Stamp Row */}
              <div className="px-5 pb-4 border-t border-slate-50 pt-3 flex items-center justify-between text-[10px] text-slate-400 font-sans font-medium">
                <span className="flex items-center gap-1 text-emerald-600 font-bold">
                  <UserCheck className="h-3 w-3 text-emerald-500" /> CBSE Accredited
                </span>
                <span className="bg-amber-100 text-amber-800 text-[9px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                  Elite Board
                </span>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 7. Prominent Admissions Inquiry Deck */}
      <section className="py-20 bg-slate-100/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Admissions Message */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block">Join Bright Future Family</span>
                <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">
                  Plan Your Lucknow Campus Tour Today
                </h2>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                By submitting a request, your coordinates are safely assigned to our primary counselors panel. They will coordinate a meeting at your convenient Saturday slots.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <h4 className="font-bold text-[#0B3C5D] text-xs uppercase tracking-wider mb-1">Office Contact</h4>
                  <p className="text-xs text-slate-500 leading-normal">Helpline Deck: +91 94511 23456</p>
                  <p className="text-xs text-slate-400 leading-normal mt-0.5">Email address: admissions@brightfuture.edu.in</p>
                </div>
                
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <h4 className="font-bold text-amber-600 text-xs uppercase tracking-wider mb-1">Board Code Details</h4>
                  <p className="text-xs text-slate-550 leading-normal">Institutional Code Affiliation No: 2130982</p>
                  <p className="text-xs text-slate-400 leading-normal mt-0.5">Managed by elite Shailja Srivastav Educational Trust board Lucknow.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Inline Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -top-3 left-4 z-10 bg-amber-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  About Page Admissions Gateway
                </div>
                <InquiryForm 
                  titleText="Submit Fresh Admissions Inquiry" 
                  sourcePage="About" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
