import React from 'react';
import Hero from '../components/Hero';
import HomeSlider from '../components/HomeSlider';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Homepage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header page=""/>
            <div className='mt-10'>
            <Hero/>
            </div>
            <HomeSlider/>
            <Footer/>
        </div>
    );
};

export default Homepage;