import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Clients from '../components/Clients';

export default function AboutPage() {
  return (
    <main className="flex-grow flex flex-col gap-10 md:gap-10 lg:gap-12 pb-10 pt-24">
      <About />
      <Clients />
      <Contact />
    </main>
  );
}
