import React from 'react';
import PageTitle from '../components/PageTitle';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Footer from '../components/Footer';

const Aboutpage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <PageTitle page="> À propos"/>
            <Navbar/>
            <Button text="test de bouton"/>
            <Footer/>
        </div>
    );
};

export default Aboutpage;