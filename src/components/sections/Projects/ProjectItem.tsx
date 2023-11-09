import Tag from '@/components/Tag';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

export type Frontmatter = {
  name: string;
  date: string;
  thumbnail: string;
  tags: string[];
  link: string;
};

export type ProjectItemProps = Frontmatter & {
  content: string;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  return format(date, 'yyyy');
}

function ProjectItem({
  name,
  date,
  thumbnail,
  link,
  tags,
  content,
}: ProjectItemProps) {
  return (
    <li>
      {/* Removed -m-4 from the className below for consistency with the other sections, check if fix is available to increase spacing*/}
      <a
        className="group/item transition-[background-color, opacity]  grid items-baseline gap-2 rounded-md duration-500 hover:duration-[250ms] sm:grid-cols-10 sm:gap-4 lg:p-4 lg:hover:bg-primary-900/40 lg:hover:!opacity-100 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:group-hover/list:opacity-50"
        href={link}
        aria-label={`Link to ${name} project`}
        target="_blank"
        rel="noreferrer"
      >
        <header className="flex h-full flex-col text-xs font-semibold uppercase tracking-wide text-primary-400 sm:col-span-3">
          <p>{formatDate(date)}</p>
          <div className="relative mt-2 max-w-full">
            <Image
              src={thumbnail}
              alt={name}
              width={16}
              height={9}
              loading="lazy"
              layout="responsive"
              className="rounded-sm object-cover"
            />
          </div>
        </header>
        <div className="sm:col-span-7">
          <h3 className="font-medium leading-none text-primary-100">{name}</h3>
          <div className="mt-2 hyphens-auto text-sm leading-normal">
            <MDXRemote source={content} />
          </div>
          <ul className="mt-4 flex flex-wrap items-start gap-2">
            {tags.map(tag => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </ul>
        </div>
      </a>
    </li>
  );
}

export default ProjectItem;
