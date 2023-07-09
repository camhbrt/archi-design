import React from 'react';

const Button = (props) => {
    return (
        <button className='py-1 px-2 border-2 border-black bg-white hover:bg-yellow-400 w-auto'>
            <p>{props.text}</p>
        </button>
    );
};

export default Button;