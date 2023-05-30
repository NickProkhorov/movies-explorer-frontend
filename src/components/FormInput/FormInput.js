function FormInput(props){
    
  return (
    <>
		<label htmlFor="email-input" className="forminput__label">{props.label}</label>
		<input id="email-input" type={props.type} name={props.name} className={`forminput`} minLength="8" maxLength="30" required/>
		<span className={`forminput__error forminput__error-${props.name}`}>Что-то пошло не так...</span>
	</> 
  )
}
  
export default FormInput;