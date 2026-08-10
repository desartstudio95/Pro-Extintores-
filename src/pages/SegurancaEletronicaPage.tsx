import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function SegurancaEletronicaPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">Segurança Eletrónica</h1>
          <img src="https://i.ibb.co/MxJ23pjv/Chat-GPT-Image-4-de-ago-de-2026-16-44-42.png" alt="Segurança Eletrónica" className="w-full h-64 object-cover rounded-2xl mb-8" />
          <div className="space-y-4 text-slate-700 font-light leading-relaxed">
            <p>A proteção das suas instalações passa por sistemas eletrónicos de alta fiabilidade. A Pro Extintores instala e mantém soluções avançadas de segurança para monitorizar, controlar acessos e prevenir intrusões.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Os Nossos Sistemas:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Instalação de Sistemas de Videovigilância (CCTV).</li>
              <li>Sistemas de Alarme de Intrusão.</li>
              <li>Controlo de Acessos (Biométrico, Cartões, Códigos).</li>
              <li>Vedações Elétricas de alta segurança.</li>
              <li>Serviços de automação de portões e portas de garagem.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
