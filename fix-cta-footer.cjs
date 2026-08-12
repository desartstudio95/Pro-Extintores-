const fs = require('fs');

// 1. REWRITE CALL TO ACTION
const ctaContent = `import React from 'react';
import { Phone, ArrowRight, ShieldAlert } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-pro-red to-red-900 relative overflow-hidden py-10 md:py-12">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left lg:max-w-2xl">
            <h2 className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-3 text-2xl md:text-3xl lg:text-4xl font-black font-heading text-white tracking-tight mb-3">
              <ShieldAlert size={36} className="shrink-0 text-white/90 hidden md:block" />
              <div className="flex items-center justify-center gap-2 md:hidden">
                <ShieldAlert size={28} className="shrink-0 text-white/90" />
                <span>Proteja hoje o que mais importa.</span>
              </div>
              <span className="hidden md:block">Proteja hoje o que mais importa.</span>
            </h2>
            <p className="text-white/90 text-sm md:text-base leading-relaxed font-light md:pl-12">
              Solicite uma avaliação gratuita e descubra a melhor solução para o seu negócio.
            </p>
          </div>
          
          <div className="flex items-center shrink-0 w-full sm:w-auto">
            <a 
              href="https://wa.me/258841234567" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex items-center justify-between gap-4 bg-white p-2 pl-6 pr-2 rounded-full hover:bg-gray-50 hover:shadow-xl transition-all duration-300 shadow-md w-full sm:w-auto"
            >
              <div className="flex flex-col items-start py-1">
                <span className="text-pro-red font-bold text-sm leading-tight uppercase tracking-wide">Falar com Especialista</span>
                <span className="text-gray-900 font-black text-sm md:text-base tracking-wide flex items-center gap-1.5 mt-1">
                  <Phone size={14} className="text-gray-500" /> +258 84 123 4567
                </span>
              </div>
              <div className="w-12 h-12 rounded-full bg-pro-red text-white flex items-center justify-center group-hover:scale-110 group-active:scale-95 transition-transform ml-4 shrink-0 shadow-md">
                <ArrowRight size={20} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
`;
fs.writeFileSync('src/components/CallToAction.tsx', ctaContent);

// 2. REWRITE FOOTER
const footerContent = `import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0a192f] text-white pt-16 pb-8 relative z-10">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 border-b border-white/10 pb-12 lg:divide-x divide-white/10 gap-y-10 lg:gap-y-0">
          
          {/* Coluna 1 - Empresa & Social */}
          <div className="flex flex-col lg:pr-8">
            <Link to="/#home" className="flex items-center gap-3 mb-5">
              <img src="https://i.ibb.co/hFc8zNDk/REAL-ESTATE-BUYING-OR-SELLING-POST-1.png" alt="Pro Extintores Logo" className="h-8 md:h-10 w-auto object-contain brightness-0 invert" />
              <span className="text-lg font-bold font-heading tracking-tight text-white">
                PRO EXTINTORES<span className="text-pro-red">.</span>
              </span>
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
                <div className="flex flex-col">
                  <span>+258 84 123 4567</span>
                  <span>+258 82 123 4567</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={14} className="text-pro-red shrink-0 mt-0.5" />
                <span>geral@proextintores.co.mz</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-pro-red shrink-0 mt-0.5" />
                <span>Av. de Moçambique, Km 5<br/>Maputo, Moçambique</span>
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
`;
fs.writeFileSync('src/components/Footer.tsx', footerContent);

console.log("CTA and Footer successfully updated.");
