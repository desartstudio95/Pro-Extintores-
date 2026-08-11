const fs = require('fs');
const pages = [
  'src/pages/SegurancaContraIncendiosPage.tsx',
  'src/pages/SegurancaEletronicaPage.tsx',
  'src/pages/EquipamentosSegurancaPage.tsx',
  'src/pages/ManutencaoPage.tsx'
];

for (const page of pages) {
  let code = fs.readFileSync(page, 'utf8');
  
  // Add import
  if (!code.includes('ServiceForm')) {
    code = code.replace("import { ArrowLeft } from 'lucide-react';", "import { ArrowLeft } from 'lucide-react';\nimport ServiceForm from '../components/ServiceForm';");
  }
  
  // Inject component before closing div
  if (!code.includes('<ServiceForm />')) {
    code = code.replace("        </div>\n      </div>\n    </main>", "        </div>\n        <ServiceForm />\n      </div>\n    </main>");
  }
  
  fs.writeFileSync(page, code);
}
