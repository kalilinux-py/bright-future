/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PageId } from '../types';
import { SCHOOL_FACILITIES } from '../data';
import { 
  ShieldCheck, Phone, MapPin, Eye, Zap, 
  Clock, CheckCircle, HeartPulse, ShieldAlert 
} from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

interface FacilitiesProps {
  setActivePage: (page: PageId) => void;
  onOpenInquiryModal: () => void;
}

export default function Facilities({ setActivePage, onOpenInquiryModal }: FacilitiesProps) {
  return (
    <div className="bg-white text-left">
      
      {/* 1. Hero Banner */}
      <section className="relative py-16 bg-[#071320] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <img
            src="https://images.unsplash.com/photo-1576267423445-b2e0074d68a4?auto=format&fit=crop&q=80&w=1200"
            className="w-full h-full object-cover"
            alt="School playground"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block font-sans">
            Modern Infrastructure
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-none">
            Campus Infrastructure
          </h1>
          <p className="text-slate-350 text-xs md:text-sm max-w-2xl mx-auto">
            Witness our clean computer labs, GPS synchronized bus transit fleets, interactive Smart class halls, and specialized sports complex Lucknow branch.
          </p>
        </div>
      </section>

      {/* 2. Facility Cards Grid with Images */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block font-sans">Clean State-of-the-Art Spaces</span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">Our 8 Core On-Campus Facilities</h2>
          <p className="text-slate-500 text-xs md:text-sm">We maintain excellent hygiene, certified fire dispatch drills, and optimized academic tools for our active student batches.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SCHOOL_FACILITIES.map((facility) => (
            <div 
              key={facility.id} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image layout container */}
                <div className="h-48 overflow-hidden relative bg-slate-100">
                  <img
                    src={facility.imageUrl}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B3C5D] text-white text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide">
                    {facility.category || "General"}
                  </div>
                </div>
                
                <div className="p-5 space-y-2.5">
                  <h4 className="font-display font-bold text-slate-800 text-sm md:text-base leading-snug">
                    {facility.title}
                  </h4>
                  <p className="text-slate-500 text-[12px] leading-relaxed font-sans">
                    {facility.description}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 border-t border-slate-50 pt-3 flex justify-between items-center text-[10px] text-slate-400 font-sans">
                <span className="font-bold text-amber-500 block">✓ Maintenance Checked</span>
                <span>Active Resource</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Safety & Security Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block">Student Safety Directives</span>
                <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">Unconditional Shield of Security</h2>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
                  The health, mental comfort, and structural physical safety of every child is our absolute first commitment. At Bright Future Public School, we follow highly verified security protocols:
                </p>
              </div>

              <div className="space-y-4 font-sans text-xs">
                 <div className="flex gap-3 items-start p-4 bg-white rounded-xl border border-slate-200 hover:border-[#0B3C5D] transition-all">
                   <ShieldAlert className="h-5 w-5 text-amber-500 flex-shrink-0" />
                   <div>
                     <h4 className="font-bold text-slate-900 leading-none mb-1.5">GPS Monitored Bus Fleet</h4>
                     <p className="text-slate-500 text-[11px] leading-normal">Parents receive automated SMS notification triggers once transit buses cross standard Lucknow route checkpoints.</p>
                   </div>
                 </div>

                 <div className="flex gap-3 items-start p-4 bg-white rounded-xl border border-slate-200 hover:border-[#0B3C5D] transition-all">
                   <HeartPulse className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                   <div>
                     <h4 className="font-bold text-slate-900 leading-none mb-1.5">Full-Time Pediatric First Aid Care</h4>
                     <p className="text-slate-500 text-[11px] leading-normal">Our central clinic has dynamic medical devices, sterile beds, and a certified nurse linked with top Lucknow pediatric centers.</p>
                   </div>
                 </div>

                 <div className="flex gap-3 items-start p-4 bg-white rounded-xl border border-slate-200 hover:border-[#0B3C5D] transition-all">
                   <CheckCircle className="h-5 w-5 text-[#0B3C5D] flex-shrink-0" />
                   <div>
                     <h4 className="font-bold text-slate-900 leading-none mb-1.5">Fire Safety and Fire Sprinklers Grid</h4>
                     <p className="text-slate-500 text-[11px] leading-normal">All sections maintain functional fire hoses, regular mock exit drills, and certified smoke detectors.</p>
                   </div>
                 </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
               <div className="absolute -inset-2 bg-emerald-500 rounded-3xl transform -rotate-1 opacity-20 filter blur-sm"></div>
               <img
                 src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&q=80&w=800"
                 className="relative rounded-2xl w-full h-[380px] object-cover border border-slate-200 shadow-md"
                 alt="CCTV security room monitors"
                 referrerPolicy="no-referrer"
               />
            </div>

          </div>
        </div>
      </section>

      {/* 4. Campus Life Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
        <div className="max-w-2xl mx-auto space-y-2">
          <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block font-sans">Cultivating Active Playgrounds</span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">Sprawling Day-Boarding Campus Life</h2>
          <p className="text-slate-500 text-xs md:text-sm">Explore child growth outside normal books: standard activity halls, vocal choir platforms, and indoor board gaming areas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { title: 'Morning Assemblies & Elocution', desc: 'Every Monday starts with multi-lingual elocutions, national news reviews, and school band performances boosting child confidence.' },
            { title: 'Advanced Robotics and 3D Studios', desc: 'Weekly design periods where kids program basic Arduino microchips, construct logical sensors, and review basic 3D printed blocks.' },
            { title: 'Vibrant Art, Music & Vocal Rooms', desc: 'Fully stocked with classical Indian instruments like Tabla, Sitar, Harmonium, as well as electronic keyboards and multi-voice setups.' }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 border border-slate-150 shadow-sm relative space-y-3 hover:shadow-md transition-all">
              <span className="text-slate-350 text-xl font-display font-bold block mb-1">0{index + 1}.</span>
              <h4 className="font-display font-bold text-slate-800 text-base leading-snug">{item.title}</h4>
              <p className="text-slate-550 text-xs md:text-sm leading-relaxed font-sans">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Prominent Admissions Inquiry Deck */}
      <section className="py-20 bg-slate-100/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Campus Visit Helplines */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[#0B3C5D] font-bold text-xs">Guided Tours Invitation</span>
                <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">
                  Book a Guided Campus Visit Next Saturday
                </h2>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
                Nothing builds confidence like walking along our lush green tracks, hearing smart classrooms in action, and checking first-aid unit hygiene levels ourselves.
              </p>

              <div className="p-5 bg-white border border-slate-200 rounded-2xl flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-50 text-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-xs uppercase leading-none mb-1.5">Timing constraints</h4>
                  <p className="text-slate-450 text-[11px] leading-normal">Guided walks operate on Saturday mornings between 9:00 AM and 12:30 PM. Complete the adjacent form to book.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Inline Inquiry */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -top-3 left-4 z-10 bg-amber-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  Infrastructure Inquiry Gate
                </div>
                <InquiryForm 
                  titleText="Register On-Campus Visit" 
                  sourcePage="Facilities" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
