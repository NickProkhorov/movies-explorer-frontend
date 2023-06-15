import { useEffect } from "react";

import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import {useFormWithValidation} from '../Validator/Validator';
import LoginErrorField from "../LoginErrorField/LoginErrorField";

function FormLogin(props){
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();

useEffect(() => {
  setValues({
    email:"",
    password:""
  });
}, [setValues]);

function handleSubmit(e){
    e.preventDefault();
    props.handleLogin({ email: values.email, password: values.password});
    resetForm();
}
    
  return (
    <form className="formlogin" name={props.name} onSubmit={handleSubmit} noValidate>
      <fieldset className="formlogin__input-container">
        <FormInput 
          type="email" 
          name="email"
          label="E-mail" 
          errorMsg={errors.email} 
          value={values.email||''} 
          handleChange={handleChange}/>
        <FormInput 
          type="password" 
          name="password"
          label="Пароль" 
          errorMsg={errors.password} 
          value={values.password||''} 
          handleChange={handleChange}/>
        <LoginErrorField 
          isOpen={props.isLoginErrorField} 
          message={props.tooltipMessage}
          tooltipMessage={props.tooltipMessage}
        />
      </fieldset>
      <fieldset className="formlogin__handlers">
        <FormButton submitValue={props.submitValue} btnIsValid={isValid}/>
      </fieldset>    
    </form>                
  )
}

export default FormLogin;