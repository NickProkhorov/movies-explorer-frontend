import { useLocation} from 'react-router-dom';
import { MOVIES_API_IMAGE_LINK } from '../../utils/constants';

function MoviesCard(props){

  const isSavedMarker = props.savedMovies.some(i => i.movieId === props.movie.id );
  const savedMovie = props.savedMovies.filter((i) => i.movieId === props.movie.id);
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
          {props.movie.duration > 60 ? `${Math.floor(props.movie.duration/60)}ч ${props.movie.duration%60}м`:`${props.movie.duration%60}м`}
        </span>
      </div>
    </li>
  )
}
    
export default MoviesCard;