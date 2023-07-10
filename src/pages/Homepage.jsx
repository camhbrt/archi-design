import React from 'react';
import PageTitle from '../components/PageTitle';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HomeSlider from '../components/HomeSlider';
import Footer from '../components/Footer';

const Homepage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <PageTitle page=""/>
            <Navbar/>
            <Hero/>
            <HomeSlider/>
            <Footer/>
        </div>
    );
};

export default Homepage;