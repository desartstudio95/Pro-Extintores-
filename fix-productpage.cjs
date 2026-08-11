const fs = require('fs');
let code = fs.readFileSync('src/pages/ProductPage.tsx', 'utf8');

// 1. Mobile carousel
code = code.replace(
  '<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">',
  '<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:overflow-visible scrollbar-hide">'
);
code = code.replace(
  /className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-pro-red\/30 transition-all group flex flex-col"/g,
  'className="snap-start shrink-0 w-[85vw] md:w-auto bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-pro-red/30 transition-all group flex flex-col"'
);

// 2. Add banners to ProductPage
// Banner 1: Não sabe qual equipamento precisa?
const banner1 = `
      {/* Banner Top */}
      <div className="max-w-7xl mx-auto px-6 mt-16 mb-8">
        <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <h4 className="font-bold text-gray-900 text-lg">Não sabe qual equipamento precisa?</h4>
            <p className="text-slate-600 text-sm mt-1">Os nossos especialistas ajudam a escolher a solução certa.</p>
          </div>
          <Link to="/contactos" className="inline-flex items-center gap-2 bg-green-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shrink-0">
            Falar com um técnico
          </Link>
        </div>
      </div>
`;
code = code.replace('{/* Product List Section */}', banner1 + '\n      {/* Product List Section */}');

// Banner 2: Pronto para proteger o seu espaço?
const banner2 = `
      {/* Banner Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-8 mb-16">
        <div className="bg-pro-red rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left shadow-lg shadow-pro-red/20">
          <div>
            <h4 className="font-bold text-white text-xl md:text-2xl">Pronto para proteger o seu espaço?</h4>
            <p className="text-white/80 text-sm md:text-base mt-2">Peça uma avaliação gratuita e garanta a sua segurança.</p>
          </div>
          <Link to="/contactos" className="inline-flex items-center gap-2 bg-white text-pro-red px-8 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shrink-0 shadow-sm">
            Solicitar avaliação
          </Link>
        </div>
      </div>
`;
code = code.replace('{/* Guarantees Section */}', banner2 + '\n      {/* Guarantees Section */}');

fs.writeFileSync('src/pages/ProductPage.tsx', code);
