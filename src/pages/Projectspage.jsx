import React from 'react';
import Footer from '../components/Footer';
import ProjectMenu from '../components/ProjectMenu';
import ProjectDiv from '../components/ProjectDiv';
import Header from '../components/Header';

const Projectspage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header page="> Projets"/>
            <ProjectMenu/>
            <ProjectDiv/>
            <Footer/>
        </div>
    );
};

export default Projectspage;