
class API {
	constructor({baseUrl, headers}){
		this._url = baseUrl;
		this._headers = headers;
	}

	getAllMovies(){
		return fetch(`${this._url}`, {
			headers: this._headers,
		})
		.then(this._checkResponse)
  }

	_checkResponse(res){
		return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`)
  }
}

const apiConfig = {
	baseUrl:'https://api.nomoreparties.co/beatfilm-movies', // Записать в константу адрес сервера
	headers:{
		"Content-Type": 'application/json'
	}   
}

export const moviesApi = new API(apiConfig);