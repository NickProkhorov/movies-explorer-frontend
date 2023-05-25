import avatar from '../../images/im.jpeg'

function AboutMe() {
    return (
        <section className="aboutme" id="student">
          <h2 className="aboutme__chapter">Студент</h2>
          <div className="aboutme__profile">
            <div className="aboutme__description">
                <h3 className="aboutme__title">Николай</h3>
                <p className="aboutme__about">Junior front-end developer, 36 лет</p>
                <p className="aboutme__story">Я живу в Санкт-Петербурге и работаю в ИТ-сфере более 10 лет. Сегодня я работаю в роли Delivery Manager в крупной компании, которая занимается продажей топлива и услуг на АЗС
                и координирую команды разработки цифровых продуктов и инструментов самообслуживания для B2B-сегмента.
                Несмотря на большой опыт в ИТ мне никогда не приходилось писать код своими руками.
                Мечтаю сделать крутой, полезный людям цифровой продукт.</p>
                <a href="https://github.com/NickProkhorov" className="aboutme__link">Github</a>
            </div>
            <img alt='profile avatar' src={avatar} className="aboutme__avatar"/>
          </div>
        </section>
    )
}

export default AboutMe;