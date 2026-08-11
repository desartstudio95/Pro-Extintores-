const fs = require('fs');
let code = fs.readFileSync('src/pages/ProductPage.tsx', 'utf8');

// Revert the closing tag first to avoid mess
code = code.replace('Pedir Orçamento\n                </a>', 'Pedir Orçamento\n                </Link>');

// Find Pedir Orçamento block and replace it
const pedirRegex = /<Link\s*to="\/#contact"\s*className="flex-1 bg-gradient-to-r from-pro-red to-red-800[^"]*"\s*>\s*<FileText size=\{18\} \/>\s*Pedir Orçamento\s*<\/Link>/;
code = code.replace(pedirRegex, `<a href={\`https://wa.me/258855240453?text=\${encodeURIComponent('Olá, gostaria de pedir um orçamento para ' + product.name + '.')}\`} target="_blank" rel="noopener noreferrer" className="flex-1 bg-gradient-to-r from-pro-red to-red-800 text-white hover:from-blue-900 hover:to-blue-950 px-6 py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-pro-red/20 hover:shadow-blue-900/30">
                  <FileText size={18} />
                  Pedir Orçamento
                </a>`);

fs.writeFileSync('src/pages/ProductPage.tsx', code);
