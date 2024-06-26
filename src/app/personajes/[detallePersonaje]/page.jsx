import Image from "next/image";
import fotoPersonajes from "./../../../../public/fotoPersonajes.webp"

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

    const classTexto= "text-lg xl:text-xl md:text-2xl";
    return(
        <>
            <section className="text-white w-[90%] mx-auto my-0 flex flex-col-reverse justify-center items-center gap-5 mt-9">
                <Image src={fotoPersonajes} alt="personaje star wars" className="w-10/12 xl:w-1/4 md:w-1/2"/>
                <div className="text-xl flex flex-col text-center gap-2 xl:gap-3 md:gap-5">
                    <h1 className="text-[var(--colorPrincipal)] font-bold text-4xl xl:text-5xl md:text-6xl">{datosPersonaje.name}</h1>
                    {datosPersonaje.eye_color!=="unknown" && <p className={classTexto}>OJOS : <span className="font-bold">{datosPersonaje.eye_color}</span></p>}
                    {datosPersonaje.birth_year !== "unknown" && <p className={classTexto}>CUMPLEAÑOS : <span className="font-bold"> {datosPersonaje.birth_year}</span></p>}
                    {datosPersonaje.hair_color!=="n/a" && <p className={classTexto}>COLOR DE PELO : <span className="font-bold">{datosPersonaje.hair_color}</span></p>}
                    <p className={classTexto}>ALTURA : <span className="font-bold">{datosPersonaje.height}</span></p>
                    <p className={classTexto}>COLOR DE PIEL : <span className="font-bold">{datosPersonaje.skin_color}</span></p>
                    {datosPersonaje.mass !== "unknown" && <p className={classTexto}>MASA : <span className="font-bold">{datosPersonaje.mass}</span></p>}
                </div>
            </section>
        </>
    )
}