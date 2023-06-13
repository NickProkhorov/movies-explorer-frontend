export const BASE_URL = 'http://localhost:3000/';

export const createUser = (userdata) => {
	return fetch (`${BASE_URL}signup`, { 
		method: 'POST',
		headers: {
				"Content-Type": "application/json"
		},
		body: JSON.stringify({
				name: userdata.name,
				password: userdata.password,
				email: userdata.email
		})
	})
	.then(checkResponse)
}

export const login = (userdata) => {
	return fetch (`${BASE_URL}signin`, { 
		method: 'POST',
		headers: {
				"Content-Type": "application/json"
		},
		body: JSON.stringify({
				password: userdata.password,
				email: userdata.email
		})
	})
	.then(checkResponse)
}

export const checkToken = (jwt) => {
	return fetch (`${BASE_URL}users/me`, {
		method: 'GET',
		headers: {
				"Content-Type": "application/json",
				"Authorization" : `Bearer ${jwt}`
		},
	})
	.then(checkResponse)
}

const checkResponse = (res) =>{
	return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status} ${res.statusText}`);
}

   
