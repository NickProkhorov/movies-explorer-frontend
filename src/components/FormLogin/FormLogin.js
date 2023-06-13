import { useEffect } from "react";

import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import {useFormWithValidation} from '../Validator/Validator';

function FormLogin(props){
  const { values, handleChange, errors, isValid, resetForm, setValues } = useFormWithValidation();
//   const [userData, setUserData] = useState({
//     email:"",
//     password: ""
// });

// function handleChange(e){
//   const { name, value } = e.target;

//   setUserData({
//       ...userData,
//       [name]: value,
//   });
// }
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
        <FormInput type="email" name="email" label="E-mail" errorMsg={errors.email} value={values.email||''} handleChange={handleChange}/>
        <FormInput type="password" name="password" label="Пароль" errorMsg={errors.password} value={values.password||''} handleChange={handleChange}/>
      </fieldset>
      <fieldset className="formlogin__handlers">
        <FormButton submitValue={props.submitValue} btnIsValid={isValid}/>
      </fieldset>    
    </form>                
  )
}

export default FormLogin;