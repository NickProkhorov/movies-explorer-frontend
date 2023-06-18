export function searchMovies(movies, keyWord){
    
	const searchResult = movies.filter((item) => {
		return item.nameRU.toLowerCase().includes(keyWord.toLowerCase())
		|| item.nameEN.toLowerCase().includes(keyWord.toLowerCase())
	});

  return searchResult;
}

export function filterDurationMovies(movies){
    
	const searchResult = movies.filter((item) => {
			return item.duration < 40;
	});

	return searchResult;
}