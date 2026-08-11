const fs = require('fs');
let code = fs.readFileSync('src/components/Contact.tsx', 'utf8');

const newFormCode = `
                  <button 
                    type="button" 
                    onClick={() => {
                      const name = document.getElementById('contact-name').value;
                      const phone = document.getElementById('contact-phone').value;
                      const email = document.getElementById('contact-email').value;
                      const type = document.getElementById('contact-type').value;
                      const interest = document.getElementById('contact-interest').value;
                      
                      const text = \`Olá, gostaria de enviar uma mensagem.\\n\\nNome: \${name}\\nTelemóvel: \${phone}\\nEmail: \${email}\\nTipo de cliente: \${type}\\nProcura: \${interest}\`;
                      window.open(\`https://wa.me/258855240453?text=\${encodeURIComponent(text)}\`, '_blank');
                    }}
                    className="w-full bg-white text-pro-red hover:bg-gray-50 py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 mt-4 shadow-lg active:scale-[0.98]"
                  >
`;

code = code.replace(/<input\s+type="text"/, '<input id="contact-name" type="text"');
code = code.replace(/<input\s+type="tel"/, '<input id="contact-phone" type="tel"');
code = code.replace(/<input\s+type="email"/, '<input id="contact-email" type="email"');
code = code.replace(/<select className="w-full px-4 py-3 bg-white\/10 border border-white\/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white\/50 focus:bg-white\/20 transition-all appearance-none cursor-pointer text-white text-sm">/, '<select id="contact-type" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all appearance-none cursor-pointer text-white text-sm">');
code = code.replace(/<select className="w-full px-4 py-3 bg-white\/10 border border-white\/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white\/50 focus:bg-white\/20 transition-all appearance-none cursor-pointer text-white text-sm">/, '<select id="contact-interest" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/20 transition-all appearance-none cursor-pointer text-white text-sm">');

code = code.replace(/<button\s+type="button"\s+className="w-full bg-white text-pro-red hover:bg-gray-50 py-3 rounded-lg font-bold text-sm transition-all flex items-center justify-center gap-2 mt-4 shadow-lg active:scale-\[0\.98\]"\s*>/, newFormCode);

fs.writeFileSync('src/components/Contact.tsx', code);
