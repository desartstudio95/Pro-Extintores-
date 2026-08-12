import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative text-white pt-16 pb-8 z-10 overflow-hidden bg-black">
      {/* Imagem de Fundo Desfocada */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://i.ibb.co/mC5DtJ96/watermarked-7ab03fb6-fe50-4060-afd5-f841ec066b72.jpg" 
          alt="Footer Background" 
          className="w-full h-full object-cover blur-md opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-black/85"></div>
      </div>

      <div className="max-w-[90rem] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-b border-white/10 pb-12 lg:divide-x divide-white/10 gap-y-10 lg:gap-y-0">
          
          {/* Coluna 1 - Empresa & Social */}
          <div className="flex flex-col lg:pr-8">
            <Link to="/#home" className="inline-block mb-5">
              <img src="https://i.ibb.co/hFc8zNDk/REAL-ESTATE-BUYING-OR-SELLING-POST-1.png" alt="Pro Extintores Logo" className="h-24 md:h-32 w-auto object-contain brightness-0 invert -ml-2" />
            </Link>
            <p className="text-slate-400 font-light leading-relaxed mb-6 text-xs pr-2">
              A sua parceira de confiança em Moçambique para soluções integradas de Segurança Contra Incêndios e Segurança Eletrónica.
            </p>
            <div className="flex gap-2.5">
              <a href="#" className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-pro-red hover:bg-pro-red transition-all">
                <Facebook size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-pro-red hover:bg-pro-red transition-all">
                <Instagram size={14} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-slate-700 bg-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:border-pro-red hover:bg-pro-red transition-all">
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* Coluna 2 - Empresa */}
          <div className="lg:px-8">
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">Empresa</h4>
            <ul className="space-y-2.5 font-light text-xs text-slate-400">
              <li><Link to="/sobre-nos" className="hover:text-white hover:underline transition-colors">Sobre Nós</Link></li>
              <li><Link to="/sobre-nos#missao" className="hover:text-white hover:underline transition-colors">Missão</Link></li>
              <li><Link to="/sobre-nos#certificacoes" className="hover:text-white hover:underline transition-colors">Certificações</Link></li>
              <li><a href="#" className="hover:text-white hover:underline transition-colors">Carreiras</a></li>
            </ul>
          </div>

          {/* Coluna 3 - Serviços */}
          <div className="lg:px-8">
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">Serviços</h4>
            <ul className="space-y-2.5 font-light text-xs text-slate-400">
              <li><Link to="/seguranca-contra-incendios" className="hover:text-white hover:underline transition-colors">Combate a Incêndios</Link></li>
              <li><Link to="/seguranca-eletronica" className="hover:text-white hover:underline transition-colors">Segurança Eletrónica</Link></li>
              <li><Link to="/equipamentos-seguranca" className="hover:text-white hover:underline transition-colors">Equipamentos</Link></li>
              <li><Link to="/manutencao" className="hover:text-white hover:underline transition-colors">Manutenção Preventiva</Link></li>
              <li><Link to="/simulador" className="hover:text-white hover:underline transition-colors">Simulador de Custos</Link></li>
            </ul>
          </div>

          {/* Coluna 4 - Contactos */}
          <div className="lg:px-8">
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">Contactos</h4>
            <ul className="space-y-3 font-light text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <Phone size={14} className="text-pro-red shrink-0 mt-0.5" />
                <span>+258 85 524 0453</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-pro-red shrink-0 mt-0.5" />
                <span>geral@proextintores.co.mz</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-pro-red shrink-0 mt-0.5" />
                <span>Av. de Moçambique, Bairro Luís Cabral N°169<br/>Maputo, Moçambique</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={14} className="text-pro-red shrink-0 mt-0.5" />
                <span>Seg - Sex: 08:00 - 17:00<br/>Sáb: 08:00 - 12:00</span>
              </li>
            </ul>
          </div>

          {/* Coluna 5 - Mapa */}
          <div className="h-full flex flex-col lg:pl-8">
            <h4 className="font-bold text-white mb-5 uppercase tracking-wider text-xs">Localização</h4>
            <div className="flex-1 min-h-[160px] w-full rounded-xl overflow-hidden border border-slate-700 relative bg-slate-800">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114757.26059288737!2d32.49830501861058!3d-25.910043134107144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ee69a53d1000001%3A0xc9c12df8b1d9ed3!2sMaputo%2C%20Mo%C3%A7ambique!5e0!3m2!1spt-PT!2spt!4v1707923456789!5m2!1spt-PT!2spt" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-slate-400 font-light">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-center md:text-left">
            <p>© {new Date().getFullYear()} Pro Extintores e Servicos LTDA. Todos os direitos reservados.</p>
            <span className="hidden md:inline text-slate-600">|</span>
            <p className="font-semibold text-slate-300">NUIT - 401006761</p>
          </div>
          
          <div className="flex items-center gap-4">
            <Link to="/politica-de-privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link to="/termos-de-servico" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
