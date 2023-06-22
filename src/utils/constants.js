
const HELLO_MSG = "Привет, ";

const BASE_URL = 'https://api.mexp.nomoredomains.monster/';
const BEST_FILMS_API = 'https://api.nomoreparties.co/beatfilm-movies';

const PROFILE_UPDATED_SUCESSFULLY = "Ваш профайл успешно обновлен!";

const USER_ALREADY_EXIST = "Пользователь с такими данными уже существует";
const EMAIL_OR_PASS_NOTVALID = "Неправильные почта или пароль";
const INTERNAL_SERVER_ERROR = "Проблемы на сервере. Попробуйте еще раз немного попозже";
const NTHG_FOUND_MSG = "Ничего не найдено";
const GET_BF_ERROR = "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
const EMAIL_VALIDATION_ERROR_MSG = "Email должен обязательно содержать: @ и домен: .ru, .com или любой другой";

const UNAUTHORIZED_ERROR_401_CHECK = "Ошибка: 401 Unauthorized";
const CONFLICT_ERROR_409_CHECK = "Ошибка: 409 Conflict";

const MIN_LENGTH_VALUE = 2;
const MIN_PASS_LENGTH_VALUE = 4;
const MAX_LENGTH_VALUE = 30;
const REGEX_NAME_PATTERN = '^[а-яА-ЯёЁa-zA-Z0-9-]+$';
const REGEX_EMAIL_PATTERN = '^[a-z0-9._%+-]+@[a-z0-9-.]+\\.[a-z]{2,4}$';
const START_SHOW_MOVIES_0 = 0;
const START_SHOW_MOVIES_12 = 12;
const START_SHOW_MOVIES_8 = 8;
const START_SHOW_MOVIES_7 = 7;
const START_SHOW_MOVIES_5 = 5;
const ADD_SHOW_MOVIES_0 = 0;
const ADD_SHOW_MOVIES_2 = 2;
const ADD_SHOW_MOVIES_3 = 3;
const ADD_SHOW_MOVIES_7 = 7;
const SCREENWIDTH_1280 = 1280;
const SCREENWIDTH_889 = 889;
const SCREENWIDTH_769 = 769;
const SCREENWIDTH_768 = 768;
const SCREENWIDTH_493 = 493;
const SCREENWIDTH_492 = 492;

const SHORT_DURATION_VALUE = 40;
const ONE_HOUR_VALUE = 60;

const MOVIES_API_IMAGE_LINK = "https://api.nomoreparties.co";

export {
	BASE_URL, BEST_FILMS_API, 
	MOVIES_API_IMAGE_LINK, 
	NTHG_FOUND_MSG, 
	GET_BF_ERROR, 
	USER_ALREADY_EXIST, 
	INTERNAL_SERVER_ERROR, 
	EMAIL_OR_PASS_NOTVALID, 
	PROFILE_UPDATED_SUCESSFULLY,
	HELLO_MSG, EMAIL_VALIDATION_ERROR_MSG,
	START_SHOW_MOVIES_0, START_SHOW_MOVIES_12, START_SHOW_MOVIES_8, START_SHOW_MOVIES_7, START_SHOW_MOVIES_5,
	ADD_SHOW_MOVIES_0, ADD_SHOW_MOVIES_2, ADD_SHOW_MOVIES_3, ADD_SHOW_MOVIES_7, SHORT_DURATION_VALUE, ONE_HOUR_VALUE,
	SCREENWIDTH_1280, SCREENWIDTH_889, SCREENWIDTH_769, SCREENWIDTH_768, SCREENWIDTH_493, SCREENWIDTH_492,
	UNAUTHORIZED_ERROR_401_CHECK, CONFLICT_ERROR_409_CHECK, 
	MIN_LENGTH_VALUE, MAX_LENGTH_VALUE, MIN_PASS_LENGTH_VALUE, REGEX_NAME_PATTERN, REGEX_EMAIL_PATTERN
};

