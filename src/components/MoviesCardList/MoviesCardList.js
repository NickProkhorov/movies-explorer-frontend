import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';

function MoviesCardList(props){
  const isSavedMovie = props.movies.some(i => i.hasOwnProperty('movieId'));

  const [screenWidth, setScreenWidth ] = useState(window.innerWidth);
	const moviesArray = props.isShortDuration ? props.movies.filter((m) => { return m.duration < 40 }) : props.movies;


	useEffect(()=>{
		window.onresize = () => {
      setTimeout(() => {
		console.log();
        setScreenWidth(window.innerWidth);
      }, 1000);
		};	

		if (screenWidth >= 1280) {
			props.handleSetRender({startShow: 12, addShow: 3});
		} else if (screenWidth <= 889 && screenWidth >= 769 ) {
			props.handleSetRender({startShow: 7, addShow: 7});
		} else if ( screenWidth === 768) {
			props.handleSetRender({startShow: 8, addShow: 2});
		} else if ( screenWidth < 768 && screenWidth >= 493 ) {
			props.handleSetRender({startShow: 7, addShow: 7});
		} else if ( screenWidth <= 492) {
			props.handleSetRender({startShow: 5, addShow: 2});	
		} else {
			props.handleSetRender({startShow: 5, addShow: 2});
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