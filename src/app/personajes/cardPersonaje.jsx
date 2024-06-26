import Image from "next/image"
import Link from "next/link"
import fotoPersonajes from "./../../../public/fotoPersonajes.webp"
import 'bootstrap-icons/font/bootstrap-icons.css'

/*Dependiendo del genero del personaje le asigno un icono*/
const getIconoGenero =(genero)=>{
    if(genero=="male"){
        return "bi bi-gender-male text-[#087cc6]"
    }else if(genero=="female"){
        return "bi bi-gender-female text-[#fc1563]"
    }
    else{
        return "bi bi-gender-ambiguous text-[#2bb454]"
    }
}

export default function CardPersonaje({nombre,ojos,genero}){
    const colores = ojos.split(",");
    const classGenero = getIconoGenero(genero)
    const nombreLink=nombre.split(" ").join("-");
    
    return(
        <>
            <Link href={`/personajes/${nombreLink}`}  className="flex flex-col justify-center items-center gap-3  border rounded-lg py-4 px-6 transition-all duration-1000 bg-[#333333] hover:bg-gray-900 xl:max-w-[420px] md:max-w-[300px]" >  
                <h1 className="text-[var(--colorPrincipal)] font-bold text-xl xl:text-xl md:text-2xl">{nombre}</h1>
                <Image src={fotoPersonajes} alt="personaje star wars" className="rounded-md"/>
                {ojos !=="unknown" && 
                <p className="flex justify-center items-center gap-2 text-lg ">Color de ojos : 
                    {colores.map((color,index)=>(
                        <i key={index} className="bi bi-eye-fill text-xl xl:text-2xl md:text-2xl" style={{ color: color }}></i>
                    ))}
                </p>
                }
                {genero !== "n/a" && <p className="flex justify-center items-center gap-2 text-lg">Genero: <i className={`${classGenero} text-2xl xl:text-3xl`}></i></p>}
            </Link>
        </>
    )
}