const fs = require('fs');

// BenefitBar
let bb = fs.readFileSync('src/components/BenefitBar.tsx', 'utf8');
bb = bb.replace('opacity-70 blur-md', 'opacity-30 blur-md');
fs.writeFileSync('src/components/BenefitBar.tsx', bb);

// Footer
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace('blur-md opacity-50', 'blur-md opacity-25');
footer = footer.replace('Simulador de Custos', 'Simulador de Segurança');
fs.writeFileSync('src/components/Footer.tsx', footer);

console.log("Updated");
