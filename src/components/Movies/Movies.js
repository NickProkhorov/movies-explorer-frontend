import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMovies from '../MoreMovies/MoreMovies';
import Preloader from '../Preloader/Preloader';
import { NTHG_FOUND_MSG, GET_BF_ERROR } from '../../utils/constants';
import { useEffect, useState } from 'react';

function Movies(props){

  const [renderSet, setRenderSet] = useState({startShow: 0, addShow: 0}); // записать в константу

  useEffect(() => {
    
    if(localStorage.getItem('shortDuration') === 'true'){
      props.handleSetShortDuration(true);
    } else {
      props.handleSetShortDuration(false);
    }
    
    if(JSON.parse(localStorage.getItem('foundMovies') != null )){
      props.setMovies(JSON.parse(localStorage.getItem('foundMovies')));
    }
    
  },[])
  
  function handleSetRender(setting){
    setRenderSet(setting);
  }
  
  return (
    <section className="movies">
      <SearchForm 
        handleGetMovies={props.handleGetMovies}
        handleSearchMovies={props.handleSearchMovies}
        handleSetShortDuration={props.handleSetShortDuration} 
        isShortDuration={props.isShortDuration}
      />
      <div className="movies__line"></div>
      { props.isPreload
        ? <Preloader /> 
        : <MoviesCardList 
            movies={props.movies}
            renderSet={renderSet}
            handleSetRender={handleSetRender}
            handleSaveMovie={props.handleSaveMovie} 
            savedMovies={props.savedMovies}
            handleDeleteMovie={props.handleDeleteMovie}
            isShortDuration={props.isShortDuration}
          />    
      }
      <p className="movies__errormsg">{props.isNthFound ? NTHG_FOUND_MSG : '' || props.isFailMovApiConnect ? GET_BF_ERROR : ''}</p>
       {(props.movies.length > props.movies.slice(0, renderSet.startShow).length) ? 
       <MoreMovies 
        handleSetRender={handleSetRender}
        renderSet={renderSet}
        /> : 
       ''}
    </section>
  )
}

export default Movies;

