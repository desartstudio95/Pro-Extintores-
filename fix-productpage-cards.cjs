const fs = require('fs');
let code = fs.readFileSync('src/pages/ProductPage.tsx', 'utf8');

// Change grid columns to make cards smaller
code = code.replace(
  'className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible scrollbar-hide"',
  'className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-6 md:grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:overflow-visible scrollbar-hide"'
);

code = code.replace(
  'className="snap-start shrink-0 w-[85vw] md:w-auto bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-pro-red/30 transition-all group flex flex-col"',
  'className="snap-start shrink-0 w-[75vw] md:w-auto bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-pro-red/30 transition-all group flex flex-col"'
);

// Reduce padding inside the card
code = code.replace('<div className="p-5 flex flex-col flex-grow">', '<div className="p-4 flex flex-col flex-grow">');
code = code.replace('<h3 className="font-bold text-gray-900 leading-tight mb-4 group-hover:text-pro-red transition-colors text-sm md:text-base">', '<h3 className="font-bold text-gray-900 leading-tight mb-3 group-hover:text-pro-red transition-colors text-xs md:text-sm">');

// Reduce button size
code = code.replace('px-4 py-3 rounded-xl', 'px-3 py-2 rounded-lg');
code = code.replace('gap-2 bg-slate-900 text-white text-xs', 'gap-1.5 bg-slate-900 text-white text-[10px]');

fs.writeFileSync('src/pages/ProductPage.tsx', code);
