import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies}){
       
    return (
			<section className="moviescardlist">
				<ul className="moviescardlist__cards">
					{
							movies.map((movie) => {
								return <MoviesCard key={movie.id} movieName={movie.name} movieDuration={movie.duration} movieLink={movie.link} />
							})
					}
				</ul>
							
			</section>
    )
  }
  
export default MoviesCardList;