const fs = require('fs');

let productPage = fs.readFileSync('src/pages/ProductPage.tsx', 'utf8');

const match = productPage.match(/const allProducts = \{[\s\S]*?\};\n/);
if (match) {
  const allProductsCode = match[0].replace('const allProducts', 'export const allProducts');
  
  fs.mkdirSync('src/data', { recursive: true });
  fs.writeFileSync('src/data/products.ts', allProductsCode);
  
  productPage = productPage.replace(match[0], "import { allProducts } from '../data/products';\n");
  fs.writeFileSync('src/pages/ProductPage.tsx', productPage);
  console.log("Extracted successfully.");
} else {
  console.log("Not found.");
}
