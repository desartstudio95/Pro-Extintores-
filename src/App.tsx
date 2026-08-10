import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SimulatorPage from './pages/SimulatorPage';
import ProductPage from './pages/ProductPage';
import CookieBanner from './components/CookieBanner';
import WelcomeModal from './components/WelcomeModal';

import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

import SegurancaContraIncendiosPage from './pages/SegurancaContraIncendiosPage';
import SegurancaEletronicaPage from './pages/SegurancaEletronicaPage';
import EquipamentosSegurancaPage from './pages/EquipamentosSegurancaPage';
import ManutencaoPage from './pages/ManutencaoPage';
import ContactosPage from './pages/ContactosPage';
import SuportePage from './pages/SuportePage';

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen flex flex-col bg-white text-black selection:bg-pro-red/30 relative">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<AboutPage />} />
          <Route path="/simulador" element={<SimulatorPage />} />
          <Route path="/produtos/:id" element={<ProductPage />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
          <Route path="/termos-de-servico" element={<TermsOfServicePage />} />
          <Route path="/seguranca-contra-incendios" element={<SegurancaContraIncendiosPage />} />
          <Route path="/seguranca-eletronica" element={<SegurancaEletronicaPage />} />
          <Route path="/equipamentos-seguranca" element={<EquipamentosSegurancaPage />} />
          <Route path="/manutencao" element={<ManutencaoPage />} />
          <Route path="/contactos" element={<ContactosPage />} />
          <Route path="/suporte" element={<SuportePage />} />
        </Routes>
        
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <WelcomeModal />
      </div>
    </Router>
  );
}
