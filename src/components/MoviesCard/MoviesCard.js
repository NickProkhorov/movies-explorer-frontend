import { useLocation} from 'react-router-dom';
import { MOVIES_API_IMAGE_LINK, ONE_HOUR_VALUE } from '../../utils/constants';
import { useEffect, useState } from 'react';

function MoviesCard(props){

  const [ isSavedMarker, setIsSavedMarker ] = useState(false);
  const [ savedMovie, setSavedMovie ] = useState({}); 
  
  useEffect(() => {
    setIsSavedMarker(props.savedMovies.some(i => i.movieId === props.movie.id ));
    setSavedMovie(props.savedMovies.find((i) => i.movieId === props.movie.id));
  }, [props.savedMovies])

  const location = useLocation().pathname;
  const isMovies = location === '/movies';
  const saveButtonClassName = isMovies ? (`moviescard__save-button ${isSavedMarker ? '' : 'moviescard__save-button_active' }`) : ('moviescard__save-button');
  const saveMarkerClassName = isMovies ? (`moviescard__saved-marker ${isSavedMarker ? 'moviescard__saved-marker_active' : '' }`) : ('moviescard__saved-marker');
  const delMovieClassName = isMovies ? (`moviescard__delete-movie`) : ('moviescard__delete-movie moviescard__delete-movie_active');

  function handleSave() { 
    props.handleSaveMovie(props.movie);
  } 

  function handleDelete() {
    const movie = isMovies ? savedMovie : props.movie;
    console.log(JSON.stringify(movie));
    props.handleDeleteMovie(movie);
  }
   
  return (
    <li className="moviescard">
      <a href={props.movie.trailerLink} target="_blank"><img className="moviescard__image" alt="постер фильма" src={ props.isSavedMovie ? props.movie.image : MOVIES_API_IMAGE_LINK + props.movie.image.url} /></a>
      <div className="moviescard__save-area">
        <button className={saveButtonClassName} type="button" onClick={handleSave}>Сохранить</button>
        <button className={saveMarkerClassName} onClick={handleDelete}></button>
        <button className={delMovieClassName} onClick={handleDelete}></button>
      </div>
      <div className="moviescard__info">
        <h4 className="moviescard__name">{props.movie.nameRU}</h4>
        <span className="moviescard__duration">
          {props.movie.duration > ONE_HOUR_VALUE ? `${Math.floor(props.movie.duration/ONE_HOUR_VALUE)}ч ${props.movie.duration%ONE_HOUR_VALUE}м`:`${props.movie.duration%ONE_HOUR_VALUE}м`}
        </span>
      </div>
    </li>
  )
}
    
export default MoviesCard;