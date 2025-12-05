import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Professional Experience</h2>
          <p className="mt-4 text-lg text-slate-600">My journey in Software Engineering and Data Science</p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-teal-600 border-4 border-white shadow-sm transform -translate-x-1/2 mt-6 z-10"></div>

                {/* Content */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">{job.role}</h3>
                        <div className="flex items-center text-teal-600 font-medium mt-1">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.company}
                        </div>
                      </div>
                      <div className="mt-2 sm:mt-0 text-sm text-slate-500 text-right">
                        <div className="flex items-center sm:justify-end">
                          <Calendar className="w-4 h-4 mr-1" />
                          {job.period}
                        </div>
                        <div className="flex items-center sm:justify-end mt-1">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                      </div>
                    </div>

                    <ul className="list-disc list-outside ml-4 space-y-2 text-slate-600 mb-6">
                      {job.description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                      ))}
                    </ul>

                    {job.projects && (
                      <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider border-b pb-2">Key Projects</h4>
                        {job.projects.map((project, pIndex) => (
                          <div key={pIndex} className="bg-slate-50 p-4 rounded-lg">
                            <h5 className="font-semibold text-slate-800 mb-2">{project.name}</h5>
                            <ul className="space-y-1">
                              {project.details.map((detail, dIndex) => (
                                <li key={dIndex} className="text-sm text-slate-600 flex items-start">
                                  <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-400"></span>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;