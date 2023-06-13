function FormButton(props){
  const formbuttonClassName = !props.btnIsValid ? ('formbutton formbutton_disabled'):('formbutton');
    
    return (
      <>
        <input type="submit" id="confirmLogin" value={props.submitValue} className={formbuttonClassName} disabled={!props.btnIsValid}/>
      </>
    )
  }
  
  export default FormButton;