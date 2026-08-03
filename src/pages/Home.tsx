import React from 'react';
import Hero from '../components/Hero';
import BenefitBar from '../components/BenefitBar';
import Services from '../components/Services';
import Products from '../components/Products';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main className="flex-grow flex flex-col gap-16 md:gap-20 lg:gap-24 pb-16">
      <div className="flex flex-col">
        <Hero />
        <BenefitBar />
      </div>
      <Services />
      <Products />
      <HowItWorks />
      <Benefits />
      <Testimonials />
      <FAQ />
      <Contact />
    </main>
  );
}
