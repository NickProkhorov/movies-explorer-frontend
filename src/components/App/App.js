import '../../index.css';

import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import PageNotFound from '../PageNotFound/PageNotFound';
import EditProfile from '../EditProfile/EditProfile';
import BurgerMenu from '../BurgerMenu/BurgerMenu'; 

import { Route, Routes } from 'react-router-dom';


function App() {
  
  return (
        <div>
          <Header />
          <Routes>
            <Route path="/signin" element ={<Login title="Рады видеть!" name="login" submitValue="Войти" question="Ещё не зарегистрированы?" link="Регистрация" />}/>
            <Route path="/signup" element ={<Register title="Добро пожаловать!" name="register" labelName="Имя" submitValue="Зарегистрироваться" question="Уже зарегистрированы?" link="Войти"/>}/>
            <Route path="/" element ={<Main />}/>
            <Route path="/movies" element ={<Movies />}/>
            <Route path="/saved-movies" element ={<SavedMovies />}/>
            <Route path="/profile" element ={<Profile title="Привет, Николай!" submitValue="Редактировать" exitBtn="Выйти из аккаунта" username="Николай" useremail="nickky87@ya.ru"/>}/>
            <Route path="/profile-edit" element ={<EditProfile heading="Измените данные профиля" labelName="Имя" labelEmail="Email" submitValue="Сохранить" link="Передумал"/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <BurgerMenu />
          <Footer />
        </div>
  );
}

export default App;
