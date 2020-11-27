const apiKey = 'e3ad869c4c89bde44b136a1374e5efeb';

class MovieService {
    async getMovieList(query, value) {
        const response = await fetch(`https://api.themoviedb.org/3/search/${value}?api_key=${apiKey}&query=${query}&page=1`)
        return response.json();
    }
    async getSectionMovieList(type){
        const response = await fetch(`https://api.themoviedb.org/3${type}?api_key=${apiKey}&language=en-US&page=1`)
        return response.json();
    }
}
export const movieService = new MovieService();