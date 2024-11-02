'use client'

import React from 'react';
import Link from 'next/link';
const Page = () => {

    
    const proyectos = [
        {
            nombre: "GameLink",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1710971896/Portafolio/gamelink/rclkhxybc9kdisffod0f.png",
            descripcion: "E-commerce con sistema de Pagos Paypal",
            tecnologias: "React, NodeJs, Bootstrap",
            url: "https://game-link.netlify.app/"

        },
        {
            nombre: "Restaurant",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/f_auto,q_auto/v1/Portafolio/e00raapy0sm7cawi3bjx",
            descripcion: "App Web de Restaurant",
            tecnologias: "React, Firebase, Material UI",
            url: "https://flourishing-bublanina-f7bbc6.netlify.app/"

        },
        {
            nombre: "Todo TypeScript",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1710980703/Portafolio/bcb2lyccjcjlealzrwoj.png",
            descripcion: "App Web para organizar tareas",
            tecnologias: "React, TypeScript, PicoCss",
            url: "https://tsxtodo.netlify.app/"
        },
        {
            nombre: "Panoramas",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1710980702/Portafolio/zuul1nnyyzwlnrfkj55y.png",
            descripcion: "App Web para organizar Panoramas",
            tecnologias: "React, NodeJs, Material UI",
            url: "https://panoramas.netlify.app/"
        },
        {
            nombre: "Todo Frontend",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1710982037/Portafolio/p4jsm5uxcqf1y8xu5ggr.png",
            descripcion: "App Web para organizar Panoramas",
            tecnologias: "React, Material UI, FrontendMentor",
            url: "https://frontmentorchallengetodo.netlify.app"
        },
        {
            nombre: "Ji Project",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1710982344/Portafolio/fvsuxgyg5j8udntqlg9k.png",
            descripcion: "SPA",
            tecnologias: "HTML, CSS, Bootstrap, JAVASCRIPT",
            url: "https://usuarioo1.github.io/jiproject/"
        },
        {
            nombre: "Encriptador de Texto",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1711316236/Portafolio/vgep8ty6mgrplxsydw19.png",
            descripcion: "App web encriptador de texto",
            tecnologias: "HTML, CSS, JAVASCRIPT",
            url: "https://usuarioo1.github.io/encriptador-texto/"
        },
        {
            nombre: "Api Web",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1712102273/Portafolio/dkm9a1csbyafnqtj3uqw.png",
            descripcion: "SPA sobre APIS",
            tecnologias: "Next JS, Tailwind, DaisyUI",
            url: "https://api-web-inky.vercel.app/"
        }

    ];

    return (
        <div>
            <div className='text-center text-5xl mt-7'>
                Proyectos
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"> {/* Contenedor de proyectos con Grid de Tailwind CSS */}
                {proyectos.map((proyecto, index) => (
                    <div key={index} className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
                        <img className="w-full h-48 object-cover" src={proyecto.img || "https://via.placeholder.com/350"} alt={proyecto.nombre} />
                        <div className="py-4 px-6">
                            <h2 className="text-lg font-semibold text-gray-800">{proyecto.nombre}</h2>
                            <p className="mt-2 text-sm text-gray-600">{proyecto.descripcion}</p>
                            <p className="mt-2 text-xs text-gray-500">Tecnologías ocupadas: {proyecto.tecnologias}</p>
                            <div className="rounded-xl mt-3 max-w-32 bg-transparent items-center justify-center flex border-2 border-sky-500 shadow-lg hover:bg-sky-500 text-sky-500 hover:text-white duration-300 cursor-pointer active:scale-[0.98] mx-auto">
                                <Link href={proyecto.url}> <button className="px-5 py-2">Visitame</button></Link>
                            </div>


                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
