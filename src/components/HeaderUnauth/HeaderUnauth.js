import { Link } from "react-router-dom";

function HeaderUnauth() {
	return (
		<nav>
			<ul className="headerunauth">
				<li>
					<Link to='/signup' className="headerunauth__signup-link">Регистрация</Link>
				</li>
				<li>
					<button className="headerunauth__signin" type="button">
						<Link to='/signin' className="headerunauth__signin-button">Войти</Link>
					</button>
				</li>
			</ul>
    </nav>
	)
}

export default HeaderUnauth;