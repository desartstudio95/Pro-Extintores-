const fs = require('fs');

// 1. Fix Products.tsx
if (fs.existsSync('src/components/Products.tsx')) {
  let code = fs.readFileSync('src/components/Products.tsx', 'utf8');

  // Title size
  code = code.replace(/text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900/g, 'text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-gray-900');

  // Card size
  code = code.replace(/w-\[290px\] sm:w-\[340px\]/g, 'w-[240px] sm:w-[280px]');
  
  // Image height
  code = code.replace(/h-56 sm:h-64/g, 'h-48 sm:h-52');

  // Card shadow - add a visible shadow instead of just on hover, and increase hover shadow
  code = code.replace(/shadow-\[0_4px_24px_rgba\(0,0,0,0\.04\)\] hover:shadow-\[0_12px_40px_rgba\(0,0,0,0\.08\)\]/g, 'shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]');

  // Fix button width & color
  code = code.replace(
    'className="block w-full text-center bg-[#0a192f] hover:bg-[#142d55] text-white font-bold text-sm sm:text-base py-2.5 sm:py-3 rounded-[24px] transition-colors shadow-md"',
    'className="inline-block px-8 mx-auto text-center bg-[#0a192f] hover:bg-pro-red active:bg-red-700 active:scale-95 text-white font-bold text-sm sm:text-base py-2.5 sm:py-3 rounded-[24px] transition-all duration-300 shadow-md"'
  );

  // Add flex justify-center to the wrapper of the button
  code = code.replace(
    '<div className="mt-auto pt-2">\n                    <Link',
    '<div className="mt-auto pt-2 flex justify-center">\n                    <Link'
  );
  // Just in case it's on one line
  code = code.replace(
    '<div className="mt-auto pt-2">                    <Link',
    '<div className="mt-auto pt-2 flex justify-center">                    <Link'
  );

  fs.writeFileSync('src/components/Products.tsx', code);
}

// 2. Fix HowItWorks.tsx
if (fs.existsSync('src/components/HowItWorks.tsx')) {
  let code = fs.readFileSync('src/components/HowItWorks.tsx', 'utf8');

  // Title size
  code = code.replace(/text-3xl sm:text-4xl lg:text-5xl font-bold font-heading text-gray-900/g, 'text-2xl sm:text-3xl lg:text-4xl font-bold font-heading text-gray-900');

  fs.writeFileSync('src/components/HowItWorks.tsx', code);
}

// 3. Global Spacing
const filesToFix = [
  'src/pages/Home.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/CatalogPage.tsx',
  'src/pages/ProductPage.tsx',
  'src/components/About.tsx',
  'src/components/Clients.tsx',
  'src/components/Contact.tsx',
  'src/components/FAQ.tsx',
  'src/components/HowItWorks.tsx',
  'src/components/HowWeHelp.tsx',
  'src/components/Products.tsx',
  'src/components/ServiceForm.tsx',
  'src/components/Services.tsx',
  'src/components/Benefits.tsx'
];

for (const file of filesToFix) {
  if (fs.existsSync(file)) {
    let code = fs.readFileSync(file, 'utf8');
    
    // Replace py-12, py-10 to make sections tighter
    code = code.replace(/py-12/g, 'py-8');
    code = code.replace(/py-10/g, 'py-6');
    code = code.replace(/pt-24 pb-12/g, 'pt-20 pb-8');
    code = code.replace(/mt-10/g, 'mt-6');
    code = code.replace(/mb-10/g, 'mb-6');
    
    // Home specific
    if (file === 'src/pages/Home.tsx') {
      code = code.replace(/gap-6 md:gap-8 lg:gap-10 pb-8/g, 'gap-4 md:gap-6 lg:gap-8 pb-6');
    }
    
    // AboutPage specific
    if (file === 'src/pages/AboutPage.tsx') {
      code = code.replace(/gap-10 md:gap-10 lg:gap-12 pb-10 pt-24/g, 'gap-6 md:gap-8 lg:gap-10 pb-8 pt-20');
    }
    
    fs.writeFileSync(file, code);
  }
}

console.log('All fixes applied.');
