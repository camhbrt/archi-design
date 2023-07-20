import React from 'react';
import Carousel from '../components/Carousel';

const Slider = () => {

    const slides = ["../public/img/7a.png", "../public/img/7b.png", "../public/img/7c.png"]
    
    

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