const fs = require('fs');

let code = fs.readFileSync('src/pages/ProductPage.tsx', 'utf8');

// 1. Decrease width and change layout to vertical
code = code.replace(
  '<div className="max-w-5xl mx-auto px-6 mt-6 md:mt-6">',
  '<div className="max-w-md md:max-w-lg lg:max-w-xl mx-auto px-6 mt-6">'
);

code = code.replace(
  '<div className="grid md:grid-cols-2 gap-0">',
  '<div className="flex flex-col">'
);

// 2. Aspect ratio 1:1 for the image
code = code.replace(
  /className="relative h-\[200px\] md:h-auto md:min-h-\[350px\] bg-gray-100"/g,
  'className="relative aspect-square bg-gray-100 w-full shrink-0"'
);

// 3. Decrease title and description font sizes
code = code.replace(
  '<h1 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 tracking-tight mb-5">',
  '<h1 className="text-xl md:text-2xl font-bold font-heading text-gray-900 tracking-tight mb-3">'
);

code = code.replace(
  '<p className="text-slate-600 text-sm md:text-base leading-relaxed font-light mb-5">',
  '<p className="text-slate-600 text-xs md:text-sm leading-relaxed font-light mb-5">'
);

fs.writeFileSync('src/pages/ProductPage.tsx', code);
console.log('ProductPage adjusted.');
