import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props){
    
  return (
        <section className="savedmovies">
          <SearchForm
            handleSetShortDuration={props.handleSetShortDuration} 
            isShortDuration={props.isShortDuration}
          />
          <div className="savedmovies__line"></div>
          <MoviesCardList 
            movies={props.movies} 
            savedMovies={props.savedMovies} 
            handleDeleteMovie={props.handleDeleteMovie}
          />
        </section>
    )
  }
  
  export default SavedMovies; 