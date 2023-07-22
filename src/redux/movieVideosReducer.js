import { movieVideosAPI } from "../api/api";

const GET_MOVIE_VIDEOS = "GET_MOVIE_VIDEOS";

const initialState = {
  movieVideos: [],
};

export const movieVideosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_VIDEOS:
      return {
        ...state,
        movieVideos: [...action.videos.data.results],
      };
    default:
      return state;
  }
};

export const setMovieVideos = (videos) => {
  return {
    type: GET_MOVIE_VIDEOS,
    videos,
  };
};

export const getMovieVideos = (id) => {
  return (dispatch) => {
    movieVideosAPI.getMovieVideos(id).then((response) => {
      dispatch(setMovieVideos(response));
    });
  };
};
