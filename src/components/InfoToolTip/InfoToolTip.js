function InfoToolTip({name, isOpen, message, onClose}) {

	return(
		<section className={`infotool ${isOpen ? 'infotool_opened':''}`}>
			<div className="infotool__container">
				<h2 className="infotool__heading">{message}</h2>
				{/* <button className="infotool__closed" type="button" onClick={onClose}></button> */}
			</div>
		</section>
	)        
}

export default InfoToolTip;