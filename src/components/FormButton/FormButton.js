function FormButton(props){
    
    return (
      <>
        <input type="submit" id="confirmLogin" value={props.submitValue} className="formbutton"/>
      </>
    )
  }
  
  export default FormButton;