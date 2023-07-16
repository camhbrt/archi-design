import React from 'react';
import ArchitectureSide from './ArchitectureSide';
import DesignSide from './DesignSide';

const ProjectMenu = () => {
    return (
        <div>
            <div className='flex '>
                <div className='basis-1/2'><ArchitectureSide/></div>
                <div className='basis-1/2'><DesignSide/></div>
            </div>
        </div>
    );
};

export default ProjectMenu;