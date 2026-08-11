const fs = require('fs');

let appCode = fs.readFileSync('src/App.tsx', 'utf8');

if (!appCode.includes('CatalogPage')) {
  appCode = appCode.replace("import AboutPage from './pages/AboutPage';", "import AboutPage from './pages/AboutPage';\nimport CatalogPage from './pages/CatalogPage';");
  appCode = appCode.replace('<Route path="/sobre-nos" element={<AboutPage />} />', '<Route path="/sobre-nos" element={<AboutPage />} />\n          <Route path="/catalogo" element={<CatalogPage />} />');
  fs.writeFileSync('src/App.tsx', appCode);
}
