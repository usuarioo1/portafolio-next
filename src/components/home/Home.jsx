import Tecnologias from "../tecnologias/Tecnologias"


const Home = () => {

    const tecnologias = [
        'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white',
        'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white',
        'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black',
        'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB',
        'https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white',
        'https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white',
        'https://img.shields.io/badge/Express.js-404D59?style=for-the-badge',
        'https://img.shields.io/badge/Amazon_AWS-FF9900?style=for-the-badge&logo=amazonaws&logoColor=white',
        'https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink',
        'https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white',
        'https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white',
        '	https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white'





    ];
    return (
        <div>
            <div className="flex justify-center mt-10">
                <div className="lg:w-3/4 bg-gray-200 p-8 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/3 lg:mr-8">
                        <img src="https://res.cloudinary.com/dpbpyzl96/image/upload/v1709775584/Portafolio/jzvwlsabyywdczqxnzac.png" className="w-full h-auto" />
                    </div>
                    <div className="lg:w-2/3">
                        <h1 className="text-4xl lg:text-5xl text-center lg:text-left font-bold">Hola, soy Nicolás ✌</h1>
                        <p className="text-lg lg:text-xl text-gray-800 text-center lg:text-left mt-4">Soy un desarrollador Fullstack apasionado con una firme dedicación al aprendizaje continuo y a utilizar la tecnología para impactar positivamente en la sociedad. Con experiencia en el desarrollo tanto front-end como back-end, estoy comprometido a encontrar soluciones innovadoras y eficientes para los desafíos del mundo real. Abierto a nuevas tecnologías y colaborativo por naturaleza, estoy listo para contribuir significativamente al avance tecnológico y social.</p>
                    </div>
                </div>


            </div>
            <Tecnologias imagenes={tecnologias} />;
           
        </div>

    )
}

export default Home
