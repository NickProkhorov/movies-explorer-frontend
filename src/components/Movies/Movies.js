import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoreMovies from '../MoreMovies/MoreMovies';
import { movies } from '../../utils/constants';

function Movies(props){
  
  return (
        <section className="movies">
          <SearchForm />
          <div className="movies__line"></div>
          <MoviesCardList movies={movies} />
          <MoreMovies />
        </section>
    )
  }
  
  export default Movies;