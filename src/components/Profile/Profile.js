import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import ProfileUpdatedMsg from '../ProfileUpdatedMsg/ProfileUpdatedMsg';

import { HELLO_MSG } from '../../utils/constants';

function Profile(props){
  const currentUser = useContext(CurrentUserContext);
  console.log(`Profile userdata ${JSON.stringify(currentUser)}`);
    
  return (
    <section className="profile">
			<h2 className="profile__heading">{`${HELLO_MSG}${currentUser.name}!`}</h2>
			<div className='profile__username'>
				<p className='profile__desc'>Имя</p>
				<p className='profile__desc'>{currentUser.name}</p>
			</div>
			<div className='profile__useremail'>
				<p className='profile__desc'>E-mail</p>
				<p className='profile__desc'>{currentUser.email}</p>
			</div>
			<ProfileUpdatedMsg message={props.tooltipMessage} isOpen={props.isEditProfileErrorField}/>
			<div className="profile__handlers">
				<Link to='/profile-edit' className="profile__edit-profile">{props.submitValue}</Link>
				<Link to='/signin' className="profile__exit-btn" onClick={props.signOut}>{props.exitBtn}</Link>
			</div>    
    </section>
  )
}

export default Profile;