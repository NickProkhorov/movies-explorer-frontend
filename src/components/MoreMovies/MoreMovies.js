function MoreMovies(props){

    function handleClickMore(){
      props.handleSetRender();
      console.log(`click to handleClickMore()`);
    }
    
    return (
        <section className="moremovies">
          <fieldset className="moremovies__button-container">
           <button className="moremovies__button" type="button" onClick={handleClickMore}>Ещё</button>
          </fieldset>
        </section>
    )
}
    
export default MoreMovies;