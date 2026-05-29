/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MessageSquare, MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show a greeting bubble after 4 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenWhatsApp = () => {
    const phoneNumber = "919451123456"; // realistic Lucknow mock helpline
    const text = encodeURIComponent("Hello Bright Future Public School Lucknow! I am interested in seeking admissions for my child in 2026–27. Please share the fee structure, admissions brochure, and syllabus. Thank you.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Dynamic Popover Notification */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 15, scale: 0.9 }}
          className="bg-white rounded-2xl shadow-xl border border-emerald-50 p-4 mb-3 max-w-[270px] relative text-slate-800"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 cursor-pointer p-0.5"
            title="Dismiss greeting"
          >
            <X className="h-3 w-3" />
          </button>
          
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white">
              <MessageCircle className="h-4 w-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-800">Lucknow Admissions Office</p>
              <p className="text-[11px] text-slate-500 mt-1 leading-normal">
                Hello! Seeking admissions for 2026–27? Chat live with us now for booklets & seat status.
              </p>
              <button
                onClick={handleOpenWhatsApp}
                className="text-xs text-emerald-600 hover:text-emerald-700 font-bold mt-2 flex items-center gap-1 cursor-pointer"
              >
                Start Chatting →
              </button>
            </div>
          </div>
          {/* Accent pointer */}
          <div className="absolute right-6 -bottom-1.5 w-3.5 h-3.5 bg-white transform rotate-45 border-r border-b border-emerald-50"></div>
        </motion.div>
      )}

      {/* Primary Floating Button */}
      <motion.button
        id="whatsapp-floating-btn"
        onClick={handleOpenWhatsApp}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: [0, -4, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-full p-4 shadow-xl hover:shadow-emerald-200/50 transition-all cursor-pointer flex items-center justify-center border border-emerald-400/20"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6 stroke-[2.3]" />
      </motion.button>
    </div>
  );
}
