export function searchMovies(allMovies, keyWord){
    
    const searchResult = allMovies.filter((item) => {
        return item.nameRU.toLowerCase().includes(keyWord.toLowerCase())
        || item.nameEN.toLowerCase().includes(keyWord.toLowerCase())
        || item.director.toLowerCase().includes(keyWord.toLowerCase())
    });

    return searchResult;
}

export function filterDurationMovies(movies){
    
    const searchResult = movies.filter((item) => {
        return item.duration < 40;
    });

    return searchResult;
}