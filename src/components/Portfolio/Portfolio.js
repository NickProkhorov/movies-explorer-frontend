
function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav>
        <ul className="portfolio__links">
          <li className="portfolio__link-block">
            <a href="https://github.com/NickProkhorov/how-to-learn" className="portfolio__link">Статичный сайт</a>
              <a href="https://github.com/NickProkhorov/how-to-learn" className="portfolio__link-img">
              </a>
          </li>
          <li className="portfolio__link-block">
            <a href="https://nickprokhorov.github.io/russian-travel/index.html" className="portfolio__link">Адаптивный сайт</a>
            <a href="https://nickprokhorov.github.io/russian-travel/index.html" className="portfolio__link-img">
            </a>
          </li>
          <li className="portfolio__link-block">
            <a href="https://nickprokhorov.github.io/mesto/" className="portfolio__link">Одностраничное приложение</a>
            <a href="https://nickprokhorov.github.io/mesto/" className="portfolio__link-img"> 
            </a>
          </li>
        </ul>
      </nav>           
    </section>
  )
}

export default Portfolio;