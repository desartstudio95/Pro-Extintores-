const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

css = css.replace(
  'background: linear-gradient(135deg, #1e3a8a 0%, #172554 100%);',
  'background: linear-gradient(135deg, #000000 0%, #1f2937 100%);'
);
css = css.replace(
  'box-shadow: 0 8px 25px rgba(30, 58, 138, 0.3), inset 0 1px 0 rgba(255,255,255,0.2);',
  'box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255,255,255,0.2);'
);

fs.writeFileSync('src/index.css', css);
console.log('CSS updated');
