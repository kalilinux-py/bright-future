/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PageId } from '../types';
import { ADMISSIONS_DOCUMENTS_REQUIRED, SCHOOL_FAQS } from '../data';
import { 
  ArrowRight, Sparkles, CheckCircle, FileText, 
  HelpCircle, CreditCard, ShieldCheck, Milestone, ClipboardCopy 
} from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

interface AdmissionsProps {
  setActivePage: (page: PageId) => void;
  onOpenInquiryModal: () => void;
}

export default function Admissions({ setActivePage, onOpenInquiryModal }: AdmissionsProps) {
  const steps = [
    {
      num: '01',
      title: 'Digital / Physical Inquiry',
      desc: 'Submit our online Admission Inquiry card (adjacent) or visit the Lucknow reception desk for academic booklets.'
    },
    {
      num: '02',
      title: 'Guided School Walkthrough',
      desc: 'Schedule a visit to tour our advanced laboratories, digital smart class spaces, and standard sports complex fields.'
    },
    {
      num: '03',
      title: 'Comprehensive Registration',
      desc: 'Obtain the official admissions prospectus registry. Submit verified copies of required birth / residential papers.'
    },
    {
      num: '04',
      title: 'Proficiency Interaction',
      desc: 'Student undertakes a soft cognitive proficiency interaction designed to identify child developmental indicators.'
    },
    {
      num: '05',
      title: 'Seat Allocation & Deposit',
      desc: 'Upon interaction clearance, secure the student seat by executing the quarterly registration fee drop.'
    }
  ];

  return (
    <div className="bg-white text-left">
      
      {/* 1. Hero Section */}
      <section className="relative py-16 bg-[#071320] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <img
            src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=1200"
            className="w-full h-full object-cover"
            alt="Admissions open background"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block font-sans">
            Secure Seat Vacancies 2026–27
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-none">
            Online Admission Registry
          </h1>
          <p className="text-slate-355 text-xs md:text-sm max-w-2xl mx-auto font-sans">
            Affiliated with CBSE (Nursery to Class XII) • Learn about timelines, documentation file requirements, quarterly structures, and submit online inquiry.
          </p>
        </div>
      </section>

      {/* 2. Admission Process Steps Timeline */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block font-sans">Simple Enrollment Path</span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">Our 5-Step Admissions Milestones</h2>
          <p className="text-slate-500 text-xs md:text-sm">We maintain a transparent, highly supportive, parent-centric workflow guiding the entry process.</p>
        </div>

        {/* Horizontal & Vertical Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start text-left max-w-6xl mx-auto">
          {steps.map((st, index) => (
            <div key={st.num} className="space-y-4 relative group">
              {/* Highlight line mapping in desktops */}
              {index < 4 && (
                <div className="hidden md:block absolute top-7 left-[65px] right-[-65px] h-0.5 bg-[#0B3C5D]/10 z-0 group-hover:bg-amber-400 transition-colors"></div>
              )}
              
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-slate-50 border border-slate-250 text-[#0B3C5D] font-display font-black text-lg flex items-center justify-center shadow-sm group-hover:bg-[#0B3C5D] group-hover:text-amber-400 transition-colors">
                {st.num}
              </div>

              <div className="space-y-1">
                <h4 className="font-display font-bold text-slate-800 text-sm md:text-base leading-snug">
                  {st.title}
                </h4>
                <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed font-sans">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Required Documents Section & Fee Guidance */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Documents index check list column */}
          <div className="lg:col-span-6 bg-white p-6 md:p-8 rounded-3xl border border-slate-200 space-y-6">
            <div className="space-y-2">
              <span className="text-amber-500 font-bold text-[10px] uppercase tracking-wider block font-sans">Prospectus Guidelines</span>
              <h3 className="font-display font-black text-[#0B3C5D] text-lg md:text-xl leading-tight">Required Registration Documents</h3>
              <p className="text-slate-500 text-xs font-sans mt-1">
                Ensure self-attested photocopies of these verified booklets are arranged before final document confirmation meets:
              </p>
            </div>

            <div className="space-y-3 font-sans text-xs text-slate-700">
              {ADMISSIONS_DOCUMENTS_REQUIRED.map((doc, idx) => (
                <div key={idx} className="flex gap-3 items-start border-b border-slate-100 pb-3">
                  <ClipboardCopy className="h-4.5 w-4.5 text-[#0B3C5D] flex-shrink-0 mt-0.5" />
                  <p className="leading-relaxed">{doc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Fee details column */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-center max-w-xl">
            <div className="space-y-3">
              <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block font-sans">Budget Comfort structure</span>
              <h3 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-tight">Fee Transparency &amp; Installments Rules</h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
                At Bright Future Public School, we understand parental financial planning. We avoid colossal upfront annual packages. The structural academic fee has been divided into <strong>4 quarterly cycles</strong> (due in April, July, October, and January weeks).
              </p>
            </div>

            {/* Structured quarter grid layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-[#0B3C5D] block mb-1 uppercase tracking-wide">Quarter I (Term Entrance)</span>
                <p className="text-slate-500 text-[11px] leading-relaxed">Due: April Week 1</p>
                <p className="text-amber-500 font-bold mt-1.5">Includes Annual composites</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-[#0B3C5D] block mb-1 uppercase tracking-wide">Quarter II</span>
                <p className="text-slate-500 text-[11px] leading-relaxed">Due: July Week 1</p>
                <p className="text-slate-450 mt-1.5">Standard tuition &amp; transit costs</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-[#0B3C5D] block mb-1 uppercase tracking-wide">Quarter III (Session Mid)</span>
                <p className="text-slate-500 text-[11px] leading-relaxed">Due: October Week 1</p>
                <p className="text-slate-455 mt-1.5">Standard tuition &amp; transit costs</p>
              </div>
              <div className="p-10.5 bg-white rounded-xl border border-slate-200">
                <span className="font-bold text-[#0B3C5D] block mb-1 uppercase tracking-wide font-sans">Quarter IV</span>
                <p className="text-slate-500 text-[11px] leading-relaxed">Due: January Week 1</p>
                <p className="text-emerald-500 font-bold mt-1.5">Final assessment clearance</p>
              </div>
            </div>

            <div className="p-4 bg-amber-500/10 rounded-xl border border-amber-500/20 text-xs text-slate-700 leading-relaxed font-sans">
              ℹ️ To discover the exact class-wise fee figures corresponding to Nursery or Senior Science streams, complete the Admissions Registry Form below. Our catalog will be transmitted immediately.
            </div>
          </div>

        </div>
      </section>

      {/* 4. Elite Admissions Inquiry Form double columns */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Supportive FAQ Column */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-2">
              <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block font-sans">Common Queries</span>
              <h3 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-tight">Admissions Frequently Asked Questions</h3>
              <p className="text-slate-550 text-xs md:text-sm font-sans leading-relaxed">
                Review fast responses to frequently raised parental queries regarding board admissions, assessment interaction standards, and Lucknow coordinates:
              </p>
            </div>

            <div className="space-y-4">
              {SCHOOL_FAQS.slice(0, 3).map((faq) => (
                <div key={faq.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 font-sans text-xs">
                  <h4 className="font-bold text-[#0B3C5D] leading-relaxed mb-2 flex gap-1.5 items-start">
                    <HelpCircle className="h-4.5 w-4.5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h4>
                  <p className="text-slate-600 leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Admissions Inquiry form */}
          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -top-3 left-4 z-10 bg-[#0B3C5D] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                Direct Admissions Gate
              </div>
              <InquiryForm 
                titleText="Secure Candidate Allocation Slot" 
                sourcePage="Admissions" 
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
