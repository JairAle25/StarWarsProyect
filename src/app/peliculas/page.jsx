import CardFilm from "./cardFilm";

async function getPeliculas(){
    const res = await fetch("https://swapi.dev/api/films")

    return res.json()
}

export default async function Peliculas(){
    const peliculas = await getPeliculas();

    return(
        <section className="flex flex-col justify-center items-center w-screen overflow-x-hidden">
            <h1 className="text-white text-4xl pt-9 font-bold">Peliculas</h1>
            <div className="flex flex-wrap justify-between items-center gap-6 w-[95%] mx-auto my-0 mt-16">
                {peliculas.results.map((pelicula)=>(
                    <CardFilm titulo={pelicula.title} episodio={pelicula.episode_id}></CardFilm>
                ))}
            </div>
        </section>
    )
}