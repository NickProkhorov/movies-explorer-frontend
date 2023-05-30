import { Link } from "react-router-dom";

function HeaderMenu() {
	return (
		<nav>
			<ul className="headermenu">
				<li className="headermenu-element">
					<Link to='/movies' className="headermenu-link">Фильмы</Link>
				</li>
				<li className="headermenu-element">
					<Link to='/saved-movies' className="headermenu-link">Сохраненные фильмы</Link>  
				</li>
				<li>
					<div className="headermenu__account">
						<Link to='/profile' className="header__signup-link">Аккаунт</Link>
						<Link to="/profile">
							<button className="headermenu__account-logo"></button>
						</Link>						
					</div>
					<button className="headermenu__burgermenu"></button>
				</li>
			</ul>
		</nav>
	)
}

export default HeaderMenu;