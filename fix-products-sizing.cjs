const fs = require('fs');

// 1. Fix Products.tsx (Carousel cards)
if (fs.existsSync('src/components/Products.tsx')) {
  let code = fs.readFileSync('src/components/Products.tsx', 'utf8');

  // Padding
  code = code.replace(/p-6 sm:p-8/g, 'p-4 sm:p-5');
  // Title margin
  code = code.replace(/mb-3 leading-tight/g, 'mb-2 leading-tight');
  // Description margin
  code = code.replace(/mb-8 line-clamp-3/g, 'mb-4 line-clamp-3');
  // Image height
  code = code.replace(/h-48 sm:h-52/g, 'h-40 sm:h-44');
  // Title size
  code = code.replace(/text-xl sm:text-\[22px\]/g, 'text-lg sm:text-xl');
  // Description size
  code = code.replace(/text-sm sm:text-base/g, 'text-xs sm:text-sm');
  // Button padding
  code = code.replace(/py-2\.5 sm:py-3/g, 'py-2 sm:py-2.5');
  
  // Card width
  code = code.replace(/w-\[240px\] sm:w-\[280px\]/g, 'w-[220px] sm:w-[250px]');

  fs.writeFileSync('src/components/Products.tsx', code);
}

// 2. Fix ProductPage.tsx (Product details card)
if (fs.existsSync('src/pages/ProductPage.tsx')) {
  let code = fs.readFileSync('src/pages/ProductPage.tsx', 'utf8');

  // Make the wrapper max-w-5xl instead of max-w-7xl to reduce overall size
  code = code.replace(
    '<div className="max-w-7xl mx-auto px-6 mt-6 md:mt-6">',
    '<div className="max-w-5xl mx-auto px-6 mt-6 md:mt-6">'
  );

  // Reduce image height
  code = code.replace(
    /className="relative h-\[250px\] md:h-full bg-gray-100"/g,
    'className="relative h-[200px] md:h-auto md:min-h-[350px] bg-gray-100"'
  );

  // Reduce padding
  code = code.replace(/p-6 md:p-10/g, 'p-6 md:p-8');
  
  // Reduce Title Size
  code = code.replace(/text-2xl md:text-4xl/g, 'text-2xl md:text-3xl');
  
  // Reduce bottom margins
  code = code.replace(/mb-6/g, 'mb-5');

  fs.writeFileSync('src/pages/ProductPage.tsx', code);
}

console.log('Sizing fixed.');
