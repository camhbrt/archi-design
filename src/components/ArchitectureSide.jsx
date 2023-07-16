import React from 'react';
import ArchitectureMenu from './ArchitectureMenu';

const ArchitectureSide = () => {
    return (
        <div>
            <div className='relative'>   
                <img src="assiettes.png" alt="" className='w-full' />
                <div className='absolute left-1/4 top-1/2 '>
                    <ArchitectureMenu/>
                </div>
            </div>
        </div>
    );
};

export default ArchitectureSide;