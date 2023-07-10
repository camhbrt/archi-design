import React from 'react';
import PageTitle from '../components/PageTitle';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Drawingspage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <PageTitle page="> Dessins"/>
            <Navbar/>
            <Footer/>
        </div>
    );
};

export default Drawingspage;