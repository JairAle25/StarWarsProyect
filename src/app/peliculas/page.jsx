import CardFilm from "./cardFilm";

async function getPeliculas(){
    const res = await fetch("https://swapi.dev/api/films")

    return res.json()
}

export default async function Peliculas(){
    const peliculas = await getPeliculas();

    return(
        <section className="flex flex-col justify-center items-center w-screen overflow-x-hidden mb-8">
            <h1 className="text-[var(--colorPrincipal)] text-4xl pt-9 font-bold md:text-5xl">Peliculas</h1>
            <div className="flex flex-wrap items-center w-[95%] mx-auto my-0 mt-12 gap-7 xl:gap-6 justify-center md:gap-10">
                {peliculas.results.map((pelicula)=>(
                    <CardFilm key={pelicula.episode_id} titulo={pelicula.title} episodio={pelicula.episode_id}></CardFilm>
                ))}
            </div>
        </section>
    )
}