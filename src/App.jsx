import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projectspage from './pages/Projectspage';
import Drawingspage from './pages/Drawingspage';
import Aboutpage from './pages/Aboutpage';
import Contactspage from './pages/Contactspage';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/projects' element={<Projectspage/>}/>
        <Route path='/drawings' element={<Drawingspage/>}/>
        <Route path='/about' element={<Aboutpage/>}/>
        <Route path='/contacts' element={<Contactspage/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;