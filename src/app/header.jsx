import Image from "next/image";

export default function Header(){
    const classNameLinks="text-xl font-bold transition-all duration-200 hover:text-gray-700"
    return(
        <header className="h-[10vh] bg-[var(--colorPrincipal)] w-screen flex justify-around items-center sticky">
            <a href="" className={classNameLinks}>Personajes</a>
            <a href="/"><img src="/starWarsLogoNegro.webp" alt="" className="h-[10vh]"/></a>
            <a href="/peliculas" className={classNameLinks}>Peliculas</a>
        </header>
    )
}