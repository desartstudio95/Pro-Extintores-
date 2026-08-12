const fs = require('fs');
let cta = fs.readFileSync('src/components/CallToAction.tsx', 'utf8');

const oldImageDiv = `<div className="w-full lg:w-1/3 flex justify-center lg:justify-end shrink-0 relative mt-4 lg:mt-0">
            <img 
              src="https://i.ibb.co/Ld7yPw3p/REAL-ESTATE-BUYING-OR-SELLING-POST-2.png" 
              alt="Segurança em destaque" 
              className="h-48 md:h-64 object-contain drop-shadow-2xl relative z-10"
            />
          </div>`;

const newImageDiv = `<div className="w-full lg:w-5/12 flex justify-center lg:justify-end shrink-0 relative mt-8 lg:mt-0 pointer-events-none">
            <img 
              src="https://i.ibb.co/Ld7yPw3p/REAL-ESTATE-BUYING-OR-SELLING-POST-2.png" 
              alt="Segurança em destaque" 
              className="w-[280px] sm:w-[350px] md:w-[450px] lg:absolute lg:-bottom-12 lg:-right-4 lg:w-auto lg:h-[160%] object-cover object-top drop-shadow-2xl z-10"
            />
          </div>`;

if(cta.includes('h-48 md:h-64 object-contain drop-shadow-2xl')) {
  cta = cta.replace(oldImageDiv, newImageDiv);
  fs.writeFileSync('src/components/CallToAction.tsx', cta);
  console.log("CTA image enlarged");
} else {
  console.log("Could not find the target CTA image div.");
}
