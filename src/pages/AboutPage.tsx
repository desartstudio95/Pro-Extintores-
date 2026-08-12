import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Clients from '../components/Clients';

export default function AboutPage() {
  return (
    <main className="flex-grow flex flex-col gap-6 md:gap-8 lg:gap-10 pb-8 pt-20">
      <About />
      <Clients />
      <Contact />
    </main>
  );
}
