import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import {useFormWithValidation} from '../Validator/Validator';
import { useState, useEffect } from "react";

function SearchForm(props){
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();
  
  useEffect(() => {
    setValues({
      keyword: localStorage.getItem('keyWord')
    });
  }, [setValues]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(`handleSubmit(e) SearchForm`);
    props.handleGetMovies(values.keyword);
  }
    
  return (
    <section className="searchform">
      <form className="searchform__search-block" onSubmit={handleSubmit}>
        <fieldset className="searchform__input-container">
          <input 
            type="text" 
            className="searchform__search-field"
            name="keyword" 
            placeholder="Фильм"
            value={values.keyword||''}
            onChange={handleChange}
            required
          />
          <span className={`searchform__error`}>{errors.keyword}</span>
        </fieldset>
        <fieldset className="searchform__button-container">
          <button className="searchform__button" type="submit" disabled={!isValid} ></button>
        </fieldset>
      </form>
      <FilterCheckbox handleSetShortDuration={props.handleSetShortDuration} isShortDuration={props.isShortDuration}/>
    </section>
  )
}
  
export default SearchForm;