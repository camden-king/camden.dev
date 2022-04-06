import React from 'react';
import ProjectDisplay from './ProjectDisplay';

export default function Projects({ allProjectData }) {
  return (
  <div id="projects" className="min-h-screen grid place-items-center content-center p-4 max-w-8xl w-full overflow-hidden">
    <h2 className='text-4xl font-bold text-center'>
        Projects I've worked on!
    </h2>
    <div className='flex flex-wrap justify-center p-8 overflow-hidden'>
    {
        allProjectData.map(project => (
            <ProjectDisplay key={project.id} project={project} />
        ))
    }
    </div>
  </div>);
}
