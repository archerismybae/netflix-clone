const API_KEY = "6887b40cd682b63f8a6cc46a8e5ed8d2";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchAnime: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchAnimatedMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`
}

export default requests;