export interface SocialMedia {
  href: string;
  title: string;
  username: string;
  svgPath: string;
}

const SocialMediaLink = ({ href, title, svgPath, username }: SocialMedia) => {
  return (
    <a
      className="group flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 border border-transparent hover:border-green-500 hover:bg-green-50 dark:hover:bg-green-900/30 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md"
      href={href}
      target="_blank"
      rel="noreferrer"
      title={username}
    >
      <svg
        className="w-5 h-5 fill-current text-gray-600 dark:text-gray-300 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300"
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>{title}</title>
        <path d={svgPath} />
      </svg>
    </a>
  );
};

export default SocialMediaLink;
