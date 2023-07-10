import React from 'react';
import PageTitle from '../components/PageTitle';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectMenu from '../components/ProjectMenu';

const Projectspage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <PageTitle page="> Projets"/>
            <Navbar/>
            <ProjectMenu/>
            <Footer/>
        </div>
    );
};

export default Projectspage;