import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState } from 'react';

function MoviesCardList(props){
	// console.log(`props: ${JSON.stringify(props.handleSetRender)}`);

  const isSavedMovie = props.movies.some(i => i.hasOwnProperty('movieId'));
	// const [renderSet, setRenderSet] = useState({startShow: 0, addShow: 0});
  const [screenWidth, setScreenWidth ] = useState(window.innerWidth);

	useEffect(()=>{
		window.onresize = () => {
      setTimeout(() => {
        setScreenWidth(window.innerWidth);
      }, 1000);
			console.log(`screenWidth: ${screenWidth}`);
		};	

		if (screenWidth >= 1280) {
			props.handleSetRender({startShow: 12, addShow: 3});
		} else if (screenWidth >= 768) {
			props.handleSetRender({startShow: 8, addShow: 2});
		} else {
			props.handleSetRender({startShow: 5, addShow: 2});
		}

	}, [screenWidth, props.renderSet.startShow]);

	return (
		<section className="moviescardlist">
			<ul className="moviescardlist__cards">
				{
					props.movies.slice(0, props.renderSet.startShow).map((movie) => {
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