import Image from "next/image"
import portadaFilms from "./../../../public/portadaFilms.webp"
import Link from "next/link"

const getLinkDetalle =(titulo)=>{
    const nombreLink = titulo.split(" ").join("-");
    return nombreLink
}

export default function CardFilm({titulo,episodio}){
    const linkDetalle = `/peliculas/${getLinkDetalle(titulo)}`
    return(
        <>
        <Link href={`${linkDetalle}`}>
            <div className="text-white max-w-[250px] flex flex-col justify-center items-center gap-4 border py-2 px-4 rounded-lg cursor-pointer transition-all duration-1000 hover:bg-[#333333] md:max-w-[280px] md:py-4">
                <p className="text-center text-[var(--colorPrincipal)] font-bold text-lg md:text-2xl">{titulo}</p>
                <Image src={portadaFilms} alt="portada pelicula star wars" className="w-full"/>
                <p className="md:text-2xl">Episodio N°{episodio}</p>
            </div>
        </Link>
        </>
    )
}