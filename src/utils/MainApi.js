import { MOVIES_API_IMAGE_LINK, BASE_URL } from '../utils/constants';

class API {
	constructor({baseUrl, headers}){
		this._url = baseUrl;
		this._headers = headers;
	}

	getProfile(){
		return fetch(`${this._url}users/me`, { 
			headers: this._headers
		})
		.then(this._checkResponse)
	}

	setUserInfo(data){
		return fetch(`${this._url}users/me`, { 
			method: 'PATCH',
			headers:{
				"Authorization": `Bearer ${localStorage.getItem('jwt')}`,
				"Content-Type": 'application/json'
			},
			body: JSON.stringify({
				name: data.name,
				email: data.email
			})
		})
		.then(this._checkResponse)
	}
	
	getSavedMovies(){
		return fetch(`${this._url}movies/`, { 
			headers:{
				"Authorization": `Bearer ${localStorage.getItem('jwt')}`,
				"Content-Type": 'application/json'
			},
		})
		.then(this._checkResponse)
	}

	createMovie(movie) {
		return fetch(`${this._url}movies/`, {
			method: 'POST',
			headers:{
				"Authorization": `Bearer ${localStorage.getItem('jwt')}`,
				"Content-Type": 'application/json'
			},
			body: JSON.stringify({
				country: movie.country, 
				director: movie.director, 
				duration: movie.duration, 
				year: movie.year, 
				description: movie.description, 
				image: `${MOVIES_API_IMAGE_LINK}/${movie.image.url}`,
				trailerLink: movie.trailerLink, 
				thumbnail: `${MOVIES_API_IMAGE_LINK}/${movie.image.formats.thumbnail.url}`,
				movieId: movie.id,
				nameRU: movie.nameRU, 
				nameEN: movie.nameEN 
			})
		})
		.then(this._checkResponse)
	}

	deleteMovie(id){
		return fetch(`${this._url}movies/${id}/`, {
			method: 'DELETE',
			headers:{
				"Authorization": `Bearer ${localStorage.getItem('jwt')}`,
				"Content-Type": 'application/json'
			},
		})
		.then(this._checkResponse)
	}

	_checkResponse(res){
		return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`)
	}
}

const apiConfig = {
    baseUrl: BASE_URL,
    headers:{
    	"Authorization": `Bearer ${localStorage.getItem('jwt')}`,
      "Content-Type": 'application/json'
    }   
  }

export const mainApi = new API(apiConfig);