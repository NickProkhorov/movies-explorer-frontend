import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMovies from '../MoreMovies/MoreMovies';
import Preloader from '../Preloader/Preloader';
import { NTHG_FOUND_MSG } from '../../utils/constants';
import { useEffect, useState } from 'react';

function Movies(props){

  // [arrLength, setArrLength] = useState(0);
  // console.log(`Movies(props): ${JSON.stringify(props)}`);
  // const [resultMovies, setResultMovies ] = useState([]);
  const [renderSet, setRenderSet] = useState({startShow: 0, addShow: 0});
 
  function handleSetRender(setting){
    setRenderSet(setting.startShow, setting.addShow);
    console.log(JSON.stringify(renderSet));
  }
  
  return (
    <section className="movies">
      <SearchForm 
        handleGetMovies={props.handleGetMovies}
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
          />    
      }
      <p className="movies__errormsg">{props.isNthFound ? NTHG_FOUND_MSG : ''}</p> 
      <MoreMovies handleSetRender={handleSetRender}/>
    </section>
  )
}

export default Movies;

