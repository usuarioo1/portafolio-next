import React from 'react'

const page = () => {
    return (
        <div>



            <div className='max-w-md mx-auto mt-20'>
                <h1 className='text-3xl'>Contáctame</h1>
                <p className='text-xl mt-5'>Rellena el siguiente formulario y te contactaré lo antes posible</p>
            </div>
            <div className="max-w-md mx-auto mt-10">


                <form className="bg-amber-400 shadow-md rounded px-8 pt-6 pb-8 mb-4" action="https://formsubmit.co/nicolasgonzalezmoller@gmail.com" method="POST">




                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="name">
                            Nombre
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="name"
                            placeholder="Nombre"
                            name='name'
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="email">
                            Correo Electrónico
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Correo Electrónico"
                            name='email'
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" for="message">
                            Mensaje
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            placeholder="Mensaje"
                            type='text'
                            name='text'
                        ></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
                <div className="max-w-md mx-auto mt-10 flex justify-center">
                    <div className="flex items-center space-x-4">
                        <a href="https://www.linkedin.com/in/nicol%C3%A1s-gonz%C3%A1lez-moller-099767174/" target="_blank">
                            <img src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="anirudh-rai-072732220" height="30" width="40" />
                        </a>
                        <a href="https://www.instagram.com/niax001/">
                            <img src="https://skillicons.dev/icons?i=instagram" />
                        </a>
                    </div>
                </div>



            </div>

        </div>
    )
}

export default page
