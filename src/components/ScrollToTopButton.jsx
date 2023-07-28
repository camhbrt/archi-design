import {React, useEffect, useState} from 'react';
import {animateScroll as scroll }  from 'react-scroll'
import { HiChevronUp } from 'react-icons/hi2';

const ScrollToTopButton = () => {

    //fonction pour que le bouton scrolle jusqu'en haut
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    //useState pour afficher ou non le bouton
    const [showButton, setShowButton] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 200) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    

    return (
        <div>
            
            <button
                onClick={scrollToTop}
                className={`p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white ${
                    showButton ? 'fixed right-0 bottom-0 mb-8 mr-8' : 'hidden'
                }`}
            > <HiChevronUp size={40}/></button>
            
        </div>
    );
};

export default ScrollToTopButton;