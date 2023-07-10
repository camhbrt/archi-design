import React from 'react';
import Button from './Button';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Hero = () => {
    const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <div className='w-full relative'>
      <img src="./public/maquette1.png" alt="hero image" srcSet=""
        className={isButtonHovered ? 'filter blur-sm ease-in duration-150' : ''}
      />
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        onMouseEnter={() => setIsButtonHovered(true)}
        onMouseLeave={() => setIsButtonHovered(false)}>
            <NavLink to='/projects'>
                <Button text='Voir tous les projets >' className={isButtonHovered ? 'bg-yellow-400' : ''} />
            </NavLink>
      </div>
    </div>
  );
};

export default Hero;