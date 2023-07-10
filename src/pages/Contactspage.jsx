import React from 'react';
import PageTitle from '../components/PageTitle';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contactspage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <PageTitle page="> Contacts"/>
            <Navbar/>
            <Footer/>
        </div>
    );
};

export default Contactspage;