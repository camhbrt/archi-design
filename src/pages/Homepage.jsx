import React from 'react';
import Hero from '../components/Hero';
import HomeSlider from '../components/HomeSlider';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Homepage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header page=""/>
            <Hero/>
            <HomeSlider/>
            <Footer/>
        </div>
    );
};

export default Homepage;