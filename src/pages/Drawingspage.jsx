import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Drawingspage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header page="> Dessins"/>
            <Footer/>
        </div>
    );
};

export default Drawingspage;