function MoreMovies(props){

  function handleClickMore(e){
    e.preventDefault();
    props.handleSetRender({startShow: props.renderSet.startShow + props.renderSet.addShow, addShow:props.renderSet.addShow } );
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