import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function SegurancaContraIncendiosPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <main className="flex-grow pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-pro-red font-semibold hover:underline mb-8">
          <ArrowLeft size={16} /> Voltar à página inicial
        </Link>
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">Segurança Contra Incêndios</h1>
          <img src="https://i.ibb.co/GfFh5TGF/Chat-GPT-Image-4-de-ago-de-2026-16-40-10.png" alt="Segurança Contra Incêndios" className="w-full h-64 object-cover rounded-2xl mb-8" />
          <div className="space-y-4 text-slate-700 font-light leading-relaxed">
            <p>Fornecemos soluções completas de segurança contra incêndios, projetadas para proteger vidas e patrimónios. Os nossos serviços abrangem desde o fornecimento de extintores até à instalação de redes complexas de combate ao fogo.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">O que oferecemos:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Fornecimento, revisão e recarga de extintores (Pó ABC, CO2, H2O).</li>
              <li>Instalação e manutenção de redes de incêndio, hidrantes e carretéis.</li>
              <li>Sistemas de detecção e alarme de incêndios.</li>
              <li>Sinalização de emergência fotoluminescente.</li>
              <li>Assessoria técnica especializada em medidas de prevenção.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
