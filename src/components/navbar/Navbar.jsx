'use client'

import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">

                    <div className="text-white text-lg font-semibold">Mi Navbar</div>

                    <div className="lg:hidden">
                        <button onClick={toggleMenu} className="text-white focus:outline-none transition-all duration-500 ease-in-out">
                            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                {isOpen ? (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16a1 1 0 010 2H4a1 1 0 110-2zm16 5H4a1 1 0 100 2h16a1 1 0 100-2zm0 5H4a1 1 0 100 2h16a1 1 0 100-2z" />
                                ) : (
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4 6h16a1 1 0 110 2H4a1 1 0 110-2zm16 5H4a1 1 0 010-2h16a1 1 0 010 2zm0 5H4a1 1 0 010-2h16a1 1 0 010 2z" />
                                )}
                            </svg>
                        </button>
                    </div>

                    <ul className={`lg:flex lg:items-right transition-all duration-500 ease-in-out ${isOpen ? 'block' : 'hidden'} space-x-4 mt-4 lg:mt-0`}>
                        <li><Link href="/" className="text-white ml-4">Inicio</Link></li>
                        <li><Link href="/proyectos" className="text-white">Proyectos</Link></li>
                        <li><Link href="/contacto" className="text-white">Contacto</Link></li>
                        <li><Link href="#" className="text-white">Colaboremos</Link></li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
