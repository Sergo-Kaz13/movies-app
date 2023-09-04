import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { typeSort } from "../../redux/moviesReducer";
import style from "./Sort.module.css";
import "./Sort.css";

const options = [
  { value: "&sort_by=popularity.asc", label: "popularity ⬆" },
  { value: "&sort_by=popularity.desc", label: "popularity ⬇" },
  { value: "&sort_by=revenue.asc", label: "revenue ⬆" },
  { value: "&sort_by=revenue.desc", label: "revenue ⬇" },
  // { value: "&sort_by=primary_release.asc", label: "primary_release ⬆" },
  // { value: "&sort_by=primary_release.desc", label: "primary_release ⬇" },
  { value: "&sort_by=vote_average.asc", label: "vote average ⬆" },
  { value: "&sort_by=vote_average.desc", label: "vote average ⬇" },
  { value: "&sort_by=vote_count.asc", label: "vote count ⬆" },
  { value: "&sort_by=vote_count.desc", label: "vote count ⬇" },
];

const Sort = (props) => {
  const { typeSort } = props;

  const [selectedOption, setSelectedOption] = useState({
    value: "&sort_by=popularity.desc",
  });

  useEffect(() => {
    typeSort(selectedOption.value);
  }, [typeSort, selectedOption]);

  return (
    <Select
      // className="sort"
      className={[style["sort-my"], "sort"].join(" ")}
      defaultValue={selectedOption.value}
      options={options}
      onChange={setSelectedOption}
      placeholder={"popularity ⬇"}
    />
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { typeSort })(Sort);
