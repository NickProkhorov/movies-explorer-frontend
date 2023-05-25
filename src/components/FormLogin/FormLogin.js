import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";

function FormLogin(props){
    
    return (
      <form className="formlogin" name={props.name} noValidate>
        <fieldset className="formlogin__input-container">
          <FormInput type="text" name="name" label="Имя"/>
          <FormInput type="email" name="email" label="E-mail"/>
        </fieldset>
        <fieldset className="formlogin__handlers">
          <FormButton submitValue={props.submitValue}/>
        </fieldset>    
      </form>                
    )
  }
  
  export default FormLogin;