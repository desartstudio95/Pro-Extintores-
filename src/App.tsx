import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SimulatorPage from './pages/SimulatorPage';
import CookieBanner from './components/CookieBanner';
import WelcomeModal from './components/WelcomeModal';

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
        </Routes>
        
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
        <WelcomeModal />
      </div>
    </Router>
  );
}
