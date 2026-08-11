const fs = require('fs');
let code = fs.readFileSync('src/components/HowItWorks.tsx', 'utf8');

const oldCode = `              <div className="bg-gradient-to-br from-pro-red to-red-900 inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-white shadow-[0_0_20px_rgba(229,57,53,0.3)] mb-6 relative z-10 group-hover:scale-105 transition-all duration-500">
                <div className="text-white relative z-10 scale-100">
                  {step.icon}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">0{index + 1} &mdash; {step.title}</h4>`;

const newCode = `              <div className="flex items-center justify-center gap-4 mb-5 relative z-10">
                <span className="text-5xl font-black text-gray-100 group-hover:text-pro-red/20 transition-colors tracking-tighter">0{index + 1}</span>
                <div className="bg-gradient-to-br from-pro-red to-red-900 inline-flex items-center justify-center w-20 h-20 rounded-full border-4 border-white shadow-[0_0_20px_rgba(229,57,53,0.3)] group-hover:scale-105 transition-all duration-500">
                  <div className="text-white relative z-10 scale-100">
                    {step.icon}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-2 tracking-tight">{step.title}</h4>`;

code = code.replace(oldCode, newCode);

// Also remove the connector line as it will not align well with the new layout
code = code.replace(/<div className="hidden md:block absolute top-\[4rem\].*?><\/div>/, '');

fs.writeFileSync('src/components/HowItWorks.tsx', code);
console.log('HowItWorks fixed.');
