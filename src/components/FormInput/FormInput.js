function FormInput(props){
	  
  return (
    <>
			<label htmlFor={`${props.name}-input`} className="forminput__label">{props.label}</label>
				<input 
					id={`${props.name}-input`}
					type={props.type} 
					name={props.name} 
					className={`forminput`}
					value={props.value}
					minLength={props.minLength}
					maxLength={props.maxLength}
					pattern={props.pattern}
					onChange={props.handleChange}
					disabled={!props.isActiveFormInput}
					required
				/>
			<span className={`forminput__error forminput__error-${props.name}`}>{props.errorMsg}</span>
	  </>
  )
}
  
export default FormInput;