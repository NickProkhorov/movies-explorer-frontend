import { useEffect, useContext } from "react";
import { Link } from 'react-router-dom';
import {useFormWithValidation} from '../Validator/Validator';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';
import EditProfileErrorField from "../EditProfileErrorField/EditProfileErrorField";

import { MIN_LENGTH_VALUE, MAX_LENGTH_VALUE, REGEX_NAME_PATTERN } from '../../utils/constants';

function EditProfile(props){
  const currentUser = useContext(CurrentUserContext);
  props.setIsEditProfileErrorField(false);
  const { values, handleChange, errors, isValid, setValues , setIsValid} = useFormWithValidation();
  
  useEffect(() => {
    setValues(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if(currentUser.name === values.name && currentUser.email === values.email){
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  });
  
  function handleSubmit(e) {
    e.preventDefault();
    props.handleUpdateUser({name: values.name, email: values.email});
} 
    
    return (
      <div className="editprofile">
        <h2 className="editprofile__heading">{props.heading}</h2>
        <form className="editprofile__form" onSubmit={handleSubmit}>
          <fieldset className="editprofile__input-container">
            <FormInput 
              type="text" 
              name="name" 
              label="Имя" 
              minLength={MIN_LENGTH_VALUE} 
              maxLength={MAX_LENGTH_VALUE}
              // pattern={REGEX_NAME_PATTERN}
              errorMsg={errors.name} 
              value={values.name||''}
              handleChange={handleChange}
            />
            <FormInput 
              type="email" 
              name="email" 
              label="E-mail" 
              value={values.email||''} 
              errorMsg={errors.email} 
              handleChange={handleChange}
            />
            <EditProfileErrorField message={props.tooltipMessage} isOpen={props.isEditProfileErrorField}/>
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