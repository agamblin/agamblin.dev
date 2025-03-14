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
    <li className={`
      group/item transition-[background-color, opacity] relative grid
      grid-rows-[min-content_1fr_min-content] items-baseline gap-4 rounded-md duration-500
      hover:duration-[250ms]
      sm:grid-cols-10 sm:gap-x-8 sm:gap-y-2
      md:gap-x-4
      lg:p-4 lg:hover:bg-primary-900/40 lg:hover:!opacity-100
      lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg
      lg:group-hover/list:opacity-50
    `}>
      {/* Removed -m-4 from the className below for consistency with the other sections, check if fix is available to increase spacing*/}
      <a
        href={link}
        aria-label={`Link to ${name} project`}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0"
      />
      <header className={`
        -mb-2 flex h-full flex-col text-xs font-semibold uppercase tracking-wide text-primary-400
        sm:col-span-3 sm:-mb-0
      `}>
        <p>{formatDate(date)}</p>
      </header>
      <div className="sm:col-span-7">
        <h3 className="font-medium leading-none text-primary-100">{name}</h3>
      </div>
      <div className={`
        relative self-center
        sm:col-span-3 sm:max-w-[10rem]
      `}>
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
      <div className={`
        hyphens-auto text-sm leading-normal
        sm:col-span-7 sm:col-start-4
      `}>
        <MDXRemote source={content} />
      </div>
      <ul className={`
        flex flex-wrap items-start gap-2
        sm:col-span-7 sm:col-start-4 sm:mt-2
      `}>
        {tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </ul>
    </li>
  );
}

export default ProjectItem;
