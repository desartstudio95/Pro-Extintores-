const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  "import Footer from './components/Footer';",
  "import Footer from './components/Footer';\nimport CallToAction from './components/CallToAction';"
);

code = code.replace(
  "        </Routes>\n        \n        <Footer />",
  "        </Routes>\n        \n        <CallToAction />\n        <Footer />"
);

fs.writeFileSync('src/App.tsx', code);
console.log("App.tsx updated with CallToAction");
