const Tecnologias = ({ imagenes }) => {
    return (
        <div className="container mx-auto mt-10 px-4">
            <h1 className="text-2xl lg:text-4xl font-bold mb-4">Tecnologías Adquiridas:</h1>
            <div className="flex flex-wrap">
                {imagenes.map((imagen, index) => (
                    <img key={index} src={imagen} className="w-15 h-10 mx-2 mb-2" alt={`Badge ${index}`} />
                ))}
            </div>
        </div>
    );
}

export default Tecnologias;
