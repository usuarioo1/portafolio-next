import React from 'react'

const page = () => {
    return (
        <div>

            <div className='text-center text-5xl mt-7'>
                Proyectos
            </div>
            <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
                <img className="w-full h-48 object-cover" src="https://via.placeholder.com/350" alt="Technology" />
                <div className="py-4 px-6">
                    <h2 className="text-lg font-semibold text-gray-800">Título</h2>
                    <p className="mt-2 text-sm text-gray-600">Descripción</p>
                    <p className="mt-2 text-xs text-gray-500">Tecnologías ocupadas:</p>
                </div>
            </div>
        </div>
    )
}

export default page
