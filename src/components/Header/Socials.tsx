import { GitHub, Linkedin, FileText } from 'react-feather';
import StyledLink from '../StyledLink';
import ResumeDropdownMenu from '../ResumeMenu';

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
];

function Socials() {
  // We apply -ml-2 for optical alignment, we need the padding to be applied for coarse pointer devices but it ruins the alignment
  return (
    <ul className="-mb-1 -ml-2 flex flex-shrink-0 justify-start gap-2">
      {SOCIALS.map(({ name, url, icon: Icon }) => (
        <li key={name} className="block leading-[0]">
          <StyledLink
            href={url}
            className={`
              p-2 text-primary-300
              hover:text-primary-100
            `}
            aria-label={name}
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon size={20} />
            <span className="sr-only">{name}</span>
          </StyledLink>
        </li>
      ))}
      <li className="block leading-[0]">
        <ResumeDropdownMenu />
        <span className="sr-only">Resume</span>
      </li>
    </ul>
  );
}

export default Socials;
