import React from 'react';
import PageTitle from './PageTitle';
import Navbar from './Navbar';

const Header = (props) => {
    return (
        <div className='fixed bg-white z-50 w-full'>
            <div>
                <h1 className='text-3xl font-light'>Maëlle Wohlgroth {props.page}</h1>
            </div>
            <Navbar/>
        </div>
    );
};

export default Header;