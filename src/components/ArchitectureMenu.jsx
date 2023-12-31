import React, {useState} from 'react';
import Button from './Button';
import DropdownMenu from './DropdownMenu';
import data from '../data';

const ArchitectureMenu = () => {

    // Usestate pour afficher le menu déroulant
    const [displayMenu, setDisplayMenu] = useState(false);
    const handleClick = () => {
        setDisplayMenu(!displayMenu)
    }
    
    // Récupérer les données de data.jsx
    const architecture=data();
    // Filtrer les objets avec les IDs inférieurs à 3 et récuperer leurs noms
    const filteredProjects = architecture.filter((project) => (project.id <=3)).map((project) => project.name);


    return (
    <div className='flex'>
        <div className=''>
            <Button text="architecture >"  onClick={handleClick} />
        </div>
        {displayMenu && (
            <div className=''>
            <DropdownMenu menu={filteredProjects}/>
            </div>
        )}
    </div>
    );
};

export default ArchitectureMenu;