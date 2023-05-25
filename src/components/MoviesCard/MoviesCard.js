function MoviesCard(props){
    
    return (
        <div className="moviescard">
               <img className="moviescard__image" alt="фото" src={props.movieLink} />
               <div className="moviescard__save-area">
                 <button className="moviescard__save-button" type="button">Сохранить</button>
                 <div className="moviescard__saved-marker"></div>
                 <div className="moviescard__delete-movie"></div>
               </div>
               <div className="moviescard__info" >
                    <h4 className="moviescard__name">{props.movieName}</h4>
                    <span className="moviescard__duration">{props.movieDuration}</span>
               </div>
               
        </div>
    )
}
    
export default MoviesCard;