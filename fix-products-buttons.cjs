const fs = require('fs');
let code = fs.readFileSync('src/components/Products.tsx', 'utf8');

code = code.replace(
  'className="block w-full text-center bg-[#0a192f] hover:bg-[#142d55] text-white font-bold text-base sm:text-lg py-3.5 sm:py-4 rounded-[28px] transition-colors shadow-md"',
  'className="block w-full text-center bg-[#0a192f] hover:bg-[#142d55] text-white font-bold text-sm sm:text-base py-2.5 sm:py-3 rounded-[24px] transition-colors shadow-md"'
);

code = code.replace(
  'className="group inline-flex items-center gap-4 bg-[#0a192f] text-white px-8 py-4 rounded-full font-bold hover:bg-pro-red transition-colors shadow-lg text-lg"',
  'className="group inline-flex items-center gap-3 bg-[#0a192f] text-white px-6 py-3 rounded-full font-bold hover:bg-pro-red transition-colors shadow-md text-sm sm:text-base"'
);

code = code.replace(
  'className="w-8 h-8 rounded-full bg-white text-[#0a192f] flex items-center justify-center group-hover:scale-110 transition-transform"',
  'className="w-6 h-6 rounded-full bg-white text-[#0a192f] flex items-center justify-center group-hover:scale-110 transition-transform"'
);

code = code.replace(
  '<ArrowRight size={16} />',
  '<ArrowRight size={14} />'
);

fs.writeFileSync('src/components/Products.tsx', code);
console.log('Buttons resized successfully.');
