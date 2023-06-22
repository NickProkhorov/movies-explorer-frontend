import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

import { START_SHOW_MOVIES_0, ADD_SHOW_MOVIES_0 } from '../../utils/constants';

function SavedMovies(props){

  const [renderSet, setRenderSet] = useState({startShow: START_SHOW_MOVIES_0, addShow: ADD_SHOW_MOVIES_0});

  useEffect(()=>{
    props.getSavedMovies();
    props.handleSetShortDuration(false);
  }, []);
 
  function handleSetRender(setting){
    setRenderSet(setting);
  }
    
  return (
        <section className="savedmovies">
          <SearchForm
            handleSetShortDuration={props.handleSetShortDuration} 
            isShortDuration={props.isShortDuration}
            handleSearchSavedMovies={props.handleSearchSavedMovies}
          />
          <div className="savedmovies__line"></div>
          <MoviesCardList 
            movies={props.movies} 
            renderSet={renderSet}
            handleSetRender={handleSetRender}
            savedMovies={props.savedMovies} 
            handleDeleteMovie={props.handleDeleteMovie}
            isShortDuration={props.isShortDuration}
          />
        </section>
    )
  }
  
  export default SavedMovies; 