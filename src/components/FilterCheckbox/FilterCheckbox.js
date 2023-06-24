import { useEffect } from "react";

function FilterCheckbox(props){

	useEffect(() => {
		localStorage.setItem('shortDuration', props.isShortDuration);
  }, [props.isShortDuration]);
    
	function handleCheck() {
		props.handleSetShortDuration(!props.isShortDuration);
	}
	
	return (
		<fieldset className="filtercheckbox__checkbox-container">
			<label className="filtercheckbox__checkbox-label">
				<input type="checkbox" name="checkbox" id="checkbox" onChange={handleCheck} checked={props.isShortDuration}/>
				<div className="filtercheckbox__checkbox-slider round"></div>
			</label>
			<label htmlFor="checkbox" className="filtercheckbox__checkbox-labeltext">Короткометражки</label>
		</fieldset>	
	)
}
  
export default FilterCheckbox;