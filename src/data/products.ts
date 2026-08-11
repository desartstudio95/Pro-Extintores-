export const allProducts = {
  'extintores': {
    name: 'Extintores',
    description: 'Extintores de pó químico, CO2 e água para todos os tipos de fogo.',
    fullDescription: 'Dispomos de uma gama completa de extintores (Pó Químico ABC, CO2 e Água) adequados para diferentes classes de fogos. Todos os nossos equipamentos são rigorosamente testados e certificados segundo as normas de segurança vigentes, garantindo máxima eficácia em situações de emergência.',
    image: 'https://i.ibb.co/7JxnZDV9/Chat-GPT-Image-4-de-ago-de-2026-21-02-31-1.png',
    features: ['Certificação Internacional', 'Diferentes Capacidades (1kg a 50kg)', 'Suportes de Fixação Incluídos', 'Fácil Manuseamento'],
    items: [
      { name: 'Extintor Pó Químico ABC 1kg', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600', specs: ['Eficácia: 8A 34B C', 'Pressão: 15 bar'] },
      { name: 'Extintor Pó Químico ABC 6kg', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600', specs: ['Eficácia: 34A 183B C', 'Pressão: 15 bar'] },
      { name: 'Extintor CO2 2kg', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600', specs: ['Eficácia: 34B', 'Material: Aço'] },
      { name: 'Extintor CO2 5kg', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600', specs: ['Eficácia: 89B', 'Material: Aço'] },
      { name: 'Extintor de Água 9L', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600', specs: ['Eficácia: 21A', 'Agente: Água + Aditivo'] },
      { name: 'Extintor Espuma Mecânica 9L', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600', specs: ['Eficácia: 21A 183B', 'Pressão: 15 bar'] }
    ]
  },
  'mangueiras': {
    name: 'Mangueiras',
    description: 'Mangueiras de alta pressão com certificação internacional.',
    fullDescription: 'Mangueiras de combate a incêndio de alta performance e resistência, concebidas para suportar altas pressões e ambientes adversos. Ideais para edifícios industriais, comerciais e habitacionais, garantindo um caudal de água constante e seguro.',
    image: 'https://i.ibb.co/MDRWqV9x/Chat-GPT-Image-4-de-ago-de-2026-21-12-55.png',
    features: ['Alta Resistência à Pressão', 'Revestimento Anti-Abrasivo', 'Vários Diâmetros Disponíveis', 'Acoplamentos em Latão/Alumínio'],
    items: [
      { name: 'Mangueira de Incêndio 1.5" x 15m', image: 'https://images.unsplash.com/photo-1621287955562-b9138ce316a3?auto=format&fit=crop&q=80&w=600', specs: ['Diâmetro: 45mm', 'Comprimento: 15m'] },
      { name: 'Mangueira de Incêndio 1.5" x 20m', image: 'https://images.unsplash.com/photo-1621287955562-b9138ce316a3?auto=format&fit=crop&q=80&w=600', specs: ['Diâmetro: 45mm', 'Comprimento: 20m'] },
      { name: 'Mangueira de Incêndio 2.5" x 20m', image: 'https://images.unsplash.com/photo-1621287955562-b9138ce316a3?auto=format&fit=crop&q=80&w=600', specs: ['Diâmetro: 70mm', 'Comprimento: 20m'] },
      { name: 'Mangueira Semi-rígida 25mm', image: 'https://images.unsplash.com/photo-1621287955562-b9138ce316a3?auto=format&fit=crop&q=80&w=600', specs: ['Diâmetro: 25mm', 'Para Carretéis'] }
    ]
  },
  'detectores': {
    name: 'Detectores',
    description: 'Detectores de fumo e calor com tecnologia de precisão.',
    fullDescription: 'Sistemas avançados de detecção de fumo e temperatura que identificam precocemente qualquer foco de incêndio. A nossa tecnologia de ponta permite uma resposta rápida, minimizando riscos e danos patrimoniais.',
    image: 'https://i.ibb.co/380TLwt/Chat-GPT-Image-4-de-ago-de-2026-21-15-30.png',
    features: ['Sensores Óticos e Térmicos', 'Baixo Índice de Falsos Alarmes', 'Integração com Centrais de Alarme', 'Design Discreto'],
    items: [
      { name: 'Detector de Fumo Óptico Convencional', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600', specs: ['Tecnologia: Óptica', 'Tensão: 12-24V'] },
      { name: 'Detector de Calor Convencional', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600', specs: ['Temp. Activação: 57ºC', 'Tensão: 12-24V'] },
      { name: 'Detector Termovelocimétrico', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600', specs: ['Resposta: Rápida', 'Taxa de Subida'] },
      { name: 'Detector de Fumo Endereçável', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600', specs: ['Sistema: Endereçável', 'Isolador Integrado'] }
    ]
  },
  'alarmes': {
    name: 'Alarmes',
    description: 'Sistemas de alarme sonoro e visual para evacuação rápida.',
    fullDescription: 'Sirenes e botoneiras de emergência essenciais para alertar ocupantes em caso de incêndio. Sistemas fiáveis e de alta intensidade sonora e visual, desenhados para garantir uma evacuação segura e ordeira.',
    image: 'https://i.ibb.co/b95M058/Chat-GPT-Image-4-de-ago-de-2026-21-17-04.png',
    features: ['Alta Intensidade Sonora (dB)', 'Sinalização Visual Estroboscópica', 'Botoneiras de Alarme Manual', 'Baterias de Backup'],
    items: [
      { name: 'Sirene Eletrónica de Incêndio', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600', specs: ['Volume: 100dB', 'Tons: 32 selecionáveis'] },
      { name: 'Sirene Audiovisual (Estroboscópica)', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600', specs: ['Flash: LED', 'Volume: 100dB'] },
      { name: 'Botoneira de Alarme Manual Rearmável', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600', specs: ['Rearme: Chave', 'Contacto: NA/NC'] },
      { name: 'Central de Detecção de Incêndio (CDI)', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600', specs: ['Zonas: 4 a 8', 'Baterias: 2x 12V'] }
    ]
  },
  'sprinklers': {
    name: 'Sprinklers',
    description: 'Sistemas automáticos de supressão de chamas para tetos.',
    fullDescription: 'Redes de sprinklers (chuveiros automáticos) que atuam de forma autónoma assim que é detetada uma temperatura anómala. São a solução mais eficaz para o controlo inicial e supressão de incêndios em espaços fechados.',
    image: 'https://i.ibb.co/tT5by5Gd/Chat-GPT-Image-4-de-ago-de-2026-22-04-28.png',
    features: ['Ativação Automática Independente', 'Cobertura Ampla', 'Vários Tipos de Resposta (Rápida/Standard)', 'Manutenção Simplificada'],
    items: [
      { name: 'Sprinkler Pendente 68ºC', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600', specs: ['Rosca: 1/2"', 'Ampola: Vermelha (68ºC)'] },
      { name: 'Sprinkler Upright 68ºC', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600', specs: ['Rosca: 1/2"', 'Instalação: Para cima'] },
      { name: 'Sprinkler Pendente 93ºC', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600', specs: ['Rosca: 1/2"', 'Ampola: Verde (93ºC)'] },
      { name: 'Válvula de Governo e Alarme', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600', specs: ['Diâmetros: 3" a 8"', 'Acessórios Incluídos'] }
    ]
  },
  'equipamentos-epi': {
    name: 'Equipamentos EPI',
    description: 'Capacetes, luvas e proteção térmica resistente ao fogo.',
    fullDescription: 'Equipamentos de Proteção Individual desenhados para salvaguardar a integridade física de equipas de intervenção e trabalhadores. Fornecemos fatos ignífugos, capacetes, botas de segurança, luvas e aparelhos respiratórios de alta qualidade.',
    image: 'https://i.ibb.co/dsL3N95t/Chat-GPT-Image-7-de-ago-de-2026-15-19-20.png',
    features: ['Materiais Ignífugos Certificados', 'Conforto e Ergonomia', 'Proteção Térmica Extrema', 'Acessórios de Alta Visibilidade'],
    items: [
      { name: 'Capacete de Bombeiro com Viseira', image: 'https://i.ibb.co/dsL3N95t/Chat-GPT-Image-7-de-ago-de-2026-15-19-20.png', specs: ['Norma: EN443', 'Viseira: Anti-risco'] },
      { name: 'Fato de Intervenção Ignífugo', image: 'https://i.ibb.co/dsL3N95t/Chat-GPT-Image-7-de-ago-de-2026-15-19-20.png', specs: ['Material: Nomex', 'Faixas Refletoras'] },
      { name: 'Luvas de Proteção Térmica', image: 'https://i.ibb.co/dsL3N95t/Chat-GPT-Image-7-de-ago-de-2026-15-19-20.png', specs: ['Resistência: Corte e Calor', 'Kevlar/Couro'] },
      { name: 'Botas de Combate a Incêndios', image: 'https://i.ibb.co/dsL3N95t/Chat-GPT-Image-7-de-ago-de-2026-15-19-20.png', specs: ['Biqueira: Aço', 'Anti-perfuração'] },
      { name: 'Aparelho Respiratório (ARICA)', image: 'https://i.ibb.co/dsL3N95t/Chat-GPT-Image-7-de-ago-de-2026-15-19-20.png', specs: ['Pressão: 300 bar', 'Autonomia: 45 min'] }
    ]
  },
  'bocas-de-incendio': {
    name: 'Bocas de Incêndio',
    description: 'Sistemas completos de bocas de incêndio (carretéis).',
    fullDescription: 'Redes de Incêndio Armadas (RIA), vulgarmente conhecidas como bocas de incêndio ou carretéis. Permitem uma intervenção imediata e contínua com água, sendo um equipamento de primeira intervenção fundamental em qualquer edifício.',
    image: 'https://i.ibb.co/ycKkrJWL/Chat-GPT-Image-7-de-ago-de-2026-15-39-16.png',
    features: ['Mangueira Semi-Rígida', 'Agulheta Regulável', 'Armário Robusto', 'Pronto a Usar'],
    items: [
      { name: 'Carretel de Incêndio Giratório', image: 'https://i.ibb.co/ycKkrJWL/Chat-GPT-Image-7-de-ago-de-2026-15-39-16.png', specs: ['Diâmetro: 25mm', 'Comprimento: 25m'] },
      { name: 'Agulheta Regulável 3 posições', image: 'https://i.ibb.co/ycKkrJWL/Chat-GPT-Image-7-de-ago-de-2026-15-39-16.png', specs: ['Modos: Jato/Nevoeiro/Fechado', 'Material: Latão'] },
      { name: 'Armário para Carretel', image: 'https://i.ibb.co/ycKkrJWL/Chat-GPT-Image-7-de-ago-de-2026-15-39-16.png', specs: ['Chapa de Aço', 'Cor: Vermelho RAL 3000'] },
      { name: 'Válvula de Cunha', image: 'https://i.ibb.co/ycKkrJWL/Chat-GPT-Image-7-de-ago-de-2026-15-39-16.png', specs: ['Rosca: 1"', 'Material: Latão'] }
    ]
  },
  'sinalizacao': {
    name: 'Sinalização',
    description: 'Placas fotoluminescentes para indicação de saídas.',
    fullDescription: 'Sinalização de segurança fotoluminescente que garante a visibilidade de rotas de fuga, saídas de emergência e localização de equipamentos de combate a incêndio, mesmo em situações de falha total de energia elétrica.',
    image: 'https://i.ibb.co/C3pVRt8Q/Chat-GPT-Image-7-de-ago-de-2026-15-41-25.png',
    features: ['Alta Fotoluminescência', 'Materiais Resistentes', 'Conformidade Legal', 'Diversos Formatos e Tamanhos'],
    items: [
      { name: 'Placa Saída (Esq/Dir)', image: 'https://i.ibb.co/C3pVRt8Q/Chat-GPT-Image-7-de-ago-de-2026-15-41-25.png', specs: ['Tamanho: 300x150mm', 'Fotoluminescente'] },
      { name: 'Placa Extintor', image: 'https://i.ibb.co/C3pVRt8Q/Chat-GPT-Image-7-de-ago-de-2026-15-41-25.png', specs: ['Tamanho: 200x200mm', 'Símbolo Normalizado'] },
      { name: 'Placa Boca de Incêndio', image: 'https://i.ibb.co/C3pVRt8Q/Chat-GPT-Image-7-de-ago-de-2026-15-41-25.png', specs: ['Tamanho: 200x200mm', 'Visibilidade Alta'] },
      { name: 'Placa Botoneira', image: 'https://i.ibb.co/C3pVRt8Q/Chat-GPT-Image-7-de-ago-de-2026-15-41-25.png', specs: ['Tamanho: 150x150mm', 'Fotoluminescente'] },
      { name: 'Plano de Evacuação', image: 'https://i.ibb.co/C3pVRt8Q/Chat-GPT-Image-7-de-ago-de-2026-15-41-25.png', specs: ['Formato: A3/A4', 'PVC Rígido'] }
    ]
  }
};

export const productCategories = [
    {
      id: "extintores",
      name: "Extintores",
      description: "Extintores de pó químico, CO2 e água para todos os tipos de fogo.",
      image: "https://i.ibb.co/7JxnZDV9/Chat-GPT-Image-4-de-ago-de-2026-21-02-31-1.png"
    },
    {
      id: "mangueiras",
      name: "Mangueiras",
      description: "Mangueiras de alta pressão com certificação internacional.",
      image: "https://i.ibb.co/MDRWqV9x/Chat-GPT-Image-4-de-ago-de-2026-21-12-55.png"
    },
    {
      id: "detectores",
      name: "Detectores",
      description: "Detectores de fumo e calor com tecnologia de precisão.",
      image: "https://i.ibb.co/380TLwt/Chat-GPT-Image-4-de-ago-de-2026-21-15-30.png"
    },
    {
      id: "alarmes",
      name: "Alarmes",
      description: "Sistemas de alarme sonoro e visual para evacuação rápida.",
      image: "https://i.ibb.co/b95M058/Chat-GPT-Image-4-de-ago-de-2026-21-17-04.png"
    },
    {
      id: "sprinklers",
      name: "Sprinklers",
      description: "Sistemas automáticos de supressão de chamas para tetos.",
      image: "https://i.ibb.co/tT5by5Gd/Chat-GPT-Image-4-de-ago-de-2026-22-04-28.png"
    },
    {
      id: "equipamentos-epi",
      name: "Equipamentos EPI",
      description: "Capacetes, luvas e proteção térmica resistente ao fogo.",
      image: "https://i.ibb.co/dsL3N95t/Chat-GPT-Image-7-de-ago-de-2026-15-19-20.png"
    },
    {
      id: "bocas-de-incendio",
      name: "Bocas de Incêndio",
      description: "Sistemas completos de bocas de incêndio (carretéis).",
      image: "https://i.ibb.co/ycKkrJWL/Chat-GPT-Image-7-de-ago-de-2026-15-39-16.png"
    },
    {
      id: "sinalizacao",
      name: "Sinalização",
      description: "Placas fotoluminescentes para indicação de saídas.",
      image: "https://i.ibb.co/C3pVRt8Q/Chat-GPT-Image-7-de-ago-de-2026-15-41-25.png"
    }
  ];
