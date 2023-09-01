import { getMoviesUpcoming } from "../../redux/sliderReducer";
import { connect } from "react-redux";
import { useEffect } from "react";
import { register } from "swiper/element/bundle";

import style from "./SliderSlick.module.css";
import "./SliderSlick.css";

import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

register();

const SliderSlick = (props) => {
  const { getMoviesUpcoming, movies } = props;

  const slides =
    movies &&
    movies.map(({ id, poster_path, title }) => {
      return (
        <SwiperSlide key={id} className={style.slide}>
          <Link to={`/${id}`} className={style.swiperItem}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              style={{ width: "100%" }}
            />
            <h3 className={style.title}>{title}</h3>
          </Link>
        </SwiperSlide>
      );
    });

  useEffect(() => {
    getMoviesUpcoming();
  }, [getMoviesUpcoming]);

  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
        },
        540: {
          slidesPerView: 3,
        },
        640: {
          slidesPerView: 4,
        },
        768: {
          slidesPerView: 6,
        },
        1024: {
          slidesPerView: 8,
        },
      }}
      navigation
      // slidesPerView={5}
    >
      {slides}
    </Swiper>
  );
};

const mapStateToProps = (state) => ({
  movies: state.sliderReducer.movies,
});

export default connect(mapStateToProps, {
  getMoviesUpcoming: getMoviesUpcoming,
})(SliderSlick);
