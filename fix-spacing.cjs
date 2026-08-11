const fs = require('fs');

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
    
    // Replace standard py-20, pt-32, pb-20, mt-16, mb-16, gap-16, gap-20, gap-24
    code = code.replace(/py-20/g, 'py-12');
    code = code.replace(/py-16/g, 'py-10');
    code = code.replace(/pt-32 pb-20/g, 'pt-24 pb-12');
    code = code.replace(/mt-16/g, 'mt-10');
    code = code.replace(/mb-16/g, 'mb-10');
    code = code.replace(/gap-24/g, 'gap-12');
    code = code.replace(/gap-20/g, 'gap-10');
    code = code.replace(/gap-16/g, 'gap-10');
    
    // Home specific
    if (file === 'src/pages/Home.tsx') {
      code = code.replace(/gap-12 md:gap-16/g, 'gap-8 md:gap-10');
      code = code.replace(/gap-8 md:gap-10 lg:gap-12 pb-10/g, 'gap-6 md:gap-8 lg:gap-10 pb-8');
    }
    
    // AboutPage specific
    if (file === 'src/pages/AboutPage.tsx') {
      code = code.replace(/pt-32/g, 'pt-24');
      code = code.replace(/pb-16/g, 'pb-10');
    }
    
    fs.writeFileSync(file, code);
  }
}
console.log('Spacing fixed.');
