function EditProfileErrorField({isOpen, message}) {

	console.log(`isOpen ${isOpen}`);

	return(
		<section className={`editProfileErrorField  ${isOpen ? 'editProfileErrorField_opened':''}`}>
			<div className="editProfileErrorField__container">
				<h2 className="editProfileErrorField__heading">{message}</h2>
			</div>
		</section>
	)        
}

export default EditProfileErrorField;