import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="flex-grow pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-pro-red font-semibold hover:underline mb-8">
          <ArrowLeft size={16} /> Voltar à página inicial
        </Link>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
          <h1 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 mb-8">
            Política de Privacidade
          </h1>
          
          <div className="space-y-6 text-slate-700 font-light leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Introdução</h2>
              <p>
                A Pro Extintores e Servicos LTDA ("nós", "nosso" ou "empresa") respeita a sua privacidade e compromete-se a proteger os dados pessoais dos seus utilizadores. Esta Política de Privacidade explica como recolhemos, usamos, partilhamos e protegemos as informações quando visita o nosso website e utiliza os nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Informações que Recolhemos</h2>
              <p>Podemos recolher as seguintes informações pessoais quando nos contacta, solicita um orçamento ou subscreve os nossos serviços:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Nome completo</li>
                <li>Endereço de e-mail</li>
                <li>Número de telefone ou telemóvel</li>
                <li>Morada da empresa ou residência</li>
                <li>Detalhes sobre as necessidades de segurança do seu espaço</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Como Usamos as Suas Informações</h2>
              <p>As informações que recolhemos são utilizadas para:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Fornecer e gerir os nossos serviços (orçamentos, manutenções, etc.)</li>
                <li>Comunicar consigo sobre os seus pedidos e responder às suas questões</li>
                <li>Enviar avisos importantes sobre os serviços prestados</li>
                <li>Melhorar o nosso website e o atendimento ao cliente</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Proteção e Segurança</h2>
              <p>
                Implementamos medidas de segurança adequadas para proteger as suas informações pessoais contra o acesso, alteração, divulgação ou destruição não autorizados. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrónico é 100% seguro.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Partilha de Dados</h2>
              <p>
                Não vendemos, trocamos ou transferimos as suas informações pessoais a terceiros sem o seu consentimento, exceto quando necessário para cumprir a lei ou proteger os nossos direitos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Contactos</h2>
              <p>
                Se tiver alguma dúvida sobre esta Política de Privacidade, pode contactar-nos através do escritório central em Maputo, ou pelas nossas linhas de apoio: +258 85 524 0453.
              </p>
            </section>
            
            <p className="text-sm text-slate-500 pt-6 mt-6 border-t border-gray-100">
              Última atualização: Agosto de 2026
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
