const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

content = content.replace(
  'className="flex items-center gap-2 btn-primary px-5 py-2 rounded-lg font-medium text-xs text-white shadow-md shadow-pro-red/10"',
  'className="flex items-center gap-2 bg-pro-red hover:bg-black transition-colors duration-300 px-5 py-2 rounded-lg font-medium text-xs text-white shadow-md shadow-pro-red/10"'
);

content = content.replace(
  'className="flex justify-center items-center gap-2 btn-primary text-white w-full py-3.5 rounded-lg font-medium"',
  'className="flex justify-center items-center gap-2 bg-pro-red hover:bg-black transition-colors duration-300 text-white w-full py-3.5 rounded-lg font-medium"'
);

fs.writeFileSync('src/components/Header.tsx', content);
console.log('Header button updated');
