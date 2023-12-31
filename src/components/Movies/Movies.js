import React, { useEffect } from "react";
import PaginatedItems from "../PaginatedItems/PaginatedItems";
import { connect } from "react-redux";
import { getMovies, setActivePage } from "../../redux/moviesReducer";
import style from "./Movies.module.css";
import { Link } from "react-router-dom";

const Movies = (props) => {
  const {
    getMovies,
    setActivePage,
    movies,
    pages,
    activePage,
    sort,
    urlActive,
  } = props;

  let countPages = null;
  if (pages > 199) {
    countPages = 199;
  } else {
    countPages = pages;
  }

  const itemsMovies =
    movies &&
    movies.map(({ id, poster_path, release_date, vote_average, title }) => {
      release_date = release_date.slice(0, 4);
      vote_average = vote_average.toFixed(1);

      return (
        <Link
          to={`/${id}`}
          id={id}
          className={style.itemMovie}
          key={id}
          style={{
            backgroundColor: `rgb(225, 179, 63)`,
            background: `url(https://image.tmdb.org/t/p/w500${poster_path}) center / cover no-repeat`,
          }}
        >
          {!poster_path && <span className={style.moviesTitle}>{title}</span>}
          <span className={style.releaseData}>{release_date}</span>
          <span
            className={`${style.voteAverage} ${
              vote_average > 6.9
                ? style.voteAverageGreen
                : vote_average < 5
                ? style.voteAverageRed
                : ""
            }`}
          >
            {vote_average}
          </span>
        </Link>
      );
    });

  useEffect(() => {
    getMovies({ urlActive, sort, activePage });
  }, [getMovies, activePage, sort, urlActive]);

  return (
    <div className={style.movies_wrapper}>
      <div className={style.movies_block}>{itemsMovies}</div>
      <PaginatedItems
        itemsPerPage={1}
        items={countPages}
        setCurrentPage={setActivePage}
        activePage={activePage}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.moviesReducer.movies,
  pages: state.moviesReducer.pages,
  activePage: state.moviesReducer.activePage,
  urlActive: state.moviesReducer.urlActive,
  sort: state.moviesReducer.sort,
});

export default connect(mapStateToProps, { getMovies, setActivePage })(Movies);
