const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

code = code.replace(
  'className="absolute inset-0 bg-gradient-to-br from-pro-dark via-pro-red to-[#ff5252] opacity-90"',
  'className="absolute inset-0 bg-gradient-to-b from-pro-dark via-pro-red to-[#ff5252] opacity-75"'
);

code = code.replace(
  'className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"',
  'className="absolute inset-0 w-full h-full object-cover"'
);

fs.writeFileSync('src/components/Hero.tsx', code);
console.log("Hero gradient updated.");
