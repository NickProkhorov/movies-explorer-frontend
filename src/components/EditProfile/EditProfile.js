import { Link } from 'react-router-dom';
import FormInput from '../FormInput/FormInput';
import FormButton from '../FormButton/FormButton';

function EditProfile(props){
    
    return (
      <div className="editprofile">
        <h2 className="editprofile__heading">{props.heading}</h2>
        <form className="editprofile__form" name={props.name} noValidate>
          <fieldset className="editprofile__input-container">
            <FormInput type="text" name="name" label="Имя"/>
            <FormInput type="email" name="email" label="E-mail"/>
          </fieldset>
          <fieldset className="editprofile__handlers">
             <FormButton submitValue={props.submitValue}/>
          </fieldset>
          <Link to="/profile" className='editprofile__link'>{props.link}</Link>
        </form>
      </div>
                
    )
  }
  
  export default EditProfile;