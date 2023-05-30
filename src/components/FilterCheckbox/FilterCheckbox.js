function FilterCheckbox(props){
    
	return (
		<fieldset className="filtercheckbox__checkbox-container">
			<label className="filtercheckbox__checkbox-label">
				<input type="checkbox" name="checkbox" id="checkbox"/>
				<div className="filtercheckbox__checkbox-slider round"></div>
			</label>
			<label for="checkbox" className="filtercheckbox__checkbox-labeltext">Короткометражки</label>
		</fieldset>
		
	)
}
  
export default FilterCheckbox; 