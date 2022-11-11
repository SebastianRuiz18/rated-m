import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { MovieCard } from './MovieCard'

export const Watched = () => {
  const {watched} = useContext(GlobalContext);

  return (
    <div>
        <div className='movie-page'>
      <div className="container">
        <div className="header">
          <h1 className="heading">Películas favoritas</h1>
          <span className="count-pill">
            {watched.length} {watched.length === 1 ? 'Película' : 'Películas'}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
          {watched.map((movie) => (
          <MovieCard movie={movie} type="watched"/>
          ))}
        </div>
        ) : (
          <h2 className='no-movies'>No hay películas en tu lista de favoritos. Comienza a agregar.</h2>
        )}
        
      </div>
    </div>
    </div>
  )
}
