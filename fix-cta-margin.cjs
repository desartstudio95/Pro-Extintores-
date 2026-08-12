const fs = require('fs');
let code = fs.readFileSync('src/components/CallToAction.tsx', 'utf8');

code = code.replace(
  'className="bg-pro-red relative overflow-hidden py-16 md:py-20 mt-10"',
  'className="bg-pro-red relative overflow-hidden py-16 md:py-20"'
);

fs.writeFileSync('src/components/CallToAction.tsx', code);
console.log("CTA margin removed.");
