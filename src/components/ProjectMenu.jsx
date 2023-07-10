import React from 'react';
import ArchitectureMenu from './ArchitectureMenu';
import DesignMenu from './DesignMenu';

const ProjectMenu = () => {
    return (
        <div>
            <div className='flex'>
                <ArchitectureMenu />
                <DesignMenu/>
            </div>
        </div>
    );
};

export default ProjectMenu;