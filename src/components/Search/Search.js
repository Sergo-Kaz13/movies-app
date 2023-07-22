import React from "react";
import style from "./Search.module.css";

const Search = () => {
  return (
    <div className={style.search}>
      <form action="" autoComplete="off">
        <input id="search" name="search" type="text" placeholder="Search..." />
        <input id="search_submit" value="Rechercher" type="submit" />
      </form>
    </div>
  );
};

export default Search;
