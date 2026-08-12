const fs = require('fs');
let code = fs.readFileSync('src/components/Header.tsx', 'utf8');

const oldLogo = `<div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pro-red to-pro-dark flex items-center justify-center text-white shadow-lg shadow-pro-red/20">
              <Flame size={20} />
            </div>`;
const newLogo = `<img src="https://i.ibb.co/hFc8zNDk/REAL-ESTATE-BUYING-OR-SELLING-POST-1.png" alt="Pro Extintores Logo" className="h-10 w-auto object-contain" />`;

if (code.includes(oldLogo)) {
    code = code.replace(oldLogo, newLogo);
    fs.writeFileSync('src/components/Header.tsx', code);
    console.log("Logo replaced successfully.");
} else {
    // If exact match fails, let's use regex
    const regex = /<div className="w-10 h-10[^>]*>[\s\S]*?<Flame[^>]*>[\s\S]*?<\/div>/;
    if (regex.test(code)) {
        code = code.replace(regex, newLogo);
        fs.writeFileSync('src/components/Header.tsx', code);
        console.log("Logo replaced using regex.");
    } else {
        console.log("Could not find the logo block.");
    }
}
