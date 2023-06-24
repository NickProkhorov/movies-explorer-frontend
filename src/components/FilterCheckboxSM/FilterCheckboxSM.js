
function FilterCheckboxSM(props){

	function handleCheck() {
		props.handleSetShortDurationSM(!props.isShortDurationSM);	
	}
	
	return (
		<fieldset className="filtercheckbox__checkbox-container">
			<label className="filtercheckbox__checkbox-label">
				<input type="checkbox" name="checkbox" id="checkbox" onChange={handleCheck} checked={props.isShortDurationSM}/>
				<div className="filtercheckbox__checkbox-slider round"></div>
			</label>
			<label htmlFor="checkbox" className="filtercheckbox__checkbox-labeltext">Короткометражки</label>
		</fieldset>	
	)
}
  
export default FilterCheckboxSM;