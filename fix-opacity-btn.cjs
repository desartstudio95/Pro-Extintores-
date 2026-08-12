const fs = require('fs');

// 1. BenefitBar
let bb = fs.readFileSync('src/components/BenefitBar.tsx', 'utf8');
bb = bb.replace('opacity-90 blur-md', 'opacity-70 blur-md');
fs.writeFileSync('src/components/BenefitBar.tsx', bb);

// 2. Footer
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace('blur-md opacity-75', 'blur-md opacity-50');
fs.writeFileSync('src/components/Footer.tsx', footer);

// 3. Services.tsx
let sv = fs.readFileSync('src/components/Services.tsx', 'utf8');
sv = sv.replace('bg-gray-900', 'bg-black');
// also change the arrow icon color inside the button from text-gray-900 to text-black
sv = sv.replace('text-gray-900 flex items-center justify-center group-hover:scale-110', 'text-black flex items-center justify-center group-hover:scale-110');
fs.writeFileSync('src/components/Services.tsx', sv);

console.log("Done");
