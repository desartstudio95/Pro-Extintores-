const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const whatsappText = encodeURIComponent("Olá, gostaria de pedir um orçamento.");
code = code.replace(
  '<Link to="/#contact" className="flex justify-center items-center gap-2 btn-primary px-5 py-2.5 rounded-lg font-semibold shadow-lg shadow-pro-red/20 text-white w-full sm:w-auto text-sm hover:shadow-xl hover:shadow-blue-900/30 transition-all group">', 
  `<a href="https://wa.me/258855240453?text=${whatsappText}" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center gap-2 btn-primary px-5 py-2.5 rounded-lg font-semibold shadow-lg shadow-pro-red/20 text-white w-full sm:w-auto text-sm hover:shadow-xl hover:shadow-blue-900/30 transition-all group">`
);
code = code.replace(
  'Pedir Orçamento\n                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />\n              </Link>',
  'Pedir Orçamento\n                <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />\n              </a>'
);

fs.writeFileSync('src/components/Hero.tsx', code);
