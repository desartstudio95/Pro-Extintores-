const fs = require('fs');
let code = fs.readFileSync('src/pages/ProductPage.tsx', 'utf8');

const regex = /<Link to="\/contactos" className="inline-flex items-center gap-2 bg-white text-pro-red px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shrink-0 shadow-sm">\s*Solicitar avaliação\s*<\/a>/;

code = code.replace(regex, `<a href={\`https://wa.me/258855240453?text=\${encodeURIComponent('Olá, gostaria de solicitar uma avaliação para ' + product.name + '.')}\`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-pro-red px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shrink-0 shadow-sm">
            Solicitar avaliação
          </a>`);
          
fs.writeFileSync('src/pages/ProductPage.tsx', code);
