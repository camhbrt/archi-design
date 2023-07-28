import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Button from '../components/Button';

const Contactspage = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header page="> Contacts"/>
            <div className='relative'>
                <img src="./public/maquette1.png" alt="" />

                <div className='flex items-center justify-center absolute top-0 left-0 w-full h-full'>
                    <form id="contact-form" onSubmit="" method="POST" className='bg-white  bg-opacity-50 backdrop-blur-sm w-1/2 h-1/2 p-5'> 
                        <div className="p-1">
                            <label htmlFor="name" >Votre nom :</label>
                            <input type="text" className="bg-white border border-black rounded-md m-2" />
                        </div>
                        <div className="p-1">
                            <label htmlFor="exampleInputEmail1">Votre e-mail :</label>
                            <input type="email" className="bg-white border border-black rounded-md  m-2" aria-describedby="emailHelp" />
                        </div>
                        <div className="p-1">
                            <label htmlFor="message">Un petit message ?</label><br/ >
                            <textarea className="bg-white border border-black rounded-md w-full  max-h-[50vh] "  ></textarea>
                        </div>
                        <button type="submit" className="bg-white px-2 py-1  hover:bg-yellow-400">Submit</button>
                    </form>
                                            
                    
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Contactspage;