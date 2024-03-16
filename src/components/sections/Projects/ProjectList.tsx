import React from 'react';
import { getDirectoryFiles } from '@/data';
import Section from '../Section';
import ProjectItem, { ProjectItemProps } from './ProjectItem';

async function ProjectList() {
  const projectList = (
    await getDirectoryFiles<ProjectItemProps>('projects')
  ).sort((a, b) => b.date.localeCompare(a.date));

  return (
    <Section title="projects">
      <ul className="group/list flex flex-col gap-12 lg:-m-4">
        {projectList.map((project, i) => (
          <ProjectItem {...project} key={i} />
        ))}
      </ul>
    </Section>
  );
}

export default ProjectList;
