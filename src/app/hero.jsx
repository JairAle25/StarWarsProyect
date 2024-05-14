import Image from "next/image";
import Link from "next/link";

export default function Hero(){
    const classNameLinks = "bg-[var(--colorPrincipal)] text-black text-lg font-bold rounded-md border border-black px-6 py-1 transition-all duration-500 hover:bg-transparent hover:text-[var(--colorPrincipal)] hover:border-[var(--coloPrincipal)] md:text-2xl md:py-2"

    return(
        <main className="h-[90vh] w-[90%] mx-auto my-0 bg-black flex flex-col justify-center items-center gap-9">
            <Image src="/starWarsLogo.svg" width={100} height={100} className="w-1/4 md:w-1/2" alt="logo star wars"></Image>
            <p className="text-white text-2xl text-center md:text-3xl">Explora el universo de Star Wars: personajes icónicos y películas legendarias</p>
            <div className="text-white flex gap-2">
                <Link href="/personajes" className={classNameLinks}>Ver Personajes</Link>
                <Link href="/peliculas" className={classNameLinks}>Ver Peliculas</Link>
            </div>
        </main>
    )
}

