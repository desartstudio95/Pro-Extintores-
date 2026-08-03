import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Services from './components/Services';
import Products from './components/Products';
import About from './components/About';
import Clients from './components/Clients';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-pro-red/30">
      <Header />
      <main className="flex-grow flex flex-col">
        <Hero />
        <Benefits />
        <Services />
        <Products />
        <About />
        <Clients />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
