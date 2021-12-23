import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState( {
        data: [],
        loading: true
    });

    useEffect(() => { //los efectos no pueden ser async, pero la respuesta getGifs si es una promesa

        getGifs( category )
            .then( imgs => {
                setState( {
                    data: imgs,
                    loading: false
                });
            })
    }, [ category ])
        // useEffect(() => {
    //     getGifs( category )
    //     .then( setImages ); // esto es lo mismo que .then( imgs => setImages( imgs ))
    // }, [ category ]) //aquí se pasa una lista de dependencias, y si no tiene no lanza otras peticiones 
    //                     // si la categoría cambia se dispara otra vez.  

    // setTimeout( () => {
    //     setState ( {
    //         data: [1,2,3,4,5,6,7],
    //         loading : false
    //     })
    // }, 3000)
    return state; // {data:[], loading:true};
}

