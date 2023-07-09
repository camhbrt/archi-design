import React from 'react';
import PageTitle from '../components/PageTitle';
import Navbar from '../components/Navbar';
import Button from '../components/Button';

const Aboutpage = () => {
    return (
        <div>
            <PageTitle page="> À propos"/>
            <Navbar/>
            <Button text="test de bouton"/>
        </div>
    );
};

export default Aboutpage;