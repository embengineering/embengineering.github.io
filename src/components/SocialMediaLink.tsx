import { ISocialMediaLink } from './Home';

const SocialMediaLink = ({
  href,
  title,
  svgPath,
  username,
}: ISocialMediaLink) => {
  return (
    <a className="link" href={href} data-tippy-content={username}>
      <svg
        className="h-6 fill-current text-gray-600 dark:text-gray-100 hover:text-green-700"
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
