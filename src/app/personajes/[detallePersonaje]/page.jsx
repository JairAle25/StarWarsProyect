/*Traemos 10 personajes*/
const getPersonajes=async(ruta)=>{
    const res = await fetch(ruta)
    return res.json()
}

/*intentamos buscar el personaje elegido buscando en los primeros 10
si no esta buscamos en las demas paginas hasta que se encuentre*/
const getPersonajeElegido = async (personajeBuscado, ruta = "https://swapi.dev/api/people/?page=1") => {
    const data = await getPersonajes(ruta);
    let Encontrado = null;
    data.results.forEach(personaje => {
        let nombrePersonaje = personaje.name.split(" ").join("-").split("-").join(" ")
        if (nombrePersonaje === personajeBuscado) {
            Encontrado = personaje;
        }
    });
    if (Encontrado !== null) {
        return Encontrado; 
    } else if (data.next !== null) {
        return getPersonajeElegido(personajeBuscado, data.next);
    } else {
        return null;
    }
};


export default async function DetallePersonaje({params}){
    const {detallePersonaje} = params;
    const personaje = detallePersonaje.split("-").join(" ");
    const datosPersonaje = await getPersonajeElegido(personaje)
    return(
        <>
            <div className="text-white">
                <p>NOMBRE : {datosPersonaje.name}</p>
                <p>COLOR DE OJOS : {datosPersonaje.eye_color}</p>
                <p>CUMPLEAÑOS : {datosPersonaje.birth_year}</p>
                <p>COLOR DE PELO : {datosPersonaje.hair_color}</p>
                <p>ALTURA : {datosPersonaje.height}</p>
                <p>COLOR DE PIEL : {datosPersonaje.skin_color}</p>
                <p>MASA : {datosPersonaje.mass}</p>
                <p></p>
            </div>
        </>
    )
}