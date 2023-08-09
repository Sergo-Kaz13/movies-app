import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { typeSort } from "../../redux/moviesReducer";
import style from "./Sort.module.css";
import "./Sort.css";

const options = [
  { value: "&sort_by=popularity.asc", label: "popularity.asc" },
  { value: "&sort_by=popularity.desc", label: "popularity.desc" },
  { value: "&sort_by=revenue.asc", label: "revenue.asc" },
  { value: "&sort_by=revenue.desc", label: "revenue.desc" },
  { value: "&sort_by=primary_release.asc", label: "primary_release.asc" },
  { value: "&sort_by=primary_release.desc", label: "primary_release.desc" },
  { value: "&sort_by=vote_average.asc", label: "vote_average.asc" },
  { value: "&sort_by=vote_average.desc", label: "vote_average.desc" },
  { value: "&sort_by=vote_count.asc", label: "vote_count.asc" },
  { value: "&sort_by=vote_count.desc", label: "vote_count.desc" },
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
      className="sort"
      defaultValue={selectedOption.value}
      options={options}
      onChange={setSelectedOption}
      placeholder={"popularity.desc"}
    />
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { typeSort })(Sort);
