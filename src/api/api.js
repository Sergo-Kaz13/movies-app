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
  getMovies(urlData) {
    return instance.get(
      `${urlData.urlActive}${urlData.sort}&page=${urlData.activePage}`
    );
  },
};

export const moviesUpcomingAPI = {
  getMoviesUpcoming() {
    return instance.get(`movie/upcoming?vote_count.gte=30&language=en-US`);
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

// export const authenticationAPI = {
//   getAuthentication(token) {
//     window.location.replace(
//       `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/`
//     );
//   },
// };

export const tokenAPI = {
  getToken() {
    return instance.get("authentication/token/new");
  },
};
