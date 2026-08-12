const fs = require('fs');
const glob = require('glob');
const path = require('path');

const files = glob.sync('src/**/*.{tsx,ts,css}');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  if (content.includes('#0a192f')) {
    content = content.replace(/text-\[\#0a192f\]/g, 'text-black');
    content = content.replace(/bg-\[\#0a192f\]/g, 'bg-black');
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(file, content);
  }
});
console.log('Hex blue replaced');
