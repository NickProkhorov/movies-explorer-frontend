function ProfileUpdatedMsg({isOpen, message}) {

	return(
		<section className={`profileUpdatedMsg  ${isOpen ? 'profileUpdatedMsg_opened':''}`}>
			<div className="profileUpdatedMsg__container">
				<h2 className="profileUpdatedMsg__heading">{message}</h2>
			</div>
		</section>
	)        
}

export default ProfileUpdatedMsg;