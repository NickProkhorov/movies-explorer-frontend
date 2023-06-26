import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import {useFormWithValidation} from '../Validator/Validator';
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import FilterCheckboxSM from "../FilterCheckboxSM/FilterCheckboxSM";

function SearchForm(props){
  const { values, handleChange, errors, isValid } = useFormWithValidation();
  const location = useLocation().pathname;
  const navigate = useNavigate();
  const isMovies = location === '/movies';
  let storageMovies = Array();
  
  useEffect(() => {
    storageMovies = JSON.parse(localStorage.getItem('foundMovies'));
    if(isMovies && (storageMovies != null)){
      values.keyword = localStorage.getItem('keyWord');
    }
  }, [navigate]);

  function handleSubmit(e) {
    e.preventDefault();
    if(isMovies) {
      ( storageMovies === null || storageMovies.length === 0 ) ? props.handleGetMovies(values.keyword) : props.handleSearchMovies(values.keyword); 
    } else {
      props.handleSearchSavedMovies(values.keyword);
    }
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
      {isMovies ? 
        <FilterCheckbox handleSetShortDuration={props.handleSetShortDuration} isShortDuration={props.isShortDuration}/>
        :
        <FilterCheckboxSM handleSetShortDurationSM={props.handleSetShortDurationSM} isShortDurationSM={props.isShortDurationSM}/>
      }
      
    </section>
  )
}
  
export default SearchForm;