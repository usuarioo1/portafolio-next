import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <nav className="bg-gray-800 py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">

                    <div className="text-white text-lg font-semibold">Mi Navbar</div>

                    <ul className="flex space-x-4">
                        <li><Link href="/" className="text-white">Inicio</Link></li>
                        <li><a href="#" className="text-white">Proyectos</a></li>
                        <li><Link href="/contacto" className="text-white">Contacto</Link></li>
                        <li><a href="#" className="text-white">Colaboremos</a></li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar
