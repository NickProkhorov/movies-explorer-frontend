function RegisterErrorField({isOpen, message}) {

	return(
		<section className={`loginErrorField  ${isOpen ? 'loginErrorField_opened':''}`}>
			<div className="loginErrorField__container">
				<h2 className="loginErrorField__heading">{message}</h2>
			</div>
		</section>
	)        
}

export default RegisterErrorField;