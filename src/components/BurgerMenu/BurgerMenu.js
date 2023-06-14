import { Link, useLocation } from "react-router-dom";

function BurgerMenu(props) {
 const burgermenuClass = props.isBurgerMenuOpen ? (`burgermenu burgermenu_opened`) : (`burgermenu`);

 const location = useLocation().pathname;
  const isMainPage = location === '/';
  const isMovies = location === '/movies';
  const isSavedMovies = location === '/saved-movies';
  const isProfile = location === '/profile';

  const mainPageStyle = isMainPage ? (`burgermenu__link burgermenu__link_active`) :(`burgermenu__link`);
  const moviesPageStyle = isMovies ? (`burgermenu__link burgermenu__link_active`) :(`burgermenu__link`);
  const savedMoviesPageStyle = isSavedMovies ? (`burgermenu__link burgermenu__link_active`) :(`burgermenu__link`);
  const profilePageStyle = isProfile ? (`burgermenu__link burgermenu__link_active`) :(`burgermenu__link`);

 function handleClosed(){
	props.handleCloseBurger();
 }
	
 return (
		<section className={burgermenuClass}>
			<nav className="burgermenu__container">
				<button className="burgermenu_closebtn" onClick={handleClosed}></button>
				<ul className="burgermenu__links">
					<li className="burgermenu__element">
						<Link to='/' className={mainPageStyle}>Главная</Link>
					</li>
					<li className="burgermenu__element">
						<Link to='/movies' className={moviesPageStyle}>Фильмы</Link>
					</li>
					<li className="burgermenu__element">
						<Link to='/saved-movies' className={savedMoviesPageStyle}>Сохраненные фильмы</Link>  
					</li>
					<li className="burgermenu__element">
						<div className="burgermenu__account">
							<Link to='/profile' className={profilePageStyle}>Аккаунт</Link>
							<Link to="/">
								<div className="burgermenu__account-logo"></div>
							</Link>
						</div>
					</li>
				</ul>
		  </nav>
		</section>
		
	)
}

export default BurgerMenu;