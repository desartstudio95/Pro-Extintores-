const fs = require('fs');

if (fs.existsSync('src/pages/CatalogPage.tsx')) {
  let code = fs.readFileSync('src/pages/CatalogPage.tsx', 'utf8');

  // Title and subtitle sizes
  code = code.replace(
    'className="text-3xl md:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-4"',
    'className="text-2xl md:text-4xl font-bold font-heading text-gray-900 tracking-tight mb-3"'
  );
  code = code.replace(
    'className="text-slate-600 max-w-2xl mx-auto text-base"',
    'className="text-slate-600 max-w-2xl mx-auto text-sm"'
  );
  code = code.replace(
    'className="text-center mb-12"',
    'className="text-center mb-10"'
  );

  // Card implementation
  const oldCardsMatch = /<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">[\s\S]*?\{productCategories\.map\(\(product, index\) => \([\s\S]*?<\/motion\.div>\s*\)\)\s*\}[\s\S]*?<\/div>/;
  
  const newCards = `<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {productCategories.map((product, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={index}
              className="bg-white rounded-[28px] border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col group"
            >
              <div className="relative h-40 sm:h-44 w-full overflow-hidden bg-gray-50">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 z-20">
                  <div className="bg-pro-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                    Disponível
                  </div>
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow text-left">
                <h4 className="text-lg font-black text-[#0a192f] mb-2 leading-tight">
                  {product.name}
                </h4>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
                  {product.description}
                </p>
                
                <div className="mt-auto pt-2 flex justify-center">
                  <Link 
                    to={\`/produtos/\${product.id}\`} 
                    className="inline-block px-6 w-full text-center bg-[#0a192f] hover:bg-pro-red active:bg-red-700 active:scale-95 text-white font-bold text-sm py-2.5 rounded-[20px] transition-all duration-300 shadow-md"
                  >
                    Ver Detalhes
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>`;

  code = code.replace(oldCardsMatch, newCards);

  fs.writeFileSync('src/pages/CatalogPage.tsx', code);
  console.log('Catalog fixed.');
}
