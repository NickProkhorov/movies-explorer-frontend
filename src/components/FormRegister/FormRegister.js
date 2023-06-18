import { useEffect } from "react";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import RegisterErrorField from "../RegisterErrorField/RegisterErrorField";
import {useFormWithValidation} from '../Validator/Validator';

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
            minLength={2} 
            maxLength={30}
            pattern={'^[а-яА-ЯёЁa-zA-Z\s\-]+$'}
            errorMsg={errors.name} 
            value={values.name||''} 
            handleChange={handleChange}/>
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
            minLength={4} 
            maxLength={30} 
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