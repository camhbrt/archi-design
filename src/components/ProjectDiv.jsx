import React from 'react';
import data from '../data';
import Carousel from './Carousel';

const ProjectDiv = () => {

    const projects = data()
  
    return (
        <div className='flex-auto'>
            {projects.map((project) => (
                <div className='h-full pb-10' key={project.id} id={project.name}>
                    <h1 className='text-6xl font-normal p-2 text-yellow-400'>{project.id}. {project.name}</h1>
                    <Carousel>
                        {(project.img).map((s) => (
                            <img src={s} key={s} />
                        ))}
                    </Carousel>
                    
                </div>
            ))}
            
        </div>
    );
};

export default ProjectDiv;