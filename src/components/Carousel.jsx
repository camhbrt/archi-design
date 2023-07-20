import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2';
import { useState } from 'react';

const Carousel = ({ children: slides }) => {
    const [curr, setCurr] = useState(0);

    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

    return (
        <div className='overflow-hidden relative w-full h-full lg:w-1/2 lg:m-auto flex items-center justify-center'>
            <div
                className='flex ransition-transform ease-out duration-500 w-full items-center'
                style={{ transform: `translateX(-${curr * 100}%)` }}
            >
                 {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`w-full flex-shrink-0 bg-center bg-no-repeat bg-cover`}
                    >
                    {slide} 
                    </div>
                ))}
            </div>

            <div className='absolute inset-0 flex items-center justify-between p-4'>
                <button
                    onClick={prev}
                    className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
                >
                    <HiChevronLeft size={40} />
                </button>
                <button
                    onClick={next}
                    className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'
                >
                    <HiChevronRight size={40} />
                </button>
            </div>

            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {slides.map((_, i) => (
                        <div
                            key={i}
                            className={`transition-all w-3 h-3 bg-gray-800 rounded-full ${
                                curr === i ? 'p-2' : 'bg-opacity-50'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
