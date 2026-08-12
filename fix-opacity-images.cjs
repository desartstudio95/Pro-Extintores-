const fs = require('fs');

// 1. BenefitBar
let bb = fs.readFileSync('src/components/BenefitBar.tsx', 'utf8');
bb = bb.replace('opacity-60 mix-blend-luminosity blur-md', 'opacity-90 blur-[2px]');
bb = bb.replace('from-slate-900/70 to-black/70 mix-blend-multiply', 'from-slate-900/60 to-black/70');
fs.writeFileSync('src/components/BenefitBar.tsx', bb);

// 2. Footer
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace('blur-md opacity-40', 'blur-[2px] opacity-75');
footer = footer.replace('bg-black/85', 'bg-black/70');
fs.writeFileSync('src/components/Footer.tsx', footer);

console.log("Opacities updated");
