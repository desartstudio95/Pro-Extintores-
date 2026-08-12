import React from 'react';
import { Flame, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-900 pt-20 pb-10 border-t border-gray-200 relative z-10 mt-20">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-200 pb-16">
          
          <div className="md:col-span-1">
            <Link to="/#home" className="flex items-center gap-3 mb-6">
              <img src="https://i.ibb.co/hFc8zNDk/REAL-ESTATE-BUYING-OR-SELLING-POST-1.png" alt="Pro Extintores Logo" className="h-10 md:h-12 w-auto object-contain" />
              <span className="text-xl font-bold font-heading tracking-tight">
                PRO EXTINTORES<span className="text-pro-red">.</span>
              </span>
            </Link>
            <p className="text-slate-900 font-light leading-relaxed mb-8 text-sm pr-4">
              A sua parceira de confiança em Moçambique para soluções integradas de Segurança Contra Incêndios e Segurança Eletrónica.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-slate-900 hover:text-gray-900 hover:border-pro-red hover:bg-pro-red/10 transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-slate-900 hover:text-gray-900 hover:border-pro-red hover:bg-pro-red/10 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-200 bg-gray-50 flex items-center justify-center text-slate-900 hover:text-gray-900 hover:border-pro-red hover:bg-pro-red/10 transition-all">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Empresa</h4>
            <ul className="space-y-4 font-light text-sm">
              <li><Link to="/sobre-nos" className="text-slate-900 hover:text-pro-red transition-colors">Sobre Nós</Link></li>
              <li><Link to="/contactos" className="text-slate-900 hover:text-pro-red transition-colors">Contactos</Link></li>
              <li><Link to="/suporte" className="text-slate-900 hover:text-pro-red transition-colors">Suporte</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Serviços</h4>
            <ul className="space-y-4 font-light text-sm">
              <li><Link to="/seguranca-contra-incendios" className="text-slate-900 hover:text-pro-red transition-colors">Segurança Contra Incêndios</Link></li>
              <li><Link to="/seguranca-eletronica" className="text-slate-900 hover:text-pro-red transition-colors">Segurança Eletrónica</Link></li>
              <li><Link to="/equipamentos-seguranca" className="text-slate-900 hover:text-pro-red transition-colors">Equipamentos de Segurança</Link></li>
              <li><Link to="/manutencao" className="text-slate-900 hover:text-pro-red transition-colors">Manutenção</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4 font-light text-sm">
              <li><Link to="/termos-de-servico" className="text-slate-900 hover:text-gray-900 transition-colors">Termos de Serviço</Link></li>
              <li><Link to="/politica-de-privacidade" className="text-slate-900 hover:text-gray-900 transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-900 font-light">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>© {new Date().getFullYear()} Pro Extintores e Servicos LTDA. Todos os direitos reservados.</p>
            <span className="hidden md:inline text-gray-300">|</span>
            <p className="font-semibold text-gray-600">NUIT - 401006761</p>
          </div>
          <p className="flex items-center gap-2">
            Desenhado em <span className="text-gray-900">Maputo</span> <span className="text-pro-red">♥</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
