const fs = require('fs');

let productsPage = fs.readFileSync('src/components/Products.tsx', 'utf8');
const match = productsPage.match(/const products = \[\s*\{[\s\S]*?\}\s*\];/);

if (match) {
  const code = match[0].replace('const products', 'export const productCategories');
  fs.appendFileSync('src/data/products.ts', '\n' + code + '\n');
  
  productsPage = productsPage.replace(match[0], "");
  productsPage = productsPage.replace("import { Link } from 'react-router-dom';", "import { Link } from 'react-router-dom';\nimport { productCategories as products } from '../data/products';");
  
  fs.writeFileSync('src/components/Products.tsx', productsPage);
  console.log("Extracted successfully.");
} else {
  console.log("Not found.");
}
