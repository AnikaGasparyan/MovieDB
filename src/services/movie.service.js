const apiKey = 'e3ad869c4c89bde44b136a1374e5efeb';

class MovieService {
    async getSearchResults(query, value, page) {
        const response = await fetch(`https://api.themoviedb.org/3/search/${value}?api_key=${apiKey}&query=${query}&page=${page}`);
        return response.json();
    }
    async getSectionMovieList(type){
        const response = await fetch(`https://api.themoviedb.org/3${type}?api_key=${apiKey}&language=en-US&page=1`)
        return response.json();
    }
    async getTrendingList(mediaType) {
        const response = await fetch(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=${apiKey}`)
        return response.json();
    }
    async getVideo(id) {
        const response = await fetch (`www.youtube.com/embed/${id}`)
        return response.json();
    }
}
export const movieService = new MovieService();