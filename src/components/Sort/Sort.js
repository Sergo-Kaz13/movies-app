import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import Select from "react-select";
import { typeSort } from "../../redux/moviesReducer";
import style from "./Sort.module.css";
import "./Sort.css";

const options = [
  { value: "popularity.asc", label: "popularity.asc" },
  { value: "popularity.desc", label: "popularity.desc" },
  { value: "revenue.asc", label: "revenue.asc" },
  { value: "revenue.desc", label: "revenue.desc" },
  { value: "primary_release.asc", label: "primary_release.asc" },
  { value: "primary_release.desc", label: "primary_release.desc" },
  { value: "vote_average.asc", label: "vote_average.asc" },
  { value: "vote_average.desc", label: "vote_average.desc" },
  { value: "vote_count.asc", label: "vote_count.asc" },
  { value: "vote_count.desc", label: "vote_count.desc" },
];

const Sort = (props) => {
  const { typeSort } = props;

  const [selectedOption, setSelectedOption] = useState({
    value: "popularity.desc",
  });

  console.log(selectedOption);

  useEffect(() => {
    typeSort(selectedOption.value);
  }, [typeSort, selectedOption]);

  return (
    <Select
      className="sort"
      defaultValue={selectedOption.value}
      options={options}
      onChange={setSelectedOption}
      placeholder={selectedOption.value}
    />
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { typeSort })(Sort);
