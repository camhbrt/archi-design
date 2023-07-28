import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Aboutpage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header page="> À propos"/>
            <div className='m-48  flex'>
                <img src="id.jpg" alt="" srcset="" className='h-full w-full' />
                <p className='mx-20'>
                    Après avoir exercé pendant 4 ans mon métier de manipulatrice en élèctroradiologie médicale au sein d'un grand groupe hospitalier, j'ai fait le choix de réaliser un souhait de longue date en m'orientant vers l'architecture d'intérieur et le design. J'ai donc rejoint l'ESAM Design qui est une école certifiée au RNCP niveau 7et reconnue par le CFAI. <br /><br />
                    Mon expérience dans le milieu médical m'a apporté le sens du contact et de l'accompagnement. D'autre part, j'y ai appris à apporter une grande rigueur dans mon travail. Enfin, j'ai appris à gérer des situations d'urgences et donc à canaliser le stress et la pression afin de travailler de manière efficace et rapide.Toutes ces compétences me seront donc utiles et exploitables afin de me développer dans le domaine de l'architecture. 
                </p>
            </div>
            <Footer/>
        </div>
    );
};

export default Aboutpage;