function ProfileUpdatedMsg({isOpen, message}) {

	console.log(`isOpen ${isOpen}`);

	return(
		<section className={`profileUpdatedMsg  ${isOpen ? 'profileUpdatedMsg_opened':''}`}>
			<div className="profileUpdatedMsg__container">
				<h2 className="profileUpdatedMsg__heading">{message}</h2>
			</div>
		</section>
	)        
}

export default ProfileUpdatedMsg;