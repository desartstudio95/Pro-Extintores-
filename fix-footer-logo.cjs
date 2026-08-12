const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const regex = /<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pro-red to-pro-dark flex items-center justify-center text-white shadow-lg shadow-pro-red\/20">\s*<Flame size=\{20\} \/>\s*<\/div>/;

const newLogo = `<img src="https://i.ibb.co/hFc8zNDk/REAL-ESTATE-BUYING-OR-SELLING-POST-1.png" alt="Pro Extintores Logo" className="h-10 md:h-12 w-auto object-contain" />`;

if (regex.test(code)) {
    code = code.replace(regex, newLogo);
    fs.writeFileSync('src/components/Footer.tsx', code);
    console.log("Footer logo replaced successfully.");
} else {
    console.log("Could not find the logo block in footer.");
}
