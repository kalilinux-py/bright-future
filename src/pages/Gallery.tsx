/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PageId, GalleryItem } from '../types';
import { GALLERY_IMAGES } from '../data';
import { Images, Calendar, Camera, Heart, Sparkles, Phone } from 'lucide-react';
import InquiryForm from '../components/InquiryForm';

interface GalleryProps {
  setActivePage: (page: PageId) => void;
  onOpenInquiryModal: () => void;
}

export default function Gallery({ setActivePage, onOpenInquiryModal }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Activities' },
    { id: 'annual', label: 'Annual function' },
    { id: 'sports', label: 'Sports Day' },
    { id: 'classroom', label: 'Classroom Life' },
    { id: 'exhibition', label: 'Science Exhibitions' },
    { id: 'cultural', label: 'Cultural Events' },
    { id: 'celebration', label: 'Independence Day' }
  ];

  const filteredImages = activeCategory === 'all' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="bg-white text-left">
      
      {/* 1. Hero Section */}
      <section className="relative py-16 bg-[#071320] text-white">
        <div className="absolute inset-0 z-0 overflow-hidden opacity-10">
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200"
            className="w-full h-full object-cover"
            alt="Auditorium"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-amber-400 font-bold text-xs uppercase tracking-widest block font-sans">
            Capturing Memories
          </span>
          <h1 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-none">
            Our Campus Life Gallery
          </h1>
          <p className="text-slate-350 text-xs md:text-sm max-w-2xl mx-auto">
            Browse through active moments from district athletics gold medals, national level robotics assemblies, and colorful cultural festivals.
          </p>
        </div>
      </section>

      {/* 2. Activity Filtering Tabs */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-2 px-5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer border select-none ${
                  activeCategory === cat.id
                    ? 'bg-[#0B3C5D] text-white border-[#0B3C5D] shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Modern Grid Gallery Layout with Animations */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-amber-500 font-bold text-xs uppercase tracking-widest block font-sans">Visual Chronicles</span>
          <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">Lively Memories Stream</h2>
          <p className="text-slate-500 text-xs md:text-sm">We document child progression continuously. Toggle the filters above to retrieve particular chronological events.</p>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 group relative cursor-pointer"
              >
                {/* Visual image layout */}
                <div className="h-60 overflow-hidden relative">
                  <img
                    src={img.imageUrl}
                    alt={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Backdrop overlay hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <p className="text-amber-400 font-bold text-[9px] uppercase tracking-wider leading-none mb-1.5">{img.category}</p>
                    <h4 className="text-white text-xs font-semibold leading-relaxed mb-1">{img.title}</h4>
                    <span className="text-slate-350 text-[10px] uppercase font-bold leading-normal">{img.date}</span>
                  </div>
                </div>

                {/* Constant visible layout descriptor for general access */}
                <div className="p-4 bg-white border-t border-slate-50">
                  <div className="flex justify-between items-center text-[10px] text-slate-400">
                    <span className="font-bold text-[#0B3C5D] uppercase truncate max-w-[170px]">{img.title}</span>
                    <span className="shrink-0 font-mono">{img.date.split(' ')[0]}</span>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredImages.length === 0 && (
          <div className="py-20 text-center space-y-3">
             <Camera className="h-12 w-12 text-slate-300 mx-auto" />
             <p className="text-slate-400 text-sm">No pictures files uploaded under this category yet.</p>
          </div>
        )}
      </section>

      {/* 4. Prominent Admissions Inquiry Deck */}
      <section className="py-20 bg-slate-100/50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Parental Invitation */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-[#0B3C5D] font-bold text-xs font-sans">Witness Excellence Live</span>
                <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 tracking-tight leading-none">
                  Witness This Vibrant Life in Action
                </h2>
              </div>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans animate-pulse">
                Behind every stunning image in our stream is a student conquering staging stages or setting up innovative physics designs. Visit Gomti Nagar campus to check out daily schedules.
              </p>

              <div className="p-5 bg-white border border-slate-200 rounded-2xl space-y-3 text-xs text-slate-600">
                <p className="font-bold text-[#0B3C5D] uppercase tracking-wider">Next On-Campus Event:</p>
                <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                  <span>Independence Day Drills rehearsals</span>
                  <span className="text-amber-600 font-bold font-mono">August 2026</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span>Robotics District Assembly</span>
                  <span className="text-amber-600 font-bold font-mono">October 2026</span>
                </div>
              </div>
            </div>

            {/* Right Column: Inline Inquiry */}
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="absolute -top-3 left-4 z-10 bg-amber-500 text-slate-950 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  Gallery Admissions Gateway
                </div>
                <InquiryForm 
                  titleText="Register On-Campus Visit Session" 
                  sourcePage="Gallery" 
                />
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
