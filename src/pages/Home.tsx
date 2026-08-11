import React from 'react';
import Hero from '../components/Hero';
import BenefitBar from '../components/BenefitBar';
import Services from '../components/Services';
import Products from '../components/Products';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import HowWeHelp from '../components/HowWeHelp';
import Contact from '../components/Contact';
import Clients from '../components/Clients';

export default function Home() {
  return (
    <main className="flex-grow flex flex-col gap-6 md:gap-8 lg:gap-10 pb-8">
      <div className="flex flex-col">
        <Hero />
        <BenefitBar />
      </div>
      <Services />
      <Products />
      <HowItWorks />
      <Benefits />
      <HowWeHelp />
      <Clients />
      <Contact />
    </main>
  );
}
