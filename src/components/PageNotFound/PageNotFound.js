import { Link } from 'react-router-dom';

function PageNotFound () {

  return (

    <div className="not-found">
      <h3 className="not-found__title">
       <span>404</span> 
      </h3>
      <p className="not-found__msg">Страница не найдена</p>
      <Link className="not-found__link" to="/">Назад</Link>
    </div>

  )
}

export default PageNotFound;