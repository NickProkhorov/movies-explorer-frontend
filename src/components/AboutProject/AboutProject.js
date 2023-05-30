function AboutProject() {
    return (
        <section className="project" id="aboutproject">
          <article className="project__about">
          <h2 className="project__title">О проекте</h2>
          <div className="project__description">    
            <div>
              <p className="project__stages">Дипломный проект включал 5 этапов</p>
              <p className="project__desc-stage">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div>
              <p className="project__stages">На выполнение диплома ушло 5 недель</p>
              <p className="project__desc-stage">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
          </div>
            <div className="project__timeline">
              <div className="project__one-week">
                <p>1 неделя</p>
              </div>
              <div className="project__four-week">
                <p>4 недели</p>
              </div>
              <div className="project__backend">
                <p>Back-end</p>
              </div>
              <div className="project__frontend">
                <p>Front-end</p>
              </div>
            </div>

          </article>
        </section>
    )
}

export default AboutProject;