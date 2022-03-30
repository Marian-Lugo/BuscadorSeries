import { fetchSeries } from "../../utils/fetchSeries";
import { useState } from "react";
import { useEffect } from "react";

export const Buscador = () =>{
    const [serie, setSerie]=useState({})

    useEffect(()=>{
        const datos=async()=>{
            const res=await fetchSeries('girls')
            console.log("Llego al res",res);
            setSerie(res);
        }
        console.log("Este es serie", serie);
        Object.keys(serie).length === 0 && datos()
    }, [])

    return (
        <div className="image-serie">
            <p>Buscador</p>
        </div>
    )
}