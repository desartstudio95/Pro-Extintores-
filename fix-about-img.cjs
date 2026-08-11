const fs = require('fs');
let code = fs.readFileSync('src/components/About.tsx', 'utf8');

code = code.replace(
  'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800',
  'https://i.ibb.co/twRK3KPH/Chat-GPT-Image-10-de-ago-de-2026-13-55-12.png'
);

fs.writeFileSync('src/components/About.tsx', code);
