import Image from "next/image"
import Link from "next/link";
import portadaFilms from "./../../../../public/portadaFilms.webp"
import fotoPersonajes from "./../../../../public/fotoPersonajes.webp"

const getPeliculaDetalle =(datos,peliculaBuscada)=>{
    let peliculaDetalle;
    datos.forEach(pelicula => {
        if(pelicula.title==peliculaBuscada){
            peliculaDetalle = pelicula;
        }
    });
    return peliculaDetalle;
}

async function getPeliculas(){
    const res = await fetch("https://swapi.dev/api/films")
    return res.json()
}

async function getPersonajes(arrayUrl){
    let datosPersonajes=[];
    await Promise.all(arrayUrl.map(async(url)=>{
        const res = await fetch(url);
        const data = await res.json();
        datosPersonajes.push(data);
    }));
    return datosPersonajes
}


export default async function DetailFilm({params}){
    const {detallePelicula} = params;
    const datos = await getPeliculas();
    const peliculaElegida = getPeliculaDetalle(datos.results,detallePelicula.split("-").join(" "))
    const personajes= await getPersonajes(peliculaElegida.characters)

    return(
        <>
            <section className="w-[90%] flex flex-col justify-center items-center mx-auto my-0 gap-5 mt-7 mb-10">
                <div className="w-4/5 text-white flex flex-col justify-center items-center gap-3">
                    <h1 className="text-[var(--colorPrincipal)] font-bold text-5xl">{peliculaElegida.title}</h1>
                    <p className="text-xl">Episodio <span className="font-bold">N° {peliculaElegida.episode_id}</span></p>
                    <p className="text-xl">Dirigida por: <span className="font-bold">{peliculaElegida.director}</span></p>
                </div>
                <div className="w-1/6">
                    <Image src={portadaFilms} alt="portada pelicula star wars" className="w-full"/>
                </div>
                <div className="flex flex-col justify-center items-center w-full">
                    <h1 className="text-[var(--colorPrincipal)] text-3xl font-bold py-6">Personajes</h1>
                    <div className="w-full flex overflow-x-scroll gap-8">
                        {personajes.map((personaje) =>(
                            <Link key={personaje.name} href={`/personajes/${personaje.name.split(" ").join("-")}`} className="flex flex-col items-center justify-center min-w-[15%] mb-5 border px-2 py-3 rounded-lg transition-all duration-1000 hover:bg-[#333333]">
                                <h1 className="text-[var(--colorPrincipal)] text-base font-semibold pb-2">{personaje.name}</h1>
                                <Image src={fotoPersonajes}/>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}