const fs = require('fs');
let code = fs.readFileSync('src/components/HowWeHelp.tsx', 'utf8');

// Decrease icon size
code = code.replace(/size=\{32\}/g, 'size={24}');

// Decrease padding and icon wrapper size
code = code.replace('className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"', 'className="bg-gray-50 p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-md transition-shadow"');
code = code.replace('className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm border border-gray-100"', 'className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm border border-gray-100"');

// Decrease text sizes
code = code.replace('className="font-bold text-gray-900 text-lg mb-2"', 'className="font-bold text-gray-900 text-base mb-1.5"');
code = code.replace('className="text-slate-600 text-sm font-light leading-relaxed"', 'className="text-slate-600 text-xs font-light leading-relaxed"');

fs.writeFileSync('src/components/HowWeHelp.tsx', code);
