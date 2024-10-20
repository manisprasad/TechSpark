import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button.jsx";
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome, FaInfoCircle, FaProjectDiagram, FaEnvelope } from "react-icons/fa"; // Import your desired icons
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";






const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        document.body.classList.toggle("dark", isDark);
    }, [isDark]);

    const handleDark = () => {
        setIsDark((prev) => !prev);
    };

    return (
        <nav className="top-0 left-0 right-0 bg-transparent z-50 shadow-md border-b-2 border-b-orange-400 rounded-bl-lg rounded-br-lg">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
                <div className="text-2xl font-bold">
                     <NavLink to="/">Tech Spark</NavLink>
                </div>

                <div className={`flex justify-center items-center gap-2`}>

                    <div className="hidden md:flex space-x-4 items-center">
                        <NavLink to="/"
                                 className="flex items-center hover:border-b-orange-400 hover:border-b-2 rounded transition">
                            <FaHome className="mr-1"/> Home
                        </NavLink>
                        <NavLink to="/about"
                                 className="flex items-center hover:border-b-orange-400 hover:border-b-2 transition">
                            <FaInfoCircle className="mr-1"/> About
                        </NavLink>
                        <NavLink to="/projects"
                                 className="flex items-center hover:border-b-orange-400 hover:border-b-2 transition">
                            <FaProjectDiagram className="mr-1"/> Projects
                        </NavLink>
                        <NavLink to="/contact"
                                 className="flex items-center hover:border-b-orange-400 hover:border-b-2 transition">
                            <FaEnvelope className="mr-1"/> Contact
                        </NavLink>
                    </div>
                    <div className="md:hidden">
                        <Button onClick={toggleMenu}><RxHamburgerMenu/></Button>
                    </div>
                    <button className={"ml-3"} onClick={handleDark}>
                        {isDark ? <CiLight/> : <MdOutlineDarkMode/>}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden shadow-md p-4 rounded">
                    <NavLink to="/"
                             className="flex items-center block hover:border-b-orange-400 hover:border-b-2 transition mb-2">
                        <FaHome className="mr-1"/> Home
                    </NavLink>
                    <NavLink to="/about"
                             className="flex items-center block hover:border-b-orange-400 hover:border-b-2 transition mb-2">
                        <FaInfoCircle className="mr-1"/> About
                    </NavLink>
                    <NavLink to="/projects"
                             className="flex items-center block hover:border-b-orange-400 hover:border-b-2 transition mb-2">
                        <FaProjectDiagram className="mr-1"/> Projects
                    </NavLink>
                    <NavLink to="/contact"
                             className="flex items-center block hover:border-b-orange-400 hover:border-b-2 transition">
                        <FaEnvelope className="mr-1"/> Contact
                    </NavLink>

                </div>
            )}
        </nav>
    );
};

export default Navbar;
