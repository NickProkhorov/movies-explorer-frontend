function FormButton(props){
  const formbuttonClassName = ( !props.btnIsValid || !props.isActiveFormBtn) ? ('formbutton formbutton_disabled'):('formbutton');

  return (
    <>
      <input 
        type="submit" 
        id="confirmLogin" 
        value={props.submitValue}
        className={formbuttonClassName} 
        disabled={!props.btnIsValid || !props.isActiveFormBtn}
      />
    </>
  )
  }
  
  export default FormButton;