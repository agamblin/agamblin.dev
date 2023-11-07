import { getDirectoryFiles } from '@/utils';
import JobItem, { JobItemProps } from './JobItem';
import Section from '../Section';
import Collapsible from '@/components/Collapsible';

async function JobList() {
  const jobList = await getDirectoryFiles<JobItemProps>('jobs');

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
