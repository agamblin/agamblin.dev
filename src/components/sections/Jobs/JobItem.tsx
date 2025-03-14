import { MDXRemote } from 'next-mdx-remote/rsc';
import format from 'date-fns/format';
import Tag from '@/components/Tag';

export type Frontmatter = {
  title: string;
  startDate: string;
  endDate: string;
  company: string;
  companyUri: string;
  location: string;
  tags: string[];
};

export type JobItemProps = Frontmatter & {
  content: string;
};

function formatDate(dateString: string) {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return dateString;
  }

  return format(date, 'MMM yyyy');
}

function JobItem({
  title,
  company,
  startDate,
  endDate,
  content,
  tags,
  companyUri,
}: JobItemProps) {
  return (
    <li className={`
      group/item transition-[background-color, opacity] relative grid items-baseline gap-2
      rounded-md duration-500
      hover:duration-[250ms]
      sm:grid-cols-10 sm:gap-8
      md:gap-4
      lg:p-4 lg:hover:bg-primary-900/40 lg:hover:!opacity-100
      lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg
      lg:group-hover/list:opacity-50
    `}>
      {/* Removed -m-4 from the className below for consistency with the other sections, check if fix is available to increase spacing*/}
      <a
        href={companyUri}
        aria-label={`Link to ${company} website`}
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0"
      />
      <header className={`
        text-xs font-semibold uppercase tracking-wide text-primary-400
        sm:col-span-3
      `}>
        <p>
          {formatDate(startDate)} &#8212; {formatDate(endDate)}
        </p>
      </header>
      <div className={`
        flex flex-col gap-2
        sm:col-span-7
      `}>
        <h3 className="font-medium leading-none text-primary-100">
          {title} • {company}
        </h3>
        <div className="hyphens-auto text-sm leading-normal">
          <MDXRemote source={content} />
        </div>
        <ul className="mt-2 flex flex-wrap items-start gap-2">
          {tags.map(tag => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </ul>
      </div>
    </li>
  );
}

export default JobItem;
