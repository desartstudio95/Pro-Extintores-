const fs = require('fs');

let bb = fs.readFileSync('src/components/BenefitBar.tsx', 'utf8');
bb = bb.replace('blur-[2px]', 'blur-md');
fs.writeFileSync('src/components/BenefitBar.tsx', bb);

let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace('blur-[2px]', 'blur-md');
fs.writeFileSync('src/components/Footer.tsx', footer);

console.log('Blurs updated');
