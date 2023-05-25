import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm(props){
    
    return (
      <section className="searchform">
        <div className="searchform__search-block">
          <fieldset className="searchform__input-container">
            <input type="text" className="searchform__search-field" placeholder="Фильм"/>
          </fieldset>
          <fieldset className="searchform__button-container">
            <button className="searchform__button" type="button"></button>
          </fieldset>
        </div>
        <FilterCheckbox />
      </section>
    )
  }
  
  export default SearchForm;