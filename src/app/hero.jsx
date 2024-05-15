import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    const classNameLinks = "bg-[var(--colorPrincipal)] text-black font-bold rounded-md border border-black px-6  transition-all duration-500 hover:bg-transparent hover:text-[var(--colorPrincipal)] hover:border-[var(--coloPrincipal)] text-base text-center xl:py-1 xl:text-lg md:text-2xl md:py-2"

    return(
        <main className="h-[90vh] w-[90%] mx-auto my-0 bg-black flex flex-col justify-center items-center gap-4 xl:gap-9 md:gap-8">
            <Image src="/starWarsLogo.svg" width={100} height={100} className="w-[70%] xl:w-1/4 md:w-1/2" alt="logo star wars"></Image>
            <p className="text-white text-lg xl:text-2xl text-center md:text-3xl">Explora el universo de Star Wars: personajes icónicos y películas legendarias</p>
            <div className="text-white flex gap-2">
                <Link href="/personajes" className={classNameLinks}>Ver Personajes</Link>
                <Link href="/peliculas" className={classNameLinks}>Ver Peliculas</Link>
            </div>
        </main>
    )
}

