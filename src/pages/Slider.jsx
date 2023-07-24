import React from 'react';
import Carousel from '../components/Carousel';

const Slider = () => {

    const slides = [
        "img/7a.png",
        "img/7b.png",
        "img/7c.png",
        "img/2l.jpg"]
    
    

    return (


        <div className=''>
            <Carousel>
                {slides.map((s) => (
                    <img src={s} key={s} />
                ))}
            </Carousel>
        </div>
    );
};

export default Slider;