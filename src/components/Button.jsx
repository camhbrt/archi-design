import React from 'react';

const Button = ({text, onMouseEnter, onMouseLeave, onClick}) => {
    
    return (
        <button className='py-1 px-2 border border-black bg-white hover:bg-yellow-400 w-auto' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onClick={onClick}>
            <p>{text}</p>
        </button>
    );
};

export default Button;