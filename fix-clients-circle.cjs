const fs = require('fs');
let code = fs.readFileSync('src/components/Clients.tsx', 'utf8');

code = code.replace(
  'className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mb-4 transition-colors overflow-hidden p-1 shadow-sm border border-gray-100"',
  'className="h-16 md:h-20 flex items-center justify-center mb-4 text-slate-400 w-full"'
);

code = code.replace(
  'className="w-full h-full object-contain rounded-full"',
  'className="w-full h-full object-contain"'
);

fs.writeFileSync('src/components/Clients.tsx', code);
console.log('Clients fixed.');
