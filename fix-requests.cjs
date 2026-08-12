const fs = require('fs');

// 1. Hero
let hero = fs.readFileSync('src/components/Hero.tsx', 'utf8');
hero = hero.replace(
  'className="absolute inset-0 bg-gradient-to-b from-pro-dark via-pro-red to-[#ff5252] opacity-75"',
  'className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-pro-red opacity-85"'
);
fs.writeFileSync('src/components/Hero.tsx', hero);

// 2. Footer (Logo and Address)
let footer = fs.readFileSync('src/components/Footer.tsx', 'utf8');
footer = footer.replace(
  'className="h-14 md:h-20 w-auto object-contain brightness-0 invert"',
  'className="h-24 md:h-32 w-auto object-contain brightness-0 invert -ml-2"' 
);
footer = footer.replace(
  '<span>Av. de Moçambique, Km 5<br/>Maputo, Moçambique</span>',
  '<span>Av. de Moçambique, Bairro Luís Cabral N°169<br/>Maputo, Moçambique</span>'
);
fs.writeFileSync('src/components/Footer.tsx', footer);

console.log("Done");
