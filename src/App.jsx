import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/NavBar.jsx';
import Home from '../src/Pages/Home.jsx';
import About from '../src/Pages/AboutUs.jsx';
import Projects from '../src/Pages/Project.jsx';
import Contact from '../src/Pages/ContactUs.jsx';

const App = () => {
    // document.body.classList.add('dark');
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
};

export default App;
