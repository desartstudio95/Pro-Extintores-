const fs = require('fs');
let code = fs.readFileSync('src/pages/ProductPage.tsx', 'utf8');

const regex = /\s*\{\/\* Banner Top \*\/\}[\s\S]*?Falar com um técnico\n\s*<\/a>\n\s*<\/div>\n\s*<\/div>/;

if (regex.test(code)) {
    code = code.replace(regex, '');
    fs.writeFileSync('src/pages/ProductPage.tsx', code);
    console.log("Banner removed.");
} else {
    console.log("Banner not found.");
}
