import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import Knowledges from './pages/Knowledges';
import Contact from './pages/contact';
import NotFound from './pages/NotFound';
import PorteFolio from './pages/PorteFolio';



const App = () => {
  
  return (
   <BrowserRouter>
      <Routes>
              <Route path="/" index element={<Home />} />
              <Route path="competences" element={<Knowledges />} />
              <Route path="portefolio" element={<PorteFolio />} />
              <Route path="contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;