import React, { useState, useEffect } from 'react';
import { Menu, X, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/#home' },
    { name: 'Sobre Nós', href: '/sobre-nos' },
    { name: 'Produtos', href: '/catalogo' },
    { name: 'Serviços', href: '/#services' },
    { name: 'Contactos', href: '/contactos' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 flex justify-center ${
        isScrolled ? 'pt-4 pb-0' : 'pt-6'
      }`}
    >
      <div className={`transition-all duration-500 w-full max-w-7xl mx-auto px-6 ${isScrolled ? 'md:px-4' : 'px-6'}`}>
        <div className={`flex justify-between items-center transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md border border-gray-100 shadow-[0_8px_32px_rgba(0,0,0,0.06)] rounded-full px-6 py-3' 
            : 'bg-transparent py-2'
        }`}>
          {/* Logo */}
          <Link to="/#home" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pro-red to-pro-dark flex items-center justify-center text-white shadow-lg shadow-pro-red/20">
              <Flame size={20} />
            </div>
            <span className={`text-xl font-bold font-heading tracking-tight ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              PRO EXTINTORES<span className="text-pro-red">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className={`text-sm font-medium transition-colors tracking-wide ${isScrolled ? 'text-slate-900 hover:text-gray-900' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/simulador"
              className="flex items-center gap-2 btn-primary px-5 py-2 rounded-lg font-medium text-xs text-white shadow-md shadow-pro-red/10"
            >
              Simulador de Segurança
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-900 w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full mt-4 px-6 pb-6">
          <div className="bg-white border border-gray-100 shadow-sm rounded-3xl p-6 flex flex-col gap-2 shadow-2xl">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href} 
                className="py-3 px-4 text-gray-900 font-medium text-lg rounded-xl hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-200">
              <Link
                to="/simulador"
                className="flex justify-center items-center gap-2 btn-primary text-white w-full py-3.5 rounded-lg font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Simulador de Segurança
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
