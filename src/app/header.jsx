import Image from "next/image";
import Link from "next/link";

export default function Header(){
    const classNameLinks="text-xl font-bold transition-all duration-200 hover:text-gray-700"
    return(
        <header className="h-[10vh] bg-[var(--colorPrincipal)] w-screen flex justify-around items-center sticky">
            <Link href="./personajes" className={classNameLinks}>Personajes</Link>
            <Link href="./"><img src="/starWarsLogoNegro.webp" alt="" className="h-[10vh]"/></Link>
            <Link href="./peliculas" className={classNameLinks}>Peliculas</Link>
        </header>
    )
}