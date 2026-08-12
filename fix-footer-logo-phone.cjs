const fs = require('fs');
let code = fs.readFileSync('src/components/Footer.tsx', 'utf8');

// Logo update
const oldLogo = `<Link to="/#home" className="flex items-center gap-3 mb-5">
              <img src="https://i.ibb.co/hFc8zNDk/REAL-ESTATE-BUYING-OR-SELLING-POST-1.png" alt="Pro Extintores Logo" className="h-8 md:h-10 w-auto object-contain brightness-0 invert" />
              <span className="text-lg font-bold font-heading tracking-tight text-white">
                PRO EXTINTORES<span className="text-pro-red">.</span>
              </span>
            </Link>`;
const newLogo = `<Link to="/#home" className="inline-block mb-5">
              <img src="https://i.ibb.co/hFc8zNDk/REAL-ESTATE-BUYING-OR-SELLING-POST-1.png" alt="Pro Extintores Logo" className="h-14 md:h-20 w-auto object-contain brightness-0 invert" />
            </Link>`;
code = code.replace(oldLogo, newLogo);

// Phone update
const oldPhone = `<li className="flex items-start gap-2.5">
                <Phone size={14} className="text-pro-red shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span>+258 84 123 4567</span>
                  <span>+258 82 123 4567</span>
                </div>
              </li>`;
const newPhone = `<li className="flex items-start gap-2.5">
                <Phone size={14} className="text-pro-red shrink-0 mt-0.5" />
                <span>+258 85 524 0453</span>
              </li>`;
code = code.replace(oldPhone, newPhone);

fs.writeFileSync('src/components/Footer.tsx', code);
console.log("Footer logo and phone updated.");
