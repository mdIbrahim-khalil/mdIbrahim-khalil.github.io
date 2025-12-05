import React from 'react';
import { CheckCircle2, Award } from 'lucide-react';
import { SKILLS, ACHIEVEMENTS, EDUCATION } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Skills Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Technical Skills</h2>
            <p className="mt-4 text-lg text-slate-600">Tools and technologies I work with</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SKILLS.map((skillGroup, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-4 pb-2 border-b border-slate-100">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, sIndex) => (
                    <div key={sIndex} className="flex items-center text-slate-700 bg-slate-50 px-3 py-1.5 rounded-md border border-slate-200">
                      <CheckCircle2 size={16} className="text-teal-500 mr-2" />
                      <span className="text-sm font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Achievements Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-teal-100 p-2 rounded-lg mr-3">
                <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>
              </span>
              Education
            </h3>
            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-bold text-slate-900">{edu.institution}</h4>
                      <p className="text-teal-600 font-medium">{edu.degree}</p>
                    </div>
                    <span className="text-sm text-slate-500 bg-slate-100 px-2 py-1 rounded">{edu.period}</span>
                  </div>
                  <p className="mt-2 text-sm text-slate-600 font-semibold">CGPA: {edu.gpa}</p>
                  {edu.details && (
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {edu.details.join(' ')}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <span className="bg-yellow-100 p-2 rounded-lg mr-3">
                <Award className="w-6 h-6 text-yellow-700" />
              </span>
              Achievements
            </h3>
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="divide-y divide-slate-100">
                {ACHIEVEMENTS.map((achievement, index) => (
                  <div key={index} className="p-4 flex items-start hover:bg-slate-50 transition-colors">
                    <div className="flex-shrink-0 mt-0.5">
                      <Award className="h-5 w-5 text-yellow-500" />
                    </div>
                    <p className="ml-3 text-slate-700 text-sm font-medium">{achievement}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;