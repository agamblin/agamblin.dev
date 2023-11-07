import { getDirectoryFiles } from '@/utils';
import Collapsible from '@/components/Collapsible';
import Section from '@/components/sections/Section';
import JobItem, { JobItemProps } from './JobItem';

async function JobList() {
  const jobList = (await getDirectoryFiles<JobItemProps>('jobs')).sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );

  return (
    <Section title="experience">
      <Collapsible>
        {jobList.map((job, i) => (
          <JobItem {...job} key={i} />
        ))}
      </Collapsible>
    </Section>
  );
}

export default JobList;
