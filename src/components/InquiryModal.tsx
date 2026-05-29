/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { X, GraduationCap, ShieldCheck } from 'lucide-react';
import InquiryForm from './InquiryForm';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

export default function InquiryModal({ isOpen, onClose, title }: InquiryModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          {/* Overlay backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#071320]"
          />

          {/* Modal box holder */}
          <div className="flex min-h-screen items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden"
            >
              {/* Close Button Trigger */}
              <button
                id="close-modal-x"
                onClick={onClose}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                title="Close Form"
              >
                <X className="h-4 w-4 stroke-[2.5]" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-12">
                {/* Left side: Elite school message banner in desktop layouts */}
                <div className="hidden md:flex md:col-span-4 bg-[#0B3C5D] p-6 text-white flex-col justify-between relative overflow-hidden">
                  {/* Styled background patterns */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                  
                  <div className="space-y-4 relative z-10">
                    <div className="w-10 h-10 bg-[#0E4A72] rounded-full flex items-center justify-center border border-amber-400">
                      <GraduationCap className="h-5 w-5 text-amber-400" />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-base leading-tight">Bright Future Public School</h4>
                      <p className="text-[10px] text-amber-400 uppercase tracking-widest font-bold mt-1">Lucknow</p>
                    </div>
                  </div>

                  <div className="space-y-4 relative z-10 pb-4">
                    <div className="flex items-center gap-2 text-xs">
                      <ShieldCheck className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                      <span>CBSE Syllabus Code</span>
                    </div>
                    <p className="text-[11px] text-slate-300 leading-relaxed font-sans">
                      Our admissions wing will contact you shortly to schedule your personal campus tour and entrance guidance.
                    </p>
                  </div>
                </div>

                {/* Right side: Core form */}
                <div className="col-span-12 md:col-span-8">
                  <InquiryForm 
                    compact={true} 
                    titleText={title || "Online Admission Inquiry 2026-27"}
                    onSuccessCallback={() => {
                      // Custom delay to let the parents view their success badge before closing
                      setTimeout(() => {
                        // User can close it manually, let's keep it visible so they see their receipt tracking code!
                      }, 4000);
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
