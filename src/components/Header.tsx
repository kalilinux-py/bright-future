/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId } from '../types';
import { Menu, X, Phone, Mail, GraduationCap, MapPin, Award, Send, Calendar } from 'lucide-react';

interface HeaderProps {
  activePage: PageId;
  setActivePage: (page: PageId) => void;
  onOpenInquiryModal: () => void;
}

export default function Header({ activePage, setActivePage, onOpenInquiryModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll behavior to reveal navbar on scroll up and hide on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Compact the header if scrolled past the top banner
      if (currentScrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Always show navbar at the absolute top of the page
      if (currentScrollY < 120) {
        setVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down -> hide navbar
        setVisible(false);
      } else {
        // Scrolling up -> show navbar
        setVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'academics', label: 'Academics' },
    { id: 'facilities', label: 'Facilities' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'admissions', label: 'Admissions' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (pageId: PageId) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 w-full shadow-md bg-white/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
      visible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Level 1: Elite Announcement & Fast Helpline Ticker */}
      <div className={`bg-[#0B3C5D] text-white text-xs px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 border-b border-[#144b72]/30 transition-all duration-350 ease-in-out overflow-hidden ${
        isScrolled ? 'max-h-0 py-0 opacity-0 border-b-transparent pointer-events-none' : 'max-h-[80px] py-2.5 opacity-100'
      }`}>
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] md:text-xs">
          <div className="flex items-center gap-1.5 text-slate-100 font-medium">
            <MapPin className="h-3.5 w-3.5 text-amber-500" />
            <span>Gomti Nagar Extension, Lucknow, UP</span>
          </div>
          <div className="flex items-center gap-1.5 text-slate-100 font-medium">
            <Phone className="h-3.5 w-3.5 text-amber-500" />
            <span>Admissions Desk: +91 94511 23456</span>
          </div>
          <div className="hidden lg:flex items-center gap-1.5 text-slate-100">
            <Mail className="h-3.5 w-3.5 text-amber-500" />
            <span>admissions@brightfuture.edu.in</span>
          </div>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase animate-pulse">
            Admissions Open 2026-27
          </span>
          <span className="text-[11px] text-amber-200 hidden sm:inline">
            • Nursery to Class XII (CBSE Code: UP-8442)
          </span>
        </div>
      </div>

      {/* Level 2: Primary Branding Navbar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center transition-all duration-350 ${
        isScrolled ? 'py-2 md:py-2.5' : 'py-4'
      }`}>
        {/* Academic School Crest & Branding Title */}
        <div 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          {/* Elite Gold & Navy School Crest Logo */}
          <div className="relative w-11 h-11 bg-[#0B3C5D] rounded-full flex items-center justify-center text-white border-2 border-amber-400 shadow-md group-hover:scale-105 transition-transform">
            <GraduationCap className="h-6 w-6 text-amber-300" />
            <div className="absolute -inset-0.5 border border-amber-400 rounded-full animate-ping opacity-10 pointer-events-none"></div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-display font-extrabold text-[#0B3C5D] text-lg md:text-xl tracking-tight leading-none group-hover:text-amber-600 transition-colors">
                BRIGHT FUTURE
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-amber-500 font-bold text-[9px] md:text-[10px] tracking-widest uppercase leading-none block">
                PUBLIC SCHOOL • LUCKNOW
              </span>
              <span className="text-slate-400 text-[8px] leading-none border-l border-slate-300 pl-1">
                Estd. 2011
              </span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Paths */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-4 py-2 rounded-lg text-sm font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive 
                    ? 'text-[#0B3C5D] font-bold bg-slate-50' 
                    : 'text-slate-600 hover:text-[#0B3C5D] hover:bg-slate-50/50'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="activeIndicator" 
                    className="absolute bottom-1 left-4 right-4 h-0.5 bg-amber-500 rounded-full" 
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Button Trigger Admission inquiry Modal */}
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={onOpenInquiryModal}
            className="bg-[#0B3C5D] hover:bg-[#082E47] text-white text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all hover:scale-102 hover:shadow-lg hover:shadow-slate-200 cursor-pointer border border-[#0B3C5D]"
          >
            Apply for Admission
          </button>
        </div>

        {/* Hamburger Trigger for Mobile layouts */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenInquiryModal}
            className="bg-[#0B3C5D] text-white px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-[#0B3C5D] hover:bg-slate-100 rounded-lg cursor-pointer transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation with Motion */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-slate-100 bg-white overflow-hidden shadow-inner uppercase tracking-wider"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`block w-full text-left px-4 py-3 rounded-lg text-xs font-bold transition-all ${
                      isActive 
                        ? 'text-[#0B3C5D] bg-slate-100 font-extrabold border-l-4 border-amber-500 pl-3' 
                        : 'text-slate-600 hover:text-[#0B3C5D] hover:bg-slate-50'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              
              <div className="pt-4 border-t border-slate-100 pb-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenInquiryModal();
                  }}
                  className="w-full text-center bg-[#0B3C5D] hover:bg-[#082E47] text-white py-3 rounded-lg text-xs font-bold uppercase tracking-wider"
                >
                  Apply Online Now
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
