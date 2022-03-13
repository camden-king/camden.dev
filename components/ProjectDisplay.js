import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLinkIcon } from '@heroicons/react/solid'

export default function ProjectDisplay({ project }) {
    console.log(project)
  return (
    <Link href={`/projects/${project.id}`}>
        <a className="w-80 h-80 m-1 drop-shadow-2xl rounded-xl relative group border-2 border-transparent text-white">
            {project.header_image && <Image className='object-cover -z-10 rounded-xl' src={project.header_image} alt={project.title + "screenshot"} layout='fill' />}
            <div className='bg-gradient-to-t from-black/75 via-black/0 h-full rounded-xl flex flex-col justify-end p-3 group-hover:bg-slate-800 group-hover:bg-opacity-40'>
                <ExternalLinkIcon className="w-20 place-self-center hidden h-1/2 group-hover:block"/>
                <h3 className="font-bold text-2xl">
                    {project.title}
                </h3>
                <h4 className="align-bottom">
                    {project.description}
                </h4>
            </div>
        </a>
    </Link>
  );
}
