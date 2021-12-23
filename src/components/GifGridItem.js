import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ( {id, title, url} ) => {
 
    // console.log({id, title, url})
    return (
        <div className="card animate__animated animate__fadeInDown"> {/*class puede ser para html o para JS, así que la han cambiado a className para estar seguros*/}
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
}
