const fs = require('fs');
let code = fs.readFileSync('src/components/HowItWorks.tsx', 'utf8');

code = code.replace(
  'max-w-[220px]">',
  'max-w-[220px] mx-auto">'
);

fs.writeFileSync('src/components/HowItWorks.tsx', code);
