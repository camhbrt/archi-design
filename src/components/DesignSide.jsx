import React from 'react';
import DesignMenu from './DesignMenu';

const DesignSide = () => {
    return (
        <div>
            <div className='relative'>   
                <img src="eri3.jpg" alt="" className='w-full' />
                <div className='absolute left-1/4 top-1/2'>
                    <DesignMenu/>
                </div>
            </div>
        </div>
    );
};

export default DesignSide;