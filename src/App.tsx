import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToHash from './components/ScrollToHash';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';

export default function App() {
  return (
    <Router>
      <ScrollToHash />
      <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-pro-red/30 relative">
        <div className="fixed inset-0 dot-pattern pointer-events-none opacity-50 z-0"></div>
        <div className="fixed top-0 inset-x-0 h-[800px] accent-glow pointer-events-none z-0"></div>
        
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nos" element={<AboutPage />} />
        </Routes>
        
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
