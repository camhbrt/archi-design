import React from 'react';

const DropdownMenu = ({menu}) => {
    // const menu=["Le Pari(s) du réemploi", "L'échappée", "La pile d'assiettes"]
    return (
        <div className='flex flex-col border-2 border-black bg-white w-auto'>
            {menu.map((projet)=>(
                <button className='hover:bg-yellow-400'>{projet}</button>
            ))}

        </div>
    );
};

export default DropdownMenu;