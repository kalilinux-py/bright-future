/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { PageId } from '../types';
import { 
  MapPin, Phone, Mail, Clock, ShieldCheck, 
  Facebook, Twitter, Youtube, Instagram, Linkedin, 
  ExternalLink, GraduationCap, ChevronRight 
} from 'lucide-react';

interface FooterProps {
  setActivePage: (page: PageId) => void;
  onOpenInquiryModal: () => void;
}

export default function Footer({ setActivePage, onOpenInquiryModal }: FooterProps) {
  const handleNavClick = (pageId: PageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0b1f33] text-slate-300 pt-16 pb-8 border-t-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Branch 1: Scholastic Identity */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#0B3C5D] rounded-full flex items-center justify-center text-white border border-amber-400">
              <GraduationCap className="h-5 w-5 text-amber-400" />
            </div>
            <div>
              <span className="font-display font-extrabold text-white text-base tracking-tight leading-none">
                BRIGHT FUTURE
              </span>
              <span className="text-amber-400 font-bold text-[9px] tracking-widest uppercase leading-none block mt-1">
                PUBLIC SCHOOL
              </span>
            </div>
          </div>
          
          <p className="text-xs text-slate-400 leading-relaxed">
            One of the state&apos;s most respected educational sanctuaries, nurturing intellectual strength, sporting discipline, and creative capability for tomorrow&apos;s global citizens.
          </p>

          <div className="pt-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 text-amber-400 border border-slate-700 text-xs font-semibold">
              <ShieldCheck className="h-4 w-4" />
              <span>CBSE Affiliation No: 2130982 (New Delhi)</span>
            </div>
          </div>

          {/* Social indices wrappers */}
          <div className="flex items-center gap-3 pt-2">
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center transition-colors text-slate-300" aria-label="Facebook Link">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center transition-colors text-slate-300" aria-label="Instagram Link">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center transition-colors text-slate-300" aria-label="Twitter Link">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" className="w-8 h-8 rounded-full bg-slate-800 hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center transition-colors text-slate-300" aria-label="YouTube Link">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Branch 2: Quick Links Directory */}
        <div>
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-6 border-b border-slate-800 pb-2">
            Academic Directories
          </h4>
          <ul className="space-y-3 text-xs">
            {[
              { id: 'home', label: 'Primary Campus' },
              { id: 'about', label: 'Principal’s Desk Message' },
              { id: 'academics', label: 'CBSE Stream Choices' },
              { id: 'facilities', label: 'Campus Infrastructure' },
              { id: 'gallery', label: 'Lively School Memories' },
              { id: 'admissions', label: 'Admissions Fee Guide' },
              { id: 'contact', label: 'Location & Helplines' }
            ].map(link => (
              <li key={link.id}>
                <button
                  onClick={() => handleNavClick(link.id as PageId)}
                  className="flex items-center gap-1.5 text-slate-400 hover:text-amber-400 hover:translate-x-1 transition-all cursor-pointer text-left"
                >
                  <ChevronRight className="h-3 w-3 text-amber-500 flex-shrink-0" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Branch 3: Official Contact Credentials */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-2 border-b border-slate-800 pb-2">
            Lucknow Premises
          </h4>
          <div className="space-y-3.5 text-xs">
            <div className="flex items-start gap-2.5">
              <MapPin className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <p className="text-slate-400 leading-relaxed font-sans">
                Sector 6, Gomti Nagar Extension,<br />
                Near Police Headquarters, Lucknow,<br />
                Uttar Pradesh, ZIP - 226010
              </p>
            </div>
            
            <div className="flex items-start gap-2.5">
              <Phone className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="text-slate-400 font-semibold font-sans">
                <p>Office: +91 94511 23456</p>
                <p>Admission: +91 94511 78901</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Mail className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="text-slate-400 font-sans">
                <p>office@brightfuture.edu.in</p>
                <p>principal@brightfuture.edu.in</p>
              </div>
            </div>

            <div className="flex items-start gap-2.5">
              <Clock className="h-4 w-4 text-amber-500 flex-shrink-0 mt-0.5" />
              <div className="text-slate-400 leading-relaxed font-sans">
                <p className="font-semibold text-slate-300">Office Working Hours:</p>
                <p>Mon - Sat: 08:00 AM - 03:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Branch 4: Visual Map Placement Placeholder */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider mb-2 border-b border-slate-800 pb-2">
            Location Coordinate Map
          </h4>
          
          {/* Beautiful interactive map frame inside custom styled tailwind cards */}
          <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-slate-900 group shadow-lg height-[150px]">
             {/* Styled schematic map preview */}
             <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#334155_1.5px,transparent_1.5px)] [background-size:16px_16px]"></div>
             <div className="relative p-4 flex flex-col justify-between h-full min-h-[140px]">
               <div>
                 <p className="text-[11px] font-bold text-white uppercase tracking-wider">Gomti Nagar Branch Office</p>
                 <p className="text-[10px] text-slate-400 mt-1 leading-normal">
                   Adjacent to Police Headquarters parkway, Lucknow bypass connection.
                 </p>
               </div>
               
               <a 
                 href="https://maps.google.com" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="inline-flex items-center justify-between bg-amber-500 hover:bg-amber-600 text-slate-950 text-[10px] font-bold py-2 px-3 rounded-lg uppercase tracking-wide transition-all select-none"
               >
                 <span>Open Lucknow Map</span>
                 <ExternalLink className="h-3 w-3" />
               </a>
             </div>
          </div>
          
          <button
            onClick={onOpenInquiryModal}
            className="w-full text-center border border-dashed border-slate-700 hover:border-amber-400 hover:text-white text-slate-400 hover:bg-amber-500/10 text-xs py-2.5 rounded-lg font-bold uppercase tracking-wider transition-all"
          >
            Schedule Campus Tour
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-slate-800 text-center md:flex md:justify-between md:items-center text-xs text-slate-400">
        <p className="mb-4 md:mb-0">
          © {currentYear} Bright Future Public School, Lucknow. All Rights Reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <span className="hover:text-amber-400 cursor-pointer" onClick={() => handleNavClick('about')}>About</span>
          <span className="hover:text-amber-400 cursor-pointer" onClick={() => handleNavClick('academics')}>Curriculum</span>
          <span className="hover:text-amber-400 cursor-pointer" onClick={() => handleNavClick('admissions')}>Fee Inquiries</span>
          <span className="hover:text-amber-400 cursor-pointer" onClick={() => handleNavClick('contact')}>Campus Tour</span>
          <a href="#" className="hover:text-amber-400">T&amp;C Rules</a>
        </div>
      </div>
    </footer>
  );
}
