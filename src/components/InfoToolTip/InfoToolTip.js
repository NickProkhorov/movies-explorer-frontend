function InfoToolTip({name, isOpen, message, onClose}) {

	return(
		<section className={`infotool ${isOpen ? 'infotool_opened':''}`}>
			<div className="infotool__container">
				<h2 className="infotool__heading">{message}</h2>
			</div>
		</section>
	)        
}

export default InfoToolTip;