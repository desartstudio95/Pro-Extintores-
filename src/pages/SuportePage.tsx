import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import FAQ from '../components/FAQ';

export default function SuportePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="flex-grow pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <Link to="/" className="inline-flex items-center gap-2 text-pro-red font-semibold hover:underline">
          <ArrowLeft size={16} /> Voltar à página inicial
        </Link>
      </div>
      <FAQ />
    </main>
  );
}
