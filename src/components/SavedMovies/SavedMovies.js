import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { savedmovies } from '../../utils/constants';

function SavedMovies(props){
    
  return (
        <section className="savedmovies">
          <SearchForm />
          <div className="savedmovies__line"></div>
          <MoviesCardList movies={savedmovies}/>
        </section>
    )
  }
  
  export default SavedMovies; 