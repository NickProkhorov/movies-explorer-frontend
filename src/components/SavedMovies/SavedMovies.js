import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';

function SavedMovies(props){

  const [renderSet, setRenderSet] = useState({startShow: 0, addShow: 0});

  useEffect(()=>{
    props.getSavedMovies();
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