import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, ShieldCheck, ChevronRight, FileText } from 'lucide-react';

const allProducts = {
  'extintores': {
    name: 'Extintores',
    description: 'Extintores de pó químico, CO2 e água para todos os tipos de fogo.',
    fullDescription: 'Dispomos de uma gama completa de extintores (Pó Químico ABC, CO2 e Água) adequados para diferentes classes de fogos. Todos os nossos equipamentos são rigorosamente testados e certificados segundo as normas de segurança vigentes, garantindo máxima eficácia em situações de emergência.',
    image: 'https://i.ibb.co/7JxnZDV9/Chat-GPT-Image-4-de-ago-de-2026-21-02-31-1.png',
    features: ['Certificação Internacional', 'Diferentes Capacidades (1kg a 50kg)', 'Suportes de Fixação Incluídos', 'Fácil Manuseamento'],
    items: [
      { name: 'Extintor Pó Químico ABC 1kg', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600' },
      { name: 'Extintor Pó Químico ABC 6kg', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600' },
      { name: 'Extintor CO2 2kg', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600' },
      { name: 'Extintor CO2 5kg', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600' },
      { name: 'Extintor de Água 9L', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600' },
      { name: 'Extintor Espuma Mecânica 9L', image: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  'mangueiras': {
    name: 'Mangueiras',
    description: 'Mangueiras de alta pressão com certificação internacional.',
    fullDescription: 'Mangueiras de combate a incêndio de alta performance e resistência, concebidas para suportar altas pressões e ambientes adversos. Ideais para edifícios industriais, comerciais e habitacionais, garantindo um caudal de água constante e seguro.',
    image: 'https://i.ibb.co/MDRWqV9x/Chat-GPT-Image-4-de-ago-de-2026-21-12-55.png',
    features: ['Alta Resistência à Pressão', 'Revestimento Anti-Abrasivo', 'Vários Diâmetros Disponíveis', 'Acoplamentos em Latão/Alumínio'],
    items: [
      { name: 'Mangueira de Incêndio 1.5" x 15m', image: 'https://images.unsplash.com/photo-1621287955562-b9138ce316a3?auto=format&fit=crop&q=80&w=600' },
      { name: 'Mangueira de Incêndio 1.5" x 20m', image: 'https://images.unsplash.com/photo-1621287955562-b9138ce316a3?auto=format&fit=crop&q=80&w=600' },
      { name: 'Mangueira de Incêndio 2.5" x 20m', image: 'https://images.unsplash.com/photo-1621287955562-b9138ce316a3?auto=format&fit=crop&q=80&w=600' },
      { name: 'Mangueira Semi-rígida 25mm', image: 'https://images.unsplash.com/photo-1621287955562-b9138ce316a3?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  'detectores': {
    name: 'Detectores',
    description: 'Detectores de fumo e calor com tecnologia de precisão.',
    fullDescription: 'Sistemas avançados de detecção de fumo e temperatura que identificam precocemente qualquer foco de incêndio. A nossa tecnologia de ponta permite uma resposta rápida, minimizando riscos e danos patrimoniais.',
    image: 'https://i.ibb.co/380TLwt/Chat-GPT-Image-4-de-ago-de-2026-21-15-30.png',
    features: ['Sensores Óticos e Térmicos', 'Baixo Índice de Falsos Alarmes', 'Integração com Centrais de Alarme', 'Design Discreto'],
    items: [
      { name: 'Detector de Fumo Óptico Convencional', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600' },
      { name: 'Detector de Calor Convencional', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600' },
      { name: 'Detector Termovelocimétrico', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600' },
      { name: 'Detector de Fumo Endereçável', image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  'alarmes': {
    name: 'Alarmes',
    description: 'Sistemas de alarme sonoro e visual para evacuação rápida.',
    fullDescription: 'Sirenes e botoneiras de emergência essenciais para alertar ocupantes em caso de incêndio. Sistemas fiáveis e de alta intensidade sonora e visual, desenhados para garantir uma evacuação segura e ordeira.',
    image: 'https://i.ibb.co/b95M058/Chat-GPT-Image-4-de-ago-de-2026-21-17-04.png',
    features: ['Alta Intensidade Sonora (dB)', 'Sinalização Visual Estroboscópica', 'Botoneiras de Alarme Manual', 'Baterias de Backup'],
    items: [
      { name: 'Sirene Eletrónica de Incêndio', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600' },
      { name: 'Sirene Audiovisual (Estroboscópica)', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600' },
      { name: 'Botoneira de Alarme Manual Rearmável', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600' },
      { name: 'Central de Detecção de Incêndio (CDI)', image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  'sprinklers': {
    name: 'Sprinklers',
    description: 'Sistemas automáticos de supressão de chamas para tetos.',
    fullDescription: 'Redes de sprinklers (chuveiros automáticos) que atuam de forma autónoma assim que é detetada uma temperatura anómala. São a solução mais eficaz para o controlo inicial e supressão de incêndios em espaços fechados.',
    image: 'https://i.ibb.co/tT5by5Gd/Chat-GPT-Image-4-de-ago-de-2026-22-04-28.png',
    features: ['Ativação Automática Independente', 'Cobertura Ampla', 'Vários Tipos de Resposta (Rápida/Standard)', 'Manutenção Simplificada'],
    items: [
      { name: 'Sprinkler Pendente 68ºC', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600' },
      { name: 'Sprinkler Upright 68ºC', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600' },
      { name: 'Sprinkler Pendente 93ºC', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600' },
      { name: 'Válvula de Governo e Alarme', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  'equipamentos-epi': {
    name: 'Equipamentos EPI',
    description: 'Capacetes, luvas e proteção térmica resistente ao fogo.',
    fullDescription: 'Equipamentos de Proteção Individual desenhados para salvaguardar a integridade física de equipas de intervenção e trabalhadores. Fornecemos fatos ignífugos, capacetes, botas de segurança, luvas e aparelhos respiratórios de alta qualidade.',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600',
    features: ['Materiais Ignífugos Certificados', 'Conforto e Ergonomia', 'Proteção Térmica Extrema', 'Acessórios de Alta Visibilidade'],
    items: [
      { name: 'Capacete de Bombeiro com Viseira', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600' },
      { name: 'Fato de Intervenção Ignífugo', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600' },
      { name: 'Luvas de Proteção Térmica', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600' },
      { name: 'Botas de Combate a Incêndios', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600' },
      { name: 'Aparelho Respiratório Isolante (ARICA)', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  'bocas-de-incendio': {
    name: 'Bocas de Incêndio',
    description: 'Sistemas completos de bocas de incêndio (carretéis).',
    fullDescription: 'Redes de Incêndio Armadas (RIA), vulgarmente conhecidas como bocas de incêndio ou carretéis. Permitem uma intervenção imediata e contínua com água, sendo um equipamento de primeira intervenção fundamental em qualquer edifício.',
    image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=600',
    features: ['Mangueira Semi-Rígida', 'Agulheta Regulável', 'Armário Robusto', 'Pronto a Usar'],
    items: [
      { name: 'Carretel de Incêndio com Braço Giratório', image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=600' },
      { name: 'Agulheta Regulável 3 posições', image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=600' },
      { name: 'Armário para Carretel e Extintor', image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=600' },
      { name: 'Válvula de Cunha', image: 'https://images.unsplash.com/photo-1601058268499-e52658b8bb88?auto=format&fit=crop&q=80&w=600' }
    ]
  },
  'sinalizacao': {
    name: 'Sinalização',
    description: 'Placas fotoluminescentes para indicação de saídas.',
    fullDescription: 'Sinalização de segurança fotoluminescente que garante a visibilidade de rotas de fuga, saídas de emergência e localização de equipamentos de combate a incêndio, mesmo em situações de falha total de energia elétrica.',
    image: 'https://images.unsplash.com/photo-1585834851259-26d1c876e5d8?auto=format&fit=crop&q=80&w=600',
    features: ['Alta Fotoluminescência', 'Materiais Resistentes', 'Conformidade Legal', 'Diversos Formatos e Tamanhos'],
    items: [
      { name: 'Placa Fotoluminescente Saída (Esq/Dir)', image: 'https://images.unsplash.com/photo-1585834851259-26d1c876e5d8?auto=format&fit=crop&q=80&w=600' },
      { name: 'Placa Sinalização de Extintor', image: 'https://images.unsplash.com/photo-1585834851259-26d1c876e5d8?auto=format&fit=crop&q=80&w=600' },
      { name: 'Placa Sinalização Boca de Incêndio', image: 'https://images.unsplash.com/photo-1585834851259-26d1c876e5d8?auto=format&fit=crop&q=80&w=600' },
      { name: 'Placa Sinalização de Botoneira', image: 'https://images.unsplash.com/photo-1585834851259-26d1c876e5d8?auto=format&fit=crop&q=80&w=600' },
      { name: 'Plano de Evacuação', image: 'https://images.unsplash.com/photo-1585834851259-26d1c876e5d8?auto=format&fit=crop&q=80&w=600' }
    ]
  },
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

      <div className="max-w-7xl mx-auto px-6 mt-10 md:mt-16">
        <div className="bg-white rounded-3xl shadow-xl shadow-slate-900/5 border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            
            {/* Imagem do Produto */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] md:h-auto bg-gray-100"
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
              className="p-8 md:p-12 flex flex-col justify-center"
            >
              <div className="inline-flex items-center gap-2 text-pro-red mb-4 bg-pro-red/10 px-3 py-1.5 rounded-full border border-pro-red/20 w-max">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-bold tracking-widest uppercase">Equipamento Certificado</span>
              </div>
              
              <h1 className="text-3xl md:text-5xl font-bold font-heading text-gray-900 tracking-tight mb-6">
                {product.name}
              </h1>
              
              <p className="text-slate-600 text-base md:text-lg leading-relaxed font-light mb-8">
                {product.fullDescription}
              </p>

              <div className="mb-10">
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

              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-gray-100">
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
        <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24">
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
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-pro-red/30 transition-all group"
              >
                <div className="aspect-square bg-gray-50 relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 leading-tight mb-2 group-hover:text-pro-red transition-colors">
                    {item.name}
                  </h3>
                  <Link 
                    to="/#contact" 
                    className="inline-flex items-center text-xs font-semibold text-gray-500 hover:text-pro-red transition-colors"
                  >
                    Consultar preço <ChevronRight size={14} className="ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
