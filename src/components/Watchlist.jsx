import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
import { MovieCard } from './MovieCard';
import { Watched } from './Watched';


export const Watchlist = () => {
  const {watchlist} = useContext(GlobalContext);
  return (
    <div className='movie-page'>
      <div className="container">
        <div className="header">
          <h1 className="heading">Películas por ver</h1>
          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? 'Película' : 'Películas'}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="movie-grid">
          {watchlist.map((movie) => (
          <MovieCard movie={movie} type="watchlist"/>
          ))}
        </div>
        ) : (
          <h2 className='no-movies'>No hay películas por ver. Comienza a agregar.</h2>
        )}
        
      </div>
    </div>
  );
};
