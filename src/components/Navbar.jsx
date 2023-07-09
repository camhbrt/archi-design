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
        <div className='flex justify-evenly m-2'>
            {menu.map((page) => (
                <button className='hover:outline hover:outline-2 hover:outline-black hover:bg-yellow-400 py-1 px-2'>
                    <NavLink to={page.path} className="">
                        {page.title}
                    </NavLink>
                </button>
            ))}
</div>

    );
};

export default Navbar;