import { Link } from "react-router-dom";

function BurgerMenu() {
	return (
		<section className="burgermenu">
			<nav className="burgermenu__container">
				<button className="burgermenu_closebtn"></button>
				<ul className="burgermenu__links">
					<li className="burgermenu__element">
						<Link to='/' className="burgermenu__link">Главная</Link>
					</li>
					<li className="burgermenu__element">
						<Link to='/movies' className="burgermenu__link burgermenu__link_active">Фильмы</Link>
					</li>
					<li className="burgermenu__element">
						<Link to='/saved-movies' className="burgermenu__link">Сохраненные фильмы</Link>  
					</li>
					<li className="burgermenu__element">
						<div className="burgermenu__account">
							<Link to='/profile' className="burgermenu__account-link">Аккаунт</Link>
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