const fs = require('fs');

const files = [
  'src/components/Hero.tsx',
  'src/components/ServiceForm.tsx',
  'src/components/WhatsAppButton.tsx',
  'src/components/Contact.tsx',
  'src/pages/CatalogPage.tsx',
  'src/pages/PrivacyPolicyPage.tsx',
  'src/pages/ProductPage.tsx',
];

files.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace numbers
    content = content.replace(/\+258 84 123 4567/g, '+258 85 524 0453');
    content = content.replace(/\+258 82 123 4567/g, '+258 85 524 0453');
    content = content.replace(/258841234567/g, '258855240453');
    content = content.replace(/258821234567/g, '258855240453');
    // specific Contact.tsx fix for typo spacing
    content = content.replace(/\+258 85 5240453/g, '+258 85 524 0453');
    
    fs.writeFileSync(file, content);
  }
});
console.log("Global phones updated.");
