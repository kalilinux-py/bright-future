/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { PageId } from '../types';
import { ACADEMIC_PROGRAMS, ACADEMIC_PERFORMANCE } from '../data';
import { BookOpen, Award, CheckCircle, FileText, FileSpreadsheet, Compass, Library, Star } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

interface AcademicsProps {
  setActivePage: (page: PageId) => void;
  onOpenInquiryModal: () => void;
}

export default function Academics({ setActivePage, onOpenInquiryModal }: AcademicsProps) {
  const [selectedProgram, setSelectedProgram] = useState(0);

  const subjectStreams = [
    {
      stream: 'Science (PCM/PCB) Stream',
      details: 'Physics, Chemistry, Mathematics / Biology, Computer Science, English Core.',
      exams: 'Designed to target high scores in CBSE boards as well as prep foundations for JEE & NEET.'
    },
    {
      stream: 'Commerce Stream',
      details: 'Accountancy, Business Studies, Economics, Applied Mathematics / Informatics Practices, English.',
      exams: 'Prepares kids for Chartered Accountancy exams, CUET, and premier national business universities.'
    },
    {
      stream: 'Humanities Stream',
      details: 'History, Political Science, Geography, Psychology / Sociology, Hindi/English Literature.',
      exams: 'Nurtures deep analytical thinking, civil services foundations, and literature studies.'
    }
  ];

  return (
    <div className="bg-white text-left">
      
      {/* 1. Hero Section */}
      <section className="relative py-16 bg-[#071320] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200"
            className="w-full h-full object-cover"
            alt="Study background"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block">
            Nurturing Elite Scholars
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-none">
            Academics & Curriculums
          </h1>
          <p className="text-slate-350 text-xs md:text-sm max-w-2xl mx-auto">
            Affiliated to CBSE board, New Delhi, we provide deep, structured study matrices from early primary playway to Class 12 Senior Secondary.
          </p>
        </div>
      </section>

      {/* 2. Educational Programs Tabs Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block">Programs Offered</span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight">Rigorous Class Wings Selection</h2>
          <p className="text-slate-500 text-xs md:text-sm">Explore specific grade brackets. Clicking each highlights the NCERT mapping, class grades, and methodologies.</p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 max-w-4xl mx-auto">
          {ACADEMIC_PROGRAMS.map((prog, index) => (
            <button
              key={prog.id}
              onClick={() => setSelectedProgram(index)}
              className={`px-4 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all border cursor-pointer ${
                selectedProgram === index
                  ? 'bg-[#0B3C5D] text-white border-[#0B3C5D] shadow-lg'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
              }`}
            >
              {prog.title.replace(' Wing', '')}
            </button>
          ))}
        </div>

        {/* Active Tab Details Display */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 md:p-8 border border-slate-150 shadow-sm">
          <motion.div
            key={selectedProgram}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 text-left"
          >
            <div className="md:col-span-8 space-y-5">
              <span className="text-amber-500 font-bold text-xs uppercase tracking-wide block">
                Grade Limit: {ACADEMIC_PROGRAMS[selectedProgram].classes}
              </span>
              <h3 className="font-display font-black text-[#0B3C5D] text-xl md:text-2xl leading-tight">
                {ACADEMIC_PROGRAMS[selectedProgram].title} Setup
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {ACADEMIC_PROGRAMS[selectedProgram].description}
              </p>
              
              <div className="space-y-3 pt-3">
                <h4 className="font-bold text-slate-800 text-xs uppercase">Targeted CBSE Syllabus Code:</h4>
                <div className="flex items-start gap-2.5 bg-white p-4 rounded-xl border border-slate-200">
                  <FileText className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-xs text-slate-550 leading-relaxed font-sans">{ACADEMIC_PROGRAMS[selectedProgram].curriculum}</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="text-[#0B3C5D] font-bold text-[10px] uppercase tracking-wider block">Admissions Status</span>
                <h4 className="font-display font-bold text-slate-800 text-sm mt-1 leading-snug">Accepting inquiries for Grade Stream:</h4>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed font-sans">
                  Apply early to schedules placement matches. Limited vacant chairs are assigned on merit priorities.
                </p>
              </div>
              <button
                onClick={onOpenInquiryModal}
                className="w-full text-center bg-[#0B3C5D] hover:bg-[#082E47] text-white text-xs font-bold py-3 px-4 rounded-xl uppercase tracking-wider mt-4 cursor-pointer"
              >
                Request Admission Form
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Teaching Methodology & CBSE alignment */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
          
          <div className="space-y-6">
            <div className="space-y-2">
              <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block">Pedagogical Framework</span>
              <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-tight">Activity-Based Adaptive Learning Models</h2>
            </div>
            
            <p className="text-slate-600 text-sm leading-relaxed font-sans">
              Our teaching methodologies transition smoothly from visual lessons towards analytical, concept-driven Master classes. We avoid tedious dry memorizations. By implementing NCERT guidelines, science laboratory experiments, and regular language elocutions, our pupils establish continuous cognitive self-reliance.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                <span>Smart interactive digital Touch syllabus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                <span>Specialized coding & robotics modules</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                <span>Interactive mathematics laboratories</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4.5 w-4.5 text-emerald-500 flex-shrink-0" />
                <span>Language lab speech diagnostics</span>
              </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute -inset-2 bg-[#0B3C5D]/10 rounded-3xl transform rotate-1 filter blur-sm"></div>
             <img
               src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800"
               className="relative rounded-2xl w-full h-[360px] object-cover border border-slate-200 shadow-md"
               alt="Students studying inside classroom"
               referrerPolicy="no-referrer"
             />
          </div>

        </div>
      </section>

      {/* 4. Subject Streams Grids (Science, Commerce, Humanities) */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block font-sans">Specialized Senior school Streams</span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">Class XI &amp; XII Subject Grids</h2>
          <p className="text-slate-500 text-xs md:text-sm">We provide tailored subject streams helping students target standard professional courses like IIT-JEE, NEET, and Chartered Accountancy.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjectStreams.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="inline-flex px-3 py-1.5 rounded-lg bg-[#0B3C5D]/10 text-[#0B3C5D] text-xs font-bold uppercase tracking-wider font-sans">
                  {item.stream.split(' ')[0]}
                </div>
                <h4 className="font-display font-bold text-base text-slate-900">{item.stream}</h4>
                <p className="text-slate-500 text-xs font-sans leading-relaxed">
                  <span className="font-bold text-slate-600 block mb-1">Subjects Encompassed:</span>
                  {item.details}
                </p>
              </div>
              
              <div className="border-t border-slate-100 pt-4 mt-6 text-slate-400 text-[11px] leading-relaxed">
                <span className="font-bold text-slate-500 block">Assessment Target:</span>
                {item.exams}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Examination & Evaluation Standards */}
      <section className="py-25 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-widest font-mono">Continuous Growth Review</span>
            <h2 className="font-display font-black text-2xl md:text-3xl text-[#0B3C5D] tracking-tight leading-tight">Evaluation &amp; Progress Systems</h2>
            <p className="text-slate-650 text-xs md:text-sm leading-relaxed font-sans">
              To verify child educational progression, the academic year has been split into custom Term sequences complying with the National Education Policy (NEP) guidelines:
            </p>
            <ul className="space-y-2 text-xs text-slate-600 font-sans">
              <li className="flex gap-2 items-center"><CheckCircle className="h-4 w-4 text-emerald-500" /> Formative Assessment series (Short unit checks)</li>
              <li className="flex gap-2 items-center"><CheckCircle className="h-4 w-4 text-emerald-500" /> Semi-annual central testing evaluations</li>
              <li className="flex gap-2 items-center"><CheckCircle className="h-4 w-4 text-emerald-500" /> Intensive CBSE board practical drills (High school wings)</li>
              <li className="flex gap-2 items-center"><CheckCircle className="h-4 w-4 text-emerald-500" /> Multi-dimensional feedback portfolios sent to parents</li>
            </ul>
          </div>

          <div className="lg:col-span-7 bg-white p-6 rounded-2xl shadow-md border border-slate-200">
             <h4 className="font-display font-bold text-slate-900 text-sm mb-4">Typical Academic Calendar Milestones</h4>
             <div className="space-y-3">
               {[
                 { milestone: 'Periodic Assessment I', dates: 'July Week 2' },
                 { milestone: 'Half Yearly Examination Term', dates: 'September End' },
                 { milestone: 'Periodic Assessment II', dates: 'December Week 1' },
                 { milestone: 'Pre-Board Simulation Drills (X / XII)', dates: 'January - February' },
                 { milestone: 'Final Scholastic Assessment Review', dates: 'March Week 2' }
               ].map((item, idx) => (
                 <div key={idx} className="flex justify-between items-center py-2.5 px-3 rounded-lg bg-slate-50 border border-slate-100 font-sans text-xs">
                   <span className="font-semibold text-slate-700">{item.milestone}</span>
                   <span className="text-amber-600 font-bold">{item.dates}</span>
                 </div>
               ))}
             </div>
          </div>

        </div>
      </section>

      {/* 6. Academic Performance achievements shortcut */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
         <div className="max-w-2xl mx-auto space-y-2">
           <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block">Outstanding Medals</span>
           <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">High Prestige Recognitions</h2>
           <p className="text-slate-500 text-xs md:text-sm">We take deep pride in creating remarkable board averages and state Olympiads gold records.</p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
           {ACADEMIC_PERFORMANCE.map(metric => (
             <div key={metric.id} className="bg-white border-2 border-slate-50 p-6 rounded-2xl shadow-sm space-y-4">
               <span className="text-[10px] font-bold text-[#0B3C5D] uppercase tracking-wide bg-[#0B3C5D]/10 px-2.5 py-1 rounded block w-fit">{metric.metric}</span>
               <h4 className="font-display font-bold text-slate-800 text-base">{metric.title}</h4>
               <p className="text-slate-500 text-xs md:text-sm font-sans leading-relaxed">{metric.description}</p>
             </div>
           ))}
         </div>
      </section>

      {/* 7. Prominent Admissions Inquiry Deck */}
      <section className="py-20 bg-slate-100/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Parental help downloads */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[#0B3C5D] font-bold text-xs">Academic Coordination Desk</span>
                <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">
                  Download CBSE Academic Guidelines
                </h2>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                Need to print the class wise syllabus matrices or detailed quarterly testing timelines? Retrieve standard guides directly from school registrars:
              </p>

              <div className="space-y-3 text-xs text-slate-700">
                <a href="#" className="flex justify-between items-center p-3 rounded-lg border border-slate-200 bg-white hover:border-[#0B3C5D] transition-all">
                  <span className="font-semibold">CBSE Secondary Syllabus Checklist (2026-27).pdf</span>
                  <span className="text-amber-600 font-bold text-[10px] uppercase">Download</span>
                </a>
                <a href="#" className="flex justify-between items-center p-3 rounded-lg border border-slate-200 bg-white hover:border-[#0B3C5D] transition-all">
                  <span className="font-semibold">Primary Wing Montessori Skill Guidelines.pdf</span>
                  <span className="text-amber-600 font-bold text-[10px] uppercase">Download</span>
                </a>
                <a href="#" className="flex justify-between items-center p-3 rounded-lg border border-slate-200 bg-white hover:border-[#0B3C5D] transition-all">
                  <span className="font-semibold">Academic Fee Structure &amp; Installments rules.pdf</span>
                  <span className="text-amber-600 font-bold text-[10px] uppercase">Download</span>
                </a>
              </div>
            </div>

            {/* Right Column: Inline Inquiry */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -top-3 left-4 z-10 bg-amber-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  Academics Page Gateway
                </div>
                <InquiryForm 
                  titleText="Register Academic Inquiry Now" 
                  sourcePage="Academics" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
