import React, {useState} from 'react';
import Button from './Button';
import DropdownMenu from './DropdownMenu';
import projects from '../data';

const DesignMenu = () => {

    // Usestate pour afficher le menu déroulant
    const [displayMenu, setDisplayMenu] = useState(false);
    const handleClick = () => {
        setDisplayMenu(!displayMenu)
    }
    
    // Récupérer les données de data.jsx
    const design=projects();
    // Filtrer les objets avec les IDs inférieurs à 3 et récuperer leurs noms
    const filteredProjects = design.filter((project) => (project.id >3)).map((project) => project.name);


    return (
        <div className='flex'>
        <div className=''>
            <Button text="design >" onClick={handleClick}/>
        </div>
        {displayMenu && (
            <div className=''>
            <DropdownMenu menu={filteredProjects}/>
            </div>
        )}
    </div>
    );
};

export default DesignMenu;