const fs = require('fs');
let code = fs.readFileSync('src/components/About.tsx', 'utf8');

const imgCode = `
              </ul>
              
              <div className="mt-8 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800" 
                  alt="Equipa técnica da Pro Extintores" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-bold text-lg">A nossa equipa técnica</p>
                  <p className="text-white/80 text-sm">Especialistas certificados ao seu dispor</p>
                </div>
              </div>
`;

code = code.replace("              </ul>", imgCode);

fs.writeFileSync('src/components/About.tsx', code);
