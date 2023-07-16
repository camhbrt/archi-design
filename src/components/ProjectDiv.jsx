import React from 'react';
import data from '../data';

const ProjectDiv = () => {

    const projects = data()
  
    return (
        <div className='flex-auto'>
            {projects.map((project) => (
                <div className='h-full' key={project.id} id={project.name}>
                    <p>{project.name}</p>
                    <img src={project.img} alt=""/>
                </div>
            ))}
            
        </div>
    );
};

export default ProjectDiv;