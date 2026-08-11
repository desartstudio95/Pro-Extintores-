const fs = require('fs');
let code = fs.readFileSync('src/pages/ProductPage.tsx', 'utf8');

// Replace "Pedir Orçamento" link in the overview section
code = code.replace(
  /<Link to="\/#contact" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-pro-red text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-pro-red\/20">/,
  `<a href="https://wa.me/258855240453?text=\${encodeURIComponent('Olá, gostaria de pedir um orçamento para ' + product.name + '.')}" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-pro-red text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-pro-red/20">`
);
code = code.replace(
  /Pedir Orçamento\s*<\/Link>/,
  'Pedir Orçamento\n                </a>'
);

// Replace "Falar com um técnico" link in the overview section
code = code.replace(
  /<Link to="\/contactos" className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shrink-0">/,
  `<a href="https://wa.me/258855240453?text=\${encodeURIComponent('Olá, gostaria de falar com um técnico sobre ' + product.name + '.')}" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shrink-0">`
);
code = code.replace(
  /Falar com um técnico\s*<\/Link>/,
  'Falar com um técnico\n          </a>'
);

// Replace "Solicitar Cotação" link in the items map
const regex = /<Link\s*to="\/#contact"\s*className="mt-auto w-full inline-flex items-center justify-center gap-1\.5 bg-slate-900 text-white text-\[10px\] font-bold uppercase tracking-wider px-3 py-2 rounded-lg hover:bg-pro-red transition-colors shadow-md hover:shadow-xl hover:-translate-y-0\.5 transform"\s*>/;
code = code.replace(
  regex,
  `<a href={\`https://wa.me/258855240453?text=\${encodeURIComponent('Olá, gostaria de solicitar uma cotação para ' + item.name + '.')}\`} target="_blank" rel="noopener noreferrer" className="mt-auto w-full inline-flex items-center justify-center gap-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-2 rounded-lg hover:bg-pro-red transition-colors shadow-md hover:shadow-xl hover:-translate-y-0.5 transform">`
);
code = code.replace(
  /Solicitar Cotação\s*<\/Link>/,
  'Solicitar Cotação\n                  </a>'
);

// Replace "Solicitar avaliação" 
code = code.replace(
  /<Link to="\/#contact" className="inline-flex items-center justify-center gap-2 bg-white text-pro-red px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-md">/,
  `<a href="https://wa.me/258855240453?text=\${encodeURIComponent('Olá, gostaria de solicitar uma avaliação para ' + product.name + '.')}" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-pro-red px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-md">`
);
code = code.replace(
  /Solicitar avaliação\s*<\/Link>/,
  'Solicitar avaliação\n            </a>'
);

fs.writeFileSync('src/pages/ProductPage.tsx', code);
