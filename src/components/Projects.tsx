import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Selected Projects</h2>
          <p className="mt-4 text-lg text-slate-600">Showcasing work in ML, Data Engineering, and Web Development</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="flex flex-col h-full bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-teal-100 text-teal-800">
                    {project.category}
                  </div>
                  <div className="flex space-x-2">
                    {project.links.map((link, lIndex) => (
                      <a
                        key={lIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-teal-600 transition-colors"
                        aria-label={link.label}
                      >
                        {link.type === 'github' ? <Github size={20} /> : <ExternalLink size={20} />}
                      </a>
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-6 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIndex) => (
                    <span 
                      key={tIndex} 
                      className="px-2 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;