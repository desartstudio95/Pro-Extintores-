import React from 'react';
import { Flame, Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-pro-blue text-white pt-20 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 border-b border-white/10 pb-16">
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pro-red to-pro-dark flex items-center justify-center text-white shadow-lg shadow-pro-red/20">
                <Flame size={20} />
              </div>
              <span className="text-xl font-bold font-heading tracking-tight">
                PRO EXTINTORES<span className="text-pro-red">.</span>
              </span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed mb-8 text-sm">
              A sua parceira de confiança em Moçambique para soluções integradas de Segurança Contra Incêndios e Segurança Eletrónica.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-pro-red hover:bg-pro-red/10 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-pro-red hover:bg-pro-red/10 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-pro-red hover:bg-pro-red/10 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Empresa</h4>
            <ul className="space-y-4 font-light text-sm">
              <li><a href="#about" className="text-gray-400 hover:text-pro-red transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pro-red transition-colors">Missão</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pro-red transition-colors">Certificações</a></li>
              <li><a href="#" className="text-gray-400 hover:text-pro-red transition-colors">Carreiras</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Serviços</h4>
            <ul className="space-y-4 font-light text-sm">
              <li><a href="#services" className="text-gray-400 hover:text-pro-red transition-colors">Venda de Extintores</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pro-red transition-colors">Instalação</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pro-red transition-colors">Manutenção</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-pro-red transition-colors">Sinalização</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contactos</h4>
            <ul className="space-y-4 font-light text-sm">
              <li className="flex items-start gap-3">
                <Phone size={16} className="text-pro-red mt-1 shrink-0" />
                <a href="tel:+258800000000" className="text-gray-400 hover:text-pro-red transition-colors">+258 800 000 000</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={16} className="text-pro-red mt-1 shrink-0" />
                <a href="mailto:info@proextintores.co.mz" className="text-gray-400 hover:text-pro-red transition-colors">info@proextintores.co.mz</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-pro-red mt-1 shrink-0" />
                <span className="text-gray-400">Av. 24 de Julho, Maputo<br/>Moçambique</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-pro-red mt-1 shrink-0" />
                <span className="text-gray-400">Seg - Sex: 08:00 - 17:00<br/>Atendimento 24/7 p/ Emergências</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Localização</h4>
            <div className="w-full h-40 bg-white/5 rounded-xl border border-white/10 overflow-hidden relative">
              {/* This is a placeholder for a real map */}
              <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50">
                <MapPin size={24} className="text-pro-red" />
              </div>
              <img src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400" alt="Map" className="w-full h-full object-cover opacity-50" />
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-light">
          <p>© {new Date().getFullYear()} Pro Extintores e Servicos LTDA. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
