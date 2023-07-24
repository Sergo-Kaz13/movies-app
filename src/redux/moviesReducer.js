import { moviesAPI } from "../api/api";

const GET_MOVIES = "GET_MOVIES";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
const SET_URL_ACTIVE = "SET_URL_ACTIVE";
const SET_ACTIVE_PAGE_RESET = "SET_ACTIVE_PAGE_RESET";

const initialState = {
  movies: [],
  pages: null,
  activePage: 1,
  urlActive: "movie/popular?",
};

export const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [...action.movies.data.results],
        pages: action.movies.data.total_pages,
      };
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activePage: action.activePage,
      };
    case SET_URL_ACTIVE:
      return {
        ...state,
        urlActive: action.urlActive,
      };
    case SET_ACTIVE_PAGE_RESET:
      return {
        ...state,
        activePage: 1,
      };
    default:
      return state;
  }
};

export const setMovies = (movies) => {
  return {
    type: GET_MOVIES,
    movies,
  };
};

export const setActivePage = (activePage) => {
  return {
    type: SET_ACTIVE_PAGE,
    activePage,
  };
};

export const setUrlActive = (urlActive) => {
  return {
    type: SET_URL_ACTIVE,
    urlActive,
  };
};

export const setActivePageReset = () => {
  return {
    type: SET_ACTIVE_PAGE_RESET,
  };
};

export const getMovies = (url, activePage) => {
  return (dispatch) => {
    moviesAPI.getMovies(url, activePage).then((response) => {
      dispatch(setMovies(response));
      dispatch(setActivePage(activePage));
    });
  };
};

export const updateUrl = (urlActive) => {
  return (dispatch) => {
    dispatch(setUrlActive(urlActive));
    dispatch(setActivePageReset());
  };
};
