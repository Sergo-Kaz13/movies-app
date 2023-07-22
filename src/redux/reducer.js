import { combineReducers } from "redux";
import { moviesReducer } from "./moviesReducer";
import { sliderReducer } from "./sliderReducer";
import { movieReducer } from "./movieReducer";
import { movieVideosReducer } from "./movieVideosReducer";
import { movieSimilarReducer } from "./movieSimilarReducer";
import { genresReducer } from "./genresReducer";

export const rootReducer = combineReducers({
  moviesReducer: moviesReducer,
  sliderReducer: sliderReducer,
  movieReducer: movieReducer,
  movieVideosReducer: movieVideosReducer,
  movieSimilarReducer: movieSimilarReducer,
  genresReducer: genresReducer,
});
