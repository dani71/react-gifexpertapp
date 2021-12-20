import React from 'react'

export const GifGridItem = ( {id, title, url} ) => {
 
    console.log({id, title, url})
    return (
        <div className="card animate__animated animate__fadeInDown"> {/*class puede ser para html o para JS, así que la han cambiado a className para estar seguros*/}
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
// class="animate__animated animate__bounce animate__delay-2s"
