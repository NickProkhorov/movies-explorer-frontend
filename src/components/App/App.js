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
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { mainApi } from '../../utils/MainApi';
import { moviesApi } from '../../utils/MoviesApi';

import { searchMovies } from '../MoviesFinder/MoviesFinder';
import { USER_ALREADY_EXIST, INTERNAL_SERVER_ERROR, EMAIL_OR_PASS_NOTVALID, PROFILE_UPDATED_SUCESSFULLY, 
  UNAUTHORIZED_ERROR_401_CHECK, CONFLICT_ERROR_409_CHECK 
} from '../../utils/constants';

function App() {

  const [loggedIn, setLoggedIn] = useState( localStorage.getItem("loggedIn") || false );
  const [currentUser, setCurrentUser] = useState({});

  const [tooltipMessage, setTooltipMessage] = useState('');
  const [isLoginErrorField, setIsLoginErrorField] = useState(false);
  const [isRegisterErrorField, setIsRegisterErrorField] = useState(false);
  const [isEditProfileErrorField, setIsEditProfileErrorField] = useState(false);

  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  
  const [isPreload, setIsPreload] = useState(false);
  const [isShortDuration, setIsShortDuration] = useState(false);
  const [keyWord, setKeyWord] = useState('');
  const [isNthFound, setIsNthFound] = useState(false);
  const [isFailMovApiConnect, setIsFailMovApiConnect] = useState(false);

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
    }
  }, [loggedIn]);

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
          localStorage.setItem('loggedIn', true);  
        }
      })
      .then(()=>{
        tokenCheck();  
      })
      .catch((error) => {
        setIsLoginErrorField(true);
        if(error === UNAUTHORIZED_ERROR_401_CHECK) {
          setTooltipMessage(EMAIL_OR_PASS_NOTVALID);
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
          localStorage.setItem('loggedIn', true); 
        }
      })
      .then(()=> {
        tokenCheck();
      })
      .catch((error)=>{
        setIsRegisterErrorField(true);
        if(error === CONFLICT_ERROR_409_CHECK) {
          setTooltipMessage(USER_ALREADY_EXIST);
        } else {
          setTooltipMessage(INTERNAL_SERVER_ERROR);
        }
        console.log(JSON.stringify(error));
      })
  }

  function handleUpdateUser(userData){
    return mainApi.setUserInfo(userData)
    .then((res)=>{ 
      setCurrentUser(res);
      navigate("/profile");
      setIsEditProfileErrorField(true);
      setTooltipMessage(PROFILE_UPDATED_SUCESSFULLY);
    })
    .catch((error)=>{
      setIsEditProfileErrorField(true);
      if(error === CONFLICT_ERROR_409_CHECK) {
        setTooltipMessage(USER_ALREADY_EXIST);
      } else {
        setTooltipMessage(INTERNAL_SERVER_ERROR);
      }
      console.log(error);
    })
  }

  function handleGetMovies(keyWord){
    setIsPreload(true);
    setKeyWord(keyWord);
    moviesApi.getAllMovies()
    .then((res) => {
      moviesData = res;
      handleSearchMovies(keyWord);
      setIsFailMovApiConnect(false);
    })
    .catch((error)=>{
      console.log(error);
      setIsFailMovApiConnect(true);
    })
    .finally(()=>{
      setIsPreload(false);
    })
  }

  function getSavedMovies(){
    mainApi.getSavedMovies()
    .then((res) => {
      console.log(`получили savedMovies из базы`);
      const savedMovies = res;
      setSavedMovies(savedMovies);
      setIsFailMovApiConnect(false);
    })
    .catch((error)=>{
      console.log(error);
      setIsFailMovApiConnect(true);
    })
  }

  function filterMovies(movies, keyWord){
    setKeyWord(keyWord);
    foundMovies = searchMovies(movies, keyWord);
    foundMovies.length === 0 ? setIsNthFound(true) : setIsNthFound(false);
    return foundMovies;
  }

  function handleSearchMovies(keyWord){
    localStorage.setItem('keyWord', keyWord);
    localStorage.setItem('shortDuration', isShortDuration); 
    foundMovies = filterMovies(moviesData, keyWord);
    localStorage.setItem('foundMovies', JSON.stringify(foundMovies));
    setMovies(foundMovies);
  }

  function handleSearchSavedMovies(keyWord){
    foundMovies = filterMovies(savedMovies, keyWord);
    setSavedMovies(foundMovies);
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

  function handleSetShortDuration(isShortDuration){
    setIsShortDuration(isShortDuration); 
  }

  function signOut(){
    localStorage.clear();

    setCurrentUser({});
    setMovies([]);
    setSavedMovies([]);
    setLoggedIn(false);
    navigate('/signin'); 
  }

  function handleOpenBurger(){
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }
  
  function handleCloseBurger(){
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  }
  
  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <Header loggedIn={loggedIn} handleOpenBurger={handleOpenBurger}/>
        <Routes>
          <Route path="/signin" element ={loggedIn ? <Navigate to="/"/> :
            <Login 
              title="Рады видеть!" 
              name="login" 
              submitValue="Войти" 
              question="Ещё не зарегистрированы?" 
              link="Регистрация" 
              handleLogin={handleLogin}
              tooltipMessage={tooltipMessage}
              isLoginErrorField={isLoginErrorField}
            />
            }
          />
          <Route path="/signup" element ={ loggedIn ? <Navigate to="/"/> :
            <Register 
              title="Добро пожаловать!" 
              name="register" 
              labelName="Имя" 
              submitValue="Зарегистрироваться" 
              question="Уже зарегистрированы?" 
              link="Войти" 
              handleRegister={handleRegister}
              tooltipMessage={tooltipMessage}
              isRegisterErrorField={isRegisterErrorField}
            />
            }
          />
          <Route path="/" element ={<Main />}/>
          <Route path="/movies" element={
            <ProtectedRoute
              element={Movies}
              loggedIn={loggedIn}
              handleGetMovies={handleGetMovies}
              handleSearchMovies={handleSearchMovies}
              handleSetShortDuration={handleSetShortDuration}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              setMovies={setMovies}
              movies={movies}
              savedMovies={savedMovies}
              getSavedMovies={getSavedMovies}
              isPreload={isPreload}
              isNthFound={isNthFound}
              isFailMovApiConnect={isFailMovApiConnect}
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
              handleSearchSavedMovies={handleSearchSavedMovies}
              isShortDuration={isShortDuration}
              handleDeleteMovie={handleDeleteMovie}
              getSavedMovies={getSavedMovies}
            />
          }/>
          <Route 
            path="/profile" element ={
              <ProtectedRoute
                element={Profile}
                loggedIn={loggedIn}
                submitValue="Редактировать" 
                exitBtn="Выйти из аккаунта" 
                signOut={signOut}
                tooltipMessage={tooltipMessage}
                isEditProfileErrorField={isEditProfileErrorField}
              />
            }
          />
          <Route path="/profile-edit" element ={
            <EditProfile 
              heading="Измените данные профиля" 
              labelName="Имя" 
              labelEmail="Email" 
              submitValue="Сохранить" 
              link="Передумал"
              handleUpdateUser={handleUpdateUser}
              tooltipMessage={tooltipMessage}
              isEditProfileErrorField={isEditProfileErrorField}
            />
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <BurgerMenu isBurgerMenuOpen={isBurgerMenuOpen} handleCloseBurger={handleCloseBurger}/>
        <Footer /> 
        </CurrentUserContext.Provider>   
    </div>
  );
}

export default App;