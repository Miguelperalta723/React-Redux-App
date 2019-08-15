import React from 'react'

import './movie.css'


export const Movie = (props) => {
    return (
        <div className='movie'>
            <h1>{props.movie.title}</h1>
            <p>Director: {props.movie.director} </p>
            <p>{props.movie.description}</p>
        </div>
    )
}

