import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-medium border border-teal-100">
              <span className="flex h-2 w-2 rounded-full bg-teal-600 mr-2"></span>
              Available for new opportunities
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Hi, I'm <span className="text-teal-600">{PERSONAL_INFO.name}</span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-600 font-medium">
              {PERSONAL_INFO.role}
            </p>
            
            <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-lg hover:shadow-teal-600/30"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href={PERSONAL_INFO.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-200 text-base font-medium rounded-lg text-slate-700 bg-white hover:bg-slate-50 transition-colors hover:border-slate-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-200 to-blue-200 rounded-2xl transform rotate-3 scale-105 opacity-50 blur-xl"></div>
            <div className="relative bg-slate-900 rounded-2xl p-6 shadow-2xl border border-slate-800">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="font-mono text-sm text-slate-300 space-y-2">
                <p><span className="text-purple-400">const</span> <span className="text-blue-400">engineer</span> = <span className="text-yellow-300">{`{`}</span></p>
                <p className="pl-4">name: <span className="text-green-400">'{PERSONAL_INFO.name}'</span>,</p>
                <p className="pl-4">role: <span className="text-green-400">'{PERSONAL_INFO.role}'</span>,</p>
                <p className="pl-4">skills: <span className="text-yellow-300">['Airflow', 'Kafka', 'MLOps', 'Python']</span>,</p>
                <p className="pl-4">passion: <span className="text-green-400">'AI4SE'</span></p>
                <p><span className="text-yellow-300">{`}`}</span>;</p>
                <p className="animate-pulse mt-4 text-teal-400">$ ready_to_deploy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;