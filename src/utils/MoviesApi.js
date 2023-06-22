import { BEST_FILMS_API } from '../utils/constants';

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
	baseUrl: BEST_FILMS_API,
	headers:{
		"Content-Type": 'application/json'
	}   
}

export const moviesApi = new API(apiConfig);