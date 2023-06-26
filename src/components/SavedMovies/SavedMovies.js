import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

import { START_SHOW_MOVIES_0, ADD_SHOW_MOVIES_0, NTHG_FOUND_MSG } from '../../utils/constants';

function SavedMovies(props){

  const [renderSet, setRenderSet] = useState({startShow: START_SHOW_MOVIES_0, addShow: ADD_SHOW_MOVIES_0});

  useEffect(()=>{
    props.getSavedMovies();
    props.handleSetShortDurationSM(false);
    props.setIsNthFoundSM(false);
  }, []);
 
  function handleSetRender(setting){
    setRenderSet(setting);
  }
    
  return (
      <section className="savedmovies">
        <SearchForm
          handleSetShortDurationSM={props.handleSetShortDurationSM}
          isShortDurationSM={props.isShortDurationSM}
          handleSearchSavedMovies={props.handleSearchSavedMovies}
        />
        <div className="savedmovies__line"></div>
        <MoviesCardList 
          movies={props.movies} 
          renderSet={renderSet}
          handleSetRender={handleSetRender}
          savedMovies={props.savedMovies} 
          handleDeleteMovie={props.handleDeleteMovie}
          isShortDuration={props.isShortDurationSM}
        />
        <p className="movies__errormsg">{props.isNthFoundSM ? NTHG_FOUND_MSG : ''}</p>
      </section>
    )
  }
  
  export default SavedMovies; 