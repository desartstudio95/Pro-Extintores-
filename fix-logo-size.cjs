const fs = require('fs');
let code = fs.readFileSync('src/components/Header.tsx', 'utf8');

code = code.replace(
  'className="h-10 w-auto object-contain"',
  'className="h-10 md:h-12 w-auto object-contain"'
);

fs.writeFileSync('src/components/Header.tsx', code);
