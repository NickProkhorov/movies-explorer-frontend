import { Routes, Route } from "react-router-dom";

function Footer() {
	return (
			<Routes>
				<Route path="/" element={
					<footer className="footer">
						<p className="footer__project">Учебный проект Яндекс.Практикум x BeatFilm.</p>
						<div className="footer__about-project">
								<p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
								<nav>
									<ul className="footer__links">
										<li className="footer__link-element">
											<a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
										</li>
										<li className="footer__link-element">
											<a href="https://github.com/NickProkhorov" className="footer__link">Github</a>
										</li> 
									</ul>
								</nav>
						</div>
					</footer>
				}/>
				<Route path="/movies" element={
					<footer className="footer">
						<p className="footer__project">Учебный проект Яндекс.Практикум x BeatFilm.</p>
						<div className="footer__about-project">
								<p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
								<nav>
									<ul className="footer__links">
										<li className="footer__link-element">
											<a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
										</li>
										<li className="footer__link-element">
											<a href="https://github.com/NickProkhorov" className="footer__link">Github</a>
										</li> 
									</ul>
								</nav>
						</div>
					</footer>
				}/>
				<Route path="/saved-movies" element={
					<footer className="footer">
						<p className="footer__project">Учебный проект Яндекс.Практикум x BeatFilm.</p>
						<div className="footer__about-project">
								<p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
								<nav>
									<ul className="footer__links">
										<li className="footer__link-element">
											<a href="https://practicum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
										</li>
										<li className="footer__link-element">
											<a href="https://github.com/NickProkhorov" className="footer__link">Github</a>
										</li> 
									</ul>
								</nav>
						</div>
					</footer>
				}/> 
			</Routes>
	)
}

export default Footer;