import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function EquipamentosSegurancaPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-6">Equipamentos de Segurança</h1>
          <img src="https://i.ibb.co/j9mrkGw4/Chat-GPT-Image-4-de-ago-de-2026-16-47-29.png" alt="Equipamentos de Segurança" className="w-full h-64 object-cover rounded-2xl mb-8" />
          <div className="space-y-4 text-slate-700 font-light leading-relaxed">
            <p>Para garantir um ambiente de trabalho seguro e de acordo com as normas, oferecemos uma vasta gama de Equipamentos de Proteção Individual (EPI) e materiais de socorro adequados às exigências de cada setor.</p>
            <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Soluções Disponíveis:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Equipamentos de Proteção Individual (Capacetes, Luvas, Óculos, Botas, Coletes).</li>
              <li>Kits de Primeiros Socorros homologados.</li>
              <li>Mantas ignífugas (mantas de incêndio).</li>
              <li>Armários e suportes para equipamentos de emergência.</li>
              <li>Uniformes e fardamentos técnicos de segurança.</li>
            </ul>
            <div className="pt-8">
              <Link to="/produtos/equipamentos-epi" className="inline-flex items-center justify-center gap-2 bg-pro-red text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform w-full sm:w-auto">
                Ver Produtos (EPIs)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
