import React from "react";
import * as Icon from "react-feather";

const Search = ({ handleSearchChange }) => {
  return (
    <div className="search hidden sm:block" style={{ marginBottom: 30 }}>
      <input
        type="text"
        class="search__input input placeholder-theme-13"
        placeholder="Search"
        onChange={handleSearchChange}
      />
      {/* <i data-feather="search" className="search__icon"></i> */}
      <Icon.Search className="search__icon" />
    </div>
  );
};

export default Search;
