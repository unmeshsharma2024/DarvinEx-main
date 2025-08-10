import React from 'react';

export default function TrustSection() {
  const companies = [
    { name: 'Microsoft', letter: 'M' },
    { name: 'Amazon', letter: 'A' },
    { name: 'Google', letter: 'G' },
    { name: 'IBM', letter: 'IBM' },
    { name: 'Oracle', letter: 'O' },
  ];

  const stats = [
    { number: '500+', label: 'Enterprise Customers' },
    { number: '99.9%', label: 'Threat Detection Rate' },
    { number: '24/7', label: 'Security Operations' },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              Enterprises and MSSPs Rely on Darvin
            </h2>
            <p className="text-xl text-slate-400">
              Trusted by security teams at leading organizations worldwide
            </p>
          </div>

          {/* Company logos */}
          <div className="flex justify-center items-center space-x-16">
            {companies.map((company) => (
              <div key={company.name} className="text-center">
                <div className="w-16 h-16 bg-slate-800 rounded-lg flex items-center justify-center mb-3 border border-slate-700">
                  <span className="text-2xl font-bold text-slate-400">{company.letter}</span>
                </div>
                <span className="text-sm text-slate-500">{company.name}</span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
