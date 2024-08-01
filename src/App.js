// Import necessary modules and components
import React from 'react';
import Navbar from './components/Navbar'; 
import './App.css'; 
import Home from './components/pages/Home'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Services from './components/pages/Services'; 
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp'; 

// App Component
function App() {
  return (
    <>
      {/* Router provides routing functionality */}
      <Router>
        {/* Navbar component is always displayed */}
        <Navbar />
        {/* Routes component contains all the Route definitions */}
        <Routes>
          {/* Route for Home page */}
          <Route path='/' element={<Home />} />
          {/* Route for Services page */}
          <Route path='/services' element={<Services />} />
          {/* Route for Products page */}
          <Route path='/products' element={<Products />} />
          {/*  Route for SignUp page */}
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
