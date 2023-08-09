import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovie } from "../../redux/movieReducer";
import MovieSimilar from "../MovieSimilar/MovieSimilar";
import MovieVideos from "../MovieVideos/MovieVideos";
import style from "./Movie.module.css";
import btnFollow from "../../assets/images/like-thumbs-up-hand-social-media_icon-icons.com_61429.png";
import btnUnfollow from "../../assets/images/thumbs-down-hand-social-media-dislike_icon-icons.com_61424.png";

const Movie = (props) => {
  const { getMovie, movie } = props;

  const {
    title,
    genres,
    id: idMovie,
    poster_path,
    overview,
    release_date,
    runtime,
    status,
    vote_average,
    vote_count,
  } = movie;

  const vote_averageFix = vote_average && vote_average.toFixed(1);

  const follow = Math.round((vote_count / 10) * vote_averageFix) || 0;
  const unFollow = vote_count - follow || 0;

  const genresAll =
    genres &&
    genres.map(({ id, name }) => (
      <li key={id}>
        <span id={id}>{name}</span>
      </li>
    ));

  const movieInfo = movie && (
    <>
      <div className={style.movieBlockInfo}>
        <div className={style.movieDetailedInfo}>
          <div className={style.movieImage}>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
          </div>
          <div className={style.movieData}>
            <ul className={style.genres}>{genresAll}</ul>
            <ul className={style.movieDataList}>
              <li>
                <span>RELEASE DATE:</span> {release_date}
              </li>
              <li>
                <span>RUNTIME:</span> {runtime} min
              </li>
              <li>
                <span>STATUS:</span> {status}
              </li>
              <li>
                <span>RATING:</span> {vote_averageFix}
              </li>
            </ul>
            <div className={style.ratingScale}>
              <span
                className={style.scaleFollow}
                style={{ width: `${vote_averageFix * 10}%` }}
              ></span>
              <div className={style.blockFollowUnfollow}>
                <span className={style.countFollow}>{follow}</span>
                <button className={style.btnFollow}>
                  <img src={btnFollow} alt="" />
                </button>
                <button className={style.btnUnfollow}>
                  <img src={btnUnfollow} alt="" />
                </button>
                <span className={style.countUnfollow}>{unFollow}</span>
              </div>
            </div>
          </div>
        </div>
        <div className={style.movieInfo}>
          <h3 className={style.movieTitle}>{title}</h3>
          <div className={style.movieOverview}>{overview}</div>
          <div className={style.movieSlider}>
            {idMovie && <MovieVideos id={idMovie} />}
          </div>
        </div>
      </div>
      {idMovie && <MovieSimilar id={idMovie} />}
    </>
  );

  const { id } = useParams();

  useEffect(() => {
    getMovie(id);
  }, [getMovie, id]);

  return <div className={style.movieBlock}>{movieInfo}</div>;
};

const mapStateToProps = (state) => ({
  movie: state.movieReducer.movie,
});

export default connect(mapStateToProps, { getMovie })(Movie);
