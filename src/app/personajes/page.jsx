"use client"

import { useEffect, useState } from "react"
import CardPersonaje from "./cardPersonaje";
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from "./loading";
const URL_BASE = "https://swapi.dev/api/people/?page=1"

export default function Personajes(){
    const [personajes,setPersonajes] = useState([]);
    const [siguienteUrl,setSiguienteUrl] = useState()
    const [haySiguiente,setHaySiguiente]=useState(true)

    const getPersonajes = async (url=URL_BASE)=>{
        const res = await fetch(url)
        const listaPersonajes = await res.json()
        const {next,results} = listaPersonajes;
        
        return {next , results}
    }

    const siguientesPersonajes=async()=>{
        const {next,results}=await getPersonajes(siguienteUrl)
        const anterior = personajes;
        setPersonajes([...anterior,...results])
        if(next===null){
            setHaySiguiente(false);
        }
        setSiguienteUrl(next);
    }

    const obtenerPersonajes = async()=>{
        const {next,results} = await getPersonajes();
        setPersonajes(results)
        setSiguienteUrl(next)
    }

    useEffect(()=>{
        obtenerPersonajes();
    },[])

    return(
        <>
            <div className="flex flex-col">
                <h1 className="text-white text-5xl text-center mt-8 font-bold">Personajes</h1>
                <InfiniteScroll 
                    dataLength={personajes.length}
                    next={siguientesPersonajes}
                    hasMore={haySiguiente}
                    loader={<Loading/>}
                    endMessage={<h1 className="text-[var(--colorPrincipal)] font-bold text-2xl">NO HAY MAS PERSONAJES</h1>}
                    className="text-white flex flex-wrap justify-between items-center gap-5 w-[90%] mx-auto my-0 mt-8 mb-8"
                >
                    {personajes.map((personaje)=>(
                        <CardPersonaje key={personaje.name} nombre={personaje.name} ojos={personaje.eye_color} genero={personaje.gender}/>
                    ))}
                </InfiniteScroll>
            </div>
        </>
    )
}