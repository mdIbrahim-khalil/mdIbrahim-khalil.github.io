import React from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-slate-400 mb-8 max-w-md">
              I'm always open to discussing Data Engineering pipelines, MLOps infrastructure, or full-stack opportunities.
            </p>
            
            <div className="space-y-4">
              {SOCIAL_LINKS.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="flex items-center space-x-3 text-slate-400 hover:text-teal-400 transition-colors group"
                >
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                    <link.icon size={20} />
                  </div>
                  <span className="font-medium">{link.label === 'Email' ? PERSONAL_INFO.contact.email : link.label}</span>
                </a>
              ))}
              <div className="flex items-center space-x-3 text-slate-400 hover:text-teal-400 transition-colors group">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <span className="font-medium">{PERSONAL_INFO.contact.phone}</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold text-white mb-6">Send a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  placeholder="Hello..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-2.5 rounded-lg transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Md Ibrahim Khalil. All rights reserved.</p>
          <p className="mt-2">Built with React, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;