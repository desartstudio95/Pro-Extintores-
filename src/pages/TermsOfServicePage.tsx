import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function TermsOfServicePage() {
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
            Termos de Serviço
          </h1>
          
          <div className="space-y-6 text-slate-700 font-light leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">1. Aceitação dos Termos</h2>
              <p>
                Ao aceder e utilizar o website da Pro Extintores e Servicos LTDA, concorda em cumprir e ficar vinculado aos presentes Termos de Serviço. Se não concordar com alguma parte destes termos, não deverá utilizar o nosso website nem os nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">2. Descrição dos Serviços</h2>
              <p>
                A Pro Extintores fornece serviços e produtos relacionados com a Segurança Contra Incêndios e Segurança Eletrónica. Isto inclui a venda, instalação e manutenção de extintores, sistemas de alarme, redes de incêndio e outros equipamentos afins em Moçambique.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">3. Uso do Website</h2>
              <p>
                O utilizador compromete-se a utilizar este website apenas para fins lícitos e de uma forma que não infrinja os direitos, restrinja ou iniba a utilização e usufruto do website por qualquer terceiro. São estritamente proibidas condutas de assédio, transmissão de conteúdo obsceno ou ofensivo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">4. Propriedade Intelectual</h2>
              <p>
                Todo o conteúdo presente neste website, incluindo textos, gráficos, logotipos, ícones, imagens e software, é propriedade da Pro Extintores e Servicos LTDA ou dos seus fornecedores de conteúdo, estando protegido pelas leis de direitos de autor aplicáveis.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">5. Limitação de Responsabilidade</h2>
              <p>
                A Pro Extintores não se responsabiliza por quaisquer danos diretos, indiretos, incidentais ou consequentes que resultem do uso ou da incapacidade de uso do nosso website, incluindo, entre outros, a confiança por parte do utilizador em qualquer informação obtida no site.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-3">6. Modificações aos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. As alterações entrarão em vigor imediatamente após a sua publicação no website. O uso contínuo do website após a publicação das alterações constitui a sua aceitação das mesmas.
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
