const fs = require('fs');
let code = fs.readFileSync('src/components/Contact.tsx', 'utf8');

const newFormFields = `
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
`;

code = code.replace(
`                  <div>
                    <label className="block text-[10px] font-semibold text-white/80 mb-1.5 uppercase tracking-wider">Assunto</label>
                    <div className="relative">
                      <select className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all appearance-none cursor-pointer text-white text-sm">
                        <option className="bg-slate-900 text-white">Pedido de Orçamento</option>
                        <option className="bg-slate-900 text-white">Agendar Avaliação</option>
                        <option className="bg-slate-900 text-white">Dúvidas e Informações</option>
                      </select>
                      <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                  </div>`, newFormFields);

fs.writeFileSync('src/components/Contact.tsx', code);
