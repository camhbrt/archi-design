import React from 'react';
import data from '../data';

const ProjectDiv = () => {

    const projects = data()
  
    return (
        <div className='flex-auto'>
            {projects.map((project) => (
                <div className='h-full pb-10' key={project.id} id={project.name}>
                    <h1 className='text-6xl font-normal p-2 pb-8 text-yellow-400'>{project.id}. {project.name}</h1>
                    <img src={project.img} alt=""/>
                </div>
            ))}
            
        </div>
    );
};

export default ProjectDiv;