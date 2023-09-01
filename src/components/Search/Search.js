import { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { updateUrl } from "../../redux/moviesReducer";
import style from "./Search.module.css";

const Search = (props) => {
  const { updateUrl } = props;
  const [searchValue, setSearchValue] = useState("");

  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  function logSearchValue() {
    updateUrl(
      `search/movie?query=${searchValue}&include_adult=true&language=en-US`
    );
  }

  return (
    <div className={style.search}>
      <div className={style.searchBlock}>
        <input
          className={style.fieldSearch}
          type="text"
          value={searchValue}
          onChange={handleChange}
        />
        <Link
          className={style.btnSearch}
          to={`/search/${searchValue}`}
          onClick={logSearchValue}
        >
          🔍
        </Link>
      </div>

      {/* <form action="" autoComplete="off">
        <input
          value={searchValue}
          onChange={handleChange}
          id="search"
          name="search"
          type="text"
          placeholder="Search..."
        />
        <input
          onClick={logSearchValue}
          id="search_submit"
          value="Rechercher"
          type="submit"
        />
      </form> */}
    </div>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { updateUrl })(Search);
