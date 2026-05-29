/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { User, Phone, Mail, BookOpen, MessageSquare, CheckCircle2, Sparkles, Loader2, ArrowRight } from 'lucide-react';

interface InquiryFormProps {
  compact?: boolean;
  onSuccessCallback?: () => void;
  titleText?: string;
  sourcePage?: string;
}

export default function InquiryForm({
  compact = false,
  onSuccessCallback,
  titleText = "Request Admissions Information",
  sourcePage = "General"
}: InquiryFormProps) {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    className: '',
    phoneNumber: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<typeof formData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState('');

  const classOptions = [
    'Nursery', 'L.K.G.', 'U.K.G.',
    'Class I', 'Class II', 'Class III', 'Class IV', 'Class V',
    'Class VI', 'Class VII', 'Class VIII', 'Class IX', 'Class X',
    'Class XI (Science - PCM)', 'Class XI (Science - PCB)', 'Class XI (Commerce)', 'Class XI (Humanities)',
    'Class XII (Science)', 'Class XII (Commerce)', 'Class XII (Humanities)'
  ];

  const validate = () => {
    const tempErrors: Partial<typeof formData> = {};
    if (!formData.studentName.trim()) tempErrors.studentName = 'Student name is required';
    if (!formData.parentName.trim()) tempErrors.parentName = "Parent/Guardian's name is required";
    if (!formData.className) tempErrors.className = 'Please select a class';
    
    // Indian phone format or general 10 digit validation
    const phoneNo = formData.phoneNumber.replace(/[^0-9]/g, '');
    if (!formData.phoneNumber) {
      tempErrors.phoneNumber = 'Phone number is required';
    } else if (phoneNo.length < 10) {
      tempErrors.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        tempErrors.email = 'Please enter a valid email address';
      }
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof formData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate real server sync
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const randomCode = 'BFP-2026-' + Math.floor(1000 + Math.random() * 9000);
      setInquiryCode(randomCode);
      if (onSuccessCallback) {
        onSuccessCallback();
      }
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      parentName: '',
      className: '',
      phoneNumber: '',
      email: '',
      message: ''
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className={`bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden ${compact ? 'p-5' : 'p-6 md:p-8'}`}>
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.div
            key="inquiry-form-active"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2 text-amber-500 font-semibold text-xs uppercase tracking-wider">
                <Sparkles className="h-4 w-4" />
                <span>Admissions Open 2026–27</span>
              </div>
              <h3 className={`font-display font-semibold text-slate-800 tracking-tight leading-tight ${compact ? 'text-lg' : 'text-xl md:text-2xl'}`}>
                {titleText}
              </h3>
              <p className="text-slate-500 text-xs mt-1.5 md:text-sm">
                 Lucknow Campus | Complete details will be sent directly via WhatsApp & Email.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Parent/Guardian's Name */}
                <div className="space-y-1">
                  <label htmlFor="parentName" className="block text-xs font-semibold text-slate-600 uppercase">
                    Parent / Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      name="parentName"
                      id="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className={`block w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 bg-slate-50 border-slate-200 text-slate-800 transition-all ${
                        errors.parentName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200'
                      }`}
                      placeholder="e.g. Ramesh Chandra"
                    />
                  </div>
                  {errors.parentName && <p className="text-red-500 text-[11px] font-medium leading-none">{errors.parentName}</p>}
                </div>

                {/* Student's Full Name */}
                <div className="space-y-1">
                  <label htmlFor="studentName" className="block text-xs font-semibold text-slate-600 uppercase">
                    Student Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      name="studentName"
                      id="studentName"
                      value={formData.studentName}
                      onChange={handleInputChange}
                      className={`block w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 bg-slate-50 border-slate-200 text-slate-800 transition-all ${
                        errors.studentName ? 'border-red-400 focus:ring-red-200' : 'border-slate-200'
                      }`}
                      placeholder="e.g. Aarav Chandra"
                    />
                  </div>
                  {errors.studentName && <p className="text-red-500 text-[11px] font-medium leading-none">{errors.studentName}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Target Class selection */}
                <div className="space-y-1">
                  <label htmlFor="className" className="block text-xs font-semibold text-slate-600 uppercase">
                    Seeking Admission In <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <BookOpen className="h-4 w-4 text-slate-400" />
                    </div>
                    <select
                      name="className"
                      id="className"
                      value={formData.className}
                      onChange={handleInputChange}
                      className={`block w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 bg-slate-50 border-slate-200 text-slate-800 transition-all ${
                        errors.className ? 'border-red-400 focus:ring-red-200' : 'border-slate-200 animate-pulse'
                      }`}
                    >
                      <option value="">Select Grade Stream</option>
                      {classOptions.map(cls => (
                        <option key={cls} value={cls}>{cls}</option>
                      ))}
                    </select>
                  </div>
                  {errors.className && <p className="text-red-500 text-[11px] font-medium leading-none">{errors.className}</p>}
                </div>

                {/* Mobile/Phone Number */}
                <div className="space-y-1">
                  <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-600 uppercase">
                    WhatsApp Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-4 w-4 text-slate-400" />
                    </div>
                    <div className="absolute inset-y-0 left-8 pl-1 flex items-center pointer-events-none text-xs text-slate-500 font-semibold border-r border-slate-200 pr-1">
                      +91
                    </div>
                    <input
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      maxLength={10}
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className={`block w-full pl-[56px] pr-3 py-2.5 text-sm rounded-lg border focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 bg-slate-50 border-slate-200 text-slate-800 transition-all ${
                        errors.phoneNumber ? 'border-red-400 focus:ring-red-200' : 'border-slate-200'
                      }`}
                      placeholder="9876543210"
                    />
                  </div>
                  {errors.phoneNumber && <p className="text-red-500 text-[11px] font-medium leading-none">{errors.phoneNumber}</p>}
                </div>
              </div>

              {/* Email ID */}
              <div className="space-y-1">
                <label htmlFor="email" className="block text-xs font-semibold text-slate-600 uppercase">
                  Email Address <span className="text-slate-400">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-slate-400" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`block w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 bg-slate-50 border-slate-200 text-slate-800 transition-all ${
                      errors.email ? 'border-red-400 focus:ring-red-200' : 'border-slate-200'
                    }`}
                    placeholder="parent@example.com"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-[11px] font-medium leading-none">{errors.email}</p>}
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label htmlFor="message" className="block text-xs font-semibold text-slate-600 uppercase">
                  Brief Inquiry Message <span className="text-slate-400">(Optional)</span>
                </label>
                <div className="relative">
                  <div className="absolute top-3 left-3 pointer-events-none">
                    <MessageSquare className="h-4 w-4 text-slate-400" />
                  </div>
                  <textarea
                    name="message"
                    id="message"
                    rows={compact ? 2 : 3}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="block w-full pl-9 pr-3 py-2.5 text-sm rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-900/20 focus:border-blue-900 bg-slate-50 text-slate-800 transition-all"
                    placeholder="Ask about fees, transport routes, syllabus details, uniform, boarding guidelines..."
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <button
                id="submit-admission-btn"
                type="submit"
                disabled={isSubmitting}
                className="w-full relative shadow-md hover:shadow-lg transition-all text-white font-medium text-sm md:text-base bg-[#0B3C5D] hover:bg-[#082E47] py-3 rounded-lg flex items-center justify-center gap-2 cursor-pointer group disabled:bg-slate-300 disabled:cursor-not-allowed group"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span>Transmitting Inquiry to Office...</span>
                  </>
                ) : (
                  <>
                    <span>Apply Now | Secure Seat</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center leading-relaxed">
                🛡️ By submitting, you grant permission to Bright Future Public School Lucknow to share school brochures, fee guides, and CBSE curricula via call/sms/WhatsApp.
              </p>
            </form>
          </motion.div>
        ) : (
          <motion.div
            key="inquiry-form-success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="text-center py-8 px-4"
          >
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-100">
              <CheckCircle2 className="h-10 w-10 stroke-[2]" />
            </div>

            <h4 className="font-display text-xl font-bold text-slate-800 mb-2">
              Inquiry Submitted Successfully!
            </h4>
            
            <p className="text-slate-500 text-sm max-w-sm mx-auto mb-6">
              Thank you for choosing <span className="text-[#0B3C5D] font-semibold">Bright Future Public School</span>. Your academic counsel file has been successfully initialized.
            </p>

            {/* Generated token summary board */}
            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-left max-w-sm mx-auto mb-6">
              <div className="flex justify-between items-center mb-2.5 pb-2.5 border-b border-dashed border-slate-200">
                <span className="text-xs font-semibold text-slate-400 uppercase">Inquiry ID Code</span>
                <span className="text-sm font-mono font-bold text-[#0B3C5D] tracking-wider">{inquiryCode}</span>
              </div>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div><span className="font-semibold">Candidate:</span> {formData.studentName}</div>
                <div><span className="font-semibold">Target Grade:</span> {formData.className}</div>
                <div><span className="font-semibold">Counselor:</span> Ms. Pooja Sharma (Lucknow office)</div>
                <div><span className="font-semibold">Response estimate:</span> Under 4 hours (via Call/WhatsApp)</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-sm mx-auto">
              <button
                type="button"
                onClick={handleReset}
                className="w-full text-slate-500 hover:text-slate-800 text-xs font-semibold py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors uppercase tracking-wider"
              >
                Submit fresh inquiry
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
