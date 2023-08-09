import { moviesAPI } from "../api/api";

const GET_MOVIES = "GET_MOVIES";
const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";
const SET_URL_ACTIVE = "SET_URL_ACTIVE";
const SET_ACTIVE_PAGE_RESET = "SET_ACTIVE_PAGE_RESET";
const SET_SORT = "SET_SORT";

const initialState = {
  movies: [],
  pages: null,
  activePage: 1,
  urlActive:
    "discover/movie?vote_count.gte=40&include_adult=true&language=en-US",
  sort: "&sort_by=popularity.desc",
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
    case SET_SORT:
      return {
        ...state,
        sort: action.typeSort,
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

export const setTypeSort = (typeSort) => {
  return {
    type: SET_SORT,
    typeSort,
  };
};

export const getMovies = (urlData) => {
  return (dispatch) => {
    moviesAPI.getMovies(urlData).then((response) => {
      dispatch(setMovies(response));
      dispatch(setActivePage(urlData.activePage));
    });
  };
};

export const updateUrl = (urlActive) => {
  return (dispatch) => {
    dispatch(setUrlActive(urlActive));
    dispatch(setActivePageReset());
  };
};

export const typeSort = (typeSort) => {
  return (dispatch) => {
    dispatch(setTypeSort(typeSort));
  };
};
