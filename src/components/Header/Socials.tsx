import { GitHub, Linkedin, FileText } from 'react-feather';
import StyledLink from '../StyledLink';

const SOCIALS = [
  {
    name: 'GitHub',
    url: 'https://github.com/agamblin',
    icon: GitHub,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/arthur-gamblin-656018120/',
    icon: Linkedin,
  },
  {
    name: 'Résumé',
    url: '/resume_2023.pdf',
    icon: FileText,
  },
];

function Socials() {
  return (
    <ul className="flex flex-shrink-0 justify-center gap-2">
      {SOCIALS.map(({ name, url, icon: Icon }) => (
        <li key={name} className="block leading-[0]">
          <StyledLink
            href={url}
            className="p-2 text-primary-100 hover:text-primary-200"
            aria-label={name}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon size={18} />
            <span className="sr-only">{name}</span>
          </StyledLink>
        </li>
      ))}
    </ul>
  );
}

export default Socials;
