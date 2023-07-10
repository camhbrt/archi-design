import React from 'react';
import Button from './Button';
import DropdownMenu from './DropdownMenu';

const ArchitectureMenu = () => {
    const architecture=["Le Pari(s) du réemploi", "L'échappée", "La pile d'assiettes"]
    return (
    <div className='relative basis-1/2'>
        <div className=''>
            <img src="assiettes.png" alt="" className='w-full' />
        </div>
        <div className='absolute top-1/2 left-1/4'>
            <Button text="architecture >"/>
        </div>
        <div className='absolute top-1/2 left-1/2'>
            <DropdownMenu menu={architecture}/>
        </div>
    </div>
    );
};

export default ArchitectureMenu;