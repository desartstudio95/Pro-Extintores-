import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';

export default function AboutPage() {
  return (
    <main className="flex-grow flex flex-col gap-16 md:gap-20 lg:gap-24 pb-16 pt-32">
      <About />
      <Contact />
    </main>
  );
}
