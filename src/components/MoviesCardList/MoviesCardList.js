import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({movies}){
       
    return (
        <section className="moviescardlist">
            {
                movies.map((movie) => {
                  return <MoviesCard key={movie.id} movieName={movie.name} movieDuration={movie.duration} movieLink={movie.link} />
                })
            }    
        </section>
    )
  }
  
  export default MoviesCardList;