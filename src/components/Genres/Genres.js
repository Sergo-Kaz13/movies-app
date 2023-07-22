import React from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getGenres } from "../../redux/genresReducer";
import style from "./Genres.module.css";

const Genre = (props) => {
  const { getGenres, genres } = props;

  const genresList =
    genres &&
    genres.map(({ id, name }) => (
      <li key={id} className={style.genresItem}>
        <Link to={`/genre/${id}`} className={style.genresItemLink}>
          {name}
        </Link>
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

export default connect(mapStateToProps, { getGenres })(Genre);
