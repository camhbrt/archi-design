import React from 'react';
import Button from './Button';
import DropdownMenu from './DropdownMenu';

const DesignMenu = () => {
    const design=["Eri", "Le Sillage", "Canapé pop"]
    return (
        <div className='relative basis-1/2'>
            <div className=''>
                <img src="eri3.jpg" alt="" className='w-full' />
            </div>
            <div className='absolute top-1/2 left-1/4'>
                <Button text="design >"/>
            </div>
            <div>
            <DropdownMenu menu={design}/>
        </div>
        </div>
    );
};

export default DesignMenu;