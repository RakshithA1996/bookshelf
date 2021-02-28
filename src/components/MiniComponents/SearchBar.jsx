import React from "react";
import { useSelector } from "react-redux";
import { BiSearchAlt } from "react-icons/bi";
import { SearchWrap } from "../../styles/components/SearchStyle";

export default function SearchBar() {
  const isDark = useSelector((state) => state.dark.mode);
  return (
    <SearchWrap isDark={isDark}>
      <input placeholder="search . . ." className="searchInput" />
      <BiSearchAlt />
    </SearchWrap>
  );
}
