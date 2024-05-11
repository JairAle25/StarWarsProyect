import Image from "next/image"
import portadaFilms from "./../../../../public/portadaFilms.webp"

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

export default async function DetailFilm({params}){
    const {detallePelicula} = params;
    const datos = await getPeliculas();
    const peliculaElegida = getPeliculaDetalle(datos.results,detallePelicula.split("-").join(" "))

    return(
        <>
            <section className="w-[90%] mx-auto my-0 flex gap-5 mt-7">
                <div className="w-1/6">
                    <Image src={portadaFilms} className="w-full"/>
                </div>
                <div className="w-4/5 text-white flex flex-col gap-3">
                    <h1 className="text-[var(--colorPrincipal)] font-bold text-5xl">{peliculaElegida.title}</h1>
                    <p className="text-xl">Episodio N°{peliculaElegida.episode_id}</p>
                    <p className="text-xl">Dirigida por: {peliculaElegida.director}</p>
                </div>
            </section>
        </>
    )
}