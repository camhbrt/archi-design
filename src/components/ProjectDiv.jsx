import React from 'react';
import data from '../data';
import Carousel from './Carousel';

const ProjectDiv = () => {

    const projects = data()
  
    return (
        <div className='flex-auto bg-white'>
            {projects.map((project) => (
                <div className='h-full pb-10 px-6 relative' key={project.id} id={project.name}>
                    <h1 className='text-6xl font-normal p-2 text-yellow-400 static'>{project.id}. {project.name}</h1>
                    <h2 className='text-5xl font-extralight uppercase text-gray-800 static'>{project.subtitle}</h2>
                    <Carousel>
                        {(project.img).map((s) => (
                            <img src={s} key={s} />
                        ))}
                    </Carousel>
                    
                    <p className='text-gray-800 border border-black bg-white w-1/2 lg:w-1/4 p-2 text-sm absolute top-1/4 left-10'>{project.introduction}</p>
                    <p className='text-gray-800 border border-black bg-white w-1/2 lg:w-1/4 p-2 text-sm absolute bottom-32 right-10'>{project.concept}</p>

                </div>
            ))}
            
        </div>
    );
};

export default ProjectDiv;