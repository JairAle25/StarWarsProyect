"use client"

import { useEffect, useState } from "react"
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
            <section className="text-white">
                <p>personajes</p>
            </section>
        </>
    )
}