import React from 'react';
import { Shield, Server, Network, Lock, Brain, Cloud } from 'lucide-react';

export default function PlatformSection() {
  const services = [
    {
      icon: Shield,
      title: 'Threat Intelligence',
      description: 'Advanced threat detection and analysis',
      link: 'Learn more'
    },
    {
      icon: Server,
      title: 'Endpoint Security',
      description: 'Comprehensive device protection',
      link: 'Learn more'
    },
    {
      icon: Network,
      title: 'Network Security',
      description: 'Perimeter and internal network defense',
      link: 'Learn more'
    },
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Enterprise data security and compliance',
      link: 'Learn more'
    },
    {
      icon: Brain,
      title: 'AI Security Operations',
      description: 'Automated security operations center',
      link: 'Learn more'
    },
    {
      icon: Cloud,
      title: 'Cloud Security',
      description: 'Multi-cloud security management',
      link: 'Learn more'
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-16">
          <div>
            <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold bg-blue-600/20 border-blue-500/30 text-blue-300 mb-6">
              AI-Powered Platform
            </span>
            <h2 className="text-4xl font-bold text-white mb-6">
              Complete Cyber Defense Platform
            </h2>
            <p className="text-xl text-slate-400 max-w-4xl mx-auto">
              Our integrated platform combines advanced AI, threat intelligence, and automated response to 
              provide comprehensive protection for your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600/30 transition-colors">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-slate-400 mb-4">{service.description}</p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center">
                    {service.link}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
