import { useEffect } from 'react';
import info from '../info.json';
import SocialMediaLink, { SocialMedia } from './SocialMediaLink';
import useLocalStorage from '../localstorage-hook';
import DOMPurify from 'dompurify';

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
  const [darkMode, setDarkMode] = useLocalStorage<boolean>('dark', true);
  const sanitizedHtml = DOMPurify.sanitize(personalInfo.description);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="max-w-7xl flex items-center justify-center px-6 pt-20 pb-6 lg:py-20 mx-auto">
      <div className="w-full lg:basis-2/3 rounded-lg lg:rounded-l-lg shadow-2xl bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <div className="p-4 md:p-12 text-center lg:text-left">
          <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-profile-mobile"></div>
          <h1 className="text-3xl font-bold pt-8 lg:pt-0">
            {personalInfo.fullname}
          </h1>
          <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-green-500"></div>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-green-700 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
            </svg>
            {personalInfo.title}
          </p>
          <p className="pt-2 text-gray-600 dark:text-gray-100 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
            <svg
              className="h-4 fill-current text-green-700 pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
            </svg>
            {personalInfo.location}
          </p>
          <p
            className="pt-8 text-sm hidden md:block"
            dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
          ></p>
          <div className="pt-12 pb-8">
            <a
              className="bg-green-700 hover:bg-green-900 text-white font-bold py-4 px-6 rounded-full"
              href={`mailto:${personalInfo.email}`}
              target="_blank"
              rel="noreferrer"
            >
              Get In Touch
            </a>
            <a
              className="text-green-700 dark:text-white underline font-bold py-4 px-6"
              href={personalInfo.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>

          <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
            {personalInfo.social.map((m) => (
              <SocialMediaLink key={m.title} {...m} />
            ))}
          </div>
        </div>
      </div>
      <div className="w-100 hidden lg:flex lg:basis-1/3">
        <div className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block w-100 h-[600px] bg-cover bg-center bg-profile-desktop"></div>
      </div>
      <div className="fixed top-2 right-2">
        <button
          className="rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-white dark:hover:bg-gray-900 hover:bg-grey text-grey-darkest font-bold p-2 inline-flex items-center shadow"
          onClick={() => setDarkMode(!darkMode)}
        >
          <svg
            className="w-8 h-8 fill-gray-900 dark:fill-gray-100"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d={
                !darkMode
                  ? 'M12.048 21.963c-.308 0-.618-.015-.93-.043-2.66-.246-5.064-1.513-6.771-3.567s-2.512-4.651-2.266-7.311a10.004 10.004 0 0 1 9.038-9.038 1 1 0 0 1 .896 1.589 6.008 6.008 0 0 0 1.258 8.392c2.078 1.536 5.055 1.536 7.133 0a1 1 0 0 1 1.591.896 9.951 9.951 0 0 1-9.949 9.082zM9.315 4.438a8.006 8.006 0 0 0-5.244 6.787 7.954 7.954 0 0 0 1.813 5.849 7.95 7.95 0 0 0 5.417 2.854 7.95 7.95 0 0 0 8.266-5.243 8.01 8.01 0 0 1-2.729.476 7.946 7.946 0 0 1-4.755-1.565C9.174 11.443 8.145 7.68 9.315 4.438z'
                  : 'M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0-4a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm0 20a1 1 0 0 1-1-1v-2a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1zM5.64 6.64a.997.997 0 0 1-.707-.293l-1.42-1.42a.999.999 0 1 1 1.414-1.414l1.42 1.42A.999.999 0 0 1 5.64 6.64zm14.139 14.139a.997.997 0 0 1-.707-.293l-1.42-1.42a.999.999 0 1 1 1.414-1.414l1.42 1.42a.999.999 0 0 1-.707 1.707zM3 13H1a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2zm20 0h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2zM4.22 20.779a.999.999 0 0 1-.707-1.707l1.42-1.42a.999.999 0 1 1 1.414 1.414l-1.42 1.42a.993.993 0 0 1-.707.293zM18.359 6.64a.999.999 0 0 1-.707-1.707l1.42-1.42a.999.999 0 1 1 1.414 1.414l-1.42 1.42a.997.997 0 0 1-.707.293z'
              }
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
export default Home;
