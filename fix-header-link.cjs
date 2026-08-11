const fs = require('fs');
let code = fs.readFileSync('src/components/Header.tsx', 'utf8');

code = code.replace("{ name: 'Produtos', href: '/#products' }", "{ name: 'Produtos', href: '/catalogo' }");

fs.writeFileSync('src/components/Header.tsx', code);
