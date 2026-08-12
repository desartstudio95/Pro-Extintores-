const fs = require('fs');
let code = fs.readFileSync('src/components/Hero.tsx', 'utf8');

const oldArrayRegex = /const bgImages = \[[\s\S]*?\];/;
const newArray = `const bgImages = [
  "https://i.ibb.co/3m2kJJnp/Chat-GPT-Image-12-de-ago-de-2026-19-35-51.png",
  "https://i.ibb.co/DHVbfWW3/Chat-GPT-Image-12-de-ago-de-2026-19-31-20.png",
  "https://i.ibb.co/BKKg3xP4/Chat-GPT-Image-12-de-ago-de-2026-19-29-35.png",
  "https://i.ibb.co/fGtgjNkP/Chat-GPT-Image-12-de-ago-de-2026-19-28-11.png"
];`;

if (oldArrayRegex.test(code)) {
    code = code.replace(oldArrayRegex, newArray);
    fs.writeFileSync('src/components/Hero.tsx', code);
    console.log("Hero background images replaced successfully.");
} else {
    console.log("Could not find bgImages array.");
}
