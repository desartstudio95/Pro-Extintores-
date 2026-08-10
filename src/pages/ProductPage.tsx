import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ShieldCheck, ChevronRight, FileText, Wrench, Truck, Shield } from 'lucide-react';

const allProducts = {
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

export default function ProductPage() {
  const { id } = useParams<{ id: string }>();
  const product = id ? allProducts[id as keyof typeof allProducts] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <main className="flex-grow pt-32 pb-20 flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Produto não encontrado</h1>
        <Link to="/" className="text-pro-red font-semibold hover:underline flex items-center gap-2">
          <ArrowLeft size={16} /> Voltar à página inicial
        </Link>
      </main>
    );
  }

  return (
    <main className="flex-grow pt-24 pb-20 bg-gray-50 min-h-[100svh]">
      
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs md:text-sm font-medium text-gray-500">
            <Link to="/" className="hover:text-pro-red transition-colors">Início</Link>
            <ChevronRight size={14} />
            <Link to="/#products" className="hover:text-pro-red transition-colors">Produtos</Link>
            <ChevronRight size={14} />
            <span className="text-gray-900 font-bold">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-6 md:mt-10">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Imagem do Produto */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[250px] md:h-full bg-gray-100"
            >
              <img 
                src={product.image} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-1 bg-pro-red text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg mb-3">
                  <CheckCircle2 size={14} />
                  <span>Disponível em Stock</span>
                </div>
              </div>
            </motion.div>

            {/* Informação do Produto */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 md:p-10 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 text-pro-red mb-4 bg-pro-red/10 px-3 py-1.5 rounded-full border border-pro-red/20 w-max">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-bold tracking-widest uppercase">Equipamento Certificado</span>
              </div>
              
              <h1 className="text-2xl md:text-4xl font-bold font-heading text-gray-900 tracking-tight mb-6">
                {product.name}
              </h1>
              
              <p className="text-slate-600 text-sm md:text-base leading-relaxed font-light mb-6">
                {product.fullDescription}
              </p>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Principais Características</h4>
                <ul className="space-y-3">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} strokeWidth={3} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                <Link 
                  to="/#contact" 
                  className="flex-1 bg-gradient-to-r from-pro-red to-red-800 text-white hover:from-blue-900 hover:to-blue-950 px-6 py-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-pro-red/20 hover:shadow-blue-900/30"
                >
                  <FileText size={18} />
                  Pedir Orçamento
                </Link>
                <Link 
                  to="/#products" 
                  className="px-6 py-4 rounded-xl font-bold text-sm text-gray-600 border border-gray-200 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={18} />
                  Outros Produtos
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Product List Section */}
      {product.items && product.items.length > 0 && (
        <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold font-heading text-gray-900 tracking-tight">
              Gama de <span className="text-pro-red">{product.name}</span>
            </h2>
            <p className="text-slate-500 mt-3 text-sm md:text-base max-w-2xl mx-auto">
              Explore a nossa seleção completa de {product.name.toLowerCase()} disponíveis para entrega imediata.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {product.items.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-pro-red/30 transition-all group flex flex-col"
              >
                <div className="aspect-[4/3] bg-gray-50 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-slate-800 shadow-sm border border-gray-100">
                    Em Stock
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-bold text-gray-900 leading-tight mb-4 group-hover:text-pro-red transition-colors text-sm md:text-base">
                    {item.name}
                  </h3>
                  
                  {item.specs && (
                    <div className="bg-slate-50 rounded-lg p-3.5 mb-5 mt-auto border border-slate-100">
                      <h5 className="text-[9px] uppercase tracking-wider font-bold text-slate-400 mb-2.5 flex items-center gap-1.5">
                        <FileText size={12} /> Especificações Técnicas
                      </h5>
                      <ul className="space-y-2">
                        {item.specs.map((spec, sIdx) => {
                          const parts = spec.split(':');
                          const label = parts.length > 1 ? parts[0] : '';
                          const value = parts.length > 1 ? parts.slice(1).join(':') : spec;
                          
                          return (
                            <li key={sIdx} className="text-xs flex items-center justify-between border-b border-slate-200/60 pb-2 last:border-0 last:pb-0">
                              <span className="font-semibold text-slate-600">{label || '-'}</span>
                              <span className="text-slate-800 font-medium text-right ml-2">{value.trim()}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  
                  <Link 
                    to="/#contact" 
                    className="mt-auto w-full inline-flex items-center justify-center gap-2 bg-slate-900 text-white text-xs font-bold uppercase tracking-wider px-4 py-3 rounded-xl hover:bg-pro-red transition-colors shadow-md hover:shadow-xl hover:-translate-y-0.5 transform"
                  >
                    Solicitar Cotação
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Guarantees Section */}
      <div className="bg-slate-900 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-800">
            
            <div className="flex flex-col items-center text-center px-6 pt-0 md:pt-0 pb-8 md:pb-0">
              <div className="w-14 h-14 bg-pro-red/10 rounded-2xl flex items-center justify-center text-pro-red mb-5">
                <Shield size={28} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Certificação Garantida</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Todos os nossos equipamentos cumprem as mais rigorosas normas de segurança nacionais e internacionais.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center px-6 pt-8 md:pt-0 pb-8 md:pb-0">
              <div className="w-14 h-14 bg-pro-red/10 rounded-2xl flex items-center justify-center text-pro-red mb-5">
                <Truck size={28} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Entrega e Instalação</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Serviço completo desde o fornecimento até à montagem profissional por equipas técnicas qualificadas.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center px-6 pt-8 md:pt-0">
              <div className="w-14 h-14 bg-pro-red/10 rounded-2xl flex items-center justify-center text-pro-red mb-5">
                <Wrench size={28} />
              </div>
              <h4 className="text-white font-bold text-lg mb-2">Manutenção Preventiva</h4>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Garantimos o plano de manutenção anual obrigatório para que os seus sistemas estejam sempre operacionais.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
