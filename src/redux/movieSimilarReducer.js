import { movieSimilarAPI } from "../api/api";

const GET_MOVIE_SIMILAR = "GET_MOVIE_SIMILAR";

const initialState = {
  movieSimilar: [],
};

export const movieSimilarReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_SIMILAR:
      return {
        ...state,
        movieSimilar: [...action.movieSimilar.data.results],
      };

    default:
      return state;
  }
};

export const setMovieSimilar = (movieSimilar) => {
  return {
    type: GET_MOVIE_SIMILAR,
    movieSimilar,
  };
};

export const getMovieSimilar = (id) => {
  return (dispatch) => {
    movieSimilarAPI.getMovieSimilar(id).then((response) => {
      dispatch(setMovieSimilar(response));
    });
  };
};
