import React from 'react';
import Footer from '../components/Footer';
import ProjectMenu from '../components/ProjectMenu';
import ProjectDiv from '../components/ProjectDiv';
import Header from '../components/Header';
import ScrollToTopButton from '../components/ScrollToTopButton';

const Projectspage = () => {

   

    return (
        <div className='flex flex-col min-h-screen'>
            <Header page="> Projets"/>
            <div className='mt-20'>
                <ProjectMenu/>
            </div>
            <ProjectDiv/>
            <ScrollToTopButton/>
            <Footer/>
        </div>
    );
};

export default Projectspage;