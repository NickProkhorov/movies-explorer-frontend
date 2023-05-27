
function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <nav>
        <ul className="portfolio__links">
          <li className="portfolio__link-block">
            <a href="https://nickprokhorov.github.io/how-to-learn/index.html#" className="portfolio__link" target="_blank" rel="noopener noreferrer">Статичный сайт</a>
              <a href="https://nickprokhorov.github.io/how-to-learn/index.html#" className="portfolio__link-img" target="_blank" rel="noopener noreferrer">
              </a>
          </li>
          <li className="portfolio__link-block">
            <a href="https://nickprokhorov.github.io/russian-travel/index.html" className="portfolio__link" target="_blank" rel="noopener noreferrer">Адаптивный сайт</a>
            <a href="https://nickprokhorov.github.io/russian-travel/index.html" className="portfolio__link-img" target="_blank" rel="noopener noreferrer">
            </a>
          </li>
          <li className="portfolio__link-block">
            <a href="https://nickprokhorov.github.io/mesto/" className="portfolio__link" target="_blank" rel="noopener noreferrer">Одностраничное приложение</a>
            <a href="https://nickprokhorov.github.io/mesto/" className="portfolio__link-img" target="_blank" rel="noopener noreferrer">
            </a>
          </li>
        </ul>
      </nav>           
    </section>
  )
}

export default Portfolio;