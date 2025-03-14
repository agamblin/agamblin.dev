import { getDirectoryFiles } from '@/data';
import Section from '@/components/sections/Section';
import ExpandableList from '@/components/ExpandableList';
import JobItem, { JobItemProps } from './JobItem';

async function JobList() {
  const jobList = (await getDirectoryFiles<JobItemProps>('jobs')).sort((a, b) =>
    b.startDate.localeCompare(a.startDate),
  );

  return (
    <Section title="experience" className="scroll-mt-24">
      <ExpandableList className={`
        group/list
        lg:-m-4
      `}>
        {jobList.map((job, i) => (
          <JobItem {...job} key={i} />
        ))}
      </ExpandableList>
    </Section>
  );
}

export default JobList;
