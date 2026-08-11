import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import ServiceForm from '../components/ServiceForm';

export default function ManutencaoPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">Manutenção e Revisão</h1>
          <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" alt="Manutenção e Revisão" className="w-full h-64 object-cover rounded-2xl mb-8" />
          <div className="space-y-4 text-slate-700 font-light leading-relaxed">
            <p>Ter equipamentos de segurança de pouco serve se eles não estiverem em perfeitas condições quando for necessário usá-los. A Pro Extintores dispõe de serviços regulares de manutenção para garantir a funcionalidade total do seu sistema.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Planos de Manutenção:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Manutenção Preventiva e Corretiva de Extintores (Revisão anual, Testes hidrostáticos).</li>
              <li>Recarga de todos os tipos de extintores (Pó ABC, CO2, Água, Espuma).</li>
              <li>Manutenção de Sistemas de Detecção de Incêndios e CCTV.</li>
              <li>Ensaios e testes operacionais a Redes de Incêndio (bombas e carretéis).</li>
              <li>Auditorias de segurança para verificação de conformidade.</li>
            </ul>
            <div className="pt-8">
              <Link to="/#products" className="inline-flex items-center justify-center gap-2 bg-pro-red text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform w-full sm:w-auto">
                Ver Todos os Produtos
              </Link>
            </div>
          </div>
        </div>
        <ServiceForm />
      </div>
    </main>
  );
}
