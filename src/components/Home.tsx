import { useState, useEffect } from 'react';
import info from '../info.json';
import SocialMediaLink, { type SocialMedia } from './SocialMediaLink';

interface PersonalInfo {
  fullname: string;
  title: string;
  location: string;
  description: string;
  email: string;
  resume: string;
  social: SocialMedia[];
}

const personalInfo: PersonalInfo = info;

const Home = () => {
  const [isDark, setIsDark] = useState(true); // Default to true, syncs in useEffect

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('dark', JSON.stringify(newTheme));
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 sm:p-8 overflow-hidden font-sans">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0 bg-gray-50 dark:bg-gray-950 transition-colors duration-700">
        <div className="absolute inset-0 bg-cover bg-center opacity-30 dark:opacity-10 mix-blend-overlay" style={{ backgroundImage: "var(--background-image-screen-image)" }}></div>
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-green-400/20 dark:bg-green-600/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal-400/20 dark:bg-teal-900/20 rounded-full blur-[120px] pointer-events-none"></div>
      </div>

      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full glass hover:scale-110 hover:bg-white/20 dark:hover:bg-black/50 transition-all duration-300 group"
        aria-label="Toggle Dark Mode"
      >
        {!isDark ? (
          <svg className="w-6 h-6 text-gray-800 group-hover:text-yellow-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 4.22a1 1 0 011.415 0l.708.708a1 1 0 01-1.414 1.414l-.708-.708a1 1 0 010-1.414zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM14.929 15.636a1 1 0 010 1.415l-.707.707a1 1 0 01-1.415-1.414l.707-.707a1 1 0 011.415 0zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-4.22-4.22a1 1 0 01-1.415 0l-.708-.708a1 1 0 011.414-1.414l.708.708a1 1 0 010 1.414zM4 10a1 1 0 01-1 1H2a1 1 0 110-2h1a1 1 0 011 1zM5.071 4.364a1 1 0 010-1.415l.707-.707a1 1 0 011.415 1.414l-.707.707a1 1 0 01-1.415 0zM10 5a5 5 0 100 10 5 5 0 000-10z" />
          </svg>
        ) : (
          <svg className="w-6 h-6 text-gray-200 group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 20 20">
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
          </svg>
        )}
      </button>

      {/* Main Card Container */}
      <div className="z-10 w-full max-w-4xl glass rounded-[2rem] overflow-hidden flex flex-col md:flex-row animate-fade-in-up opacity-0">
        
        {/* Left Column: Image */}
        <div className="md:w-2/5 relative h-64 md:h-auto shrink-0">
           <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "var(--background-image-profile-desktop)" }}></div>
           <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white/90 to-transparent dark:from-gray-900/90 dark:to-transparent"></div>
        </div>

        {/* Right Column: Content */}
        <div className="md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative -mt-10 md:mt-0 bg-white/80 dark:bg-gray-900/80 md:bg-transparent md:dark:bg-transparent rounded-t-[2rem] md:rounded-t-none">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                {personalInfo.fullname}
              </h1>
              <p className="text-lg md:text-xl font-medium text-green-600 dark:text-green-400">
                {personalInfo.title}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 font-medium">
                <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {personalInfo.location}
              </div>
            </div>

            <div className="w-12 h-1 bg-green-500 rounded-full"></div>

            <div 
              className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base"
              dangerouslySetInnerHTML={{ __html: personalInfo.description }}
            />

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-full hover:bg-green-600 dark:hover:bg-green-400 hover:text-white transition-colors duration-300 shadow-lg"
              >
                Get In Touch
              </a>
              <a
                href={personalInfo.resume}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 font-semibold text-gray-700 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-300"
              >
                View Resume &rarr;
              </a>
            </div>

            {/* Social Links Grid */}
            <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
              <div className="flex flex-wrap gap-4">
                {personalInfo.social.map((m) => (
                  <SocialMediaLink key={m.title} {...m} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;
