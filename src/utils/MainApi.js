import { MOVIES_API_IMAGE_LINK } from '../utils/constants';

class API {
	constructor({baseUrl, headers}){
		this._url = baseUrl;
		this._headers = headers;
	}

	// getAllPageData(){
	//     return Promise.all([this.getProfile(), this.getAllMovies()])
	// }
 //запросить данные пользователя
	getProfile(){

		return fetch(`${this._url}users/me`, { //getCurrentUser
			headers: this._headers
		})
		.then(this._checkResponse)
	}

	setUserInfo(data){
		return fetch(`${this._url}users/me`, { //updateUserProfile
			method: 'PATCH',
			headers: this._headers,
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
		console.log(movie.image);
		return fetch(`${this._url}movies/`, {
			method: 'POST',
			headers: this._headers,
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
				headers: this._headers
			})
			.then(this._checkResponse)
	}

	changeSaveMovieStatus(id, isLiked){ //changeLikeCardStatus
			return isLiked ? this._addLike(id) : this._deleteLike(id)
	}

	_addLike(id){ // change on saved
			return fetch(`${this._url}cards/${id}/likes`, {
				method: 'PUT',
				headers: this._headers
			})
			.then(this._checkResponse)
	}

	_checkResponse(res){
			return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`)
	}
}

const apiConfig = {
    baseUrl:'http://localhost:3000/',
    headers:{
    	"Authorization": `Bearer ${localStorage.getItem('jwt')}`,
        "Content-Type": 'application/json'
    }   
  }

export const mainApi = new API(apiConfig);