import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
// import React, { useState, useEffect } from 'react'
// import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem'


export const GifGrid = ({ category }) => {

    // const [images, setImages] = useState([])

    // useEffect(() => {
    //     getGifs( category )
    //     .then( setImages ); // esto es lo mismo que .then( imgs => setImages( imgs ))
    // }, [ category ]) //aquí se pasa una lista de dependencias, y si no tiene no lanza otras peticiones 
    //                     // si la categoría cambia se dispara otra vez.    

    const { data: images, loading } = useFetchGifs(category);

    // console.log(loading);
    // console.log(data);

    return (
        <>
            <h3 className="animate__animated animate__fadeInDown">{category}</h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p> /*solo hace algo si está cargando*/}
            <div className='card-grid'>
                {
                    images.map(img => (
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
