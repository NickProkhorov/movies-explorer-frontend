import { useState } from 'react'; 
import { useLocation } from 'react-router-dom';

function MoviesCard(props){

  const [isSaved, setIsSaved] = useState(false);
  const location = useLocation().pathname; 
  const isMovies = location === '/movies';
  const saveButtonClassName = isMovies ? (`moviescard__save-button ${ isSaved ? '' : 'moviescard__save-button_active' }`) : ('moviescard__save-button');
  const saveMarkerClassName = isMovies ? (`moviescard__saved-marker ${ isSaved ? 'moviescard__saved-marker_active' : '' }`) : ('moviescard__saved-marker');
  const delMovieClassName =  isMovies ? (`moviescard__delete-movie`) : ('moviescard__delete-movie moviescard__delete-movie_active');

  function handleSave() { 
    if (isSaved) { 
      setIsSaved(false);
    } else { 
      setIsSaved(true);
    } 
  } 
    
  return (
    <li className="moviescard">
      <img className="moviescard__image" alt="фото" src={props.movieLink} />
      <div className="moviescard__save-area">
        <button className={saveButtonClassName} type="button" onClick={handleSave}>Сохранить</button>
        <div className={saveMarkerClassName} onClick={handleSave}></div>
        <div className={delMovieClassName}></div>
      </div>
      <div className="moviescard__info" >
          <h4 className="moviescard__name">{props.movieName}</h4>
          <span className="moviescard__duration">{props.movieDuration}</span>
      </div>
    </li>
  )
}
    
export default MoviesCard;