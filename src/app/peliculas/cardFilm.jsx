import Image from "next/image"
import portadaFilms from "./../../../public/portadaFilms.webp"

export default function CardFilm({titulo,episodio}){
    return(
        <>
        <div className="text-white max-w-[250px] flex flex-col justify-center items-center gap-4 border py-2 px-4 rounded-lg cursor-pointer transition-all duration-1000 hover:bg-gray-900">
            <p className="text-center text-[var(--colorPrincipal)] font-bold text-lg">{titulo}</p>
            <Image src={portadaFilms} className="w-screen"/>
            <p>Episodio N°{episodio}</p>
        </div>
        </>
    )
}