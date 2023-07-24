import React from 'react';
import Footer from '../components/Footer';
import ProjectMenu from '../components/ProjectMenu';
import ProjectDiv from '../components/ProjectDiv';
import Header from '../components/Header';

const Projectspage = () => {

    const slides1 = ["img/1A.jpg","img/1B.jpg","img/1C.jpg","img/1D.png","img/1E.png","img/1F.png","img/1G.png",]

    return (
        <div className='flex flex-col min-h-screen'>
            <Header page="> Projets"/>
            <div className='mt-20 p-2'>
                <ProjectMenu/>
            </div>
            <ProjectDiv/>
            <Footer/>
        </div>
    );
};

export default Projectspage;