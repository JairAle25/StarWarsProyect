
export default async function DetailFilm({params}){
    const {detallePelicula} = params;
    getPeliculaDetalle(detallePelicula);
    return(
        <div className="text-white">hola</div>
    )
}