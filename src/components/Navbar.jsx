import React from 'react';
import {HiHomeModern, HiIdentification,HiPhoto} from 'react-icons/hi2';
import {PiToolboxFill} from "react-icons/pi";
import {HiMail} from "react-icons/hi";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const menu = [
                {title: "Accueil", path: '/', icon:<HiHomeModern size={22} /> },
                {title: "Projets", path:"/projects", icon:<PiToolboxFill size={24}/> },
                {title: "Dessins", path:"/drawings", icon:<HiPhoto size={24}/> },
                {title: "À propos", path:"/about", icon:<HiIdentification size={24} />},
                {title: "Contacts", path:"/contacts", icon:<HiMail size={24} />}
                ]

    return (
        <div className='flex justify-evenly pt-2'>
        {menu.map((page) => (
            <NavLink to={page.path} key={page.title} className='hover:outline hover:outline-1 hover:outline-black hover:bg-yellow-400 py-1 px-2'>
                <span className="flex items-center">
                    {page.icon}
                    <span className="ml-1">{page.title}</span>
                </span>
            </NavLink>
        ))}
    </div>
    );
};

export default Navbar;