/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { SCHOOL_FAQS } from '../data';
import { 
  MapPin, Phone, Mail, Clock, HelpCircle, 
  ChevronDown, ChevronUp, ExternalLink, MessageCircle 
} from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

interface ContactProps {
  setActivePage: (page: PageId) => void;
  onOpenInquiryModal: () => void;
}

export default function Contact({ setActivePage, onOpenInquiryModal }: ContactProps) {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(prev => (prev === id ? null : id));
  };

  const contactCards = [
    {
      icon: <MapPin className="h-6 w-6 text-amber-500" />,
      title: 'Lucknow Campus Address',
      details: 'Sector 6, Gomti Nagar Extension, Near Police Headquarters, Lucknow, Uttar Pradesh, ZIP - 226010'
    },
    {
      icon: <Phone className="h-6 w-6 text-amber-500" />,
      title: 'Helpline & Admissions',
      details: 'Primary Office: +91 94511 23456 | Admissions Inquiry Desk: +91 94511 78901'
    },
    {
      icon: <Mail className="h-6 w-6 text-[#0B3C5D]" />,
      title: 'Administrative Email Desk',
      details: 'General Queries: office@brightfuture.edu.in | Admissions: admissions@brightfuture.edu.in'
    },
    {
      icon: <Clock className="h-6 w-6 text-amber-500" />,
      title: 'Office Working Hours',
      details: 'Monday to Saturday: 8:00 AM - 3:00 PM | Saturday meetings require online counselor schedules.'
    }
  ];

  return (
    <div className="bg-white text-left">
      
      {/* 1. Hero Section */}
      <section className="relative py-16 bg-[#071320] text-white">
        <div className="absolute inset-0 z-0 opacity-15 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=1200"
            className="w-full h-full object-cover"
            alt="Office Study"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block font-sans">
            Connect With US
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-none">
            Location &amp; Help Desk
          </h1>
          <p className="text-slate-355 text-xs md:text-sm max-w-2xl mx-auto font-sans">
            Reach out to our registrar, secure admission catalog books, schedule a guided tour, or clarify fees structures.
          </p>
        </div>
      </section>

      {/* 2. Interactive Informative Contact Cards */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactCards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-start text-left font-sans"
            >
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center">
                {card.icon}
              </div>
              <div className="space-y-1">
                <h4 className="font-display font-bold text-slate-800 text-sm md:text-base">{card.title}</h4>
                <p className="text-slate-500 text-[11px] md:text-xs leading-relaxed font-medium">{card.details}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Google Maps Section & FAQ Grid */}
      <section className="py-10 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* FAQ Accordion column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-[#0B3C5D] font-bold text-xs font-sans">Common parent queries FAQ</span>
              <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">Admissions &amp; Academic FAQs</h2>
              <p className="text-slate-600 text-xs md:text-sm font-sans leading-relaxed">
                Click a question below to expand the detailed official administrative response:
              </p>
            </div>

            <div className="space-y-3 font-sans">
              {SCHOOL_FAQS.map((faq) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div 
                    key={faq.id} 
                    className="p-4 bg-white rounded-2xl border border-slate-200 transition-all text-xs"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full text-left font-bold text-[#0B3C5D] leading-relaxed flex justify-between items-center gap-2 cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5 font-semibold">
                        <HelpCircle className="h-4.5 w-4.5 text-amber-500" />
                        {faq.question}
                      </span>
                      {isOpen ? <ChevronUp className="h-4 w-4 shrink-0 text-slate-400" /> : <ChevronDown className="h-4 w-4 shrink-0 text-slate-400" />}
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-slate-500 leading-relaxed mt-3 pl-6 font-medium">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Map layout column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-amber-500 font-bold text-xs font-sans">Geographic coordinates</span>
              <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">Gomti Nagar Extension Branch Map</h2>
              <p className="text-slate-600 text-xs md:text-sm font-sans leading-relaxed">
                Our day-boarding campus sits in the heart of Lucknow extension. Map lines coordinate near bypass exit loops for quick pick-drops transit:
              </p>
            </div>

            {/* Simulated premium digital vector map container */}
            <div className="relative rounded-3xl overflow-hidden border border-slate-250 bg-slate-900 shadow-xl min-h-[300px] h-[350px]">
              {/* Overlay abstract background matching map mockups */}
              <div className="absolute inset-0 bg-[#071320] opacity-95"></div>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
              
              {/* Coordinate graphic mockups */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between relative z-10 text-white font-sans">
                <div className="space-y-2">
                  <div className="inline-flex px-3 py-1 rounded bg-[#0B3C5D] text-amber-400 text-[10px] font-bold uppercase tracking-wider border border-amber-400/20">
                    Gomti Nagar Branch Location
                  </div>
                  <h4 className="font-display font-medium text-lg leading-snug">Bright Future Public School Lucknow</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Opposite sector lawns parkway, 400m from UP State Police headquarters connecting bypass corridor.
                  </p>
                </div>

                <div className="space-y-3 pt-6 border-t border-slate-700/50">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-slate-400">Transit connection status</span>
                    <span className="text-emerald-400 font-bold">● High Frequency coverage</span>
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between text-center bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3.5 px-5 rounded-xl text-xs uppercase tracking-wider transition-all"
                  >
                    <span>Compute directions via Google Maps</span>
                    <ExternalLink className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Elite Admissions Inquiry Form section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-[#0B3C5D] font-bold text-xs uppercase tracking-widest block font-sans">Office Communications</span>
              <h3 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">Drop US a message today</h3>
              <p className="text-slate-600 text-xs md:text-sm font-sans leading-relaxed">
                Want to inquire about custom sibling waivers, check-bus seat availability, special board syllabus options, or schedule weekend counseling meets?
              </p>
            </div>

            <p className="text-slate-500 text-xs font-sans leading-relaxed">
              Complete the adjacent admissions inquiry index panel. Our Gomti Nagar Extension front office registrar coordinates file allocation immediately, launching callback confirmations in under 4 operating hours.
            </p>

            <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-xs uppercase font-sans">
              <MessageCircle className="h-5 w-5" />
              <span>Helpline Support Active | 8:00 AM - 3:00 PM</span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="relative">
              <div className="absolute -top-3 left-4 z-10 bg-[#0B3C5D] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                Direct Inquiry Gate
              </div>
              <InquiryForm 
                titleText="Register Candidates Credentials" 
                sourcePage="Contact" 
              />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
