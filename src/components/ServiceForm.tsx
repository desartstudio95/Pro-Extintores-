import React from 'react';
import { Send, MessageCircle, Phone } from 'lucide-react';

export default function ServiceForm() {
  return (
    <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-pro-red/5 rounded-full blur-[80px] -z-10"></div>
      
      <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 mb-4 tracking-tight">
            Precisa de uma solução contra incêndios?
          </h2>
          <p className="text-slate-600 mb-8 text-base">
            Conte-nos o que precisa. A nossa equipa técnica entrará em contacto consigo.
          </p>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <h4 className="font-bold text-gray-900 mb-4">Prefere falar diretamente?</h4>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/258841234567" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-sm">
                <MessageCircle size={18} /> WhatsApp
              </a>
              <a href="tel:+258855240453" className="flex-1 inline-flex items-center justify-center gap-2 bg-gray-900 text-white px-6 py-3.5 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-sm">
                <Phone size={18} /> Ligar agora
              </a>
            </div>
          </div>
        </div>

        <div>
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">1. Tipo de instalação</label>
                <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm" placeholder="Ex: Escritório" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">2. Serviço necessário</label>
                <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm" placeholder="Ex: Extintores" />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">3. Localização</label>
                <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm" placeholder="Ex: Maputo" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">4. Telefone</label>
                <input type="tel" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm" placeholder="+258 8..." />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">5. Nome</label>
                <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-1.5">6. Empresa</label>
                <input type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm" placeholder="Sua empresa" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1.5">7. Mensagem</label>
              <textarea rows={3} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm resize-none" placeholder="Detalhes adicionais..."></textarea>
            </div>

            <button type="button" className="w-full bg-pro-red text-white hover:bg-red-700 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-pro-red/20 active:scale-[0.98]">
              Solicitar orçamento
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
