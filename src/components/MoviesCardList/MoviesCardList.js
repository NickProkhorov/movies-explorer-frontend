import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';
import { START_SHOW_MOVIES_12, START_SHOW_MOVIES_8, START_SHOW_MOVIES_7, START_SHOW_MOVIES_5,
  ADD_SHOW_MOVIES_2, ADD_SHOW_MOVIES_3, ADD_SHOW_MOVIES_7, SHORT_DURATION_VALUE, 
	SCREENWIDTH_1280, SCREENWIDTH_889, SCREENWIDTH_769, SCREENWIDTH_768, SCREENWIDTH_493, SCREENWIDTH_492 } from '../../utils/constants';

function MoviesCardList(props){
  const isSavedMovie = props.movies.some(i => i.hasOwnProperty('movieId'));

  const [screenWidth, setScreenWidth ] = useState(window.innerWidth);
	const moviesArray = props.isShortDuration ? props.movies.filter((m) => { return m.duration < SHORT_DURATION_VALUE }) : props.movies;


	useEffect(()=>{
		window.onresize = () => {
      setTimeout(() => {
		console.log();
        setScreenWidth(window.innerWidth);
      }, 1000);
		};	

		if (screenWidth >= SCREENWIDTH_1280) {
			props.handleSetRender({startShow: START_SHOW_MOVIES_12, addShow: ADD_SHOW_MOVIES_3}); // записать в константу значения количества выводимых фильмов
		} else if (screenWidth <= SCREENWIDTH_889 && screenWidth >= SCREENWIDTH_769 ) {
			props.handleSetRender({startShow: START_SHOW_MOVIES_7, addShow: ADD_SHOW_MOVIES_7});
		} else if ( screenWidth === SCREENWIDTH_768) {
			props.handleSetRender({startShow: START_SHOW_MOVIES_8, addShow: ADD_SHOW_MOVIES_2});
		} else if ( screenWidth < SCREENWIDTH_768 && screenWidth >= SCREENWIDTH_493 ) {
			props.handleSetRender({startShow: START_SHOW_MOVIES_7, addShow: ADD_SHOW_MOVIES_7});
		} else if ( screenWidth <= SCREENWIDTH_492) {
			props.handleSetRender({startShow: START_SHOW_MOVIES_5, addShow: ADD_SHOW_MOVIES_2});	
		} else {
			props.handleSetRender({startShow: START_SHOW_MOVIES_5, addShow: ADD_SHOW_MOVIES_2});
		}

	}, [screenWidth]);

	return (
		<section className="moviescardlist">
			<ul className="moviescardlist__cards">
				{
					moviesArray.slice(0, props.renderSet.startShow).map((movie) => {
						return <MoviesCard 
										key={isSavedMovie ? movie.movieId : movie.id}
										movie={movie}
										handleSaveMovie={props.handleSaveMovie}
										isSavedMovie = {isSavedMovie}
										savedMovies = {props.savedMovies}
										handleDeleteMovie={props.handleDeleteMovie}
									/>
					})
				}
			</ul>			
		</section>
	)
}
  
export default MoviesCardList;