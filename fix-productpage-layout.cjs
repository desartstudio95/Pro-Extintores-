const fs = require('fs');
let code = fs.readFileSync('src/pages/ProductPage.tsx', 'utf8');

// 1. Update the outer wrapper
code = code.replace(
  '<div className="max-w-md md:max-w-lg lg:max-w-xl mx-auto px-6 mt-6">',
  '<div className="max-w-5xl mx-auto px-6 mt-6">'
);

// 2. Change flex-col to md:flex-row
code = code.replace(
  '<div className="flex flex-col">',
  '<div className="flex flex-col md:flex-row">'
);

// 3. Restructure image container to make image smaller and left-aligned on desktop
const oldImageBlock = `<motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative aspect-square bg-gray-100 w-full shrink-0"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-1 bg-pro-red text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg mb-3">
                  <CheckCircle2 size={14} />
                  <span>Disponível em Stock</span>
                </div>
              </div>
            </motion.div>`;

const newImageBlock = `<motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-[45%] lg:w-[40%] shrink-0 p-6 flex flex-col justify-center bg-gray-50/50"
            >
              <div className="relative aspect-square w-full max-w-[320px] mx-auto rounded-2xl overflow-hidden shadow-md bg-white border border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-contain p-4"
                />
                <div className="absolute top-4 right-4">
                  <div className="inline-flex items-center gap-1 bg-pro-red text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg">
                    <CheckCircle2 size={12} />
                    <span>Em Stock</span>
                  </div>
                </div>
              </div>
            </motion.div>`;

code = code.replace(oldImageBlock, newImageBlock);

// 4. Update the info container flex classes
code = code.replace(
  'className="p-6 md:p-8 flex flex-col justify-center"',
  'className="p-6 md:p-10 flex-1 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100"'
);

fs.writeFileSync('src/pages/ProductPage.tsx', code);
console.log("ProductPage layout changed successfully.");
