import React from "react";
import { getMovieVideos } from "../../redux/movieVideosReducer";
import { connect } from "react-redux";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { register } from "swiper/element/bundle";
import "swiper/css";
import "swiper/css/navigation";

register();

const MovieVideos = (props) => {
  const { getMovieVideos, id, movieVideos } = props;

  const movieVideosList =
    movieVideos &&
    movieVideos.map(({ name, key, id }) => {
      return (
        <SwiperSlide key={id}>
          <iframe
            allow="fullscreen"
            loading="lazy"
            title={name}
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${key}`}
          ></iframe>
        </SwiperSlide>
      );
    });

  useEffect(() => {
    getMovieVideos(id);
  }, [getMovieVideos, id]);

  return (
    <Swiper
      slidesPerView={1}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper"
    >
      {movieVideosList}
    </Swiper>
  );
};

const mapStateToProps = (state) => ({
  movieVideos: state.movieVideosReducer.movieVideos,
});

export default connect(mapStateToProps, { getMovieVideos })(MovieVideos);
