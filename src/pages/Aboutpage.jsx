import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Aboutpage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header page="> À propos"/>
            <Footer/>
        </div>
    );
};

export default Aboutpage;