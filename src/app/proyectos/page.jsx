import React from 'react';

const Page = () => {
    const proyectos = [
        {
            nombre: "GameLink",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1710971896/Portafolio/gamelink/rclkhxybc9kdisffod0f.png",
            descripcion: "E-commerce con sistema de Pagos Paypal",
            tecnologias: "React, NodeJs, Bootstrap",
            url:"https://game-link.netlify.app/"
            
        },
        {
            nombre: "Restaurant",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/f_auto,q_auto/v1/Portafolio/e00raapy0sm7cawi3bjx",
            descripcion: "App Web de Restaurant",
            tecnologias: "React, Firebase, Material UI",
            url:"thttps://flourishing-bublanina-f7bbc6.netlify.app/"
            
        },
        {
            nombre: "Todo TypeScript",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1710980703/Portafolio/bcb2lyccjcjlealzrwoj.png",
            descripcion: "App Web para organizar tareas",
            tecnologias: "React, TypeScript",
            url:"https://tsxtodo.netlify.app/"
        },
        {
            nombre: "Panoramas",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1710980702/Portafolio/zuul1nnyyzwlnrfkj55y.png",
            descripcion: "App Web para organizar Panoramas",
            tecnologias: "React, NodeJs, Material UI",
            url:"https://panoramas.netlify.app/"
        },
        {
            nombre: "Todo Frontend",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1710982037/Portafolio/p4jsm5uxcqf1y8xu5ggr.png",
            descripcion: "App Web para organizar Panoramas",
            tecnologias: "React, NodeJs, Material UI",
            url:"https://frontmentorchallengetodo.netlify.app"
        },
        {
            nombre: "Ji Project",
            img: "https://res.cloudinary.com/dpbpyzl96/image/upload/v1710982344/Portafolio/fvsuxgyg5j8udntqlg9k.png",
            descripcion: "SPA",
            tecnologias: "HTML, CSS, JAVASCRIPT",
            url:"https://usuarioo1.github.io/jiproject/"
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
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
};

export default Page;
