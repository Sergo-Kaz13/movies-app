import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getGenres } from "../../redux/genresReducer";
import { updateUrl, setActivePageReset } from "../../redux/moviesReducer";
import style from "./Genres.module.css";
import "./Genres.css";

const Genre = (props) => {
  function updateDataUrl(id) {
    updateUrl(`discover/movie?with_genres=${id}`);
    setActivePageReset();
  }

  const { getGenres, genres, updateUrl } = props;

  const genresList =
    genres &&
    genres.map(({ id, name }) => (
      <li key={id} className={style.genresItem}>
        <NavLink
          to={`/genre/${name}/${id}`}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
          onClick={() => updateDataUrl(id)}
        >
          {name}
        </NavLink>
      </li>
    ));

  useEffect(() => {
    getGenres();
  }, [getGenres]);

  return (
    <div className={style.genres}>
      <ul className={style.genresItems}>{genresList}</ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  genres: state.genresReducer.genres,
});

export default connect(mapStateToProps, {
  getGenres,
  updateUrl,
  setActivePageReset,
})(Genre);
