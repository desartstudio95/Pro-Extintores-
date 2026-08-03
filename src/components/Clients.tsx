import React from 'react';

export default function Clients() {
  const clients = [
    "MOZAL", "SASOL", "EDM", "HCB", "BCI", "Millennium BIM", "Coca-Cola", "Vodacom"
  ];

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-sm font-bold text-gray-500 uppercase tracking-widest mb-8">
          Empresas que Confiam em Nós
        </h3>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60">
          {clients.map((client, idx) => (
            <div key={idx} className="text-xl md:text-2xl font-bold font-heading text-gray-400 uppercase">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
