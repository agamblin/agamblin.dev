import { getDirectoryFiles } from '@/utils';
import Section from '@/components/sections/Section';
import {
  CollapsibleContent,
  CollapsibleRoot,
  CollapsibleTrigger,
} from '@/components/Collapsible';
import JobItem, { JobItemProps } from './JobItem';

const COLLAPSIBLE_TRESHOLD = 3;

async function JobList() {
  const jobList = (await getDirectoryFiles<JobItemProps>('jobs')).sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );

  return (
    <Section title="experience">
      <CollapsibleRoot>
        <ol className="group/list mt-2 flex flex-col gap-12 lg:mt-0">
          {jobList.slice(0, COLLAPSIBLE_TRESHOLD).map((job, i) => (
            <JobItem {...job} key={i} />
          ))}
          <CollapsibleContent className="flex flex-col gap-12">
            {jobList.slice(COLLAPSIBLE_TRESHOLD).map((job, i) => (
              <JobItem {...job} key={i} />
            ))}
          </CollapsibleContent>
        </ol>
        <CollapsibleTrigger>View more</CollapsibleTrigger>
      </CollapsibleRoot>
    </Section>
  );
}

export default JobList;
