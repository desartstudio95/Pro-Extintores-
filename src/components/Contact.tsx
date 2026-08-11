import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 scroll-mt-24 pt-4">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-pro-red/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white border border-gray-100 shadow-sm p-6 md:p-10 lg:p-14 rounded-[2rem] md:rounded-[2.5rem] border border-gray-200 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 relative z-10">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-xs font-bold text-pro-red tracking-widest uppercase mb-3 flex items-center gap-3">
                <span className="w-6 h-[1px] bg-pro-red"></span> Contactos
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading mb-5 tracking-tight leading-[1.1] text-gray-900">
                Estamos aqui <span className="text-slate-900">para si.</span>
              </h3>
              <p className="text-slate-900 text-base mb-6 max-w-md font-light leading-relaxed">
                A nossa equipa técnica está pronta para avaliar as suas necessidades e fornecer a melhor solução em segurança.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-pro-red/10 group-hover:border-pro-red/20 transition-colors">
                    <MapPin className="text-gray-900 group-hover:text-pro-red transition-colors" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1 text-gray-900 tracking-tight">Escritório Central</h4>
                    <p className="text-slate-900 text-sm font-light leading-relaxed">Av. de Moçambique, Bairro Luís Cabral N°169<br/>Maputo, Moçambique</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-pro-red/10 group-hover:border-pro-red/20 transition-colors">
                    <Phone className="text-gray-900 group-hover:text-pro-red transition-colors" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1 text-gray-900 tracking-tight">Linhas de Apoio</h4>
                    <p className="text-slate-900 text-sm font-light leading-relaxed">+258 85 5240453</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start group">
                  <div className="w-12 h-12 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0 group-hover:bg-pro-red/10 group-hover:border-pro-red/20 transition-colors">
                    <Clock className="text-gray-900 group-hover:text-pro-red transition-colors" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-base mb-1 text-gray-900 tracking-tight">Horário Oficial</h4>
                    <p className="text-slate-900 text-sm font-light leading-relaxed">Segunda a Sexta-feira<br/>08:00 às 17:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="flex items-center">
              <div className="w-full bg-gradient-to-br from-pro-red to-red-900 p-6 md:p-8 rounded-[1.5rem] shadow-[0_20px_40px_-15px_rgba(229,57,53,0.5)] border border-red-500/30">
                <h4 className="text-xl font-bold font-heading text-white mb-6 tracking-tight">Envie-nos uma mensagem</h4>
                
                <form className="space-y-5">
                  <div>
                    <label className="block text-[10px] font-semibold text-white/80 mb-1.5 uppercase tracking-wider">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all placeholder-white/40 text-white text-sm"
                      placeholder="Ex: Ana Cossa"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-semibold text-white/80 mb-1.5 uppercase tracking-wider">Telemóvel</label>
                      <input 
                        type="tel" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all placeholder-white/40 text-white text-sm"
                        placeholder="+258 8..."
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-white/80 mb-1.5 uppercase tracking-wider">Email (Opcional)</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all placeholder-white/40 text-white text-sm"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                  

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[10px] font-semibold text-white/80 mb-1.5 uppercase tracking-wider">Tipo de cliente</label>
                      <div className="relative">
                        <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all appearance-none cursor-pointer text-white text-sm">
                          <option className="bg-slate-900 text-white">Empresa</option>
                          <option className="bg-slate-900 text-white">Residência</option>
                          <option className="bg-slate-900 text-white">Obra/Projeto</option>
                          <option className="bg-slate-900 text-white">Instituição</option>
                          <option className="bg-slate-900 text-white">Outro</option>
                        </select>
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="block text-[10px] font-semibold text-white/80 mb-1.5 uppercase tracking-wider">O que procura?</label>
                      <div className="relative">
                        <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all appearance-none cursor-pointer text-white text-sm">
                          <option className="bg-slate-900 text-white">Extintores</option>
                          <option className="bg-slate-900 text-white">Manutenção</option>
                          <option className="bg-slate-900 text-white">Carretéis/Bocas de Incêndio</option>
                          <option className="bg-slate-900 text-white">Sinalização</option>
                          <option className="bg-slate-900 text-white">Segurança eletrónica</option>
                          <option className="bg-slate-900 text-white">EPI</option>
                          <option className="bg-slate-900 text-white">Sistema completo</option>
                          <option className="bg-slate-900 text-white">Outro</option>
                        </select>
                        <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                      </div>
                    </div>
                  </div>


                  <button 
                    type="button" 
                    className="w-full bg-white text-pro-red hover:bg-gray-50 py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 mt-4 shadow-lg active:scale-[0.98]"
                  >
                    Enviar Mensagem
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
