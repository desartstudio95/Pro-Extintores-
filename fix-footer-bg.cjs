const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const oldHeader = '<footer className="bg-[#0a192f] text-white pt-16 pb-8 relative z-10">';
const newHeader = `<footer className="relative text-white pt-16 pb-8 z-10 overflow-hidden bg-[#0a192f]">
      {/* Imagem de Fundo Desfocada */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://i.ibb.co/mC5DtJ96/watermarked-7ab03fb6-fe50-4060-afd5-f841ec066b72.jpg" 
          alt="Footer Background" 
          className="w-full h-full object-cover blur-md opacity-40 scale-105"
        />
        <div className="absolute inset-0 bg-[#0a192f]/85"></div>
      </div>
`;

code = code.replace(oldHeader, newHeader);

const oldContainer = '<div className="max-w-[90rem] mx-auto px-6">';
const newContainer = '<div className="max-w-[90rem] mx-auto px-6 relative z-10">';

code = code.replace(oldContainer, newContainer);

fs.writeFileSync('src/components/Footer.tsx', code);
console.log("Footer background updated.");
