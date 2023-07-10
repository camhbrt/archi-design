import React from 'react';
import Button from './Button';

const ProjectMenu = () => {
    return (
        <div className='relative'>
            <div className='flex'>
                <img src="assiettes.png" alt="" className='w-1/2' />
                <img src="eri3.jpg" alt="" className='w-1/2' />
            </div>
            <div className='absolute top-1/2 right-3/4'>
                <Button text="architecture >"/>
            </div>
            <div className='absolute top-1/2 right-1/4'>
                <Button text="design >"/>
            </div>
        </div>
    );
};

export default ProjectMenu;