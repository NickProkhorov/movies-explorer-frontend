import { useEffect } from "react";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import RegisterErrorField from "../RegisterErrorField/RegisterErrorField";
import {useFormWithValidation} from '../Validator/Validator';

import { MIN_LENGTH_VALUE, MAX_LENGTH_VALUE, MIN_PASS_LENGTH_VALUE, REGEX_NAME_PATTERN, REGEX_EMAIL_PATTERN } from '../../utils/constants';

function FormRegister(props){
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();
    
    useEffect(() => {
      setValues({
        name:"",
        email:"",
        password:""
      });
    }, [setValues]);

    function handleSubmit(e){
        e.preventDefault();
        props.handleRegister({ name: values.name, email: values.email, password: values.password});
        resetForm();
    }
    
    return (
      <form className="formlogin" name={props.name} onSubmit={handleSubmit}>
        <fieldset className="formregister__input-container">
          <FormInput
            type="text" 
            name="name"
            label="Имя" 
            minLength={MIN_LENGTH_VALUE} 
            maxLength={MAX_LENGTH_VALUE}
            // pattern={ REGEX_NAME_PATTERN}
            errorMsg={errors.name} 
            value={values.name||''} 
            handleChange={handleChange}/>
          <FormInput 
            type="email" 
            name="email"
            label="E-mail"
            // pattern={REGEX_EMAIL_PATTERN}
            errorMsg={errors.email} 
            value={values.email||''} 
            handleChange={handleChange}/>
          <FormInput
            type="password" 
            name="password"
            label="Пароль" 
            minLength={MIN_PASS_LENGTH_VALUE}
            maxLength={MAX_LENGTH_VALUE}
            errorMsg={errors.password} 
            value={values.password||''} 
            handleChange={handleChange}/>
          <RegisterErrorField isOpen={props.isRegisterErrorField} message={props.tooltipMessage}/>
        </fieldset>
        <fieldset className="formregister__handlers">
          <FormButton submitValue={props.submitValue} btnIsValid={isValid} />
        </fieldset>    
      </form>             
    )
}
  
export default FormRegister;