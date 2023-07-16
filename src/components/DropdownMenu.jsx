import React from 'react';
import { Link } from 'react-scroll';

const DropdownMenu = ({menu}) => {
    
    return (
        <div className='flex flex-col border-2 border-black bg-white w-auto'>
            {menu.map((projet)=>(
                <button className='hover:bg-yellow-400' key={projet}>
                    <Link activeClass="active" to={projet} spy={true} smooth={true}  duration={500} >
                        {projet}
                    </Link>
                </button>
            ))}

        </div>
    );
};

export default DropdownMenu;