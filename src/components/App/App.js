import '../../index.css';
import * as auth from '../../utils/auth';

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
import InfoToolTip from '../InfoToolTip/InfoToolTip';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';

import { searchMovies, filterDurationMovies } from '../MoviesFinder/MoviesFinder';
import { USER_ALREADY_EXIST, INTERNAL_SERVER_ERROR, EMAIL_OR_PASS_NOTVALID } from '../../utils/constants';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const [tooltipMessage, setTooltipMessage] = useState('');
  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
 
  const [errorMsg, setErrorMsg] = useState({});

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);

  const [isPreload, setIsPreload] = useState(false);
  const [isShortDuration, setIsShortDuration] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [isNthFound, setIsNthFound] = useState(false);

  let moviesData = new Array();
  let foundMovies = new Array();
  
  const navigate = useNavigate();

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if(jwt){
      auth.checkToken(jwt) 
      .then((res)=>{ 
        setCurrentUser(res);
        setLoggedIn(true);
      })
      .catch((error)=>{
        console.log(error);
      })
      mainApi.getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }, [loggedIn]);

  useEffect(() => {

    localStorage.setItem('foundMovies', JSON.stringify(movies));
    localStorage.setItem('shortDuration', isShortDuration);
    localStorage.setItem('keyWord', keyWord);
    setIsPreload(false);

  }, [movies]);

  useEffect(() => {
    localStorage.setItem('shortDuration', isShortDuration);
   
    if (isShortDuration && loggedIn) {
      setSavedMovies(filterDurationMovies (savedMovies));
      setMovies(filterDurationMovies (movies));
    } else if (!isShortDuration && loggedIn) { 
      mainApi.getSavedMovies()
      .then((res) => {
        setSavedMovies(res);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }, [isShortDuration]);


  function tokenCheck() {
    const jwt = localStorage.getItem('jwt');
    if(jwt){
      auth.checkToken(jwt) 
      .then((res)=>{ 
        setCurrentUser(res);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  }

  function handleLogin(userData) { 
    return auth.login(userData)
      .then((res) => {
        if (res.token) {
          localStorage.setItem('jwt', res.token);  
        }
      })
      .then(()=>{
        tokenCheck();  
      })
      .catch((error) => {
        setIsInfoTooltipOpen(true);
        if(error === "Ошибка: 401 Unauthorized") {
          setTooltipMessage(EMAIL_OR_PASS_NOTVALID);
          setTimeout(setIsInfoTooltipOpen(false), 3000 );
        } else {
          setTooltipMessage(INTERNAL_SERVER_ERROR);
        }
        console.log(`Ошибка при авторизации: ${error}`);
      })
  }

  function handleRegister(userData){
    return auth.createUser(userData)
      .then(()=> {
        return auth.login(userData);
      })
      .then((res)=> {
        if (res.token) {
          localStorage.setItem('jwt', res.token);  
        }
      })
      .then(()=> {
        tokenCheck();
      })
      .catch((error)=>{
        setIsInfoTooltipOpen(true);
        if(error === "Ошибка: 409 Conflict") {
          setTooltipMessage(USER_ALREADY_EXIST);
          setTimeout(setIsInfoTooltipOpen(false), 3000 );
        } else {
          setTooltipMessage(INTERNAL_SERVER_ERROR);
          // setTimeout(setIsInfoTooltipOpen(false), 3000 );
        }
        console.log(JSON.stringify(error));
      })
  }

  function handleUpdateUser(userData){
    return mainApi.setUserInfo(userData)
    .then((res)=>{ 
      setCurrentUser(res);
      navigate("/profile");
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  function handleGetMovies(keyWord){
    setIsPreload(true);
    setKeyWord(keyWord);
    
    return moviesApi.getAllMovies()

    .then((res) => {
      moviesData = res;
      if (isShortDuration) {
        foundMovies = searchMovies(moviesData, keyWord);
        foundMovies = filterDurationMovies (foundMovies);
      } else {
        foundMovies = searchMovies(moviesData, keyWord);
      }
      foundMovies.length === 0 ? setIsNthFound(true) : setIsNthFound(false);
      setMovies(foundMovies); 
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{
      setIsPreload(false);
    })
  }

  function handleSaveMovie(movie){
    return mainApi.createMovie(movie)
    .then((res)=>{
      setSavedMovies([res,...savedMovies]);    
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  function handleDeleteMovie(movie){
    return mainApi.deleteMovie(movie._id)
    .then(()=>{
      setSavedMovies((savedMovies) => savedMovies.filter((i) => i._id !== movie._id ));  
    })
    .catch((error)=>{
      console.log(error);
    })
  }

  function handleSetShortDuration(){
    setIsShortDuration(!isShortDuration); 
  }

  function signOut(){
    localStorage.removeItem('jwt');
    localStorage.removeItem('foundMovies');
    localStorage.removeItem('shortDuration');
    localStorage.removeItem('keyWord');

    navigate('/');
    setLoggedIn(false);  
  }

  function handleOpenBurger(){
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }
  
  function handleCloseBurger(){
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }

  function closeAllPopups(){
    setIsInfoTooltipOpen(false);
    setIsBurgerMenuOpen(false);
  }
  
  return (
    <div>
        <Header loggedIn={loggedIn} handleOpenBurger={handleOpenBurger}/>
        <Routes>
          <Route path="/signin" element ={
            <Login 
              title="Рады видеть!" 
              name="login" 
              submitValue="Войти" 
              question="Ещё не зарегистрированы?" 
              link="Регистрация" 
              handleLogin={handleLogin}
              tooltipMessage={tooltipMessage}
              isInfoTooltipOpen={isInfoTooltipOpen}
            />
            }
          />
          <Route path="/signup" element ={
            <Register 
              title="Добро пожаловать!" 
              name="register" 
              labelName="Имя" 
              submitValue="Зарегистрироваться" 
              question="Уже зарегистрированы?" 
              link="Войти" 
              handleRegister={handleRegister}
              tooltipMessage={tooltipMessage}
              isInfoTooltipOpen={isInfoTooltipOpen}
            />
            }
          />
          <Route path="/" element ={<Main />}/>
          <Route path="/movies" element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              handleGetMovies={handleGetMovies}
              handleSetShortDuration={handleSetShortDuration}
              handleSaveMovie={handleSaveMovie}
              movies={movies}
              savedMovies={savedMovies}
              isPreload={isPreload}
              isNthFound={isNthFound}
              isShortDuration={isShortDuration}
            />
          }/>
          <Route path="/saved-movies" element ={
            <ProtectedRoute
              element={SavedMovies}
              movies={savedMovies}
              savedMovies={savedMovies}
              loggedIn={loggedIn}
              handleSetShortDuration={handleSetShortDuration}
              isShortDuration={isShortDuration}
              handleDeleteMovie={handleDeleteMovie}
            />
          }/>
          <Route 
            path="/profile" element ={
              <CurrentUserContext.Provider value={currentUser}>
                <ProtectedRoute
                  element={Profile}
                  loggedIn={loggedIn}
                  submitValue="Редактировать" 
                  exitBtn="Выйти из аккаунта" 
                  signOut={signOut}
                />  
              </CurrentUserContext.Provider>
            }
          />
          <Route path="/profile-edit" element ={
            <CurrentUserContext.Provider value={currentUser}>
              <EditProfile 
                heading="Измените данные профиля" 
                labelName="Имя" 
                labelEmail="Email" 
                submitValue="Сохранить" 
                link="Передумал"
                handleUpdateUser={handleUpdateUser}
              />
            </CurrentUserContext.Provider>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} handleCloseBurger={handleCloseBurger}/>
        <Footer />  
    </div>
  );
}

export default App;