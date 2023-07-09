import React from 'react';
import {HiHomeModern} from 'react-icons/hi2';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menu = [{title: <HiHomeModern size={22}/>,path:"/"},
                {title: "Projets", path:"/projects"},
                {title: "Dessins", path:"/drawings"},
                {title: "À propos", path:"/about"},
                {title: "Contacts", path:"/contacts"}
                ]

    return (
        <div className='flex p-2 m-2'>
            {menu.map((page) =>(
                <NavLink to={page.path} className="flex-auto">
                    <button className='hover:outline hover:outline-2 p-1 hover:outline-black hover:bg-yellow-400'>
                        {page.title}
                    </button> 
                </NavLink>
            ))}
            
        </div>
    );
};

export default Navbar;