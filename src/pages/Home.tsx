/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { PageId } from '../types';
import { 
  SCHOOL_STATS, WHY_CHOOSE_US, BOARD_TOPPERS, TESTIMONIALS, SCHOOL_FACILITIES 
} from '../data';
import { 
  ArrowRight, Sparkles, CheckCircle, GraduationCap, Trophy, 
  MapPin, Phone, Star, ClipboardCheck, ArrowUpRight, BookOpen, Clock,
  Beaker, Cpu, Monitor
} from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

interface HomeProps {
  setActivePage: (page: PageId) => void;
  onOpenInquiryModal: () => void;
}

export default function Home({ setActivePage, onOpenInquiryModal }: HomeProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* 1. Hero Section: Premium Banner of Indian Students */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center bg-[#071320] text-white">
        {/* Dynamic backdrop of Indian children inside classroom */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1595615243144-8f97d424dee8?auto=format&fit=crop&q=80&w=1600"
            alt="Indian schoolchildren learning in classroom"
            className="w-full h-full object-cover object-center opacity-30 transform scale-102 filter brightness-[0.8] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071320] via-[#071320]/80 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6 text-left">
            
            {/* Admissions tag */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30 text-xs sm:text-sm font-semibold tracking-wide"
            >
              <Sparkles className="h-4.5 w-4.5 animate-pulse" />
              <span>Admissions Open Academic Year 2026–27 (Nursery to Class XII)</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-black text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.05] text-white"
            >
              Shaping Bright Futures <br className="hidden sm:inline" />
              <span className="text-amber-400">Through Quality Education</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-300 text-sm sm:text-lg max-w-2xl leading-relaxed font-sans"
            >
              Nurturing Academic Excellence, Advanced Sports Mastery, and Ethical Character Building at our sprawling state-of-the-art Gomti Nagar Extension Campus. Affiliated with CBSE, New Delhi.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <button
                id="hero-apply-btn"
                onClick={onOpenInquiryModal}
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-amber-500/20 transition-all text-center uppercase tracking-wide cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                id="hero-explore-btn"
                onClick={() => {
                  setActivePage('facilities');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-xl border-2 border-slate-400 hover:border-white transition-all text-center uppercase tracking-wide cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Explore Campus</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </motion.div>

            {/* Affiliation footer badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-4 flex items-center gap-3 text-xs text-slate-400"
            >
              <span className="font-semibold text-slate-200 uppercase tracking-widest border-r border-slate-700 pr-3">CBSE Affiliation</span>
              <span>Fully Recognized Senior Board Academy • Lucknow District</span>
            </motion.div>

          </div>
          
          {/* Quick micro contact card right side */}
          <div className="hidden lg:block lg:col-span-4 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 text-slate-300">
            <h3 className="font-display font-bold text-white text-base mb-3 text-amber-400 pt-1">Visit Lucknow Campus</h3>
            <p className="text-xs leading-relaxed text-slate-300 font-sans mb-4">
              Schedule a counselor guided walk-through of our robotics laboratories, indoor sports center, and climate controlled digital classrooms.
            </p>
            <div className="space-y-3.5 text-xs text-slate-200">
              <div className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span>Sector 6, Gomti Nagar Extension</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span>Helpline: +91 94511 23456</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-amber-500 flex-shrink-0" />
                <span>Counseling Hours: 8:30 AM - 2:00 PM</span>
              </div>
            </div>
            <button
              onClick={onOpenInquiryModal}
              className="w-full mt-5 bg-white/10 hover:bg-amber-500 hover:text-slate-950 text-white text-[11px] font-bold py-3 px-4 rounded-xl border border-white/20 hover:border-transparent transition-all uppercase tracking-wider"
            >
              Book Campus Tour Slot
            </button>
          </div>
        </div>
      </section>

      {/* 2. Stats Section: Beautiful Golden Ribbon */}
      <section className="relative z-20 -mt-10 max-w-5xl mx-auto px-4">
        <div className="bg-[#0B3C5D] text-white rounded-2xl shadow-xl border-t-4 border-amber-500 px-6 py-8 md:py-10 grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 text-center items-center">
          {SCHOOL_STATS.map((stat, idx) => (
            <div key={stat.id} className={`space-y-1 ${idx < 3 ? 'lg:border-r border-slate-700/50' : ''}`}>
              <div className="font-display font-black text-3xl md:text-4xl text-amber-400 block tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-300 font-semibold uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Preview Section: Short School Introduction */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            {/* Visual background element */}
            <div className="absolute -inset-2 bg-amber-500 rounded-3xl transform rotate-1 opacity-20 filter blur-sm"></div>
            <img
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800"
              alt="Experienced Indian female instructor teaching children"
              className="relative rounded-2xl w-full h-[380px] object-cover shadow-lg border border-slate-100"
              referrerPolicy="no-referrer"
            />
            {/* Embedded small stats bubble */}
            <div className="absolute bottom-4 right-4 bg-white p-4.5 rounded-lg shadow-xl border border-slate-100 max-w-xs">
              <div className="flex items-center gap-2">
                <Trophy className="h-6 w-6 text-amber-500" />
                <div>
                  <p className="text-xs font-bold text-slate-900 leading-tight">Excellent Board Record</p>
                  <p className="text-[10px] text-slate-500 mt-0.5"> Lucknow district high honors</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="space-y-2">
              <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block">
                Welcome to Academic Excellence
              </span>
              <h2 className="font-display font-black text-3xl md:text-4xl text-slate-800 tracking-tight leading-tight">
                15 Years of Empowering Minds & Shaping Leaders
              </h2>
            </div>
            
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Bright Future Public School, Lucknow, is a prestigious co-educational private day-boarding academy affiliated with CBSE. Established in 2011, we are widely celebrated for merging hard-core academic rigor with holistic creative growth, digital learning skills, and stellar sporting routines.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 font-semibold">Comprehensive Smart Classroom curriculum</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 font-semibold">Specialized Olympiads and JEE foundation</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 font-semibold">Advanced robotics and tech learning</p>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-xs text-slate-700 font-semibold">GPS synced safe security transport grid</p>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <button
                onClick={() => {
                  setActivePage('about');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-1.5 font-bold text-xs text-[#0B3C5D] hover:text-amber-600 uppercase tracking-wider group cursor-pointer"
              >
                <span>Read School Journey</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us Section */}
      <section className="bg-slate-50/50 py-20 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-3xl mx-auto space-y-3">
            <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block">
              Core Foundations
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-slate-800 tracking-tight leading-tight">
              Why Bright Future Stands Distinct
            </h2>
            <p className="text-slate-500 text-sm md:text-base">
              Providing modern facilities designed to foster confidence, analytical reasoning, and athletic prowess.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {WHY_CHOOSE_US.slice(0, 5).map((wc, index) => (
              <div 
                key={wc.id} 
                className="bg-white p-6 rounded-2xl shadow-md border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div className="w-12 h-12 bg-slate-50 text-[#0B3C5D] rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#0B3C5D] group-hover:text-amber-400 transition-colors border border-slate-100">
                  {/* Map dynamic icon string to lucide */}
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="font-display font-bold text-slate-900 text-lg mb-2.5">
                  {wc.title}
                </h3>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed">
                  {wc.description}
                </p>
              </div>
            ))}
            
            {/* CTA conversion booster block inside why choose us grid */}
            <div className="bg-[#0B3C5D] p-6 rounded-2xl shadow-lg border border-slate-100/10 flex flex-col justify-between text-white select-none">
              <div>
                <span className="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-2">Admissions Status</span>
                <h4 className="font-display font-medium text-lg leading-snug">Limited Academic Vacancies Open for 2026–27</h4>
                <p className="text-slate-300 text-xs mt-2.5 leading-relaxed font-sans">
                  We maintain strict small-batch count ceilings per class to ensure personalized scholastic support for every individual.
                </p>
              </div>
              <button
                onClick={onOpenInquiryModal}
                className="mt-6 w-full text-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Inquire Vacancies Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Classroom & Academics Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 text-left">
          <div className="space-y-3">
            <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block">
              Coordinated Wings
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-slate-800 tracking-tight">
              Grade Curriculums Offered
            </h2>
            <p className="text-slate-500 text-sm">
              Tailoring developmental growth and specialized CBSE stream mentoring across age layers.
            </p>
          </div>
          <button
            onClick={() => {
              setActivePage('academics');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1.5 font-bold text-xs text-[#0B3C5D] hover:text-[#0c4c79] hover:underline uppercase tracking-wider group shrink-0"
          >
            <span>View Full Details</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {[
            { id: 'ap-1', title: 'Pre-Primary Wing', desc: 'Masters phonics, Montessori sensory tools, and coordinate game activities matching cognitive foundations.', years: 'Nursery to KG-II' },
            { id: 'ap-2', title: 'Primary Wing', desc: 'Focuses on critical speaking, numeric matrices, and general environment concepts based on NCERT directives.', years: 'Class I to V' },
            { id: 'ap-3', title: 'Middle & Secondary School', desc: 'Full transition into analytical subject lab streams, CBSE board simulations, and district debate assemblies.', years: 'Class VI to X' },
          ].map(wing => (
            <div key={wing.id} className="bg-white rounded-2xl border border-slate-100 p-6 shadow-md hover:shadow-lg transition-all relative overflow-hidden flex flex-col justify-between">
              <div className="absolute right-0 top-0 bg-slate-50 text-[#0B3C5D] text-[10px] font-bold px-3 py-1.5 rounded-bl-lg uppercase tracking-wider">
                {wing.years}
              </div>
              <div className="pt-2">
                <h4 className="font-display font-medium text-[#0B3C5D] text-lg mb-2">{wing.title}</h4>
                <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-4">{wing.desc}</p>
              </div>
              <button
                onClick={() => {
                  setActivePage('academics');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-amber-500 hover:text-amber-600 text-xs font-bold flex items-center gap-1 group"
              >
                <span>Syllabus breakdown</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Facilities Shortcut Container */}
      <section className="bg-slate-50 py-20 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-amber-500 font-bold text-xs uppercase tracking-[3px] block">
              Our Infrastructure
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-slate-800 tracking-tight">
              State-Of-The-Art Campuses &amp; Labs
            </h2>
            <p className="text-slate-550 text-xs md:text-sm max-w-xl mx-auto">
              We provide world-class, premium physical environments, advanced robotics, and heavy-duty science equipment optimizing security and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {SCHOOL_FACILITIES.slice(0, 4).map((facility, index) => {
              const icons = [
                <Monitor className="h-4.5 w-4.5 text-[#1e3a8a]" key="mon" />,
                <Beaker className="h-4.5 w-4.5 text-[#1e3a8a]" key="beak" />,
                <Cpu className="h-4.5 w-4.5 text-[#1e3a8a]" key="cpu" />,
                <BookOpen className="h-4.5 w-4.5 text-[#1e3a8a]" key="book" />
              ];
              const badg = [
                "Interactive learning",
                "CBSE compliance",
                "Gigabit fiber ready",
                "8,000+ books"
              ];
              return (
                <div 
                  key={facility.id} 
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/70 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Visual image box */}
                    <div className="h-48 bg-slate-50 overflow-hidden relative">
                      <img
                        src={facility.imageUrl}
                        alt={facility.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105 filter brightness-[0.98] contrast-[1.01]"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 bg-[#1e3a8a] text-white text-[9px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-md">
                        {facility.category}
                      </div>

                      <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-sm shadow-md rounded-full p-2 text-[#1e3a8a] flex items-center justify-center">
                        {icons[index] || <GraduationCap className="h-4.5 w-4.5 text-[#1e3a8a]" />}
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 space-y-2.5">
                      <span className="text-amber-500 font-bold text-[9px] uppercase tracking-wider block font-sans">
                        {badg[index]}
                      </span>
                      <h4 className="font-display font-extrabold text-slate-800 text-sm md:text-base tracking-tight leading-snug group-hover:text-blue-900 transition-colors">
                        {facility.title}
                      </h4>
                      <p className="text-slate-500 text-[11px] leading-relaxed font-sans font-medium line-clamp-3">
                        {facility.description}
                      </p>
                    </div>
                  </div>

                  {/* Stamp Row */}
                  <div className="px-5 pb-4 border-t border-slate-55 pt-3 flex items-center justify-between text-[10px] text-slate-400 font-sans font-medium">
                    <span className="flex items-center gap-1.5 text-emerald-600 font-bold">
                      <CheckCircle className="h-3.5 w-3.5 animate-pulse" /> Fully Checked
                    </span>
                    <span>Modern Fit</span>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="text-center pt-2">
            <button
              onClick={() => {
                setActivePage('facilities');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#1e3a8a] hover:bg-slate-950 text-white text-xs font-bold py-3.5 px-8 rounded-xl uppercase tracking-wider transition-all hover:scale-102 hover:shadow-lg hover:shadow-blue-900/10 cursor-pointer"
            >
              Tour All 8 Facilities
            </button>
          </div>
        </div>
      </section>

      {/* 7. Achievements Section: Board Toppers */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12 bg-gradient-to-b from-transparent to-slate-50/15">
        <div className="max-w-3xl mx-auto space-y-3">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-[3px] block font-sans">
            Academic Pride
          </span>
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-800 tracking-tight">
            Our 2025 Board Toppers
          </h2>
          <p className="text-slate-500 text-xs md:text-sm max-w-xl mx-auto">
            Honoring exceptional academic discipline. Our students consistently secure prestigious ranks inside the CBSE regional and Lucknow district merit rosters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
          {BOARD_TOPPERS.map(topper => (
            <div 
              key={topper.id} 
              className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-6 relative overflow-hidden group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Gold gradient accent decoration on hover */}
              <div className="absolute -top-12 -right-12 w-28 h-28 bg-amber-400/10 rounded-full blur-2xl group-hover:bg-amber-400/20 transition-all duration-300 pointer-events-none"></div>

              <div>
                {/* Score badge at the top */}
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-amber-100 text-amber-850 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans">
                    Academic Year {topper.year}
                  </span>
                  <div className="bg-gradient-to-tr from-amber-400 to-amber-500 text-blue-950 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider shadow-md font-sans">
                    {topper.metric} Topper
                  </div>
                </div>

                {/* Avatar with gold laurels frame */}
                <div className="relative w-28 h-28 mx-auto mb-5">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-400 to-amber-500 p-0.5 shadow-md group-hover:rotate-6 transition-transform duration-500">
                    <div className="w-full h-full bg-white rounded-full p-1">
                      <img
                        src={topper.imageUrl}
                        alt={topper.name}
                        className="w-full h-full object-cover rounded-full filter brightness-[0.98]"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  {/* Floating micro trophy decoration */}
                  <div className="absolute -bottom-1 right-1 bg-amber-400 text-blue-950 p-1.5 rounded-full shadow-md border border-white">
                    <Trophy className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Identity details */}
                <div className="space-y-1.5 px-2">
                  <h4 className="font-display font-black text-slate-850 text-[17px] tracking-tight group-hover:text-blue-900 transition-colors">
                    {topper.name}
                  </h4>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed font-sans mt-1">
                    {topper.achievement}
                  </p>
                </div>
              </div>

              {/* Bottom stamp */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[9px] text-slate-400 font-sans font-bold uppercase tracking-widest">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>100% Scholastic Excellence</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Testimonials Grid Section */}
      <section className="bg-slate-50 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-12">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block">
              Trusted Parent Verdicts
            </span>
            <h2 className="font-display font-black text-3xl md:text-4xl text-slate-800 tracking-tight">
              What Lucknow Guardians Say
            </h2>
            <p className="text-slate-500 text-xs md:text-sm">
              We focus heavily on building trust, student safety, and outstanding personal achievements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {TESTIMONIALS.map(test => (
              <div key={test.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-0.5 text-amber-500 mb-4">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="h-4.5 w-4.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-600 text-[13px] md:text-xs leading-relaxed italic mb-6">
                    &ldquo;{test.comment}&rdquo;
                  </p>
                </div>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-800 text-xs">{test.parentName}</p>
                  <p className="text-slate-400 text-[10px] uppercase font-bold mt-1 tracking-wider">{test.childClass}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Prominent Admissions Open CTA Banner */}
      <section className="bg-gradient-to-r from-[#0B3C5D] to-[#0c446c] py-20 text-white relative overflow-hidden select-none">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="bg-amber-500 text-slate-950 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest inline-block select-none">
            Secure Your Child&apos;s Future Today
          </span>
          <h2 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-tight">
            Schedule a Personal Counselor Meet &amp; Free Campus Tour
          </h2>
          <p className="text-slate-350 text-xs md:text-base max-w-2xl mx-auto">
            Witness our advanced computer center, state standard sports field, and elegant interactive touch-screen classrooms guided by expert counselors.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onOpenInquiryModal}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all hover:scale-102 hover:shadow-lg hover:shadow-amber-500/20 cursor-pointer"
            >
              Fill Admissions Form
            </button>
            <a
              href="tel:+919451123456"
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-xs uppercase tracking-wider transition-all border border-white/20 cursor-pointer flex items-center justify-center gap-1.5"
            >
              <Phone className="h-4 w-4 text-amber-500" />
              <span>Call Helpline desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* 10. Core Prominent Inquiry Deck (Required for every page) */}
      <section className="py-20 bg-slate-100/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
            
            {/* Left Column: Direct guidance checklist */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block">
                  On-Campus Interactions
                </span>
                <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">
                  Quick Admissions Guidelines 2026–27
                </h2>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
                Our enrollment process is designed to be deeply supportive and parent-centric. Follow these 4 simple milestones to lock your seat:
              </p>

              <div className="space-y-4">
                {[
                  { step: '01', title: 'Submit Digital Inquiry', desc: 'Fill out the adjacent online request card with child academic history details.' },
                  { step: '02', title: 'Admissions Desk Consultation', desc: 'Our Lucknow counsellor schedules a prompt interaction meet within 24 hours.' },
                  { step: '03', title: 'Pre-Admission Assessment', desc: 'Child undergoes our soft skill matching or educational proficiency assessment.' },
                  { step: '04', title: 'Certificate Lock & Seat Deposit', desc: 'Verify documents, submit photos, and reserve the slot via registration.' }
                ].map((item) => (
                  <div key={item.step} className="flex gap-3 items-start border-b border-slate-200 pb-3">
                    <span className="font-display font-extrabold text-[#0B3C5D] text-lg bg-[#0B3C5D]/10 px-2 py-0.5 rounded">
                      {item.step}
                    </span>
                    <div>
                      <h4 className="font-bold text-slate-800 text-xs leading-none mb-1.5">{item.title}</h4>
                      <p className="text-[11px] text-slate-400 font-sans leading-normal">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Prominent inline inquiry form */}
            <div className="lg:col-span-7">
              <div className="relative">
                {/* Visual anchor label */}
                <div className="absolute -top-3 left-4 z-10 bg-amber-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  Primary Entry Desk
                </div>
                <InquiryForm 
                  titleText="Register Admission Request Here" 
                  sourcePage="Home" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
