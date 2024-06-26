import Image from "next/image";
import Link from "next/link";
import starWarsLogoNegro from "./../../public/starWarsLogoNegro.webp"

export default function Header(){
    const classNameLinks="font-bold transition-all duration-200 hover:text-gray-700 text-sm xl:text-xl md:text-2xl"
    return(
        <header className="h-[10vh] bg-[var(--colorPrincipal)] w-screen flex justify-around items-center sticky">
            <Link href="/personajes" className={classNameLinks}>Personajes</Link>
            <Link href="/" className="w-[20%] xl:w-[7%] md:w-[15%]"><Image src={starWarsLogoNegro} alt="logo de star wars" className="w-full"/></Link>
            <Link href="/peliculas" className={classNameLinks}>Peliculas</Link>
        </header>
    )
}