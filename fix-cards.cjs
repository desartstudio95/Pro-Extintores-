const fs = require('fs');

// Fix CatalogPage
if (fs.existsSync('src/pages/CatalogPage.tsx')) {
  let code = fs.readFileSync('src/pages/CatalogPage.tsx', 'utf8');
  code = code.replace(/h-\[320px\]/g, 'aspect-square h-auto'); // Make it square (1080x1080 ratio)
  fs.writeFileSync('src/pages/CatalogPage.tsx', code);
}

// Fix Products (Front page carousel)
if (fs.existsSync('src/components/Products.tsx')) {
  let code = fs.readFileSync('src/components/Products.tsx', 'utf8');
  code = code.replace(/aspect-\[3\/4\]/g, 'aspect-square'); 
  code = code.replace(/w-\[240px\] md:w-\[280px\]/g, 'w-[200px] md:w-[240px]');
  fs.writeFileSync('src/components/Products.tsx', code);
}

// Fix ProductPage (Related products list)
if (fs.existsSync('src/pages/ProductPage.tsx')) {
  let code = fs.readFileSync('src/pages/ProductPage.tsx', 'utf8');
  code = code.replace(/aspect-\[4\/3\]/g, 'aspect-square'); // The image wrapper
  fs.writeFileSync('src/pages/ProductPage.tsx', code);
}

console.log('Cards fixed.');
