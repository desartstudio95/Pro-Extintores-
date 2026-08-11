const fs = require('fs');
let code = fs.readFileSync('src/pages/Home.tsx', 'utf8');

code = code.replace("import FAQ from '../components/FAQ';\n", "");
code = code.replace("      <FAQ />\n", "");

fs.writeFileSync('src/pages/Home.tsx', code);
