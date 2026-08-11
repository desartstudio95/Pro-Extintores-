const fs = require('fs');

let productsCode = fs.readFileSync('src/components/Products.tsx', 'utf8');
productsCode = productsCode.replace('<Link to="/#contact" className="group inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full font-bold hover:bg-pro-red transition-colors shadow-lg">', '<Link to="/catalogo" className="group inline-flex items-center gap-3 bg-gray-900 text-white px-6 py-3 rounded-full font-bold hover:bg-pro-red transition-colors shadow-lg">');

fs.writeFileSync('src/components/Products.tsx', productsCode);
