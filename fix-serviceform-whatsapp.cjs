const fs = require('fs');
let code = fs.readFileSync('src/components/ServiceForm.tsx', 'utf8');

const newFormCode = `
            <button 
              type="button" 
              onClick={() => {
                const instalacao = document.getElementById('sf-instalacao').value;
                const servico = document.getElementById('sf-servico').value;
                const localizacao = document.getElementById('sf-localizacao').value;
                const telefone = document.getElementById('sf-telefone').value;
                const nome = document.getElementById('sf-nome').value;
                const empresa = document.getElementById('sf-empresa').value;
                const mensagem = document.getElementById('sf-mensagem').value;

                const text = \`Olá, gostaria de solicitar um orçamento.\\n\\nNome: \${nome}\\nEmpresa: \${empresa}\\nTelefone: \${telefone}\\nLocalização: \${localizacao}\\nTipo de Instalação: \${instalacao}\\nServiço: \${servico}\\nMensagem: \${mensagem}\`;
                window.open(\`https://wa.me/258855240453?text=\${encodeURIComponent(text)}\`, '_blank');
              }}
              className="w-full bg-pro-red text-white hover:bg-red-700 py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-pro-red/20 active:scale-[0.98]"
            >
`;

code = code.replace(/<input type="text" className="w-full px-4 py-2\.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red\/20 focus:border-pro-red transition-all text-sm" placeholder="Ex: Escritório" \/>/, '<input id="sf-instalacao" type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm" placeholder="Ex: Escritório" />');
code = code.replace(/<input type="text" className="w-full px-4 py-2\.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red\/20 focus:border-pro-red transition-all text-sm" placeholder="Ex: Extintores" \/>/, '<input id="sf-servico" type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm" placeholder="Ex: Extintores" />');
code = code.replace(/<input type="text" className="w-full px-4 py-2\.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red\/20 focus:border-pro-red transition-all text-sm" placeholder="Ex: Maputo" \/>/, '<input id="sf-localizacao" type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm" placeholder="Ex: Maputo" />');
code = code.replace(/<input type="tel" className="w-full px-4 py-2\.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red\/20 focus:border-pro-red transition-all text-sm" placeholder="\+258 8\.\.\." \/>/, '<input id="sf-telefone" type="tel" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm" placeholder="+258 8..." />');
code = code.replace(/<input type="text" className="w-full px-4 py-2\.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red\/20 focus:border-pro-red transition-all text-sm" placeholder="Seu nome" \/>/, '<input id="sf-nome" type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm" placeholder="Seu nome" />');
code = code.replace(/<input type="text" className="w-full px-4 py-2\.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red\/20 focus:border-pro-red transition-all text-sm" placeholder="Sua empresa" \/>/, '<input id="sf-empresa" type="text" className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm" placeholder="Sua empresa" />');
code = code.replace(/<textarea rows=\{3\} className="w-full px-4 py-2\.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red\/20 focus:border-pro-red transition-all text-sm resize-none" placeholder="Detalhes adicionais\.\.\."><\/textarea>/, '<textarea id="sf-mensagem" rows={3} className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-pro-red/20 focus:border-pro-red transition-all text-sm resize-none" placeholder="Detalhes adicionais..."></textarea>');

code = code.replace(/<button type="button" className="w-full bg-pro-red text-white hover:bg-red-700 py-3\.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-pro-red\/20 active:scale-\[0\.98\]"\s*>/, newFormCode);

fs.writeFileSync('src/components/ServiceForm.tsx', code);
