import { getDirectoryFiles } from '@/utils';
import JobItem, { JobItemProps } from './JobItem';
import Section from '../Section';

async function JobList() {
  const jobList = await getDirectoryFiles<JobItemProps>('jobs');

  return (
    <Section title="experience">
      <ol className="group/list mt-2 flex flex-col gap-12 lg:mt-0">
        {jobList.map((job, i) => (
          <JobItem {...job} key={i} />
        ))}
      </ol>
    </Section>
  );
}

export default JobList;
