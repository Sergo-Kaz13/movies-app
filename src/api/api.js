import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyOTE0YjA1YjUyOTI0M2MyZjExOWUyNzFjZWYwMDFlNyIsInN1YiI6IjY0OWVmNmFhYzlkYmY5MDBhY2JhZjRhOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RmG9qHLqALmTbYToi4_dd9Vi3jEwqwvwwEu9rUCOiD0",
  },
});

export const moviesAPI = {
  getMovies(url, sort, activePage) {
    return instance.get(
      `${url}sort_by=${sort}&vote_count.gte=40&language=en-US&page=${activePage}`
    );
  },
};

// export const moviesAPI = {
//   getMovies(url) {
//     return instance.get(url);
//   },
// };

export const moviesUpcomingAPI = {
  getMoviesUpcoming() {
    return instance.get(`movie/upcoming?language=en-US`);
  },
};

export const movieAPI = {
  getMovie(id) {
    return instance.get(`movie/${id}?language=en-US`);
  },
};

export const movieVideosAPI = {
  getMovieVideos(id) {
    return instance.get(`movie/${id}/videos`);
  },
};

export const movieSimilarAPI = {
  getMovieSimilar(id) {
    return instance.get(`movie/${id}/similar`);
  },
};

export const genresMovieListAPI = {
  getGenresMovieList() {
    return instance.get("genre/movie/list");
  },
};
