import { useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import {useFormWithValidation} from '../Validator/Validator';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';


function EditProfile(props){
  const currentUser = useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();
  
  
  useEffect(() => {
    setValues(currentUser);
  }, [setValues, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleUpdateUser({name: values.name, email: values.email});
} 
    
    return (
      <div className="editprofile">
        <h2 className="editprofile__heading">{props.heading}</h2>
        <form className="editprofile__form" onSubmit={handleSubmit}>
          <fieldset className="editprofile__input-container">
            <FormInput type="text" name="name" label="Имя" minLength={2} maxLength={30} errorMsg={errors.name} value={values.name||''} handleChange={handleChange}/>
            <FormInput type="email" name="email" label="E-mail" value={values.email||''} errorMsg={errors.email} handleChange={handleChange}/>
          </fieldset>
          <fieldset className="editprofile__handlers">
             <FormButton submitValue={props.submitValue} btnIsValid={isValid}/>
          </fieldset>
          <Link to="/profile" className='editprofile__link'>{props.link}</Link>
        </form>
      </div>
                
    )
  }
  
  export default EditProfile;