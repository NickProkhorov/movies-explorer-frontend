import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props){
    
    return (
      <section className="searchform">
        <form className="searchform__search-block">
          <fieldset className="searchform__input-container">
            <input type="text" className="searchform__search-field" placeholder="Фильм" required/>
          </fieldset>
          <fieldset className="searchform__button-container">
            <button className="searchform__button" type="submit"></button>
          </fieldset>
        </form>
        <FilterCheckbox />
      </section>
    )
  }
  
  export default SearchForm;