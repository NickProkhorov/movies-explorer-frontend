import { Link } from 'react-router-dom';
import FormRegister from '../FormRegister/FormRegister';

function Register(props){

    return (
    <section className="loginform">
      <div className="loginform__container">
        <Link to="/">
          <div className="loginform__logo"></div>
        </Link>
        <h2 className="loginform__heading">{props.title}</h2>
        {
          <FormRegister 
            submitValue={props.submitValue} 
            handleRegister={props.handleRegister} 
            isInfoTooltipOpen={props.isInfoTooltipOpen} 
            tooltipMessage={props.tooltipMessage}
          />
        }
      </div>
      <div className='loginform__question'>
        <p className='loginform__question-text'>{props.question}</p>
        <Link to="/signin" className='loginform__link'>{props.link}</Link>
      </div> 
    </section>
    )
}

export default Register;