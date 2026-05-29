/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { PageId } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import InquiryModal from './components/InquiryModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('home');
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  // Automatically scroll to top on page switches
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // Dynamic Page Renderer routing
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={setActivePage} onOpenInquiryModal={() => setIsInquiryModalOpen(true)} />;
      case 'about':
        return <About setActivePage={setActivePage} onOpenInquiryModal={() => setIsInquiryModalOpen(true)} />;
      case 'academics':
        return <Academics setActivePage={setActivePage} onOpenInquiryModal={() => setIsInquiryModalOpen(true)} />;
      case 'facilities':
        return <Facilities setActivePage={setActivePage} onOpenInquiryModal={() => setIsInquiryModalOpen(true)} />;
      case 'gallery':
        return <Gallery setActivePage={setActivePage} onOpenInquiryModal={() => setIsInquiryModalOpen(true)} />;
      case 'admissions':
        return <Admissions setActivePage={setActivePage} onOpenInquiryModal={() => setIsInquiryModalOpen(true)} />;
      case 'contact':
        return <Contact setActivePage={setActivePage} onOpenInquiryModal={() => setIsInquiryModalOpen(true)} />;
      default:
        return <Home setActivePage={setActivePage} onOpenInquiryModal={() => setIsInquiryModalOpen(true)} />;
    }
  };

  return (
    <div id="school-website-app" className="min-h-screen bg-slate-50/35 flex flex-col justify-between font-sans selection:bg-amber-500 selection:text-slate-950 text-slate-700 antialiased overflow-x-hidden">
      
      {/* 1. Scholastic Navigation Head Deck */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
      />

      {/* 2. Core Dynamic Content Portals */}
      <main className="flex-grow transition-opacity duration-300">
        {renderPage()}
      </main>

      {/* 3. Deep Informative Coordinates Footer */}
      <Footer 
        setActivePage={setActivePage} 
        onOpenInquiryModal={() => setIsInquiryModalOpen(true)}
      />

      {/* 4. Global Floating WhatsApp Assistant */}
      <WhatsAppButton />

      {/* 5. Highly Interactive Admissions Inquiry Overlay */}
      <InquiryModal 
        isOpen={isInquiryModalOpen} 
        onClose={() => setIsInquiryModalOpen(false)}
        title="Bright Future Admission Request 2026-27"
      />

    </div>
  );
}
