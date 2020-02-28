import React from 'react'

function ListItem(props){
    const {movie} = props
    return(
        <div className='List-Item'>
            <img alt={movie.title} className='movie-poster' src={movie.posterImg} />
            <div className='movie-info'>
                <p>{movie.title}</p>
                <p>{movie.year}</p>
            </div>
            <p 
            className='delete-button' 
            onClick={() => props.deleteMovie(movie.id)}
            >
                X
            </p>
        </div>
    )
}

export default ListItem;