import { useEffect } from "react";

import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import {useFormWithValidation} from '../Validator/Validator';
import LoginErrorField from "../LoginErrorField/LoginErrorField";
import { MAX_LENGTH_VALUE, MIN_PASS_LENGTH_VALUE, REGEX_EMAIL_PATTERN } from '../../utils/constants';

function FormLogin(props){
  const { values, handleChange, errors, isValid, setValues } = useFormWithValidation();

useEffect(() => {
  setValues({
    email:"",
    password:""
  });
}, [setValues]);

function handleSubmit(e){
  e.preventDefault();
  props.handleLogin({ email: values.email, password: values.password});
}
    
  return (
    <form className="formlogin" name={props.name} onSubmit={handleSubmit} noValidate>
      <fieldset className="formlogin__input-container">
        <FormInput 
          type="email" 
          name="email"
          label="E-mail"
          pattern={REGEX_EMAIL_PATTERN}
          errorMsg={errors.email} 
          value={values.email||''} 
          handleChange={handleChange}
          isActiveFormInput={props.isActiveFormInput}
        />
        <FormInput 
          type="password" 
          name="password"
          label="Пароль"
          minLength={MIN_PASS_LENGTH_VALUE}
          maxLength={MAX_LENGTH_VALUE}
          errorMsg={errors.password} 
          value={values.password||''} 
          handleChange={handleChange}
          isActiveFormInput={props.isActiveFormInput}
        />
        <LoginErrorField isOpen={props.isLoginErrorField} message={props.tooltipMessage} tooltipMessage={props.tooltipMessage}/>
      </fieldset>
      <fieldset className="formlogin__handlers">
        <FormButton submitValue={props.submitValue} btnIsValid={isValid} isActiveFormBtn={props.isActiveFormBtn}/>
      </fieldset>    
    </form>                
  )
}

export default FormLogin;