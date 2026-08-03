import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-pro-black text-white selection:bg-pro-red/30 relative">
      <div className="fixed inset-0 dot-pattern pointer-events-none opacity-50 z-0"></div>
      <div className="fixed top-0 inset-x-0 h-[800px] accent-glow pointer-events-none z-0"></div>
      
      <Header />
      <main className="flex-grow flex flex-col gap-16 md:gap-20 lg:gap-24 pb-16">
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Benefits />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
