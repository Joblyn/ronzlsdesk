import React from "react";
import * as Icon from "react-feather";

const Search = ({ handleSearchChange, searchPlaceholder }) => {
  return (
    <div className="search hidden sm:block" style={{ marginBottom: 15 }}>
      <input
        type="text"
        className="search__input input placeholder-theme-13"
        placeholder={searchPlaceholder ? searchPlaceholder : 'Search...'}
        onChange={handleSearchChange}
      />
      <Icon.Search className="search__icon" />
    </div>
  );
};

export default Search;
