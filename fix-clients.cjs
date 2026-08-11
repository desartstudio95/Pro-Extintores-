const fs = require('fs');
let code = fs.readFileSync('src/components/Clients.tsx', 'utf8');

code = code.replace(
  "    { name: 'Safira Ceramic', icon: <Building size={24} /> },",
  "    { name: 'Safira', image: 'https://i.ibb.co/0RRybMxM/images-2.jpg', icon: <Building size={24} /> },"
);
code = code.replace(
  "    { name: 'Colegio Peron', icon: <GraduationCap size={24} /> },",
  "    { name: 'Colégio Peron', image: 'https://i.ibb.co/b545zXzZ/FB-IMG-1786428201062.jpg', icon: <GraduationCap size={24} /> },"
);
code = code.replace(
  "    { name: 'Utia Hotel', icon: <Hotel size={24} /> },",
  "    { name: 'Otia Hotel', image: 'https://i.ibb.co/ZRp939SK/unnamed-3.png', icon: <Hotel size={24} /> },"
);
code = code.replace(
  "    { name: 'Bombas Exito', icon: <Fuel size={24} /> },",
  "    { name: 'Bombas Êxito', image: 'https://i.ibb.co/Jw0cnGX0/logo.png', icon: <Fuel size={24} /> },"
);
code = code.replace(
  "    { name: 'Instituto Nacional de Acção Social', icon: <Landmark size={24} /> },",
  "    { name: 'Instituto Nacional de Ação Social', image: 'https://i.ibb.co/gsFHn3Q/images-3.jpg', icon: <Landmark size={24} /> },"
);

const renderLogic = `
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mb-4 transition-colors overflow-hidden p-1 shadow-sm border border-gray-100">
                  {client.image ? (
                    <img src={client.image} alt={client.name} className="w-full h-full object-contain rounded-full" />
                  ) : (
                    client.icon
                  )}
                </div>
`;

code = code.replace(
  /<div className="w-14 h-14 rounded-full bg-slate-50 text-slate-400 flex items-center justify-center mb-4 transition-colors">\s*\{client\.icon\}\s*<\/div>/,
  renderLogic
);

fs.writeFileSync('src/components/Clients.tsx', code);
