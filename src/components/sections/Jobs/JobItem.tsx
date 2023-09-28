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
  location,
  startDate,
  endDate,
  content,
  tags,
  companyUri,
}: JobItemProps) {
  return (
    <li>
      <a
        className="group/item transition-[background-color, opacity] -m-4 grid items-baseline gap-2 rounded-md p-4 duration-500 hover:bg-primary-900/40 hover:!opacity-100 hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] hover:drop-shadow-lg hover:duration-[250ms] group-hover/list:opacity-50 sm:grid-cols-10 sm:gap-4"
        href={companyUri}
        aria-label={`Link to ${company} website`}
        target="_blank"
        rel="noreferrer"
      >
        <header className="text-xs font-semibold uppercase tracking-wide text-primary-400 sm:col-span-3">
          <p>
            {formatDate(startDate)} &#8212; {formatDate(endDate)}
          </p>
        </header>
        <div className="sm:col-span-7">
          <h3 className="font-medium leading-none text-primary-100">
            {title} • {company}
          </h3>
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

export default JobItem;
