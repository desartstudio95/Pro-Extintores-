const fs = require('fs');

const files = [
  'src/components/Hero.tsx',
  'src/components/CookieBanner.tsx',
  'src/components/BenefitBar.tsx',
  'src/components/WelcomeModal.tsx',
  'src/pages/ProductPage.tsx',
  'src/pages/SimulatorPage.tsx',
  'src/components/Products.tsx',
  'src/pages/CatalogPage.tsx'
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace blue classes
    content = content.replace(/shadow-blue-900\/30/g, 'shadow-black/40');
    content = content.replace(/hover:shadow-blue-900\/30/g, 'hover:shadow-black/40');
    content = content.replace(/from-blue-900/g, 'from-gray-900');
    content = content.replace(/to-blue-950/g, 'to-black');
    content = content.replace(/bg-blue-500\/20/g, 'bg-gray-500/20');
    content = content.replace(/bg-blue-50/g, 'bg-gray-100');
    content = content.replace(/text-blue-600/g, 'text-gray-800');
    content = content.replace(/shadow-blue-900\/20/g, 'shadow-black/30');

    // any left over hover:from-blue... etc
    
    fs.writeFileSync(file, content);
  }
});
console.log('Blue classes replaced');
