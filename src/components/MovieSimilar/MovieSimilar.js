import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "swiper/element";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { getMovieSimilar } from "../../redux/movieSimilarReducer";

import style from "./MovieSimilar.module.css";
import "swiper/css";
import "swiper/css/navigation";

register();

const MovieSimilar = (props) => {
  const { getMovieSimilar, movieSimilar, id } = props;

  const movieSimilarSlide =
    movieSimilar &&
    movieSimilar.map(
      ({ id, poster_path, title, vote_average, release_date }) => {
        if (!poster_path || vote_average < 3.5) {
          return <div key={id}></div>;
        }

        release_date = release_date.slice(0, 4);
        vote_average = vote_average.toFixed(1);

        return (
          <SwiperSlide key={id} className={style.slide}>
            <Link to={`/${id}`} className={style.movieSimilarItem}>
              <img
                className={style.movieSimilarImage}
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                style={{ width: "100%" }}
              />
              <span className={style.movieSimilarReleaseData}>
                {release_date}
              </span>
              <h3 className={style.movieSimilarTitle}>{title}</h3>
              <span
                className={`${style.movieSimilarVoteAverage} ${
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
          </SwiperSlide>
        );
      }
    );

  useEffect(() => {
    getMovieSimilar(id);
  }, [getMovieSimilar, id]);

  return (
    <div className={style.movieSimilarBlock}>
      <Swiper
        modules={[Navigation]}
        navigation
        slidesPerView={5}
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          640: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        spaceBetween={30}
      >
        {movieSimilarSlide}
      </Swiper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  movieSimilar: state.movieSimilarReducer.movieSimilar,
});

export default connect(mapStateToProps, { getMovieSimilar })(MovieSimilar);
