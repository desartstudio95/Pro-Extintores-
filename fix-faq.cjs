const fs = require('fs');
let code = fs.readFileSync('src/components/FAQ.tsx', 'utf8');

const newFaqs = `
  const faqs = [
    {
      question: "Vocês fazem manutenção de extintores?",
      answer: "Sim, realizamos manutenção preventiva e corretiva, bem como a recarga de todos os tipos de extintores (Pó ABC, CO2, Água, Espuma)."
    },
    {
      question: "Qual a periodicidade da manutenção?",
      answer: "A manutenção preventiva e a recarga dos extintores devem ser feitas anualmente por uma equipa técnica especializada, conforme as normas de segurança em vigor."
    },
    {
      question: "Fazem instalações em Maputo?",
      answer: "Sim, a nossa sede é em Maputo e realizamos instalações e manutenções em toda a província e arredores."
    },
    {
      question: "Trabalham com empresas e condomínios?",
      answer: "Sim, fornecemos soluções e contratos de manutenção contínua para empresas, condomínios, indústrias, escolas e instituições."
    },
    {
      question: "Fornecem certificados/documentação?",
      answer: "Sim, todos os nossos serviços e equipamentos vêm acompanhados de certificação que comprova a conformidade com as normas de segurança nacionais e internacionais."
    },
    {
      question: "Fazem inspeção no local?",
      answer: "Sim, a nossa equipa técnica desloca-se às suas instalações para realizar uma avaliação completa dos riscos e recomendar a melhor solução."
    },
    {
      question: "Vendem equipamentos individualmente?",
      answer: "Sim, comercializamos extintores, EPIs, e equipamentos de segurança avulso, tanto para pequenas necessidades como para grandes volumes."
    },
    {
      question: "Fazem instalação de sistemas de incêndio?",
      answer: "Sim, instalamos sistemas complexos de deteção e alarme de incêndios, bem como redes de água, carretéis e hidrantes."
    },
    {
      question: "Trabalham com projetos de construção?",
      answer: "Sim, colaboramos com construtores e engenheiros para o dimensionamento e instalação de sistemas de segurança contra incêndios em novos projetos ou reabilitações."
    },
    {
      question: "Quanto custa uma manutenção?",
      answer: "O custo varia consoante a quantidade e o tipo de equipamentos. Recomendamos que entre em contacto connosco para obter um orçamento gratuito e personalizado."
    },
    {
      question: "Quanto tempo demora um orçamento?",
      answer: "A nossa equipa esforça-se por responder a todos os pedidos de orçamento num prazo de 24 a 48 horas úteis."
    }
  ];
`;

const regex = /const faqs = \[\s*\{[\s\S]*?\}\s*\];/;
code = code.replace(regex, newFaqs.trim());

fs.writeFileSync('src/components/FAQ.tsx', code);
