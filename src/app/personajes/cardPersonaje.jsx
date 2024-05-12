import Image from "next/image"
import Link from "next/link"
import fotoPersonajes from "./../../../public/fotoPersonajes.webp"

export default function CardPersonaje({nombre,ojos,genero}){
    return(
        <>
            <Link href="/" className="flex flex-col justify-center items-center gap-3 w-[70%] border rounded-lg py-4 px-6 transition-all duration-1000 hover:bg-gray-900">
                <h1 className="text-[var(--colorPrincipal)] font-bold text-xl">{nombre}</h1>
                <Image src={fotoPersonajes} alt="personaje star wars" className="rounded-md"/>
                <p>Color de ojos: {ojos}</p>
                {genero !== "n/a" && <p>Genero: {genero}</p>}
            </Link>
        </>
    )
}